const express = require('express');
const app = express();

app.use(express.static("./analisys-brazilian-stock-front/dist/"));
 
app.get('*', (req, res) => {
    res.sendFile(`./analisys-brazilian-stock-front/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});