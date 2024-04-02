const setCookie = (cookieName, cookieValue, expDay) => {
  const now = new Date();

  now.setTime(now.getTime() + expDay * 24 * 60 * 60 * 1000);

  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`
};

const getCookie = (cookieName) => {
    const cookiesArray = document.cookie.split(";")

    let mainCookie = null

    cookiesArray.some(cookie => {
        if (cookie.includes(cookieName)) {
            mainCookie = cookie.substring(cookie.indexOf("=") + 1)
            return true
        }
    })
    return mainCookie
}