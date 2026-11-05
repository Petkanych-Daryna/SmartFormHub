export function TargetCurrentTarget() {
  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("На що клікнули :>> ", e.target);
    console.log("Де висить обробник :>> ", e.currentTarget);
  };

  return (
    <div onClick={handleDivClick}>
      <button>Click</button>
    </div>
  );
}
