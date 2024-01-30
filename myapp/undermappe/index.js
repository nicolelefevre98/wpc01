const express = require('express');
const app = express();

// Indstil view engine til EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// GET route til '/'
app.get('/', (req, res) => {
    res.render('index');
});

// Start serveren på port 3000
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Serveren kører på port ${PORT}`);
});