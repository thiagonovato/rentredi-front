import { User } from '../types/User';

const API_URL = 'http://localhost:8080';

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch(`${API_URL}/users`);
    return res.json();
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const updateUser = async (id: string, user: Partial<User>) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const deleteUser = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
};
