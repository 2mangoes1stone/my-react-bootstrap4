import React from 'react';

export const BtnGroup = ( {btnGroupType = 'btn-group', children} ) => (
  <div className="btn-group" role="group">
  {children}
  </div>
)