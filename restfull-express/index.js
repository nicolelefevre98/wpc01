// Bruger express
const express = require('express');
// Opretter const som hedder express
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

//GET henter data fra vores server - POST sender - PUT Opdaterer - DELETE sletter
app.get('/', function(reg,res) {
    res.send('hello world')
});

//
app.get('/api/v1/users', (req,res) => {  
    try {
        res.status(200).json({
            message: 'forestil dig et arryay med brugere',
        });
        res.send('Hejsa');
    } catch(e) {
        res.status(500).json({
            message: 'Dumme IT',
        });
    }
});

app.post('/api/v1/users', (req, res) => {
   res.status(201).json({
    data: req.body,
   }); 
});

app.delete('/api/v1/users/:userId', (req, res) => {
    console.log(req.params);
    res.sendStatus(204);
});

app.listen(port, () => console.log('app is running'));