import React from 'react';

export const Link = ( {linkType = '', children} ) => (
  <a className={`nav-link ${linkType}`} href="#">{children}</a>
)