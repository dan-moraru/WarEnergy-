/*Main JavaScript. Dan Markaru & Marko Litovchenko*/

let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/dark.css';
    document.head.appendChild(link);

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
  
})

