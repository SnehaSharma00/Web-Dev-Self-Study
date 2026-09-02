const express = require("express");
const path = require("path");
const { myReadFile, mySaveFile } = require("./utils/file_helpers");
const {v4: uuidv4} = require("uuid"); // import v4 as uuidv4 from uuid
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
    console.log("old :", data);

    newId = uuidv4();
    data.id = newId; //assing new id to data at creation
    console.log("new :", data);
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

app.patch("/api/v1/products/:productId", (req, res)=>{ //route goes to the specific data with the id
    const {productId} = req.params; //destructure the id from the data object
    
});

app.post("/", (req, res)=>{
    res.json({
        isSuccess: true,
        message: "POST working",
        data : {},
    });
});

