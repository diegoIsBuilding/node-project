const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request has been made");
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
// local host is like a domain name that takes us to a specific 
// ip address = 127.0.0.1 which point back to my own computer 

// port numbers represent a channel/door into the server on our computer 

// when we use localhost the server will be listening on
// localhost:3000 

