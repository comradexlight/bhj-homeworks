'use strict'

const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

tasksAdd.onclick = function(event) { event.preventDefault() };

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

taskInput.addEventListener('keydown', function(event) {
	if (event.key === 'Enter' && taskInput.value && taskInput.value !== ' ') {
		addTask();
		clearTaskInput();
	}
})
