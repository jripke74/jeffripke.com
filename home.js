const http = requeeire('http');

function handler(reg, res) {
  res.writeHead(200, {'Content-type':'text/plain'});
  res.write('Hello, I am a webserver!');
  res.end();
}

const server = http.createServer(handler);

server.listen(3000);
