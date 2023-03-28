const http = require('http');
const fs = require('fs');

const server= http.createServer((req,res)=>{
console.log("inside server")
const url =req.url
const method=req.method

if(url ==='/'){
res.setHeader('Content-Type','text/html');
res.write('<html>')
res.write('<title>My First Page </title>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
res.write('</html>');
return res.end();
}

if(url === '/message' && method==='POST'){

    fs.writeFileSync('message.txt',"Hello");
    res.statusCode=302;
    res.setHeader=('location','/');
    return res.end();

}
//console.log(req)
//Setting a HTML page
// res.setHeader('Content-Type','text/html');
// res.write('<html>')
// res.write('<title>My First Page </title>');
// res.write('<body><h1>Welcome to my App </h1></body>');
// res.write('</html>');
// res.end();
});
server.listen(3002);

// const server2= http.createServer(function rqListener(req,res) {
    
// });