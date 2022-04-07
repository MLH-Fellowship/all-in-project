function favoritePost(postInfo) {
	var post = document.body;
	favorites = localStorage.getItem("favorite");

	post.classList.toggle("favorite"); 		// add and remove post from favorites
	if (post.classList.contains("favorite")) {
	 	localStorage.setItem("favorite", postInfo);
	}
	else if (favorites.contains(postInfo)) {
		localStorage.removeItem("favorite", postInfo);
	}
}

function showFavorites() {
	favorites = localStorage.getItem("favorite");
	text = "";

	for (var i = 0; i < favorites.length; i++) {
		text += favorites[i];
	}

	// text += favorites;

	myFavorites.innerHTML += favorites;
}
