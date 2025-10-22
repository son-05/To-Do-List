// Select DOM elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task when pressing Enter
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Add remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✖";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle when deleting
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
