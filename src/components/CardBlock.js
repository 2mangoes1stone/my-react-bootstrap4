import React from 'react';

export const CardBlock = ( {cardBlockType = 'card-block', children} ) => (
  <div className="card-block">
    {children}
  </div>
)