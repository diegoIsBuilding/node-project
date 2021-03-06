const http = require('http');
const hostname = 'localhost';
const port = 8000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })
    
});

server.listen(port, hostname,  () => {
    console.log('Listening on port 3000'); 
})
