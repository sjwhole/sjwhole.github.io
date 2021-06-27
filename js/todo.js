const todoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todos = document.querySelector("#todo ul");

const TODOS_KEY = "todos";

let toDos = [];

function addTodo(todoItem) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerText = todoItem;

  li.append(span);
  todos.append(li);
}

function saveTodo(todoItem) {
  toDos.push(todoItem);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function todoSumbitHandler(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  addTodo(newTodo);
  toDoInput.value = "";
  saveTodo(newTodo);
}

function removeToDos() {
  while (todos.hasChildNodes()) {
    todos.removeChild(todos.firstChild);
  }
}


function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function addToDosFromStorage() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(addTodo);
  }
}

function addRandomToDosFromStorage() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = shuffle(parsedToDos);
    toDos.forEach(addTodo);
  }
}

function generateRandomList() {
  removeToDos();
  addRandomToDosFromStorage();
}

const start = document.querySelector("#stop button:first-child");
const stop = document.querySelector("#stop button:last-child");

let job;

function startClickHandler() {
  job = window.setInterval(generateRandomList, 50);
}
function stopClickHandler() {
  clearInterval(job);
}

todoForm.addEventListener("submit", todoSumbitHandler);

start.addEventListener("click", startClickHandler);
stop.addEventListener("click", stopClickHandler);

addToDosFromStorage();
