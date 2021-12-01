/*Main JavaScript. Dan Markaru & Marko Litovchenko*/


let newsLetter = document.getElementById("email");
let logo = document.getElementById("logoHead");
let orderButton = document.getElementById("insideButton");
let switchThemes = document.getElementById("switch");

let themeButton = document.getElementById("switch");
let themeLink = document.getElementsByTagName("link")[2];

newsLetter.addEventListener("click", function(){
  alert("Thank you for Subscribing!");
})

orderButton.addEventListener("click", function(){
  window.location.replace("order.html");
})

themeButton.addEventListener("click", function(){
  themeLink.href = "/light.css";
  logo.src = "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoWhitePNG.png?v=1638310524846";
})

