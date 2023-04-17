const express = require('express');
const mqtt = require('mqtt');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

const mqttClient = mqtt.connect('mqtt://localhost:1883');

app.post('/send-message', (req, res) => {
  const { times, message, topic, medium } = req.body;

  res.sendStatus(200);
  for (let i = 0; i < times; i++) {
    if (medium === 'socketio') io.emit(topic, message);
    else if (medium === 'mqtt') mqttClient.publish(topic, message);
  }
});


server.listen(4000, () => {
  console.log('listening on *:4000');
});
