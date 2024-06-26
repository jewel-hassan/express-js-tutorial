require('dotenv').config()

const express = require("express");
const app = express();
const PORT = process.env.PORT;


app.use(express.static("public"))



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})