const express = require("express");

const apiRouter = express.Router();

apiRouter.get("/orders", (req, res)=>{
    res.status("dummy orders endpoint");
});

apiRouter.get("/products", (req, res)=>{
    res.status("dummy products endpoint");
});

module.exports = { apiRouter };