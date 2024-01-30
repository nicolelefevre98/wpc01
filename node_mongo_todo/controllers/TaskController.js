const express = require("express");
const router = express.Router();
const Task = require('./../models/Task');


router.use(express.json());

// CREATES A NEW TASK
// ADDS A NEW TASK IN THE DATABASE
router.post("/", function(req, res) {
  Task.create({
    title: req.body.title,
    completed: req.body.completed
  })
  .then(task => {
    res.status(200).send(task);
  })
  .catch(err => {
    res.status(500).send("There was a problem adding the information to the database.");
  });
});

// RETURNS ALL THE TASKS IN THE DATABASE
router.get("/", function(req, res) {
  Task.find({})
  .then(tasks => {
    res.status(200).send(tasks);
  })
  .catch(err => {
    res.status(500).send("There was a problem finding the tasks.");
  });
});

module.exports = router;