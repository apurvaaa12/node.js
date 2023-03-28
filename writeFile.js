const http = require('http');
const fs= require('fs');

const server= http.createServer((req,res)=>{


    const url = req.url
    const method =req.method
    
    if(url==='/'){

        res.setHeader('Content-Type','text/html');
        res.write('<html');
        res.write('<head>');
        res.write('<body><form action ="/message" method ="POST"><input type = "text" name="message"><button type ="sumbit">Send</button></form></body>');
        res.write('</head>');
        res.write('</html>');
        return res.end();

    }
    if( url ==='/message' && method ==='POST'){

        const body =[]; //an empty array
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(body);
        });

       return req.on('end',()=>{
           const parsedBody = Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
           console.log(parsedBody);
           fs.writeFile('writeFile.txt',message,(err)=>{
            res.statusCode=302;
            return res.end;
           });
          
        });

        // res.statusCode=302;
        // return res.end;
    }
});


server.listen(3100);