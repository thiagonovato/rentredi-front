import { useEffect, useState } from 'react';
import './App.css';
import { createUser, deleteUser, getUsers, updateUser } from './config/api';
import { User } from './types/User';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editing, setEditing] = useState<User | null>(null);
  const [loadingForm, setLoadingForm] = useState<boolean>(false);

  const load = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (user: Omit<User, 'id'>) => {
    try {
      setLoadingForm(true);
      if (editing?.id) {
        await updateUser(editing.id, user);
        setEditing(null);
      } else {
        await createUser(user);
      }
      load();
    } catch (error) {
      console.log('Something was wrong.');
    } finally {
      setLoadingForm(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    load();
  };

  return (
    <div className='App'>
      <div style={{ padding: 20 }}>
        <h2>{editing ? 'Edit' : 'Create'} User</h2>
        <UserForm onSubmit={handleSubmit} user={editing} loading={loadingForm} />
        <h2>List of users</h2>
        <UserList users={users} onEdit={setEditing} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
