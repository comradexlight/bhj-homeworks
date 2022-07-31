'use strict'

const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.addEventListener('load', function(event){	
	if (xhr.readyState === xhr.DONE) {
		let answerHTML = '';
		let pollHTML = '';
		let answersList = xhr.response.data.answers;
		for (let answer of answersList) {
			
			answerHTML += `<button class="poll__answer">
								${answer}
							</button> `
		}



			
		pollHTML = `<div class="poll">
						    <div class="poll__title" id="poll__title">
						        ${xhr.response.data.title}<!--   Как вы относитесь к собакам? -->
						    </div>
						    <div class="poll__answers poll__answers_active" id="poll__answers">
						       ${answerHTML}
						    </div>
						</div>`

		pollAnswers.insertAdjacentHTML('beforeend', pollHTML);

		const allPollButtons = document.getElementsByClassName('poll__answer');
		for (let i = 0; i < allPollButtons.length; i++ ) {
			const pollButton = allPollButtons[i];
			pollButton.addEventListener('click', function(event) {
				alert('Спасибо, ваш голос засчитан!')
			})
		}
	}
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
