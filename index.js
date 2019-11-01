


let input = document.querySelector('.input')
let addTaskBtn = document.querySelector('.add-button')
let tasksList = document.querySelector('.tasks-list') 
let showErrorMessageRoot = document.querySelector('.show-error-message')

let errorMessage = {}

//! When Click Button ==> Add Task
addTaskBtn.addEventListener('click', addTaskFun)


function addTaskFun(){
    //! Set Validation Error Message
    if(input.value === ''){
      errorMessage.error = "Please Put Task Name"
      input.value = ''
      return showError(errorMessage, showErrorMessageRoot)
    }
  
    if(input.value.trim().length < 3){
      errorMessage.error = "Please Put Task Name min 3 chracter"
      input.value = ''
      return showError(errorMessage, showErrorMessageRoot)
    }
    
    //! Dismiss After Valid Task Create.......
    showErrorMessageRoot.classList.add('dismiss_error')
    showErrorMessageRoot.classList.remove('show-with-animation')
    

    let li = document.createElement('li')
    li.classList.add('task')
  
    let taskMessage = document.createElement('span')
    taskMessage.textContent = input.value


    let taskController = document.createElement('div')
    taskController.classList.add('task-controller')

    let deleteTask = document.createElement('span')
    deleteTask.classList.add('delete-task')
    deleteTask.style.backgroundImage = `url('./icons/trash.svg')`
    deleteTask.addEventListener('click', function(e){
      e.target.parentNode.parentNode.remove()
      
    })

    let EditTask = document.createElement('span')
    EditTask.classList.add('edit-task')
    EditTask.style.backgroundImage = `url('./icons/pen.svg')`

    taskController.appendChild(EditTask)
    taskController.appendChild(deleteTask)

    li.appendChild(taskMessage)
    li.appendChild(taskController)

    tasksList.appendChild(li)
    input.value = ''
}

//! When click Enter Button ==> Add Task
input.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    addTaskFun()
  }
})


function showError(errMess, parentRoot){
  parentRoot.classList.add('show-with-animation')
  parentRoot.classList.remove('dismiss_error')

  parentRoot.innerHTML = `
    <div>${errMess.error}</div>
    <div class="close_btn">x</div>
  `
  errorMessage = {}
  dismissErrorMessage(parentRoot)
}


//! Dismiss ErrorMessage
function dismissErrorMessage(parent){  
  let dismissError = parent.querySelector('.close_btn')
  dismissError.addEventListener('click', function(e){
    e.target.parentElement.classList.add('dismiss_error')
    e.target.parentElement.classList.remove('show-with-animation')
  })

}

