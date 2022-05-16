const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    // res.sendFile(__dirname + "index.html")
    // res.send("Hello world")
    res.render("index")
})
app.post("/submit",(req,res)=>{
    res.render("submit")
})

app.listen(3000, () => {
    `My app is listen at port 3000`
})