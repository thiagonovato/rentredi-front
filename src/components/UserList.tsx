import { User } from '../types/User';

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  return (
    <table border={1} cellPadding={8} cellSpacing={0}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Zip Code</th>
          <th>Lat</th>
          <th>Lon</th>
          <th>Timezone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.zipCode}</td>
            <td>{u.lat}</td>
            <td>{u.lon}</td>
            <td>{u.timezone}</td>
            <td>
              <button onClick={() => onEdit(u)}>Editar</button>
              <button onClick={() => onDelete(u.id!)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
