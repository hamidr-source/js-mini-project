function dragStartHandler (event) {
    console.log(event.target.id)
    event.dataTransfer.setData("elemId", event.target.id)
}

function dropHandler (event) {
    console.log(event)
    let targetId = event.dataTransfer.getData("elemId")
    let targetElem = document.getElementById(targetId)
    event.target.append(targetElem)
}

function dragOverHandler (event) {
    event.preventDefault()
}

// dragged -> onDragStart, onDrag, onDragEnd
// dropped -> ondDragEnter, onDragOver, onDragLeave, onDrop 