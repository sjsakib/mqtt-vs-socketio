# mqtt-vs-socketio

## How to run this?
Run these commands
```
# install node dependencies
npm i

# run the mosquitto image
docker-compose up -d

# run the backend 
node index.js
```
Now open the `client.html` file in a browser and play around. Don't forget to subscribe to get the messages. 
Make the message a big string, adjust connection speed in the devtools or make it offline while messages are being published and see how they handle it.
