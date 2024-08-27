// src/login/page.tsx

'use client'; // Mark this as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [partition, setPartition] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (
      username === 'June-Mahesh' &&
      partition === 'demofx_bprasath' &&
      password === 'start123'
    ) {
      localStorage.setItem('loggedIn', 'true'); // Example of setting login state
      router.push('/search'); // Redirect to the search page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-page-black text-white">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
      <div style={{ height: '17vh' }} />
      <div style={{ marginBottom: '2rem' }} />
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div style={{ marginBottom: '2rem' }} />
        <Input
          isClearable
          //variant="underlined"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
          style={{ margin: '1rem 0' }} 
        />
        <div style={{ marginBottom: '2rem' }} />
        <Input
          isClearable
          //variant="underlined"
          placeholder="Partition"
          value={partition}
          onChange={(e) => setPartition(e.target.value)}
          className="mb-4"
          style={{ margin: '1rem 0' }} 
        />
        <div style={{ marginBottom: '2rem' }} />
        <Input
          isClearable
          //variant="underlined"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6"
          style={{ margin: '1rem 0' }} 
        />
        <Button
          color="primary"
          onClick={handleLogin}
          className="w-full"
          style={{ marginTop: '2rem' }} // Add margin for spacing
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
