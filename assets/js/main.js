/**function to toggle html of the like button */
/**
function favoriteFunction(){
  var like = document.getElementById("favBtn");
  var counter = document.getElementById("favCount");
  if(like.innerHTML == "fav"){
    like.innerHTML="unfav";
    counter.style.display = "inline";
}else{
    like.innerHTML = "fav"
    counter.style.display = "none";

  }
}
 */
/**function to count favorites in blog posts 
localStorage.setItem("favorites","0");

function favoriteFunction(){
  var like = document.getElementById("favBtn");
  var counter = document.getElementById("favCount");

  if(localStorage.favorites == "0"){
    var favoriteCounter = localStorage.favorites;
    favoriteCounter = parseInt(favoriteCounter) + 1;

    localStorage.setItem("favorites", favoriteCounter);

    like.innerHTML="unfav";
    counter.style.display = "inline";
    counter.innerHTML = localStorage.favorites;

}else{
    favoriteCounter = parseInt(favoriteCounter) - 1;
    localStorage.setItem("favorites", favoriteCounter);

    like.innerHTML = "fav"
    counter.style.display = "none";

  }
}*/

/**function for saving favorites in local storage */
var bPostTitle = document.querySelector("h1").innerText;
var bPostPage = window.location.href;

function favoriteFunction(){
  var bPostMeta = document.getElementById("postMeta").innerHTML;
var bPostTitle = document.querySelector("h1").innerText;
var bPostPage = window.location.href;
  const bPost ={
    meta: bPostMeta,
    title: bPostTitle,
    location: bPostPage,
  }
  window.localStorage.setItem("favorites", JSON.stringify(bPost));
}
/**function to retrieve favorite posts */
function getFavorites(){
  const favs = localStorage.getItem('favorites');
    if (favs) {
    return JSON.parse(favs);
    var header = favs[1];
      document.innerHTML.header;
  }
  return [];
}

/**function for contact form */
function darkMode() {
  document.getElementById('DarkModetext').style.backgroundColor="black";
  document.getElementById('DarkModetext').style.color="white";
  document.getElementById('DarkModetext').style.color="white";
}
function writefile(){
let fso = CreateObject("Scripting.FileSystemObject");
let s   = fso.CreateTextFile("<details.txt", True);

let firstname=document.getElementByname('fname');
let Surnam=document.getElementByname('sname');
let emel=document.getElementByname('email');
let mssage=document.getelementByname('message');
s.writeline=("First Name: " +firstname);
s.writeline=("Last Name: " +Surnam);
s.writeline=("Email: "+emel);
s.writefile=("Message:"+mssage);

s.writeline("-----------------------------");
s.Close();
}
