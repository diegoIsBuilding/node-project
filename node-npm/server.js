const http = require("http");
const hostname = "localhost";
const port = 8000;
const fs = require("fs");
const _ = require('lodash');

const server = http.createServer((req, res) => {
// lodash 
// the lodash library is being accessed 
// the random() method is selected
// the arguments is a lower bound number
// and upper bound number 
// EX: _.random(0,100)
const num = _.random(0, 20);
console.log(num);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // Send an html file
  // We can also figure out the path a user can take
  // simple routing system

  // routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-blah":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
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
  console.log("Listening on port 8000");
});
