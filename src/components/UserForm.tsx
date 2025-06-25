import React, { useEffect, useState } from 'react';
import { User } from '../types/User';

interface Props {
  onSubmit: (user: Omit<User, 'id'>) => void;
  user?: User | null;
  loading: boolean;
}

export default function UserForm({ onSubmit, user, loading }: Props) {
  const [name, setName] = useState('');
  const [zipCode, setZipCode] = useState(user?.zipCode || '');

  useEffect(() => {
    setName(user?.name || '');
    setZipCode(user?.zipCode || '');
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, zipCode });
    setName('');
    setZipCode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome' required />
      <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder='Zip Code' required />
      <button type='submit' disabled={loading}>
        {loading ? 'Loading...' : user ? 'Atualizar' : 'Cadastrar'}
      </button>
    </form>
  );
}
