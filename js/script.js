const sendTask = document.querySelector('#send-task')
const inputTask = document.querySelector('#input-task')
const todoList = document.querySelector('#todo-list')
const alertNull = document.querySelector('.alert')


const handleClick = event => {
  event.preventDefault()

  if(!isNull(inputTask.value)){
    createElements(inputTask.value)
    alertNull.style.display = 'none'
  }
  else {
    alertNull.style.display = 'block'
  }

}

const createElements = (task) => {
    //Criando elementos
    const newTask = document.createElement('div')
    const checkIcon = document.createElement('i')
    const trashIcon = document.createElement('i')
    const paragraph = document.createElement('p')
  
    //Incluindo valores e atributos
    newTask.classList.add('task')
    checkIcon.className = 'fa fa-check'
    trashIcon.className = 'fa fa-trash'
    paragraph.textContent = task
  
  
    //Inserindo no elemento
    newTask.appendChild(checkIcon)
    newTask.appendChild(paragraph)
    newTask.appendChild(trashIcon)
  
    todoList.appendChild(newTask)

    inputTask.value = ''
}

const isNull = (value) => value === '' ? true : false


sendTask.addEventListener('click', handleClick)