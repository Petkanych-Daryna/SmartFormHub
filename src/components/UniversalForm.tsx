import { useState } from "react";

export function UniversalForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form action="">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="name"/>
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email"/>
    </form>
  );
}
