export function CopyComponent(){
    const handleCopy = (e: React.ClipboardEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        alert('Копіювання заборонено!');   
    }
    return (
        <p onCopy={handleCopy}>Цей текст захищено від копіювання</p>
    )
}