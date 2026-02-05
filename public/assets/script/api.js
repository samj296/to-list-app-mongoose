import {api} from "./fetcher.js"
const apiURL = "http://localhost:3000/api/todos";

function getTodos(){
    return api(apiURL);
};

function createTodo(todo){
    return api(apiURL,{
        method: "POST",
        body: JSON.stringify(todo)
    });
};

function updateTodo(id, updates){
    return api(`${apiURL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(updates)
    });
};

function deleteTodo(id){
    return api(`${apiURL}/${id}`, {
        method: "delete"
    });
};

export {getTodos, createTodo, updateTodo, deleteTodo};