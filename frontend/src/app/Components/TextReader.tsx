import { useState } from "react"

export default function TextOutput({nameOfFile,data}:{nameOfFile:string,data:string}){
   const [value,setValue]=useState(data)
    return(
        <div style={{display:'flex',flexDirection:'column',width:'max-content'}}>
            <span>Selected {nameOfFile}</span>
            <textarea name="comment" value={value} onChange={(e)=>{
                setValue(e.target.value)
                
            }}></textarea>
        </div>
    )
}