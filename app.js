const express=require('express');
const app=express();
const dotenv=require('dotenv').config()

const port=process.env.PORT;
console.log('port',port)
app.listen(port,()=>{
  console.log('server started on port:',port)
})


