let userEntryWord = String(prompt("Please enter a word", ""))
let wordArray = userEntryWord.split("")

let reverseWord = wordArray.reverse()

if (reverseWord === wordArray) {
    alert("it's ok")
}else {
    alert("it's not ok")
}