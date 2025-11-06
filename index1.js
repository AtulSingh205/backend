const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())
app.get('/',(req,res)=>{
    res.send(' hii node js how are you beta ');
})
app.get('/About/:id',(req,res)=>{
    res.send(`user id is : ${req.params.id}`);
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})
app.post('/me',(req,res)=>{
    const{email,Password}=req.body
    res.send(`User email is ${email} and Password is ${Password}`)
    
})
app.post('/user',(req,res)=>{
    const{Username,usergmail}=req.body
    res.send(`User name is ${Username} and gmailis ${usergmail}`)
})
app.post('/Emp',(req,res)=>{
const{Empname,EmpId,EmpSal}=req.body;
res.status(420).json({message:"ok"});
})