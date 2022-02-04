import React from 'react';
import { Send } from './style';


export default function Button({
  submit,
  id,
  onClick,
  text,
}) {
  return (
    <Send
      id={id}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text}
    </Send>
  )
}