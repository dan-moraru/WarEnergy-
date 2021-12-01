/*Main JavaScript. Dan Markaru & Marko Litovchenko*/

let newsLetter = document.getElementById("email");

let orderButton = document.getElementById("insideButton");
let switchThemes = document.getElementById("switch");
let themeLink = document.getElementByTagName("link")[2];
newsLetter.addEventListener("click", function(){
  alert("Thank you for Subscribing!");
})

orderButton.addEventListener("click", function(){
  window.location.replace("order.html");
})

orderButton.addEventListener("click", function(){
  
})

