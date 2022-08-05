let tasks = []; //store contents of table 
const pomodoroForm = document.querySelector('.js-add-task');
const pomodoroTableBody = document.querySelector('.js-task-table-body');

const addTask = function (event) {
    // 1. Prevent default action
    event.preventDefault();
    // 2. Extract form field values
    const taskName = this.querySelector('.js-task-name').value;
    const pomodoroCount = this.querySelector('.js-pomodoro-count').value;
    // 3. Create a new task item by updating the global state
    tasks.push({
        taskName,
        pomodoroDone: 0,
        pomodoroCount,
        finished: false
    });
    // 4. Reset the form
    this.reset();
    // 5. Render the global state
    renderTasks(pomodoroTableBody, tasks);
}

pomodoroForm.addEventListener('submit', addTask);

// const renderTasks = function (tBodyNode, tasks = []) {
//     tBodyNode.innerHTML = tasks.map((task, id) => `
//     Template goes here for task[${id}] with name ${task.taskName}
//     ` ).join('');
// }

const renderTasks = function (tBodyNode, tasks = []) {
    tBodyNode.innerHTML = tasks.map((task, id) => `
    <tr>
    <td class="cell-task-name">${task.taskName}</td>
    <td class="cell-pom-count">${task.pomodoroDone} / ${task.pomodoroCount} pomodori</td>
    <td class="cell-pom-controls">
    ${task.finished ? 'Finished' : `
        <button class="js-task-done" data-id="${id}">Done</button>
        <button class="js-increase-pomodoro" data-id="${id}">Increase Pomodoro Count</button>`
        }
    <button class="js-delete-task" data-id="${id}">Delete Task</button>
    </td>
    </tr>
    ` ).join('');
}

// const renderTasks = function (tBodyNode, tasks = []) {
//     tBodyNode.innerHTML = tasks.map((task, id) => `
//         <div class="task  js-task" data-id="0">
//             <span class="task__name">${task.taskName}</span>
//             <span class="task__pomodori">${task.pomodoroDone} / ${task.pomodoroCount} pomodori</span>
//             <div class="task__controls">
//             ${task.finished ? 'Finished' : `
//                 <span class="task-controls__icon  js-task-done"
//                       data-id="${id}">\u{2714}</span>
//                 <span class="task-controls__icon  js-increase-pomodoro"
//                       data-id="${id}">\u{2795}</span>`
//         }
//                 <span class="task-controls__icon  js-delete-task"
//                       data-id="${id}">\u{1f5d1}</span>
//             </div>
//         </div>
//     ` ).join('');
// }

const finishTask = (tasks, taskId) => {
    tasks[taskId].finished = true;
}

const increasePomodoroDone = (tasks, taskId) => {
    tasks[taskId].pomodoroDone += 1;
}

const deleteTask = (tasks, taskId) => {
    tasks.splice(taskId, 1);
}

/*
const handleTaskButtonClick = function( event ) {
    const classList = event.target.className;
    const taskId = event.target.dataset.id;
    switch ( true ) {
        case /js-task-done/.test( classList ):         
            finishTask( tasks, taskId ); 
            break;
        case /js-increase-pomodoro/.test( classList ): 
            increasePomodoroDone( tasks, taskId ); 
            break;
        case /js-delete-task/.test( classList ):      
            deleteTask( tasks, taskId ); 
            break;
    }
    renderTasks( pomodoroTableBody, tasks );
}
*/

const handleTaskButtonClick = function (event) {
    const classList = event.target.className;
    const taskId = event.target.dataset.id;

    /js-task-done/.test(classList) ? finishTask(tasks, taskId) :
        /js-increase-pomodoro/.test(classList) ? increasePomodoroDone(tasks, taskId) :
            /js-delete-task/.test(classList) ? deleteTask(tasks, taskId) :
                null;

    renderTasks(pomodoroTableBody, tasks);
}

pomodoroTableBody.addEventListener('click', handleTaskButtonClick);