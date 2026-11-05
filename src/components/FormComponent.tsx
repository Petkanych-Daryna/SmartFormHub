import React, { useState } from 'react';

export function FormComponent() {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Відправлено:", inputVal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputVal} 
        onChange={(e) => setInputVal(e.target.value)} 
      />
      <button type="submit">Відправити</button>
    </form>
  );
}