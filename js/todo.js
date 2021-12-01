const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInfut = toDoForm.querySelector("input");

const TODOSKEY = "todos";

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOSKEY, JSON.stringify(todos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✂";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
 event.preventDefault();
 const newTodo = toDoInfut.value;
 // 아래에 newTodo를 하면 안되는이유 : 위에서 값은 이미 받았어서 밑에는 초기화시켜줄뿐임
 toDoInfut.value = "";
 const newTodoObj = {
     text:newTodo,
     id:Date.now(),
     
 }
 todos.push(newTodoObj);
 paintToDo(newTodoObj);
 saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedtodos = localStorage.getItem(TODOSKEY);
// !== : 가 아니라면
if(savedtodos !== null){
    const parsedtodos = JSON.parse(savedtodos);
    todos = parsedtodos;
    parsedtodos.forEach(paintToDo);
}

function SexyFilter(){

}

