import React from 'react';

export const Card = ( {cardType = 'card', children} ) => (
  <div className="card col-sm-3">
  {children}
  </div>
)