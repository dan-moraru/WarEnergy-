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
  if (themeLink.getAttribute("href") == "/dark.css"){
    themeLink.setAttribute("href", "/light.css");
  }else if (themeLink.getAttribute("href") == "/dark.css"){
    themeLink.setAttribute("href", "/light.css");
  }
  /*console.log(themeLink.getAttribute("href", "/dark.css"));
  themeLink.setAttribute("href", "/light.css");
  console.log(themeLink.getAttribute("href", "/dark.css"));*/
})

