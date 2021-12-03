/*Main JavaScript. Dan Markaru & Marko Litovchenko*/

let myStorage = window.localStorage;
//let lightTheme = myStorage.getItem("/light.css");

let newsLetter = document.getElementById("email");
let logoHead = document.getElementById("logoHead");
let logoFoot = document.getElementById("logoFoot");

let orderButton = document.getElementById("insideButton");
let themeButton = document.getElementById("switch");
let themeLink = document.getElementsByTagName("link")[1];

/*newsLetter.addEventListener("click", function(){
  alert("Thank you for Subscribing!");
})*/

if (myStorage.getItem("themeLink") == "/dark.css"){
  myStorage.setItem("themeLink", "/dark.css");
  myStorage.setItem("logoFoot", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoWhitePNG.png?v=1638310524846");
  myStorage.setItem("logoHead", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoWhitePNG.png?v=1638310524846");
  myStorage.setItem("themeButton", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FUntitled-1.png?v=1638322301896")
  
  themeLink.setAttribute("href", myStorage.getItem("themeLink"));
  logoFoot.setAttribute("src", myStorage.getItem("logoFoot"));
  logoHead.setAttribute("src", myStorage.getItem("logoHead"));
  themeButton.setAttribute("src", myStorage.getItem("themeButton"));
  
}else if(myStorage.getItem("themeLink") == "/light.css"){
  myStorage.setItem("themeLink", "/light.css");
  myStorage.setItem("logoFoot", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoPNG.png?v=1637714448522");
  myStorage.setItem("logoHead", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoPNG.png?v=1637714448522");
  myStorage.setItem("themeButton", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2F183-1836881_half-moon-png-pic-half-moon-logo-png.png?v=1638314118399")
  
  themeLink.setAttribute("href", myStorage.getItem("themeLink"));
  logoFoot.setAttribute("src", myStorage.getItem("logoFoot"));
  logoHead.setAttribute("src", myStorage.getItem("logoHead"));
  themeButton.setAttribute("src", myStorage.getItem("themeButton"));
}

/*themeLink.setAttribute("href", myStorage.getItem("themeLink"));
logoFoot.setAttribute("src", myStorage.getItem("logoFoot"));
logoHead.setAttribute("src", myStorage.getItem("logoHead"));
themeButton.setAttribute("src", myStorage.getItem("themeButton"));*/

themeButton.addEventListener("click", function(){
  if (myStorage.getItem("themeLink") == "/dark.css"){
    myStorage.setItem("themeLink", "/light.css");
    myStorage.setItem("logoFoot", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoPNG.png?v=1637714448522");
    myStorage.setItem("logoHead", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoPNG.png?v=1637714448522");
    myStorage.setItem("themeButton", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2F183-1836881_half-moon-png-pic-half-moon-logo-png.png?v=1638314118399")
    
    themeLink.setAttribute("href", myStorage.getItem("themeLink"));
    logoHead.setAttribute("src", myStorage.getItem("logoHead"));
    logoFoot.setAttribute("src", myStorage.getItem("logoFoot"));
    themeButton.setAttribute("src", myStorage.getItem("themeButton"));
  }else if (myStorage.getItem("themeLink") == "/light.css"){
    myStorage.setItem("themeLink", "/dark.css");
    myStorage.setItem("logoFoot", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoWhitePNG.png?v=1638310524846");
    myStorage.setItem("logoHead", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FwebLogoWhitePNG.png?v=1638310524846");
    myStorage.setItem("themeButton", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FUntitled-1.png?v=1638322301896");
    
    themeLink.setAttribute("href", myStorage.getItem("themeLink"));
    logoHead.setAttribute("src", myStorage.getItem("logoHead"));
    logoFoot.setAttribute("src", myStorage.getItem("logoFoot"));
    themeButton.setAttribute("src", myStorage.getItem("themeButton"));
  }

})





