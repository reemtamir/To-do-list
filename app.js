const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  if (currentDay === 6 || currentDay === 0) {
    res.send('its the weekend');
  } else {
    res.write('<h1>well</h1>');
    res.write('<p>its week-day you have to work</p>');
    res.send();
  }
});

app.listen(3000, () => {
  console.log('The server is running on port 3000');
});
console.log("text");
