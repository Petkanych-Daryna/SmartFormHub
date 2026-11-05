import type React from "react";

export function ScrollComponent() {
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) =>{
        console.log('scrollTop: :>> ', e.currentTarget.scrollTop);
    }
  return (
    <div onScroll={handleScroll}>
      <div>Контент для скролу</div>
    </div>
  );
}
