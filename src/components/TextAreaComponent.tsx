import { useState } from "react"

export function TextAreaComponent(){
    const [value,setValue] = useState('')
    return(
        <textarea value={value} onChange={(e) => setValue(e.target.value)} name="" id=""></textarea>
    )
}