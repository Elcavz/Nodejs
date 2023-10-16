import * as http from "node:http";
console.log('Starting Nodejs Server');
http.createServer(myServer).listen(1234)

function myServer(request,response){
    response.write('<h1>Hello World</h1>');
    response.end();
}