const todoEl = document.querySelector('#todo-el');
const addItemBtn = document.querySelector('#add-item-btn');
const todoItem = document.querySelector('#todo-item');
const clearBtn = document.getElementById('clear-btn');





let todo = JSON.parse(localStorage.getItem('addTodo')) || [];



if(!Array.isArray(todo)){
    todo =[];
}

displayTodo()


addItemBtn.addEventListener('click', (e)=>{

const newItem = todoEl.value.trim();

 if(newItem !==''){

    todo.unshift(newItem)
    localStorage.setItem('addTodo', JSON.stringify(todo))
    displayTodo()
    
     todoEl.value = '';

    
 }

 




})



function displayTodo(){
    todoItem.innerHTML = ``;


    todo.forEach((todos,index) => {
        const li = document.createElement('li');
        

        
        li.className = 'todo-list-item'

        li.innerHTML = `
            <p class = "edited-text" contentEditable = "true">${index+1}. ${todos}</p>
             <i class="fa-solid fa-trash"  onClick = "deleteBtn(${index})"></i>
            
        `;

        const textEl = li.querySelector('.edited-text');

        textEl.addEventListener('blur', ()=>{
            const editedText = textEl.innerHTML.trim();
            if(editedText){
                todo[index] = editedText;
                localStorage.setItem('addTodo', JSON.stringify(todo));

                
            }
        });

        textEl.addEventListener('keydown', (e)=>{
            if(e.key === "Enter"){
                e.preventDefault();
                textEl.blur()
            }
        })

        
        todoItem.appendChild(li)


    });
    
    




}

function deleteBtn(index){
    alert(`Are you sure you want to delete this item`)

    todo.splice(index, 1)
        
    
    localStorage.setItem('addTodo', JSON.stringify(todo));
    displayTodo()
    

}

clearBtn.addEventListener('click', ()=>{
        

    todo = [];
    localStorage.setItem('addTodo', JSON.stringify(todo));
    displayTodo()


})




