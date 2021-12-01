/*Main JavaScript. Dan Markaru & Marko Litovchenko*/

/*If marko sees this hes gay*/

let newsLetter = document.getElementById("email");

let orderButton = document.getElementById("insideButton");
let themeButton = document.getElementById("switch");
let cssLink = document.getElementsByTagName("link")[2];
newsLetter.addEventListener("click", function(){
  alert("Thank you for Subscribing!");
})

orderButton.addEventListener("click", function(){
  window.location.replace("order.html");
})

themeButton.addEventListener("click", function(){
  cssLink.href = "/light.css";
})
