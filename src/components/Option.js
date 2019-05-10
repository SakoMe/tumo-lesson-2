import React from 'react';

export default function Option({ option, handleRemoveOne }) {
  return (
    <div className="Option">
      <p>{option.text}</p>
      <button onClick={() => handleRemoveOne(option.id)}>Remove</button>
    </div>
  );
}
