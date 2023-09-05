const $ = document;
const todoInput = $.querySelector(".todo-input");
const todoBtn = $.querySelector(".todo-btn");
const todoList = $.querySelector(".todo-list");
const alertDiv = $.querySelector(".alert-div");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheckTodo);

function addTodo(event) {
  event.preventDefault();

  const todoValue = todoInput.value;
  const todoDiv = $.createElement("div");
  const liItem = $.createElement("li");
  const completeBtn = $.createElement("button");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add("completed-btn");
  const trashBtn = $.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trash-btn");

  if (todoValue !== "") {
    console.log(todoValue);
    alertDiv.style.display = "inline";
    alertDiv.innerHTML = "Task Added success !";
    alertDiv.style.backgroundColor = "rgba(0, 136, 0, 0.411)";

    todoList.appendChild(todoDiv);
    todoDiv.classList.add("todo");
    todoDiv.appendChild(liItem);
    liItem.innerHTML = todoValue;
    liItem.classList.add("todo-item");
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(trashBtn);

    todoInput.value = "";
  } else {
    alertDiv.style.display = "inline";
    alertDiv.innerHTML = "Please enter a task !";
    alertDiv.style.backgroundColor = "rgb(223, 28, 28)";
  }

  setTimeout(function () {
    alertDiv.style.display = "none";
  }, 3000);
}

function removeTodo(event) {
  console.log(event.target);
}

function deleteCheckTodo(event) {
  if (event.target.classList.value === "trash-btn") {
    event.target.parentElement.remove();
  } else {
    event.target.parentElement.classList.toggle("completed");
  }
}
