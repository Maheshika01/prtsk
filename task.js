<!DOCTYPE html>
<html>
<head>
    <title>Task Manager</title>
</head>
<body>
    <h1>Task Manager</h1>

    <div>
        <input type="text" id="taskInput" placeholder="Enter task name">
        <button onclick="addTask()">Add Task</button>
    </div>

    <div id="taskList">
        <!-- Tasks will be displayed here -->
    </div>

    <script>
        // Define an array to store tasks
        let tasks = [];

        // Function to add a new task
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskName = taskInput.value.trim();
            if (taskName !== "") {
                tasks.push({ name: taskName, completed: false });
                displayTasks();
                taskInput.value = "";
            }
        }

        // Function to display all tasks
        function displayTasks() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = ""; // Clear previous tasks

            tasks.forEach(task => {
                let taskItem = document.createElement("div");
                taskItem.textContent = `${task.name} - ${task.completed ? "Completed" : "Pending"}`;
                taskList.appendChild(taskItem);
            });
        }

        // Add sample tasks
        tasks.push({ name: "Complete project", completed: false });
        tasks.push({ name: "Submit report", completed: false });

        // Display initial tasks
        displayTasks();
    </script>
</body>
</html>
