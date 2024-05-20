import { useEffect, useState } from "react"
import { blob } from "stream/consumers"
import TextOutput from "../../Components/TextReader"
import axios from "axios"

export default function HomePage(){
    const [src,setSrc]=useState('')
    const [files,setFiles]=useState([''])
    const [data,setData]=useState('')
   useEffect(()=>{
    
   },[data])
return(
    <div>
        <h1>This is a project which discuss about diffrent MiMe types</h1>
       
        
        <form  onSubmit={(e)=>{
            e.preventDefault()
            
            }}>
        <input type="file"  multiple={true} onChange={(e)=>{
            const file=new FileReader()
           
            const files=e.target.files
            let filename=files![0].name
            try{
            file.readAsArrayBuffer(files![0])}
            catch(e){
                console.log(e)
            }
            file.onabort=()=>{
                console.log('Reading aborted')
            }
            file.onerror=()=>{
                console.log('Error reading the file')
            }
            file.onload=(e:ProgressEvent)=>{
                
                console.log(`Size of file`+e.total)
                let arrayBuffer:ArrayBuffer=file.result as ArrayBuffer
                const chunkSize=1

                const totalChunks=arrayBuffer.byteLength/chunkSize
                
                
                   console.log('senidng')
                   axios.post(' http://localhost:3333/file?name='+filename,arrayBuffer,{headers:{'a':'a','Content-Type':'application/octet-stream'}}).then((a)=>console.log(a.data))
                
              

            }
            file.onloadend=(e:ProgressEvent)=>{
                console.log('Reading end and the size is mb= '+e.total*0.000001)
                
                
            }
            file.onloadstart=(e:ProgressEvent)=>{
                console.log('Reding start' + e.total)
                
            }
            file.onprogress=(e:ProgressEvent)=>{
                console.log('Hmm reading file ')
                
            }
            
            let array:string[]=[]
            for(let i=0; i<files!.length;i++){
                
                array.push(files![i].name)
                
            
            }   
            setFiles(array)    
        }}></input>
        <button>Upload</button>
        </form>

        {files.map((a,k)=><TextOutput nameOfFile={a} data={data} key={k}></TextOutput>)}
        
    </div>
)
}