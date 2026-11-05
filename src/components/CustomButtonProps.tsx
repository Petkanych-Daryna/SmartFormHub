import React from 'react';

interface CustomButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CustomButton({ label, onClick }: CustomButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}