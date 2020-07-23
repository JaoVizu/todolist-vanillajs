const sendTask = document.querySelector('#send-task')
const inputTask = document.querySelector('#input-task')
const todoList = document.querySelector('#todo-list')
const alertNull = document.querySelector('.alert')

const isNull = (value) => value === '' ? true : false

const handleClick = event => {
  event.preventDefault()

  if(!isNull(inputTask.value)) addTask()
  else alertNull.style.display = 'block'

}

const addTask = () => {
  createElements(inputTask.value)
  totalTasks();
  alertNull.style.display = 'none'
}

const createElements = (task) => {
    //Criando elementos
    const newTask = document.createElement('div')
    const checkIcon = document.createElement('i')
    const trashIcon = document.createElement('i')
    const paragraph = document.createElement('p')
  
    //Incluindo valores e atributos
    newTask.classList.add('task')
    checkIcon.className = 'fa fa-check complete-icon'
    checkIcon.onclick = () => {completeTask(newTask)}
    trashIcon.className = 'fa fa-trash'
    trashIcon.onclick = () => {deleteTask(newTask)}
    paragraph.textContent = task

  
    //Inserindo os elementos dentro do elemento pai (newTask)
    newTask.appendChild(checkIcon)
    newTask.appendChild(paragraph)
    newTask.appendChild(trashIcon)
  
    todoList.appendChild(newTask)

    inputTask.value = ''
}

const completeTask = (taskAtual) => {
  if(!taskAtual) return;

  const completed = document.createElement('div')
  completed.classList.add('complete')
  taskAtual.classList.add('done')
  taskAtual.appendChild(completed)
}

const deleteTask = (taskAtual) => {
  taskAtual.remove()
  totalTasks();
}

const totalTasks = () => {
  const divTotal = document.querySelector('#total-tasks');

  divTotal.innerText = `Total tasks: ${todoList.children.length}`
 
}

sendTask.addEventListener('click', handleClick)
