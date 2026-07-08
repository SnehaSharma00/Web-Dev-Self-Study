const express = require("express");

const app = express();

app.listen(3000, ()=>{
    console.log("----server started---");
});

app.use(express.json());//reads body using BodyParser

app.use ((req, res, next)=>{
    console.log(req.method, req.url);
    next();
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


app.post("api/v1/products", async (req, res)=>{
    //console.log(Object.keys(req));
    const data = req.body;
    console.log(data);

    const oldArr = await myReadFile("./data.json"); //myReadFIle returns a promise
    console.log("app.post : oldArr : ", oldArr);
    console.log("type pf oldArr ", typeof oldArr);
    oldArr.push(data);
    await mySaveFIle("./data.json", oldArr);
    res.status(201);
    res.json({
        isSuccess: true,
        message: "Product created",
    });

});

app.post("/", (req, res)=>{
    res.json({
        isSuccess: true,
        message: "POST working",
        data : {},
    });
});
