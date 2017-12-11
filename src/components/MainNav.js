/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { to: '/', id: 'home', text: 'Home' },
  { to: '/me', id: 'user', text: 'Me' },
  { to: '/map', id: 'map', text: 'Map' },
];

const MainNav = ({ active }) => (
  <div className="main-nav">
    {navItems.map(({ id, to, text }) => (
      <Link
        key={id}
        to={to}
        className={active === id ? 'active' : null}
      >
        {text}
      </Link>
    ))}
  </div>
);

export default MainNav;
