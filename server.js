const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const port = process.env.PORT || 8888;
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
console.log('Delivery of React App started on port', port);
