const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const today = new Date();

  const hour = today.getUTCHours();
  const minutes = today.getUTCMinutes();
  const seconds = today.getUTCSeconds();

  res.status(200).send(`${hour}:${minutes}:${seconds}`) 
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started!')
});
