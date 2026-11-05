import React from 'react';

export function FocusInputComponent() {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("Інпут у фокусі:", e.target.name);
  };

  return <input type="text" name="myInput" onFocus={handleFocus} />;
}