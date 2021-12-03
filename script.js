/*Main JavaScript. Dan Markaru & Marko Litovchenko*/

/*let myStorage = window.localStorage;
let lightTheme = myStorage.getItem("/light.css");*/

let newsLetter = document.getElementById("email");
let logoHead = document.getElementById("logoHead");
let logoFoot = document.getElementById("logoFoot");

let orderButton = document.getElementById("insideButton");
let themeButton = document.getElementById("switch");
let themeLink = document.getElementsByTagName("link")[1];

newsLetter.addEventListener("click", function(){
  alert("Thank you for Subscribing!");
})

//This code gives errors on other pages as the orderButton exists only in order.html, 
//when they same script is attached to every page

/*orderButton.addEventListener("click", function(){
  window.location.replace("order.html");
})*/

themeButton.addEventListener("click", function(){
  if (themeLink.getAttribute("href") == "/dark.css"){
    //myStorage.setItem("themeLink", "/light.css");
    themeLink.setAttribute("href", "/light.css");
    logoHead.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoPNG.png?v=1637714448522");
    logoFoot.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoPNG.png?v=1637714448522");
    themeButton.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2F183-1836881_half-moon-png-pic-half-moon-logo-png.png?v=1638314118399");
  }else if (themeLink.getAttribute("href") == "/light.css"){
    //myStorage.setItem("themeLink", "/dark.css");
    themeLink.setAttribute("href", "/dark.css");
    logoHead.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoWhitePNG.png?v=1638310524846");
    logoFoot.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoWhitePNG.png?v=1638310524846");
    themeButton.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FUntitled-1.png?v=1638322301896")
  }

})




