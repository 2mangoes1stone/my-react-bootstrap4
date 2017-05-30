import React from 'react';

export const Card = ( {cardType = 'card', children} ) => (
  <div className="card card-width">
  {children}
  </div>
)