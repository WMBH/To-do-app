const inputField = document.querySelector('#input');
const clear = document.querySelector('.clear')
const date = document.querySelector('#date')
const toDoList = document.getElementById('list')
const addButton = document.querySelector('#click-to-add');

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
            inputField.placeholder = "Add a to-do"
        } else {
            inputField.placeholder = "Field is empty"
        }
        inputField.value = "";
    }
});

//add todo button click

addButton.addEventListener('click',function(){
    let toDo = inputField.value;
    if (toDo) {
        addToDo(toDo);
        inputField.placeholder = "Add a to-do"
    } else {
        inputField.placeholder = "Field is empty"
    }
    inputField.value = "";
});