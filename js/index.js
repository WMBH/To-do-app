const inputField = document.querySelector('#input');
const clear = document.querySelector('.clear');
const date = document.querySelector('#date');
const toDoList = document.getElementById('list');
const addButton = document.querySelector('#click-to-add');
const toDoArray = [];
let toDoId = 0

class ToDo {
    constructor(text,id){
        this.text = text
        this.id = id
        this.completed = false
        this.trashed = false
    }
}

// template creation

function addToDo(toDo) {
    const item = `<li class="item">
                    <i class="fa fa-circle co" ></i>
                    <p class="text">${toDo}</p>
                    <i class="fa fa-trash-o de" ></i>
                 </li>`

    toDoList.insertAdjacentHTML('beforeend', item)
}

// enter press todo 

document.addEventListener('keyup', event => {
    if (event.keyCode == 13) {
        let toDo = inputField.value;
        if (toDo) {
            addToDo(toDo);
            toDoArray.push(new ToDo(toDo,toDoId));
            inputField.placeholder = "Add a to-do"
        } else {
            inputField.placeholder = "Field is empty"
        }
        inputField.value = "";
        toDoId++;
    }
});

//add todo button click

addButton.addEventListener('click',function(){
    let toDo = inputField.value;
    if (toDo) {
        addToDo(toDo);
        toDoArray.push(new ToDo(toDo,toDoId));
        inputField.placeholder = "Add a to-do"
    } else {
        inputField.placeholder = "Field is empty"
    }
    inputField.value = "";
    toDoId++;
});