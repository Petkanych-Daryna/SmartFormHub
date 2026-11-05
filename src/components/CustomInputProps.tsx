import { useState } from "react";

interface CustomInput {
  onChange: (value: string) => void;
}

export function CustomInputProps({ onChange }: CustomInput) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} placeholder="CustomInputProps" />;
}
