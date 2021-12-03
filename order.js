/*Created by Marko Litovchenko and Dan Moraru*/

//12 pack = 15.99
//48 pack = 35.99

let originalAndSugarfree = document.getElementById("cold");
let boostAndCoffee = document.getElementById("hot");

let packOf12 = document.getElementById("12pack");
let packOf48 = document.getElementById("48pack");

let taxes = 14.975;
let total = 0;

let originalAndSugarfreeMultiplier = 1.2;
let boostAndCoffeeMultiplier =  1.7;

packOf12 = 15.99;
packOf48 = 35.99;

packOf12.addEventListener("click", function(){
  total += packOf12;
})

packOf48.addEventListener("click", function(){
  total += packOf48;
})





function calculatePrice(){
  total += packOf12;
  total += packOf48;
  total *= originalAndSugarfreeMultiplier;
  total += boostAndCoffeeMultiplier;
}

function caluclateTaxes(){
  total *= 0.14975;
}