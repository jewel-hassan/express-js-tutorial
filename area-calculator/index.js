const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;
const hostname = "127.0.0.1"



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html")
})
app.get("/tringle",(req,res)=>{
    res.sendFile(__dirname+"/tringle.html")
})

app.post("/tringle",(req,res)=>{
    const base = req.body.base
    const height = req.body.height
    const area   = 0.5 * base * height
    res.send(`<h1>Area is tringle:${area}</h1>`)
})

app.post("/circle",(req,res)=>{
    const radious = req.body.radious
    
    const area   = Math.PI * radious * radious
    res.send(`<h1>Area is tringle:${area}</h1>`)
})





app.listen(PORT,hostname,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`)
})