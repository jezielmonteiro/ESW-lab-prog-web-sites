document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        var taskItem = document.createElement('li');
        taskItem.className = 'task';

        var taskText = document.createTextNode(taskInput.value);
        taskItem.appendChild(taskText);

        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = 'Excluir';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}