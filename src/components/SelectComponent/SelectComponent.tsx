import { useState } from "react";

export function SelectComponent() {
  const [selected, setSelected]= useState('')
  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}  name="" id="">
      <option value="">Виберіть опцію</option>
      <option value="">Опція 1</option>
      <option value="">Опція 2</option>
    </select>
  );
}
