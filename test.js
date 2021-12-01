let themeButton = document.getElementById("switch");
let themeLink = document.getElementsByTagName("link")[2];

themeButton.addEventListener("click", function(){
  themeLink.href = "/light.css";
  
})

