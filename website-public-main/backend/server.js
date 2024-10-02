const express = require('express');
const next = require('next');
const http = require('http');

const server = express();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const hostname = '0.0.0.0'; // Use this to accept connections from any IP address

app.prepare().then(() => {
  server.get('/api/show', (req, res) => {
    return res.end("rendered on the server");
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  http.createServer(server).listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
