const setCookie = (cookieName, cookieValue, expDay) => {
  const now = new Date();

  now.setTime(now.getTime() + expDay * 24 * 60 * 60 * 1000);

  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`
};
