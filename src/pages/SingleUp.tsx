import { Eye, EyeOff, UserRound } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import backgroundImage from '../assets/img/fundo-grande-casa.jpg';
import { registerUser } from '../api/auth';

const SingleUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    if (!email) {
      toast.error('Email é obrigatório');
      return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error('Email inválido');
      return false;
    }
    if (!password) {
      toast.error('Senha é obrigatória');
      return false;
    }
    if (password.length < 6) {
      toast.error('Senha deve ter pelo menos 6 caracteres');
      return false;
    }
    if (!confirmPassword) {
      toast.error('Confirmação de senha é obrigatória');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('As senhas precisam ser iguais');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await registerUser({ email, password });
      toast.success('Conta criada com sucesso! Faça login para continuar.');
      navigate('/login', { replace: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Não foi possível criar a conta.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className='min-h-screen w-full bg-white'>
      <div className='flex min-h-screen w-full flex-col lg:flex-row'>
        <section
          className='relative min-h-[320px] w-full bg-cover bg-center bg-no-repeat lg:min-h-screen lg:w-1/2'
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
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
                <path
                  d='M36 66L67.2 16L81.4 42L68.8 66H54.5L67.2 42L61.5 31.8L44.8 66H36Z'
                  stroke='#BC8C24'
                  strokeWidth='7'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M74.2 66L83 50.5L92 66H74.2Z'
                  stroke='#BC8C24'
                  strokeWidth='7'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M101 66L83 35L73.8 19L82.6 16L114 66H101Z'
                  stroke='#BC8C24'
                  strokeWidth='7'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <h1 className='text-[26px] font-bold tracking-[-0.02em] text-black'>
                Sign up
              </h1>
            </div>

            <form className='mt-24 flex w-full flex-col gap-8' onSubmit={handleSubmit}>
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='email'
                  
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className='h-[30px] w-full border-none bg-[#d9d9d9] px-2 pr-10 text-[12px] font-bold text-black outline-none placeholder:text-black'
                />

                <UserRound
                  size={19}
                  strokeWidth={2.8}
                  className='absolute right-2.5 top-1/2 -translate-y-1/2 text-[#222]'
                />
              </div>

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  placeholder='password'
                  
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className='h-[30px] w-full border-none bg-[#d9d9d9] px-2 pr-10 text-[12px] font-bold text-black outline-none placeholder:text-black'
                />

                <button
                  type='button'
                  onClick={() => setShowPassword((value: boolean) => !value)}
                  className='absolute right-2.5 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#222]'
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} strokeWidth={2.8} />
                  ) : (
                    <Eye size={19} strokeWidth={2.8} />
                  )}
                </button>
              </div>

              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirm-password'
                  name='confirm-password'
                  placeholder='confirm password'
                  
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className='h-[30px] w-full border-none bg-[#d9d9d9] px-2 pr-10 text-[12px] font-bold text-black outline-none placeholder:text-black'
                />

                <button
                  type='button'
                  onClick={() =>
                    setShowConfirmPassword((value: boolean) => !value)
                  }
                  className='absolute right-2.5 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#222]'
                  aria-label={
                    showConfirmPassword
                      ? 'Hide confirm password'
                      : 'Show confirm password'
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} strokeWidth={2.8} />
                  ) : (
                    <Eye size={19} strokeWidth={2.8} />
                  )}
                </button>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='mx-auto mt-8 h-[23px] w-full max-w-[228px] bg-black text-[11px] font-bold text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60'
              >
                {isSubmitting ? 'Creating...' : 'Sign up'}
              </button>

              <p className='text-center text-[12px] text-[#666]'>
                Already have an account?{' '}
                <Link to='/login' className='font-bold text-black hover:opacity-70'>Log in</Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingleUp