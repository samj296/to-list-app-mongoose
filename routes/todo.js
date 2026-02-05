const express = require("express");
const router = express.Router();
const {ToDo, validStatus} = require("../models/toDo");


// Read all

router.get("/", async (req, res) => {
    const todos = await ToDo.find()
    res.json(todos);
});

//create todo
router.post("/", async (req, res) => {
    try{
        const{title, comment} = req.body;
        const newTodo = {title, status: "pending"} 
        if(typeof comment === "string" && comment.trim() !== ""){
            newTodo.comment = {body: comment.trim()};
        }
        const todo = await ToDo.create(newTodo);
        res.status(201).json(todo);
    }catch(err){
        res.status(400).json({ error: "Failed to create todo" });
    }
    
});

// UPDATE (edit To-Do mark as complete/change todo title)
router.put("/:id", async (req, res) => {
    try{
        const {id} = req.params
        const update = {}
        //update if title is provided
        if (typeof req.body.title === "string" && req.body.title.trim()!== "" ) {
            update.title = req.body.title
        };
        //update is status valid
        if ( validStatus.includes(req.body.status)) {
            update.status = req.body.status
        };

        //update if comment is provided
        if(req.body.comment && 
            typeof req.body.comment.body === "string" 
            && req.body.comment.body.trim() !== "" ){
                update.comment = {body: req.body.comment.body.trim(),
                createdAt: new Date()
                }
        }
        
        const todo = await ToDo.findByIdAndUpdate(id, update, {
            new: true,
            runValidators: true
        });
        
        if (!todo) return res.status(404).json({error: "To-Do not found"});
        res.json(todo);
    }catch (err){
        res.status(400).json({error: "Failed to update todo" })
    }
    

    
});

//DELETE To-Do

router.delete("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const deleted = await ToDo.findByIdAndDelete(id);
        if(!deleted) return res.status(404).json({error: "To-Do not found"});
        res.json({ok: true});
    }catch (err){
        res.status(400).json({error: "Failed to delete todo"});
    }
});

module.exports = router;