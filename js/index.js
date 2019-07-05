const inputField = document.querySelector('#input');
const clear = document.querySelector('.clear');
const date = document.querySelector('#date');
const toDoList = document.getElementById('list');
const addButton = document.querySelector('#click-to-add');
const toDoArray = [];
const removeButton = document.getElementById('click-to-remove');
const doneButton = document.getElementById('click-to-done');
const CHECK = 'fas-fa-check-circle'
const UNCHECK = 'fa-circle'
const LINETHROUGH = 'lineThrough'
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
                    <span id="click-to-done"><i class="far co ${DONE}"></i></span>
                    <p class="text ${LINE}">${toDo}</p>
                    <span id="click-to-remove"><i class="fa fa-trash-o de" ></i></span>
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

// displayng date

let dateOpt = {
    weekday:'long',
    month:'short',
    day:'numeric'
}

let today = new Date();
date.innerHTML = today.toLocaleDateString('en-US',dateOpt);

// done and remove buttons

