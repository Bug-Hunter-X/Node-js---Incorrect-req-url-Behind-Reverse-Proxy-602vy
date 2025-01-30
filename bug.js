const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error:  If the server is behind a reverse proxy (like Nginx or Apache), the `req.url` might not contain the full path, but rather just the path relative to the proxy. This can lead to incorrect handling of requests. 
//For example, if the request is for `https://example.com/api/users`, `req.url` might only contain `/users` instead of the full URL.
//This is because the reverse proxy modifies the request before it reaches your Node.js server.

