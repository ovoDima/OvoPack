// Selector's
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const showForm = document.querySelector('.show')

todoButton.addEventListener('click', (e) => {
   e.preventDefault

   //create todoDiv
   const todoDiv = document.createElement('div')
   todoDiv.classList.add('todo')

   //create todoLi
   const todoLi = document.createElement('li')
   todoLi.innerHTML = todoInput.value
   todoLi.classList.add('todo-item')
   todoDiv.appendChild(todoLi)

   // Create Completed button
   const completedButton = document.createElement('button')
   completedButton.innerHTML = ('<i class="far fa-check-square"></i>')
   completedButton.classList.add('completed-button')
   todoDiv.appendChild(completedButton)

   // Create trash button
   const trashButton = document.createElement('button')
   trashButton.innerHTML = '<i class="fas fa-trash"></i>'
   trashButton.classList.add('trash-button')
   todoDiv.appendChild(trashButton)

   // Add create todo form in todoList
   todoList.appendChild(todoDiv)
   //Clear todo input after add task
   todoInput.value = ' '
})

todoList.addEventListener('click', (e) => {
   const item = e.target
   const timeout = 400
   if(item.classList[0] === 'trash-button') {
      const eve = item.parentElement
      eve.classList.add('fall')
      // eve.remove()
      setTimeout( () => {
         eve.remove()
      }, timeout)
   } 
   if(item.classList[0] = 'completed-button') {
      const eve = item.parentElement
      eve.classList.add('completed')
   }
})

// Event show form for add task in todo.
showForm.addEventListener('click', (e) => {
   e.preventDefault
   showForm.style.display = 'none'
   
   const timeout = 500

   setTimeout( () => {
      const header = document.querySelector('.logo')
      const form = document.querySelector('.show-form')

      header.style.display = 'flex'
      form.style.display = 'flex'
   }, timeout)
})