const users = [
  { id: 1, name: "Ali", age: 23 },
  { id: 2, name: "Hamid", age: 30 },
  { id: 3, name: "Amir", age: 22 },
  { id: 4, name: "Akbar", age: 18 },
  { id: 5, name: "Soheil", age: 20 },
  { id: 5, name: "Reza", age: 20 }
];

let result = users.every(function ( user ) {
    console.log(user)
    return user.age >= 18
    
})

if (result === true) {
    console.log("success")
} else {
    console.log("not success")
}
