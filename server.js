const express = require('express');
const app = express();

app.use(express.static('./dist/'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/' });
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});