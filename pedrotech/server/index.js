const express = require('express') //variabel express for at require at vi bruger express
const app = express(); //app initializes vores variabel som gør det muligt at lave api request og initialize vores server
const cors = require("cors");

app.use(express.json());
app.use(cors());

//importere the table - require de/den tabels fra models folderen 
const db = require('./models')

// Routers import fra route
const postRouter = require ('./routes/Posts')
app.use("/posts", postRouter);

// db er defineres ovenover for at køre databaser igennem for indhold - her er der et promise med app.listen. Promise er at vi vil lave alle tabels i vores models og gå over alle for at se om de eksistere, hvis de ikke gør så opretter sequelize det
db.sequelize.sync().then(() => {
    app.listen(3005, () => { //start api
        console.log("Server running on port 3005"); 
    });
});

