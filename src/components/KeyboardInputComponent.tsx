import React, { useState } from 'react';

export function KeyboardInputComponent() {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setValue('');
    }
  };

  return (
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      onKeyDown={handleKeyDown} 
    />
  );
}