const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const alertDiv = document.querySelector(".alert-div");
todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  if (todoInput.value !== "") {
    const inputValue = todoInput.value;
    const todoDiv = document.createElement("div");
    const liItems = document.createElement("li");
    const completeBtn = document.createElement("button");
    const trashBtn = document.createElement("button");

    todoList.appendChild(todoDiv);
    todoDiv.classList.add("todo");
    // console.log(inputValue)
    todoDiv.appendChild(liItems);
    liItems.innerHTML = inputValue;
    liItems.classList.add("todo-item");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add("completed-btn");
    todoDiv.appendChild(completeBtn);
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
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


