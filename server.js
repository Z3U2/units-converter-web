'use-strict'
// Simple node server to get index page and serve static files

const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
});

app.use(express.static(__dirname))

app.listen(3000);
console.log("Listening on port 3000");
