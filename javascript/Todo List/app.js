const $ = document;
const todoInput = $.querySelector(".todo-input");
const todoBtn = $.querySelector(".todo-btn");
const deleteBtn = $.querySelector(".delete-btn");
const todoListElem = $.querySelector(".todo-list");

let todoArray = [];

function addNewTodo(event) {
  event.preventDefault();
  let inputValue = todoInput.value;

  let newTodoObj = {
    id: todoArray.length + 1,
    title: inputValue,
    complete: false,
  };
  todoInput.value = "";
  todoArray.push(newTodoObj);
  setLocalStorage(todoArray);
  todoGenerator(todoArray);
}

function setLocalStorage(todoList) {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

function todoGenerator(todoList) {
  let todoDivElem, todoLiItem, completeBtn, trashBtn;

  todoList.forEach(function (todo) {

    todoDivElem = $.createElement("div");
    todoDivElem.className = "todo";
    todoLiItem = $.createElement("li");
    todoLiItem.className = "todo-item";
    todoLiItem.innerHTML = todo.title;
    completeBtn = $.createElement("button");
    completeBtn.classList.add("completed-btn")
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    trashBtn = $.createElement("button");
    trashBtn.classList.add("trash-btn")
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDivElem.append(todoLiItem, completeBtn, trashBtn)
    todoListElem.appendChild(todoDivElem)
    console.log(todoDivElem);
  });
}

todoBtn.addEventListener("click", addNewTodo);
