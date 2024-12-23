import React from 'react';
import useStore from '../hooks/useStore';

const Navbar = () => {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <h1 className="text-lg">Full Stack App</h1>
      {user && <p>Welcome, {user.email}</p>}
    </nav>
  );
};

export default Navbar;
