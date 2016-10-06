'use strict';
// server.js
let uuid = require('node-uuid');
// const express = require('express');
const SocketServer = require('ws').Server;
// var bu = require('bufferutil').BufferUtil;
// var WebSocket = require('ws');

// Set the port to 4000
const PORT = 4000;

// Create a new express server
// const server = express();

// Create the WebSockets server
const wss = new SocketServer({ port: PORT });

// Make the express server serve static assets (html, javascript, css) from the /public folder
// server.use(express.static('../public'));

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
let userCount = 0;

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
});
};

wss.on('connection', (ws) => {
  console.log('Client connected');
  userCount += 1;
  ws.send('whatever')
  ws.on('message', (message) => {
    var received = JSON.parse(message)
    var username = received.username
    var content = received.content
    var messKey = uuid.v4();
    var replyObj = {
      id: messKey,
      username: username,
      content: content
      }
    console.log(replyObj)
    console.log(`Usercount: ${userCount}`)

  wss.broadcast(replyObj);


})

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
    userCount -= 1;
  });
});

// server.listen(PORT, '0.0.0.0', 'localhost', () => {
//   console.log(`Listening on ${ PORT }`)
// })
