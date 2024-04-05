import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
