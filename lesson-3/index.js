const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const hostname = "127.0.0.1";

// QUERY PARAMIETER

// app.get("/",(req,res)=>{
//     const{id,name}=req.query
    
//     res.send(`<h1>Student name is:${name}. </h1><h2>Id is:${id}</h2>`);
// })




// ROUTE PARAMETER

// app.get("/userId/:id/userAge/:age",(req,res)=>{
//     const{id,age}=req.params
//     res.send(`student id is:${id}.age is:${age}`)
// })




// HEADER REQUEST PARAMETER

// app.get("/",(req,res)=>{
//  const id =req.header("id");
//  const name = req.header("name");
//     res.send(`student id is:${id}.name is:${name}`)
// })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.post("/user",(req,res)=>{
//     const name = req.body.name
//     const age = req.body.age
//     res.send(`welcome${name}.you are${age}`)s
// })


app.get("/",(req,res)=>{
    res.send('<h1>welcome to homepage</h1>')
 })

app.get("/register",(req,res)=>{
   res.sendFile(__dirname+"/index.html")
})

app.post("/register",(req,res)=>{
    const fullName = req.body.fullName
    const age = req.body.age
    
    res.send(`<h1>${fullName}</h1><h2>${age}</h2>`)
  
    
})




app.listen(PORT,hostname,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`)
})