/**function to toggle html of the like button */
function likeFunction(){
  var like = document.getElementById("likeBtn");
  if(like.innerHTML == "dislike"){
    like.innerHTML="like";
}else{
    like.innerHTML = "dislike"
  }
  var element = document.getElementById("likeBtn");
  element.classList.toggle("dislikeBtn");
}