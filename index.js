// Event Listener
const myTasks = []
const formSubmit = document.getElementById("form-submit");
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

function storeTask(event) {
    // Prevents page reload
    event.preventDefault();
    
    const task = taskInput.value;
    myTasks.push(task);

    taskInput.value = "";
    
    displayTasks();

};

function displayTasks() {
    taskList.innerHTML = ""

    myTasks.forEach(task => {
        // Creates list item and appends task to it
        const listItem = document.createElement("li");
        listItem.textContent = task;
        listItem.classList.add("list-item")

        // Creates button and adds it to each 'li'
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button")
        
        listItem.appendChild(deleteButton);

        // Deletes Task from list
        deleteButton.addEventListener("click", () => deleteTask(task));

        // Adds task to unordered list
        taskList.appendChild(listItem);
    })
}

function deleteTask(task) {
    // Gets index of task in array
    const taskIndex = myTasks.indexOf(task);

    // Removes task at specific index
    if (taskIndex !== -1) {
        myTasks.splice(taskIndex, 1);
        displayTasks();
    };
}

formSubmit.addEventListener("submit", storeTask)
