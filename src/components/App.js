import React, { useState } from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import Form from './Form';
import { initialState } from '../store/initialState';

export default function App() {
  const [options, setOptions] = useState(initialState);

  const handleRemoveAll = () => setOptions([]);
  const handleAddOption = option => setOptions(options => [option, ...options]);
  const handleRemoveOne = id => setOptions(options => options.filter(option => option.id !== id));

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    option ? alert(option.text) : alert('Please provide options to choose from');
  };

  return (
    <div className="App">
      <Header />
      <Action handlePick={handlePick} />
      <Options options={options} handleRemoveAll={handleRemoveAll} handleRemoveOne={handleRemoveOne} />
      <Form handleAddOption={handleAddOption} />
    </div>
  );
}
