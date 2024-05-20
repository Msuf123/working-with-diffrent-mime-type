/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import cors from 'cors'
import express from 'express';
import * as path from 'path';
import fs from 'fs'
const app = express();
app.use(cors({origin:'*'}))
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/file', (req, res) => {
  const name=req.query.name
  let list=[]
  req.on('data',(a)=>{
    
    list.push(a)
  })
  req.on('end',()=>{
    const newBuffer=Buffer.concat(list)
    console.log(newBuffer)
    fs.writeFile('ll.m4a',newBuffer,(err)=>{
      if(err){
        console.log(err)
      }
    })
  })

  res.send({ message: 'Welcome to backend!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
