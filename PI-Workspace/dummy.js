const express = require('express');
const http = require('http');

// Bind Angular resources to the Http server
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/pi-workspace'));

// Default Webpage
app.get('*', (req, res) => res.sendFile(
  __dirname + '/dist/pi-workspace/index.html'));

// HTTP API routes
app.get('/test', (req, res) =>
{
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({a: 'asdasd'}));
});

// Get current date and time from the server
app.get('/time', (req, res) =>
{
  res.setHeader('Content-Type', 'application/json');

  let date = new Date();

  let year = date.getFullYear();
  let month = toDoubleDigits(date.getMonth() + 1);
  let day = ("0" + date.getDate()).slice(-2);

  let hours = toDoubleDigits(date.getHours());
  let minutes = toDoubleDigits(date.getMinutes());
  let seconds = toDoubleDigits(date.getSeconds());

  const timeString = hours + ":" + minutes + ":" + seconds;
  const dateString = day + ":" + month + ":" + year;

  res.end(JSON.stringify({
    time: timeString,
    date: dateString
  }));
});

// Server start
const server = http.createServer(app);
server.listen(port, () => console.log(`App running on: http://localhost:${port}`));

// Represent any number as string with two digits where '0' is a placeholder
function toDoubleDigits(dateValue)
{
  return dateValue.toString().length === 2 ? dateValue : "0" + dateValue;
}
