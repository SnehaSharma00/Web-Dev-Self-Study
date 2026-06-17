const express = require("express");

const app = express();

app.listen(3000, ()=>{
    console.log("----server started---");
});

app.get("/", (req, res)=>{
    //res.end("hello");
    console.log("req recieved on '/'");

    res.json({
        isSuccess: true,
        message: "Server is running fine yay", 
        data:{}
    });
});