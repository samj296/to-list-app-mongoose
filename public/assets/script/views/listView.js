import {getTodos, createTodo, updateTodo, deleteTodo} from "../todoApi.js";

function listView(todos, EL){
    EL.innerHTML = "";
    for(const todo of todos){
        const li = document.createElement("li");
        const title = document.createElement("p");
        title.innerText = todo.title;
        li.appendChild(title);
        if(todo.comment && typeof(todo.comment.body) === "string" && todo.comment.body.trim() !== ""){
            const comment = todo.comment.body;
            const commentP = document.createElement("p");
            commentP.innerText = comment;
            li.appendChild(commentP);
        };
        
        
        const checkBox = document.createElement("input"); 
        checkBox.type = "checkbox";
        checkBox.classList.add("status-checkbox")
        
        
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        editBtn.classList.add("btn", "btn-warning");
        deleteBtn.classList.add("btn", "btn-danger");
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";
        
        li.appendChild(checkBox);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        EL.appendChild(li);
        
        editBtn.addEventListener("click", () => {
            const input = document.getElementById("todoInput");
            const comment = document.getElementById("comment-input");
            const update={};

            if (input.value.trim() !== "" ){
                update.title = input.value.trim();
            };
            if (comment.value.trim() !== "" ){
                update.comment = {body: comment.value.trim()};
            };

            update.status = checkBox.checked ? "completed" : "pending";

            updateTodo(todo._id, update);
        });

        deleteBtn.addEventListener("click", () => {
            deleteTodo(todo._id);
        });

    };
};

export {listView}