import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('User').select('*');
      if (error) console.error(error.message);
      else setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">User Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
