function listView(todos, EL){
    EL.innerHtml = "";
    const countEl = document.createElement("span");
    const doneCount = todos.filter(t => t.status === completed).length;
    countEl.textContent = `${todos.length} total → ${doneCount} done`;
    const toDOList = document.createElement("ul");

     for (const todo of todos){
        const li = document.createElement("li");
        li.classNmae = `item ${todo.status === "completed" ? "completed" : "pending"}`;
        const left = document.createElement("div");
        left.className = "left", left.title = "Click to toggle done";
        left.addEventListener("click", () => toggleDone(todo));

        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = todo.status === "completed" ? "Done" : "Todo";
        const text = document .createElement("span");
        text.className = "text", text.textContent = todo.text;
        
        left.appendChild(badge);
        left.appendChild(text);

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.className = "secondary", editBtn.type = "button", editBtn.textContent = "Edit";

        editBtn.addEventListener("click", () => editTodo(todo))

        const delBtn = document.createElement("button");
        delBtn.className = "danger", delBtn.type = "button", delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => deleteTodo());

        actions.appendChild(editBtn), actions.appendChild(delBtn);
        li.appendChild(left), li.appendChild(actions);
        EL.appendChild

    }

    // EL.appendChild(countEl)
    // EL.appendChild(toDOList);

   
};

function toggleDone(todo){

};

function editTodo(todo){

};

function deleteTodo(todo){

};