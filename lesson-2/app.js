const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  //  res.status(200).json({
  //     "name":"jewel hassan",
  //     "name":"jewel hassan",
  //     "message":"i am register page",
  //     statusCode: 200
  //  })
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});


app.get("/login", (req, res) => {
//  res.cookie("name","jewel")
//  res.cookie("age","36")
// res.clearCookie("name");
// res.clearCookie("age");

res.append("id","2000")
 res.end()
});


app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});



app.use((req, res) => {
  res.send("404! not valid url");
});



module.exports = app;
