// console.log("hello world");
const http = require("http");
const yoyo = require('./sampleEx');


//which computer, where, are my files being hosted from?
//this is like your house 
const hostName = "127.0.0.1";

//the exact place within the neighborhood that the files live 
//think of this as a specific room inside your house

const port ="3000";

const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end(yoyo.greeting());
});

server.listen(port,hostName), () => {
    console.log(`sever running at http://${hostName};${port}/`);
}
