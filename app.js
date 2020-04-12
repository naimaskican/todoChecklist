//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//EventListeners
// document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodoList);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions

function addTodoList(event){
    event.preventDefault(); //donot refresh browser
    // console.log("hello");
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const todoListitems = document.createElement("li");
    todoListitems.classList.add("todo-items");
    todoListitems.innerText = todoInput.value;
    todoDiv.appendChild(todoListitems);
    //add todo to local
    // saveLocalTodos(todoInput.value)
    //create completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("completed-btn");
    completedButton.setAttribute("aria-label", "completed");
    todoDiv.appendChild(completedButton);

     //create trash button
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class="fa fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     trashButton.setAttribute("aria-label", "Remove");
     todoDiv.appendChild(trashButton);
     //append to list
     todoList.appendChild(todoDiv);
     //clear input valur after adding
     todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();   
        })
        // todo.remove();
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


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display == "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display == "flex";
                }else{
                    todo.style.display == "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
        }
    });
}

// function saveLocalTodos(todo){
//     //check do i have things in there
//     let todos;
//     if(localStorage.getItem('todos') === null ){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));

// }


// function getTodos(){
//     let todos;
//     if(localStorage.getItem('todos') === null ){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.forEach(function(todo){
//         //create div
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     //create li
//     const todoListitems = document.createElement("li");
//     todoListitems.classList.add("todo-items");
//     todoListitems.innerText = todo;
//     todoDiv.appendChild(todoListitems);
//     //create completed button
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="fa fa-check"></i>';
//     completedButton.classList.add("completed-btn");
//     completedButton.setAttribute("aria-label", "completed");
//     todoDiv.appendChild(completedButton);

//      //create trash button
//      const trashButton = document.createElement("button");
//      trashButton.innerHTML = '<i class="fa fa-trash"></i>';
//      trashButton.classList.add("trash-btn");
//      trashButton.setAttribute("aria-label", "Remove");
//      todoDiv.appendChild(trashButton);
//      //append to list
//      todoList.appendChild(todoDiv);
//     });

// }
