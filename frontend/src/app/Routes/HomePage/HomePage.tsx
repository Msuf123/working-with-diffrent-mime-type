import { useEffect, useState } from "react"
import { blob } from "stream/consumers"

export default function HomePage(){
    const [src,setSrc]=useState('')
    const [files,setFiles]=useState([''])
   
return(
    <div>
        <h1>This is a project which discuss about diffrent MiMe types</h1>
        {/* <img src={src}></img> */}
        
        <form  onSubmit={(e)=>{
            e.preventDefault()
            
            }}>
        <input type="file" multiple={true} onChange={(e)=>{
            const file=new FileReader()
            const files=e.target.files
            let array:string[]=[]
            for(let i=0; i<files!.length;i++){
                array.push(files![i].name)
            }   
            setFiles(array)    
        }}></input>
        <button>Upload</button>
        </form>
        {files.map((a,k)=><span style={{display:'block'}} key={k}>Selected files are {a}</span>)}
        
    </div>
)
}