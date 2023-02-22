const toDoList = [];



function add() {
    toDoList.push(listAdd.value)
    addRemove()
}



function remove(index){
    toDoList.splice(index,1)
    addRemove()
}

function addRemove(){
    listAppend.innerHTML = " "
    document.getElementById('listAdd').value = ''

    toDoList.forEach((todo, i) => {
        listAppend.innerHTML += `<div> ${i + 1}) ${todo} <span id="del" onclick = remove(${i + 1})>
           X</span> </div> `
    })
}