import React, { useState } from 'react';

export default function Form({ handleAddOption }) {
  const [option, setOption] = useState('');

  const handleChange = event => setOption(event.target.value);

  const addOption = event => {
    event.preventDefault();
    handleAddOption({ id: Date.now(), text: option });
    setOption('');
  };

  return (
    <div className="Form">
      <form onSubmit={addOption}>
        <input type="text" placeholder="Add Option..." value={option} onChange={handleChange} />
        <input type="submit" value="Add Option" />
      </form>
    </div>
  );
}
