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
