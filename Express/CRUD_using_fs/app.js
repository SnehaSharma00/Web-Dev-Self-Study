const express = require("express");
const path = require("path");
const { myReadFile, mySaveFile } = require("./utils/file_helpers");
const datapath = path.join(__dirname, "data.json");

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


app.get("/api/v1/products", async (req, res)=>{

    const prodArr = await myReadFile(datapath);
    res.json({
        isSuccess: true,
        message: "GET working",
        data: {
            products: prodArr,
        },
    });

});

app.post("/api/v1/products", async (req, res)=>{
    //console.log(Object.keys(req));
    const data = req.body;
    console.log(data);

    const oldArr = await myReadFile(datapath); //myReadFIle returns a promise
    console.log("app.post : oldArr : ", oldArr);
    console.log("type pf oldArr ", typeof oldArr);
    oldArr.push(data);
    await mySaveFile(datapath, oldArr);
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
