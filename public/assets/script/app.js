import {api} from "./fetcher.js"

const UL = document.createElement("ul"); // this will hold the todo List
const formEL = document.getElementById("create-form"); // this is the form element
const toDoInput = document.getElementById("todoInput"); // todo input box
const commentInput = document.getElementById("comment-input"); // comment input box
const viewBtn = document.createElement("button"); // this button is for changing the view of the list
const toDoListSection = document.getElementById("todo-list"); // this is where the view button and the list will go

toDoListSection.appendChild(viewBtn);
let savedView = localStorage.getItem("view");
const views = ["List", "Carousel"];
viewBtn.classList.add("btn", "btn-dark", "view");

viewBtn.addEventListener("click", switchView);

    if(savedView === null || savedView === "List"){
        savedView = views[0];
        localStorage.setItem("view", views[0]);
        viewBtn.textContent = savedView;
         //here the todo will be shown in list view
    }else {
        savedView = views[1];
        localStorage.setItem("view", views[1]);
        viewBtn.textContent = savedView;
    }    

function switchView(){
    if (savedView === views[0]){
        savedView = views[1];
    }else if (savedView === views[1]){
        savedView = views[0];
    };
    
    localStorage.setItem("view", savedView)
    viewBtn.textContent = savedView;
};

