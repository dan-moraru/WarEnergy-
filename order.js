/*Created by Marko Litovchenko and Dan Moraru*/

//12 pack = 15.99
//48 pack = 35.99

let originalAndSugarfree = document.getElementById("cold");
let boostAndCoffee = document.getElementById("hot");

let packOf12 = document.getElementById("12pack");
let packOf48 = document.getElementById("48pack");

let total1 = document.getElementById("total1");
let total2 = document.getElementById("total2");

let taxes = 14.975;
let total = 0;

let originalAndSugarfreeMultiplier = 1.2;
let boostAndCoffeeMultiplier =  1.7;
let packChosenMultiplier;

let packOf12Price = 15.99;
let packOf48Price = 35.99;

packOf12.addEventListener("click", function(){
  total = packOf12Price;
  packChosenMultiplier = packOf12;
})

packOf48.addEventListener("click", function(){
  total = packOf48;
})

originalAndSugarfree.addEventListener("click", function(){
  total = originalAndSugarfreeMultiplier;
})

boostAndCoffee.addEventListener("click", function(){
  total = boostAndCoffeeMultiplier;
  total (price * mulitplier)
})

/*function calculatePrice(){
  total += packOf12;
  total += packOf48;
  total *= originalAndSugarfreeMultiplier;
  total += boostAndCoffeeMultiplier;
}*/

total1.textContent = total;

total *= 0.14975;

total2.textContent = total;
