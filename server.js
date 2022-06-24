const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/analisys-brazilian-stock-front'));

// Link index.html of build folder with router.
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/analisys-brazilian-stock-front/' }
    );
});

 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});