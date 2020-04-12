//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EventListeners
todoButton.addEventListener('click', addTodoList);
todoList.addEventListener('click', deleteCheck)

//functions

function addTodoList(event){
    event.preventDefault(); //donot refresh browser
    // console.log("hello");
    //create div
    // const todoDiv = document.createElement("div");
    // todoDiv.classList.add("todo");
    //create li
    const todoListitems = document.createElement("li");
    todoListitems.classList.add("todo-items");
    todoListitems.innerText = todoInput.value;
    // todoDiv.appendChild(todoListitems);
    //create completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("completed-btn");
    completedButton.setAttribute("aria-label", "completed");
    todoListitems.appendChild(completedButton);

     //create trash button
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class="fa fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     trashButton.setAttribute("aria-label", "Remove");
     todoListitems.appendChild(trashButton);
     //append to list
     todoList.appendChild(todoListitems);
     //clear input valur after adding
     todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    //check todo
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// if (!todoInput.value === ""){
//     todoButton.removeAttribute("disabled", "true");
// } else{
//     todoButton.addAttribute("disabled");
// };
