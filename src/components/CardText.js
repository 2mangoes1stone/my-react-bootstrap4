import React from 'react';

export const CardText = ( {cardTextType = 'card-file', children} ) => (
  <div className="card-text">
    {children}
  </div>
)