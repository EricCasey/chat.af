// server.js

const express = require('express');
const SocketServer = require('ws').Server;
// var bu = require('bufferutil').BufferUtil;
// var WebSocket = require('ws');

// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express();

// Create the WebSockets server
const wss = new SocketServer({ server });

// Make the express server serve static assets (html, javascript, css) from the /public folder
server.use(express.static('public'));

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send('whatever')
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});

server.listen(PORT, '0.0.0.0', 'localhost', () => {
  console.log(`Listening on ${ PORT }`)
});
