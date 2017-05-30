import React from 'react';

export const Nav = ( {navType = 'nav', children} ) => (
  <nav className="nav">
  {children}
  </nav>
)