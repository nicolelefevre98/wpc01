const express = require("express");
const router = express.Router();
const { Posts } = require('../models');

//ENDPOINT 1
//route requests from get (anonymous function)
router.get("/", async (req, res) => { //importere 2 standard variabler fra express (request and response) - 
    // res.json("Hello World");
    // findAll finder alt der er i variablen Post og response med json
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

//ENDPOINT 2
router.post("/", async (req,res) => { //alt skal være asynkromt
    //sequelize (Også så vi har en form i frontend så vi kan hente data) objekt
    //body in request = objekt containing
    //når vi call post request skal vi sende noget data:
    const post = req.body;
    //tilføjer tabels i vores database
    await Posts.create(post); // Den creater posts i post. vi vil have at den venter med at al data er indsat før vi går videre, derfor await
    res.json(post); //retunere et respons fra api request i json fra post 
});

module.exports = router;