document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const main = document.querySelector("#main-content")
  console.log(main);

  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")
   taskForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const newTask = document.querySelector("#new-task-description").value
    
  taskList.innerHTML += `
  <li>${newTask}</li>
  <button data-action = "delete"> Remove </button>
  `

  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask

  // taskList.appendChild(taskItem)
  taskForm.reset()
   })
taskList.addEventListener("click", function(e) {
  console.log(e.target)
  if(e.target.dataset.action === "delete"){
    e.target.parentElement.remove()
  }
})

})
