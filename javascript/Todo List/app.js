const $ = document;
const todoInput = $.querySelector(".todo-input");
const todoBtn = $.querySelector(".todo-btn");
const deleteAllTodoBtn = $.querySelector(".delete-btn");
const todoListElem = $.querySelector(".todo-list");
const alertDiv = $.querySelector(".alert-div")

let todoArray = [];

function addNewTodo(event) {
  event.preventDefault();
  let inputValue = todoInput.value;

  let newTodoObj = {
    id: todoArray.length + 1,
    title: inputValue,
    complete: false,
  };
  if (todoInput.value !== "") {
    todoArray.push(newTodoObj);
    setLocalStorage(todoArray);
    todoGenerator(todoArray);
  } else {
    alertDiv.style.display = "block";
    alertDiv.innerHTML = "Please enter a task";
    setTimeout( function () {
      alertDiv.style.display = "none";
    }, 3000)
  }
  todoInput.value = "";
}

function setLocalStorage(todoList) {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

function todoGenerator(todoList) {
  let todoDivElem, todoLiItem, completeBtn, trashBtn;

  todoListElem.innerHTML = "";
  todoList.forEach(function (todo) {
    todoDivElem = $.createElement("div");
    todoDivElem.className = "todo";
    if (todo.complete === true) {
      todoDivElem.classList.add("completed");
    }
    todoLiItem = $.createElement("li");
    todoLiItem.className = "todo-item";
    todoLiItem.innerHTML = todo.title;
    completeBtn = $.createElement("button");
    completeBtn.classList.add("completed-btn");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.setAttribute("onclick", "checkTodo(" + todo.id + ")");
    trashBtn = $.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.setAttribute("onclick", "deleteTodo(" + todo.id + ")");
    todoDivElem.append(todoLiItem, completeBtn, trashBtn);
    todoListElem.appendChild(todoDivElem);
  });
}

function deleteTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));
  todoArray = localStorageTodos;

  let todoIndex = todoArray.findIndex(function (todo) {
    return todo.id === todoId;
  });
  todoArray.splice(todoIndex, 1);
  setLocalStorage(todoArray);
  todoGenerator(todoArray);
}

function checkTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));
  todoArray = localStorageTodos;

  todoArray.forEach(function (todo) {
    if (todo.id === todoId) {
      todo.complete = !todo.complete;
    }
  });
  setLocalStorage(todoArray);
  todoGenerator(todoArray);
}

function deleteAllTodos(event) {
  event.preventDefault();
  localStorage.removeItem("todos");
  todoArray = [];
  todoGenerator(todoArray);
}

function getLocalStorage() {
  let localStorageValue = JSON.parse(localStorage.getItem("todos"));

  if (localStorageValue) {
    todoArray = localStorageValue;
  } else {
    todoArray = [];
  }
  todoGenerator(todoArray);
}

window.addEventListener("load", getLocalStorage);
deleteAllTodoBtn.addEventListener("click", deleteAllTodos);
todoBtn.addEventListener("click", addNewTodo);
