import React from 'react';

export default ({ name }: { name?: string }) => (
  <div>
    Hello,
    {` ${name || 'World'}`}
!
  </div>
);
