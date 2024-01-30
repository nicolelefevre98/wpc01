const express = require('express');
const app = express();
const port= 3019;
const punycode = require('punycode/');
const db = require("./db");

import punycode from "punycode/";

const TaskController = require("./controllers/TaskController");

app.use("/tasks", TaskController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


  /*  app.get('/', (req, res) => {
        // console.log(req)
        // console.log(res)
        //res.send('<H1>Hello World</H1>')
        res.json({
            "message": "Hello world",
            "answer": 42
        })
    })  */