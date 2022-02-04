import React from 'react';
import { Error } from './style';

export default function Input({
  className,
  placeholder,
  type = 'text',
  value,
  error,
  onChange,
}) {
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
}

  
