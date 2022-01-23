const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let savedList = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(savedList));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  savedList = savedList.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(todo) {
  const listing = document.createElement("li");
  listing.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo);

  listing.appendChild(span);
  listing.appendChild(btn);

  toDoList.appendChild(listing);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const toDoObj = {
    text : newToDo,
    id : Date.now()
  };
  savedList.push(toDoObj);
  paintToDo(toDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedArray = localStorage.getItem("todos");

if(savedArray !== null) {
  const parsedArray = JSON.parse(savedArray);
  savedList = parsedArray;
  parsedArray.forEach(paintToDo);
}