const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.json())

app.listen(port,(req,res)=>{
    console.log(`Server is runnigin on this port ${port}`) //agr ise nhi likh to response nhi milge kuki server suni nhi rh 
})

app.get('/',(req,res)=>{
    res.send("Hii this Home Page")
})

app.get('/About',(req,res)=>{
    res.send(`A Server is runnig on port number is ${port}`)
})

app.post('/Info',(req,res)=>{
    const{Username,UserEmail}=req.body;
    res.send(`A ${Username} is Email ${UserEmail}`)
})