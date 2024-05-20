import { useState } from "react"

export default function HomePage(){
    const [src,setSrc]=useState('')
return(
    <div>
        <h1>This is a project which discuss about diffrent MiMe types</h1>
        <img src={src}></img>
        
        <form  onSubmit={(e)=>{
            e.preventDefault()
            
            }}>
        <input type="file" onChange={(e)=>{
            const file=new FileReader()
            let finleInfo=e.target.files![0]
            console.log(finleInfo)
            file.readAsDataURL(finleInfo)
            file.onload = function() {
                let res:string=file.result!.toString();
                setSrc(()=>res)
              };
        }}></input>
        <button>Upload</button>
        </form>
    </div>
)
}