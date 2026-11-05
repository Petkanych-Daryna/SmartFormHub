import { useState } from "react";

export function ArrayStateComponent() {
  const [item] = useState<string[]>([]);

  return <div>Кількість:{item.length}</div>;
}