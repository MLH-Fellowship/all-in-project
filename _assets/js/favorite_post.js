button.addEventListener("click", favoritePost);
function favoritePost() {
	document.getElementById('movie-item').classList.add('favorites');
	
	localStorage.set("favorite", "{{ page }}")
}
