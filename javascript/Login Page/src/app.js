window.addEventListener("load", () => {
  const DBOpenReq = indexedDB.open("Login Page", 1);

  DBOpenReq.addEventListener("error", (err) => {
    console.warn("Error:", err);
  });
  DBOpenReq.addEventListener("success", (event) =>{
    console.log("Success:", event)
  })
});
