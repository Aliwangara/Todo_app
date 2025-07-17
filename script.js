const todoEl = document.querySelector('#todo-el');
const addItemBtn = document.querySelector('#add-item-btn');
const todoItem = document.querySelector('#todo-item');
const clearBtn = document.getElementById('clear-btn');





let todo = JSON.parse(localStorage.getItem('addTodo')) || [];
if(!Array.isArray(todo)){
    todo =[];
}

displayTodo()

addItemBtn.addEventListener('click', ()=>{

todo.push(todoEl.value.trim().reverse());


 displayTodo()
    
 todoEl.value = '';

 localStorage.setItem('addTodo', JSON.stringify(todo))



})



function displayTodo(){
    todoItem.innerHTML = ``;

    todo.forEach((todos,index) => {
        const li = document.createElement('li');

        li.className = 'todo-list-item'

        li.innerHTML = `
            <p>${todos} <i class="fa-solid fa-trash" onClick = "deleteBtn(${index})"></i></p>
            
        `
        todoItem.appendChild(li)


    });
    




}

function deleteBtn(index){

    todo.splice(index, 1)
        
    
    localStorage.setItem('addTodo', JSON.stringify(todo));
    displayTodo()
    

}

clearBtn.addEventListener('click', ()=>{
    todo = [];
    localStorage.setItem('addTodo', JSON.stringify(todo));
    displayTodo()


})



