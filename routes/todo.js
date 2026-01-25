const express = require("express");
const router = express.Router();
const {ToDo, validStatus} = require("./models/toDo");


// Read all

router.get("/", async (req, res) => {
    const todos = await Post.find()
    res.json(todos);
});

//create todo
router.post("/", async (req, res) => {
    const{title, comments} = req.body;
    const todo = await toDo.create({title, status: "pending", comments});
    res.status(201).json(todo);
});

// UPDATE (edit To-Do mark as complete/change todo title)
router.put("/:id", async (req, res) => {
    try{
        const {id} = req.params
        const update = {}
        
        if (typeof req.body.title === "string") update.title = req.body.title;
        if ( validStatus.includes(req.body.status)) update.status = req.body.status;
        
        const todo = await ToDo.findByIdAndUpdate(id, update, {
            new: true,
            runValidators: true
        });
        
        if (!todo) return res.status(404).json({error: "To-Do not found"});
        res.json(todo);
    }catch (err){
        res.status(400).json
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