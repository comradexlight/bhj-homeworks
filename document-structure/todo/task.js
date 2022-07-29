'use strict'

const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function addTask() {
	const taskHTML = `
				<div class="task">
	  				<div class="task__title">
	    				${taskInput.value}
	  				</div>
	  				<a href="#" class="task__remove">&times;</a>
				</div>
				`

	tasksList.insertAdjacentHTML('afterend', taskHTML);
	
	const taskRemoveButton = document.querySelector('.task__remove');
	taskRemoveButton.addEventListener('click', function(event) {
		const task = event.target.closest('.task');
		removeTask(task);
	})

}

function removeTask(task) {
	task.remove()	
}

function clearTaskInput() {
	taskInput.value = '';
};

tasksAdd.addEventListener('click', function(event) {
	event.preventDefault() 
	if (taskInput.value.trim().length !==0) {
		addTask();
		clearTaskInput();
	}
})
