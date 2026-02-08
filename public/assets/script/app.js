import {listView} from "./views/listView.js";
import {carouselView} from "./views/carouselView.js";
import {getTodos, createTodo, updateTodo, deleteTodo} from "./todoApi.js";

const formEL = document.getElementById("create-form"); // this is the form element
const toDoInput = document.getElementById("todoInput"); // todo input box
const commentInput = document.getElementById("comment-input"); // comment input box
const viewBtn = document.createElement("button"); // this button is for changing the view of the list
const toDoListSection = document.getElementById("todo-section"); // this is where the view button and the list will go
const ul = document.getElementById("todo-list");
const btnSection = document.getElementById("btn-section")
btnSection.appendChild(viewBtn);
let savedView = localStorage.getItem("view");
const views = ["List", "Carousel"];
viewBtn.classList.add("btn", "btn-dark", "view");

viewBtn.addEventListener("click", switchView);

    if(savedView === null || savedView === "List"){
        savedView = views[0]; // List
        localStorage.setItem("view", views[0]);
        viewBtn.textContent = savedView;
         //here the todo will be shown in list view
    }else {
        savedView = views[1]; // Carousel
        localStorage.setItem("view", views[1]);
        viewBtn.textContent = savedView;
        //here the todo will be shown in carousel view
    }    

function switchView(){
    if (savedView === views[0]){
        savedView = views[1];
    }else if (savedView === views[1]){
        savedView = views[0];
    };
    
    localStorage.setItem("view", savedView)
    viewBtn.textContent = savedView;
    loadTodos();
};

async function loadTodos(){
    const todos = await getTodos();
    if(savedView === views[0]){ //ListView
        listView(todos, toDoListSection,loadTodos);
    }else {
        carouselView(todos, toDoListSection,loadTodos);
    }
}

formEL.addEventListener("submit", async(e) => {
    e.preventDefault(); // this will prevent reload the page and wiping out the JavaScript State
    const todo = {
        title: toDoInput.value.trim(),
        comment: commentInput.value.trim()
    }
    await createTodo(todo);
    loadTodos();
});

document.addEventListener("DOMContentLoaded", loadTodos);
