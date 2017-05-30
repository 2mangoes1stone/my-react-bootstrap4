import React from 'react';

export const Button = ({buttonType="info", children}) => (
  <div className={`btn btn-${buttonType}`} role="alert">

    {children}
  </div>
)