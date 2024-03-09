// Event Listener
const tasks = []
const form = document.getElementById("form-submit");
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")


function sendAlert(event) {
    event.preventDefault();

    const currentTask = taskInput.value;
    tasks.push(currentTask)

    taskInput.value = "";

    updateTaskList();


};

function updateTaskList() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}

form.addEventListener("submit", sendAlert);
