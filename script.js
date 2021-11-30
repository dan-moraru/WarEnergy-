/*Main JavaScript. Dan Markaru & Marko Litovchenko*/

/*If marko sees this hes gay*/

let newsLetter = document.getElementById("email");

let orderButton = document.getElementById("insideButton");

newsLetter.addEventListener("click", function(){
  alert("Thank you for Subscribing!");
})

orderButton.addEventListener("click", function(){
  window.location.replace("order.html");
})
