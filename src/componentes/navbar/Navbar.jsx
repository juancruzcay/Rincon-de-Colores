import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/gallery">Galería</Link></li>
        <li><Link to="/calculator">Calculadora</Link></li>
      </ul>
    </nav>
  );
}
