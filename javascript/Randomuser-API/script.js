const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return new Error("Not Found 404 :(");
    })
    .then((data) => {
      console.log(data.results[0]);
    })
    .catch((err) => console.log(err));
});
