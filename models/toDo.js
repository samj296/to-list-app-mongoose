const mongoose = require("mongoose");
const validStatus = ["pending", "completed"];


const CommentSchema = new mongoose.Schema(
    {
        body: {type: String, required: true, trim: true},
        createdAt: {type: Date, default: Date.now}
    },
    {_id: false}
);

const todoSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, trim: true},
        status: {type: String, enum: validStatus, default: "pending"},
        comment: {type: CommentSchema, required: false}
    },
    {timestamps: true}
);

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = {ToDo, validStatus};