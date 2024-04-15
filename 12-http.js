const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to our home page");
  if (req.url === "/about") res.end("Welcome to our about section");
  res.end(
    '<center><h1>Oops! No match</h1></center><hr><br><a href="/">Back Home</a>'
  );
});

server.listen(5000);
