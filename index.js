const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { all } = require("express/lib/application");
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")

let allNoiseMaker = [];
let times = 1
app.get("/", (req, res) => {
    // res.sendFile(__dirname + "index.html")
    // res.send("Hello world")
    res.render("index", { allNoiseMaker, times })
})
app.post("/submit", (req, res) => {
    res.render("submit", { times })
})
app.post("/sub", (req, res) => {
    console.log(req.body);
    allNoiseMaker.push(req.body)
    res.redirect("/")
})
app.post("/Add", (req, res) => {
    let myIndex = parseInt(req.body.myIndex);
    let counTimes = parseInt(allNoiseMaker[myIndex].times);
    counTimes += 1
    allNoiseMaker[myIndex].times = counTimes
    res.redirect("/")
})
app.post("/Minus", (req, res) => {
    let myIndex = parseInt(req.body.myIndex);
    let counTimes = parseInt(allNoiseMaker[myIndex].times);
    counTimes -= 1
    allNoiseMaker[myIndex].times = counTimes
    if (allNoiseMaker[myIndex].times < 1) {
        allNoiseMaker[myIndex].times = 0
    }
    res.redirect("/")
})
app.post("/Clr", (req, res) => {
    let myIndex = parseInt(req.body.myIndex);
  let found = allNoiseMaker.filter((students, index)=>(
      index!=myIndex
  ))
    allNoiseMaker = found;
    res.redirect("/")
})
app.listen(3000, () => {
    `My app is listen at port 3000`
})