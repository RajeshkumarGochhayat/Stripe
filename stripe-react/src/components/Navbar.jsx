import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;