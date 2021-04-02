const http = require("http");

const server = http.createServer((req, res)=>{
    const arr = [ 1, 2, 3, 4, 5,6, 7, 8];
    res.write(JSON.stringify(arr));
    res.end();

});

server.listen(3000,()=>{
    console.log("server on http://127.0.0.1:3000");

});

