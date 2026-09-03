const express = require ("express");
const morgan = require("morgan");
const { apiRouter } = require("./api/v1/routes");

const app = express();

app.use(morgan("dev")); //app level middleware

app.get("/", (req, res)=>{ //GET "/" middleware 
    res.status(200).json({
        isSuccess : true,
        message : "server is working fine",
    });
});

app.use("api/v1", apiRouter); //middleware "/api/v1"

app.listen(3900, ()=>{
    console.log("--------server started-------");
});