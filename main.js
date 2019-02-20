let connection = new WebSocket('ws://localhost:8080');

connection.onopen = () => {
  console.log('connected from frontend');

  connection.send('sup');
};

connection.onerror = (error) => {
  console.log('failed to connect', error);
};

connection.onmessage = (event) => {
  console.log('received', event.data);
};
