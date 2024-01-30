//
const express = require('express');
//opretter const som hedder express
const app = express();


app.use(express.json());

// app henter en funktion som require en string
app.get('/', function(req,res) {
    res.send('hello world!')
});
//Test hot hot reloading - her skal vi bruge nodemon
app.post('/test', function(req,res) {
    console.log(req.body);
    res.send('Glen Coco')
});
// Finder porten den skal køre serveren på
app.listen(3010);