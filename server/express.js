import express from "express"

const app = express()

const PORT = 5000

app.get("/", (req,res) => {
    res.send("Hello world");
});

app.get("/register", (req,res) => {
    res.send("This is register page");
});

app.get("/global", (req,res) => {
    res.send("This is global page");
});


// In simple app.get has 2 params
//  Method ==> HTTP Methods GET,POST,PUT,DELETE
// 1. Route ==> "/"
// 2. (req,res)=>{} arrow function

app.listen(PORT, () => {
    console.log("Server is Running");
});