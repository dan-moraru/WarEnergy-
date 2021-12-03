/*Created by Marko Litovchenko and Dan Moraru*/

//12 pack = 15.99
//48 pack = 35.99

let originalAndSugarfree = document.getElementById("cold");
let boostAndCoffee = document.getElementById("hot");

let packOf12 = document.getElementById("12pack");
let packOf48 = document.getElementById("48pack");

let taxes = 1.14975;
let total = 0;

let originalAndSugarfreeMultiplier = 1.2;
let boostAndCoffeeMultiplier =  1.7;

let packOf12Price = 15.99;
let packOf48Price = 35.99;

let packChosenPrice = 0;
let packChoseMultiplier = 0;

let totalWithoutTaxes = document.getElementById("total1");
let totalWithTaxes = document.getElementById("total2");

let purchaseForm = document.getElementById("purchase");

total = packChosenPrice * packChoseMultiplier;
totalWithoutTaxes.textContent = total + "$";
totalWithTaxes = total * taxes;
totalWithTaxes.textContent = totalWithTaxes + "$";

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

packOf12.addEventListener("change", function(){
  total = packChosenPrice * packChoseMultiplier;
  totalWithoutTaxes.textContent = total + "$";
  totalWithTaxes = total * taxes;
  totalWithTaxes.textContent = totalWithTaxes + "$";
});
packOf48.addEventListener("change", function(){
  total = packChosenPrice * packChoseMultiplier;
  totalWithoutTaxes.textContent = total + "$";
  totalWithTaxes = total * taxes;
  totalWithTaxes.textContent = totalWithTaxes + "$";
});
originalAndSugarfree.addEventListener("change", function(){
  total = packChosenPrice * packChoseMultiplier;
  totalWithoutTaxes.textContent = total + "$";
  totalWithTaxes = total * taxes;
  totalWithTaxes.textContent = totalWithTaxes + "$";
});
boostAndCoffee.addEventListener("change", function(){
  total = packChosenPrice * packChoseMultiplier;
  totalWithoutTaxes.textContent = total + "$";
  totalWithTaxes = total * taxes;
  totalWithTaxes.textContent = totalWithTaxes + "$";
});


/*function calculatePrice(){
  total += packOf12;
  total += packOf48;
  total *= originalAndSugarfreeMultiplier;
  total += boostAndCoffeeMultiplier;
}*/

/*total1.textContent = total;

total2.textContent = total;*/