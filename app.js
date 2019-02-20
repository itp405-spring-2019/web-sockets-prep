let WebSocket = require('ws');

let wss = new WebSocket.Server({ port: 8080 });

function broadcast(data) {
  wss.clients.forEach((client) => {
    console.log(client.readyState,  WebSocket.OPEN);
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received:', message);
    // ws.send(message);
    broadcast(message);
  });
});
