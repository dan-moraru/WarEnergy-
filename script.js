/*Main JavaScript. Dan Markaru & Marko Litovchenko*/



let newsLetter = document.getElementById("email");
let logo = document.getElementById("logoHead");
let orderButton = document.getElementById("insideButton");

let themeButton = document.getElementById("switch");
let themeLink = document.getElementsByTagName("link")[1];

newsLetter.addEventListener("click", function(){
  alert("Thank you for Subscribing!");
})

/*orderButton.addEventListener("click", function(){
  window.location.replace("order.html");
})*/

themeButton.addEventListener("click", function(){
  if (themeLink.getAttribute("href") == "/dark.css"){
    themeLink.setAttribute("href", "/light.css");
    
    themeButton.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2F183-1836881_half-moon-png-pic-half-moon-logo-png.png?v=1638314118399");
  }else if (themeLink.getAttribute("href") == "/light.css"){
    themeLink.setAttribute("href", "/dark.css");
    themeButton.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FUntitled-1.png?v=1638322301896")
  }

})

