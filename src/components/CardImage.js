import React from 'react';

export const CardImage = ( {cardImage = '...'} ) => (
  
  <img src={`${cardImage}`} alt="placeholder" className="card-img-top"/>

)