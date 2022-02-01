import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Link
        to="/"
        style={{
          marginRight: 15,
        }}
      >
        Home
      </Link>
      <Link to="/about">About</Link>
    </div>
  );
}
