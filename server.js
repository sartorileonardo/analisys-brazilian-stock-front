//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/analisys-brazilian-stock-front'));

app.get('/*', function(req,res) {

  if(req.url === '/') {
    res.sendFile(path.join(__dirname,'/dist/analisys-brazilian-stock-front/index.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '/dist/analisys-brazilian-stock-front' + req.url))
  }

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);