'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Button from '@mui/material/Button';

export default function About() {
  const router = useRouter();
  const { user, isLoading } = useUser();

  const handleLogin = () => {
    if (user) {
      router.push('/profile');
    } else {
      router.push('/api/auth/login');
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">About RentNest</h1>
      <p className="mt-3 text-lg text-gray-700">Welcome to RentNest, your hassle-free sublet solution!</p>
      <Button
        variant="contained"
        style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', padding: '10px 30px', fontSize: '16px' }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
}
