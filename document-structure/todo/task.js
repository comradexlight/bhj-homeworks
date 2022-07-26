'use strict'

const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
//const closeButtonsList = document.querySelectorAll('.task__remove');

function addTask() {
	const task = `
				<div class="task">
	  				<div class="task__title">
	    				${taskInput.value}
	  				</div>
	  				<a href="#" class="task__remove">&times;</a>
				</div>
				`

	tasksList.insertAdjacentHTML('afterend', task);
	let taskRemove = document.querySelectorAll('.task__remove');
	console.log(taskRemove)

}

function clearTaskInput() {
	taskInput.value = '';
};

tasksAdd.onclick = function(event) { event.preventDefault() };

taskInput.addEventListener('keydown', function(event) {
	if (event.key === 'Enter' && taskInput.value && taskInput.value !== ' ') {
		addTask();
		clearTaskInput();
	}
})

// function removeTask(task) {
// 	console.log(task.closest('.task'))
// }

// for (let i = 0; i < closeButtonsList.length; i++) {
// 	const closeButton = closeButtonsList[i];
// 	closeButton.addEventListener('click', function(event) {
// 		console.log(event.target)
// 		return false
// 	})
// };
