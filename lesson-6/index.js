require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const middleWare = (req, res, next) => {
  console.log("middleware function");
  req.currentTime = new Date(Date.now());
  next();
};

app.use(middleWare)

app.use((req,res,next)=>{
    res.status(404).send("404 bad url")
})
app.use((err,req,res,next)=>{
    res.status(500).send('Something broke!')
})

app.get("/",(req, res) => {
  console.log("i am home" + req.currentTime);
  res.send("welcome to server");
});

app.get("/about",(req, res) => {
    console.log("i am about" + req.currentTime);
    res.send("i am about route");
  });




app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
