/**function to toggle html of the like button */

function likeFunction(){
  var like = document.getElementById("likeBtn");
  if(like.innerHTML == "Like"){
    like.innerHTML="Dislike";
}else{
    like.innerHTML = "Like"
  }
  var element = document.getElementById("likeBtn");
  element.classList.toggle("dislikeBtn");
}
