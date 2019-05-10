import React from 'react';

export default function Action({ handlePick }) {
  return (
    <div className="Action">
      <button onClick={handlePick}>What should I do today?</button>
    </div>
  );
}
