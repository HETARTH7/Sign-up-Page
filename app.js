const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { get } = require("request");
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post('/',(req,res)=>{console.log(req.body.fName);})

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
