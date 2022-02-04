import React from 'react';
import { WrapperTextarea, TextareaFild, Error } from './style';

export default function Textarea({
  className,
  placeholder,
  type = 'text',
  value,
  error,
  onChange,
  rows,
  cols,
}) {
  return (
    <WrapperTextarea>
      <TextareaFild
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
      />
      {error && <Error>{error}</Error>}
    </WrapperTextarea>
  );
}