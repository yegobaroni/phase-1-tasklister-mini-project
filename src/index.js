// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

//   const main = document.querySelector("#main-content")
//   console.log(main);

//   const taskForm = document.querySelector("#create-task-form")
//   const taskList = document.querySelector("#tasks")
//    taskForm.addEventListener("submit", function(e) {
//     e.preventDefault()

//     const newTask = document.querySelector("#new-task-description").value
    
//   taskList.innerHTML += `
//   <li>${newTask}</li>
//   <button data-action = "delete"> Remove </button>
//   `

//   // const taskItem = document.createElement("li")
//   // taskItem.innerText = newTask

//   // taskList.appendChild(taskItem)
//   taskForm.reset()
//    })
// taskList.addEventListener("click", function(e) {
//   console.log(e.target)
//   if(e.target.dataset.action === "delete"){
//     e.target.parentElement.remove()
//   }
// })

// })



document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  // Form submit event
  form.addEventListener('submit', addTask);
  // delete event
  taskList.addEventListener('click', removeTask);
  // Add task
  function addTask(e) {
    e.preventDefault();
    // get input value
    const newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);
    // Create new li element
    const li = document.createElement('li');
    // Add text node with input value
    li.appendChild(document.createTextNode(newTaskDescription));
    // create delete button element
    const deleteBtn = document.createElement('button');
    // append text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    taskList.appendChild(li);
  }
  function removeTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if (confirm('Are you sure?')) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }
  }
});