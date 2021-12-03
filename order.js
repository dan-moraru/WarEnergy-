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
let packChosenMultiplier;

let packOf12Price = 15.99;
let packOf48Price = 35.99;
let packChosenPrice;
let packChoseMultiplier;

let totalWithoutTaxes = document.getElementById("total1");
let totalWithTaxes = document.getElementById("total2");

let purchaseForm = document.getElementById("purchase");

packOf12.addEventListener("click", function(){
  packChosenPrice = packOf12Price;
})

packOf48.addEventListener("click", function(){
  packChosenPrice = packOf48Price;
})

originalAndSugarfree.addEventListener("click", function(){
  packChoseMultiplier = originalAndSugarfreeMultiplier;
})

boostAndCoffee.addEventListener("click", function(){
  packChoseMultiplier = boostAndCoffeeMultiplier;
})

purchaseForm.on("change", function(){
  total = packChosenPrice * packChoseMultiplier;
  totalWithoutTaxes.textContent = total;
});



/*function calculatePrice(){
  total += packOf12;
  total += packOf48;
  total *= originalAndSugarfreeMultiplier;
  total += boostAndCoffeeMultiplier;
}*/

/*total1.textContent = total;

total2.textContent = total;*/