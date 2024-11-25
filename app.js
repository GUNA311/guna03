// Add task functionality
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const tasks = document.getElementById('tasks');

  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button onclick="removeTask(this)">Remove</button>
  `;
  tasks.appendChild(li);

  taskInput.value = '';
}

// Remove a task
function removeTask(button) {
  const task = button.parentElement;
  task.remove();
}

// Add filter functionality (dummy)
function addFilter() {
  alert('Filter functionality coming soon!');
}

// Show scheduled tasks modal
function showScheduledTasks() {
  const modal = document.getElementById('scheduledModal');
  modal.classList.add('active');
}

// Show settings modal
function openSettings() {
  const modal = document.getElementById('settingsModal');
  modal.classList.add('active');
}

// Close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
}
// Initialize tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => displayTask(task));
}

// Add task functionality
function addTask() {
  const taskInput = document.querySelector('.task-input input');
  const taskValue = taskInput.value.trim();
  if (taskValue === '') return;

  const task = {
    text: taskValue,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  displayTask(task);
  saveTask(task);

  taskInput.value = '';
}

// Display task in the UI
function displayTask(task) {
  const tasks = document.querySelector('.tasks');

  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `
    <span>${task.text}</span>
    <time>${task.time}</time>
    <button onclick="removeTask(this)">Remove</button>
  `;

  tasks.appendChild(li);
}

// Save task to localStorage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(button) {
  const task = button.parentElement;
  const taskText = task.querySelector('span').textContent;

  removeTaskFromStorage(taskText);
  task.remove();
}

// Remove task from localStorage
function removeTaskFromStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
