const express = require("express")
const app = express();
const PORT = 3000;


app.get("/products/:id([0-9]+)",(req,res)=>{
    const id = req.params.id
    res.send(`ID is:${id}`)
})
app.get("/products/:title([a-zA-z0-9]+)",(req,res)=>{
    const title = req.params.title
    res.send(`Title is:${title}`)
})

app.use("*",(req,res)=>{
    res.status(404).send({
        message:"not found"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})

