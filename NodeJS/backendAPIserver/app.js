const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("req method : ", req.method , "req url: ", req.url);

    res.writeHead(200, {"content-type": "application/json"});
    res.end(
        JSON.stringify({
            isSuccess: true,
            message: "Server is running fine bro",
        })
    );
});

server.listen(3000, ()=>{
    console.log("---server started---");
});