const express = require('express');
const http = require('http');
const app = express();
const mongoose = require('mongoose');
const mainRoutes = require('./routes/main');
const keys = require('./config/prod');

let uristring = keys.MONGODB_URI || 'mongodb://localhost/tastytours';
const port = process.env.PORT || 8000;

mongoose.connect(uristring, {useNewUrlParser: true/*, useUnifiedTopology: true*/});

// CORS
app.use(function( req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
});

app.use(mainRoutes);

const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
