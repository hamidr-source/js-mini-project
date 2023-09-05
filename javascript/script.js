const $ = document
const todoInput = $.querySelector(".todo-input");
const todoBtn = $.querySelector(".todo-btn");
const todoList = $.querySelector(".todo-list");
const alertDiv = $.querySelector(".alert-div");
const todoDiv = $.querySelector('.hidden-todo')
const completeBtn = $.querySelector('.completed-btn')
const trashBtn = $.querySelector('.trash-btn')

todoBtn.addEventListener("click", addTodo);


function addTodo(event) {
  event.preventDefault();

  if (todoInput.value !== "") {
    const inputValue = todoInput.value;

    const liItems = $.createElement("li");

    todoList.appendChild(todoDiv);
    todoDiv.classList.remove("hidden-todo")
    todoDiv.classList.add("todo");

    todoDiv.appendChild(liItems);
    liItems.innerHTML = inputValue;
    liItems.classList.add("todo-item");
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(trashBtn);

    alertDiv.style.display = "inline";
    alertDiv.innerHTML = "Task added";
    alertDiv.style.background = "rgb(56, 156, 56)";

    todoInput.value = "";
  } else {
    alertDiv.style.display = "inline";
    alertDiv.innerHTML = "Please enter a task";
    alertDiv.style.background = "rgb(223, 28, 28)";
  }

  setTimeout(function () {
    alertDiv.style.display = "none";
  }, 2500);
}


