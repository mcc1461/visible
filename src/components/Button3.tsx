

import React from 'react';
interface Button3Props {
    onClick: () => void;
    }


const Button3 = ({ onClick }: Button3Props) => {
  return (
    <button onClick={onClick} className='btn btn-primary'>
      Click Me
    </button>
  );
};

export default Button3;
