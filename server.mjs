import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { App } from '@tinyhttp/app';
import { cors } from '@tinyhttp/cors';
import { json } from 'milliparsec';
import sirv from 'sirv';

const JWT_SECRET = 'furniro-jwt-secret';
const PORT = 3001;
const adapter = new JSONFile('db.json');
const db = new Low(adapter, { users: [], products: [] });

await db.read();
if (!db.data) {
  db.data = { users: [], products: [] };
  await db.write();
}

const createToken = (user) => jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
const publicUserFields = (user) => ({ id: user.id, email: user.email });

const app = new App();

app.use(sirv('public', { dev: true }));
app
  .use((req, res, next) => {
    return cors({
      allowedHeaders: req.headers['access-control-request-headers']
        ?.split(',')
        .map((header) => header.trim()),
    })(req, res, next);
  })
  .options('*', cors());
app.use(json());

app.post('/register', async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  const users = db.data.users ?? [];
  const normalizedEmail = String(email).trim().toLowerCase();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    return res.status(409).json({ message: 'Esse usuário já existe.' });
  }

  const passwordHash = await bcrypt.hash(String(password), 10);
  const nextUser = {
    id: Date.now(),
    email: normalizedEmail,
    password: passwordHash,
  };

  users.push(nextUser);
  db.data.users = users;
  await db.write();

  return res.status(201).json({
    accessToken: createToken(nextUser),
    user: publicUserFields(nextUser),
  });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  const users = db.data.users ?? [];
  const user = users.find((entry) => entry.email === String(email).trim().toLowerCase());

  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  const isValidPassword = await bcrypt.compare(String(password), user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  return res.status(200).json({
    accessToken: createToken(user),
    user: publicUserFields(user),
  });
});

app.get('/:name', (req, res) => {
  const { name } = req.params;
  const list = db.data[name] ?? [];
  return res.json(list);
});

app.get('/:name/:id', (req, res) => {
  const { name, id } = req.params;
  const list = db.data[name] ?? [];
  const selected = list.find((item) => String(item.id) === String(id));

  if (!selected) {
    return res.status(404).json({ error: 'Not Found' });
  }

  return res.json(selected);
});

app.listen(PORT, () => {
  console.log(`JSON Server + JWT auth running at http://localhost:${PORT}`);
});
