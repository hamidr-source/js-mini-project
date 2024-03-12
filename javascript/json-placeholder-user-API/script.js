const userContainer = document.querySelector("#wrap-users");
const deleteModal = document.querySelector("#delete-modal");
let userID = null;

window.addEventListener("load", () => {
  getUser();
});

const getUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      let userData = data;

      userData.forEach((user) => {
        userContainer.insertAdjacentHTML(
          "beforeend",
          `     
        <div class="user">
          <div class="user-profile-wrap">
              <img class="user-profile" src="img/noimg.png" alt="default-image">
              <div class="user-profile-description">
                  <h1 class="user-profile-name">${user.name} - ${user.username}<span class="user-age">${user.website}</span> </h1>
                  <h3 class="user-explanations">Email: ${user.email}</h3>
              </div>
          </div>
          <div class="btn-groups-column">
              <button class="delete-user-btn" onclick="openDeleteModal(${user.id})">delete</button>
              <button class="edit-user-btn">edit</button>
          </div>
      </div>
      `
        );
      });
    });
};

const openDeleteModal = (id) => {
  userID = id;
  deleteModal.classList.add("visible");
};

const closeDeleteModal = () => {
  deleteModal.classList.remove("visible");
};
