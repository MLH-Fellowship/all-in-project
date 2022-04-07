function openMailerAlert() {
	alert("Submitting this form will open your default E-mail application.");
}

function sendEmail() {
	const messageSubject = document.getElementById('subject').value;
	const messageContent = document.getElementById('message').value;

	openMailerAlert();
	window.open('mailto:kdefarrar@gmail.com?subject=' + messageSubject + '&body=' + messageContent); //Replace email later
}
