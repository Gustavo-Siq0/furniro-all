import { API_BASE_URL } from './http';

export type AuthCredentials = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
};

async function requestAuth<T>(endpoint: string, payload: AuthCredentials): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message ?? 'Authentication failed.');
  }

  return data as T;
}

export const loginUser = (payload: AuthCredentials) => requestAuth<AuthResponse>('/login', payload);

export const registerUser = (payload: AuthCredentials) => requestAuth<AuthResponse>('/register', payload);
