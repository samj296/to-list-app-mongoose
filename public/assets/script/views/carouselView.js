    import {getTodos, createTodo, updateTodo, deleteTodo} from "../todoApi.js";

function carouselView(todos, EL, reload){
    //EL is the <ul></ul>
    EL.innerHTML = "";
    const div = document.createElement("div");
    div.id = "carousalTodo";
    div.classList.add("carousel", "slide");
        //  Now I will loop inside the list to create carousel-item inside the div class     

    
        
           
        let toDoCount = 1;

        const divInIt = document.createElement("div");
        divInIt.classList.add("carousel-inner");
        for (const todo of todos){
                const divItem = document.createElement("div");
                divItem.classList.add("carousel-item", "text-center");
                if(toDoCount === 1){
                    divItem.classList.add("active");
                };
                const title = document.createElement("p");
                const checkBox = document.createElement("input"); 
                checkBox.type = "checkbox";
                checkBox.classList.add("status-checkbox")
                const editBtn = document.createElement("button");
                const deleteBtn = document.createElement("button");

                title.classList.add("d-block", "w-100")
                title.textContent = todo.title;
                divItem.appendChild(title);
                if(todo.comment && typeof(todo.comment.body) === "string" && todo.comment.body.trim() !== ""){
                    const comment = todo.comment.body;
                    const commentP = document.createElement("p");
                    commentP.innerText = comment;
                    divItem.appendChild(commentP);
                }

                editBtn.classList.add("btn", "btn-warning");
                deleteBtn.classList.add("btn", "btn-danger");
                editBtn.textContent = "Edit";
                deleteBtn.textContent = "Delete";
            
            
            
            divItem.appendChild(checkBox);
            divItem.appendChild(editBtn);
            divItem.appendChild(deleteBtn);
            divInIt.appendChild(divItem);

            

            toDoCount++

             //here I will add the event Listener for all these buttons and the checkbox
             
            editBtn.addEventListener("click", () => {
                const input = document.getElementById("todoInput");
                const comment = document.getElementById("comment-input");
                const update = {};

                if (input.value.trim() !== "") {
                    update.title = input.value.trim();
                };
                if (comment.value.trim() !== "") {
                    update.comment = { body: comment.value.trim() };
                };

                update.status = checkBox.checked ? "completed" : "pending";

                updateTodo(todo._id, update);
                reload()
            });

            deleteBtn.addEventListener("click", () => {
                deleteTodo(todo._id);
                reload()
            });
        };

            

        div.appendChild(divInIt);

            const btnPrev = document.createElement("button");
            const spanPrevIcon = document.createElement("span");
            const spanPrev = document.createElement("span");
            btnPrev.classList.add("carousel-control-prev");
            btnPrev.type = "button";
            btnPrev.setAttribute("data-bs-target", "#carouselTodo");
            btnPrev.setAttribute("data-bs-slide", "prev");
            spanPrevIcon.classList.add("carousel-control-prev-icon");
            spanPrevIcon.setAttribute("aria-hidden", "true");
            spanPrev.classList.add("visually-hidden");
            spanPrev.innerText = "Previous";
            btnPrev.appendChild(spanPrevIcon);
            btnPrev.appendChild(spanPrev);

            const btnNext = document.createElement("button");
            const spanNextIcon = document.createElement("span");
            const spanNext = document.createElement("span");
            btnNext.classList.add("carousel-control-next");
            btnNext.type = "button";
            btnNext.setAttribute("data-bs-target", "#carouselTodo");
            btnNext.setAttribute("data-bs-slide", "next");
            spanNextIcon.classList.add("carousel-control-next-icon");
            spanNextIcon.setAttribute("aria-hidden", "true");
            spanNext.classList.add("visually-hidden");
            spanNext.innerText = "Next";
            btnNext.appendChild(spanNextIcon);
            btnNext.appendChild(spanNext);

            div.appendChild(btnPrev);
            div.appendChild(btnNext);
            EL.appendChild(div);

};

export {carouselView}

// -----------------Code ends here------------------------------
    /*
    This is the example of carousel(bootstrap) 
    I tried this and now copied here so that 
    I can inject it whith js when Carousal view is selected
    */

    /*
    <div id = "carouselTodo" class = "carousel slide">
                    <div class = "carousel-inner">
                        <div class = "carousel-item active text-center">
                            <p class="d-block w-100">ghsdfjhgsdkfjsdhfg</p>
                        </div>
                        <div class = "carousel-item text-center justify-content-center">
                            <p class="d-block w-100">dskfjgwsednfbcgu</p>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselTodo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselTodo" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

    </div>

    */