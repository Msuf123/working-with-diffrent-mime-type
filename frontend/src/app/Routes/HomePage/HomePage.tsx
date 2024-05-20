import { useEffect, useState } from "react"
import { blob } from "stream/consumers"
import TextOutput from "../../Components/TextReader"

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
        <input type="file" accept="text/plain" multiple={true} onChange={(e)=>{
            const file=new FileReader()
           
            const files=e.target.files
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
                
                for(let i=0;i<totalChunks;i++){
                   let Chunk=arrayBuffer.slice(i*chunkSize,i+1*chunkSize)
                   const view=new Int8Array(Chunk)
                   console.log(view)
                }
              

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