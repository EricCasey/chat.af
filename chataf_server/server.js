'use strict';

const chalk = require('chalk'),
  uuid = require('node-uuid'),
  profanityFilter = require('profanity-filter'),
  SocketServer = require('ws').Server,
  PORT = 4000,
  wss = new SocketServer({
    port: PORT
  });

let clientCount = 0;

console.log(chalk.red('initializing.af'))

profanityFilter.seed('profanity');
profanityFilter.setReplacementMethod('word');

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(data));
  });
};

wss.on('connection', (ws) => {
  clientCount += 1;
  wss.broadcast(clientCount);
  console.log(`client count: ${clientCount}`);
  ws.on('message', (message) => {
    let received = JSON.parse(message),
      username = received.username,
      content = received.content,
      messKey = uuid.v4(),
      replyObj = {
        id: messKey,
        username: username,
        content: content
      };
    wss.broadcast(replyObj);
  });

  ws.on('close', () => {
    clientCount -= 1;
    console.log(`client count: ${clientCount}`);
    wss.broadcast(clientCount);
  });
});
