/**function to toggle html of the like button */

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

/**function for saving favorites in local storage */


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
