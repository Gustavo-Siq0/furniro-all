import { Eye, EyeOff, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import backgroundImage from '../assets/img/fundo-grande-casa.jpg';
import { loginUser } from '../api/auth';
import { isAuthenticated, setStoredToken } from '../auth';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/';

  useEffect(() => {
    if (isAuthenticated()) {
      navigate(from, { replace: true });
    }
  }, [from, navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await loginUser({ email, password });
      setStoredToken(response.accessToken);
      toast.success('Login realizado com sucesso!');
      navigate(from, { replace: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Não foi possível fazer login.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isAuthenticated()) {
    return <Navigate to={from} replace />;
  }

  return (
    <main className='min-h-screen w-full bg-white'>
      <div className='flex min-h-screen w-full flex-col lg:flex-row'>
        <section
          className='relative min-h-[320px] w-full bg-cover bg-center bg-no-repeat lg:min-h-screen lg:w-1/2'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <section className='flex min-h-screen w-full items-center justify-center bg-white px-6 py-12 sm:px-10 lg:w-1/2 lg:px-16'>
          <div className='flex w-full max-w-[440px] flex-col items-center'>
            <div className='mb-8 flex flex-col items-center'>
              <svg
                width='150'
                height='92'
                viewBox='0 0 150 92'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mb-5'
                aria-label='Logo'
              >
                <path d='M36 66L67.2 16L81.4 42L68.8 66H54.5L67.2 42L61.5 31.8L44.8 66H36Z' stroke='#BC8C24' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M74.2 66L83 50.5L92 66H74.2Z' stroke='#BC8C24' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M101 66L83 35L73.8 19L82.6 16L114 66H101Z' stroke='#BC8C24' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round' />
              </svg>

              <h1 className='text-[26px] font-bold tracking-[-0.02em] text-black'>Log in</h1>
            </div>

            <form className='mt-24 flex w-full flex-col gap-8' onSubmit={handleSubmit}>
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='email'
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className='h-[30px] w-full border-none bg-[#d9d9d9] px-2 pr-10 text-[12px] font-bold text-black outline-none placeholder:text-black'
                />
                <UserRound size={19} strokeWidth={2.8} className='absolute right-2.5 top-1/2 -translate-y-1/2 text-[#222]' />
              </div>

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  placeholder='password'
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className='h-[30px] w-full border-none bg-[#d9d9d9] px-2 pr-10 text-[12px] font-bold text-black outline-none placeholder:text-black'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((value) => !value)}
                  className='absolute right-2.5 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#222]'
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={19} strokeWidth={2.8} /> : <Eye size={19} strokeWidth={2.8} />}
                </button>
              </div>

              <div className='-mt-3 flex justify-end'>
                <button type='button' className='text-[11px] font-bold text-[#666] transition-opacity hover:opacity-70'>
                  Forgot password?
                </button>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='mx-auto mt-5 h-[23px] w-full max-w-[228px] bg-black text-[11px] font-bold text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60'
              >
                {isSubmitting ? 'Loading...' : 'Log in'}
              </button>

              <p className='text-center text-[12px] text-[#666]'>
                Don&apos;t have an account?{' '}
                <Link to='/single-up' className='font-bold text-black hover:opacity-70'>Sign up</Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;