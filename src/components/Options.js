import React from 'react';

import Option from './Option';

export default function Options({ options, handleRemoveAll, handleRemoveOne }) {
  const removeAll = () => handleRemoveAll();

  return (
    <div className="Options">
      {options.map(option => (
        <Option key={option.id} option={option} handleRemoveOne={handleRemoveOne} />
      ))}
      <button onClick={removeAll}>Remove All</button>
    </div>
  );
}
