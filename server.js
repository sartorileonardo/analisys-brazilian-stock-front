const express = require('express');
const cors = require('cors');
const app = express();

const options = [
  cors({
    origin: 'https://analisys-brazilian-stock-front.vercel.app/',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
];

app.use(options);

app.use(express.static(__dirname + '/dist/analisys-brazilian-stock-front'));

// Link index.html of build folder with router.
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/analisys-brazilian-stock-front/' }
    );
});

 
// Start the server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});