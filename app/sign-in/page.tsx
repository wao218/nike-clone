'use client';
import { useDispatch } from '@/lib/redux';
import { signInUser } from '@/lib/redux/slices/authSlice/thunks';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();
  const handleSignIn = () => {
    dispatch(signInUser({ email, password }));
    router.push('/');
  };

  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto my-48'>
      <label className='text-md' htmlFor='email'>
        Email
      </label>
      <input
        className='rounded-md px-4 py-2 bg-inherit border mb-6'
        name='email'
        placeholder='you@example.com'
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className='text-md' htmlFor='password'>
        Password
      </label>
      <input
        className='rounded-md px-4 py-2 bg-inherit border mb-6'
        type='password'
        name='password'
        placeholder='••••••••'
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className='bg-[#111] rounded px-4 py-2 text-white mb-2'
        onClick={handleSignIn}
      >
        Sign In
      </button>
      <button
        formAction='/auth/sign-up'
        className='border border-gray-700 rounded px-4 py-2 text-black mb-2'
      >
        Sign Up
      </button>
    </div>
  );
}
