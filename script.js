document.addEventListener('DOMContentLoaded', function(){

function addTask(){
    document.getElementById("taskcreator").addEventListener('click',function(){
        const taskValue = document.getElementById('inputBox').value;
        

        const todo = document.createElement('div');
        

        todo.style.border = '2px solid black';
        todo.style.width = '400px';
        todo.style.margin = '20px 0px 0px';
        todo.style.borderRadius = '10px';
        todo.style.padding = '5px';
        todo.style.fontWeight = '50px';
        todo.style.display = 'flex';
        todo.style.justifyContent = 'space-between'

        const checkTask = document.createElement('button');
        
        checkTask.textContent = "?";
        checkTask.style.color = 'blue';
        checkTask.style.border = '0px';
        checkTask.style.backgroundColor = 'none';
        checkTask.style.fontSize = '20px';
        checkTask.style.cursor = 'pointer';
        checkTask.style.marginLeft = '10px';

        
        
        const taskText = document.createElement('div');
            taskText.textContent = taskValue;
        
        const closeButton = document.createElement('button');
            closeButton.textContent = '✖';
            closeButton.style.border = '0px';
            closeButton.style.background = 'none';
            closeButton.style.color = 'red';
            closeButton.style.fontSize = '20px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.marginLeft = '10px';

            todo.appendChild(checkTask);
            todo.appendChild(taskText);
            todo.appendChild(closeButton);
        
        closeButton.addEventListener('click', function(){
            document.getElementById('main').removeChild(todo);
        });
        checkTask.addEventListener('click', function(){

            taskText.style.textDecoration = 'line-through';
            taskText.style.color = 'grey';
            checkTask.textContent = 'done';
            checkTask.style.fontSize = '15px'
            
        });
        
        document.getElementById('main').appendChild(todo);

        

        document.getElementById('inputBox').value  = '';
    });
};




addTask();
});


