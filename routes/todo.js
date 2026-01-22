const express = require("express");
const router = express.Router();
const toDo = require("../models/toDo")

//create todo
router.post("/", async (req, res) => {
    const{title, comments} = req.body;
    const todo = await toDo.create({title, status: "pending", comments});
    res.status(201).json(todo);
});

// get the todo's

router.get("/", async (req,res) => {
    const todo = await Post.find()
    res.json(todo);
});


module.exports = router;