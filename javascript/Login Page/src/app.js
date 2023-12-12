let db = null
let objectStore = null

window.addEventListener("load", () => {
  const DBOpenReq = indexedDB.open("Login Page", 11);

  DBOpenReq.addEventListener("error", err => {
    console.warn("Error:", err);
  });
  DBOpenReq.addEventListener("success", event =>{
    console.log("Success:", event)
  })
  DBOpenReq.addEventListener("upgradeneeded", event => {
    db = event.target.result
    console.log("Upgrade:", event.target.result)
    
    if (!db.objectStoreNames.contains("users")) {
        objectStore = db.createObjectStore("users")    
    }
    
    if (db.objectStoreNames.contains("courses")) {
        objectStore = db.deleteObjectStore("courses")    
    }
    
    console.log(db.objectStoreNames)
  })
});
