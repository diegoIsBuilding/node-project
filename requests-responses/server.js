const http = require("http");
const hostname = "localhost";
const port = 8000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // Send an html file
  // We can also figure out the path a user can take
  // simple routing system 
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log("Listening on port 3000");
});
