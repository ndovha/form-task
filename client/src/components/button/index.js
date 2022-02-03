import React from 'react';


export default function Button({
  submit,
  id,
  onClick,
  text,
}) {
  return (
    <button
      id={id}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  )
}