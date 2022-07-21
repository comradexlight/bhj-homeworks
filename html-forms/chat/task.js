'use strict'

const chatWidgetButton = document.getElementsByClassName('chat-widget')[0];
const userInput = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const botMessagesList = ['Добрый день!', 'Спасибо', 'Отличная идея', 'Рад это слышать', 'Передам это руковдству', 'Рад, что мы работаем вместе над этим'];

function botRandomMessage(listOfMessages) {
	const msg = listOfMessages[Math.floor(Math.random() * listOfMessages.length)];
	return msg
}

function date() {
	const time =  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	return time
};

chatWidgetButton.addEventListener('click', function() {
	chatWidgetButton.classList.add('chat-widget_active');
})

userInput.addEventListener('keyup', function(event) {
	if (event.key === 'Enter' && userInput.value !== '' && userInput.value !== ' ') {
		messages.innerHTML += `
			<div class="message message_client">
        		<div class="message__time">${date()}</div>
        		<div class="message__text">${userInput.value}</div>
        	</div>
        	<div class="message">
                <div class="message__time">${date()}</div>
                <div class="message__text">${botRandomMessage(botMessagesList)}</div>
            </div>
        ` 
		userInput.value = '';
	}
})