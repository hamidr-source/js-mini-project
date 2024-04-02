const username = document.querySelector("#username");
const password = document.querySelector("#password");
const checkBox = document.querySelector(".ck");
const loginBtn = document.querySelector("button");

const setCookie = (cookieName, cookieValue, expDay) => {
  const now = new Date();

  now.setTime(now.getTime() + expDay * 24 * 60 * 60 * 1000);

  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
};

const getCookie = (cookieName) => {
  const cookiesArray = document.cookie.split(";");

  let mainCookie = null;

  cookiesArray.some((cookie) => {
    if (cookie.includes(cookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });
  return mainCookie;
};

const emptyInput = () => {
    username.value = ""
    password.value = ""
    checkBox.checked = false
}

loginBtn.addEventListener("click", (event) => {
    event.preventDefault()

    if (checkBox.checked) {
        setCookie("user-login-token", username.value, 3)
    }
    emptyInput()
})
