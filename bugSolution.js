const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  //Correct way to handle requests when behind a reverse proxy
  const parsedUrl = url.parse(req.url, true);
  const fullUrl = req.protocol + '://' + req.get('host') + parsedUrl.path;
  console.log('Full URL:', fullUrl);

  // Handle the request using the full URL
  if (fullUrl === 'http://localhost:3000/') {
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
// Use req.originalUrl or reconstruct the full URL to avoid issues with reverse proxies.