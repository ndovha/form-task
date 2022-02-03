import React from 'react';

export default function Input({ 
    placeholder,
    type = 'text',
    value,
    error,
    onChange
  }) {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {error && <div>{error}</div>}
      </div>
    );
  }