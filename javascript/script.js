const taskArray = {
  ali: ["html", "css", "js"],
  amin: ["python", "AI", "chatGPT"],
  hamid: ["golang", "database", "api"],
  amir: ["vur", "react", "graphql"],
};

let newTask = prompt("Please enter a task: ")
let employName = prompt("Please enter a employ name: ")

let employTask = taskArray[employName]
employTask.push(newTask)

console.log(employTask)
