window.addEventListener("load", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res.json()))
});
