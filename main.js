button.addEventListener("click", sendEmail);
function sendEmail() {
	const messageSubject = document.getElementById('subject').value;
	const messageContent = document.getElementById('message').value;

	openMailerAlert();
	window.open('mailto:kdefarrar@gmail.com?subject=' + messageSubject + '&body=' + messageContent);
}
