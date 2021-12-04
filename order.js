/*Created by Marko Litovchenko and Dan Moraru*/

//12 pack = 15.99
//48 pack = 35.99

let originalAndSugarfree = document.getElementById("cold");
let boostAndCoffee = document.getElementById("hot");

let packOf12 = document.getElementById("12pack");
let packOf48 = document.getElementById("48pack");

let taxes = 1.14975;
let total = 0;
let totalTaxes = 0;

let originalAndSugarfreeMultiplier = 1.2;
let boostAndCoffeeMultiplier = 1.7;

let packOf12Price = 15.99;
let packOf48Price = 35.99;

let packChosenPrice = 0;
let packChoseMultiplier = 0;

let totalWithoutTaxes = document.getElementById("total1");
let totalWithTaxes = document.getElementById("total2");

let purchaseForm = document.getElementById("purchase");
let submitButton = document.getElementById("submitButton");

packOf12.addEventListener("click", function() {
  packChosenPrice = packOf12Price;
});

packOf48.addEventListener("click", function() {
  packChosenPrice = packOf48Price;
});

originalAndSugarfree.addEventListener("click", function() {
  packChoseMultiplier = originalAndSugarfreeMultiplier;
});

boostAndCoffee.addEventListener("click", function() {
  packChoseMultiplier = boostAndCoffeeMultiplier;
});

packOf12.addEventListener("change", function() {
  total = packChosenPrice * packChoseMultiplier;
  total = total.toFixed(2);
  totalWithoutTaxes.textContent = total + "$";
  totalTaxes = total * taxes;
  totalTaxes = totalTaxes.toFixed(2);
  totalWithTaxes.textContent = totalTaxes + "$";
});
packOf48.addEventListener("change", function() {
  total = packChosenPrice * packChoseMultiplier;
  total = total.toFixed(2);
  totalWithoutTaxes.textContent = total + "$";
  totalTaxes = total * taxes;
  totalTaxes = totalTaxes.toFixed(2);
  totalWithTaxes.textContent = totalTaxes + "$";
});
originalAndSugarfree.addEventListener("change", function() {
  total = packChosenPrice * packChoseMultiplier;
  total = total.toFixed(2);
  totalWithoutTaxes.textContent = total + "$";
  totalTaxes = total * taxes;
  totalTaxes = totalTaxes.toFixed(2);
  totalWithTaxes.textContent = totalTaxes + "$";
});
boostAndCoffee.addEventListener("change", function() {
  total = packChosenPrice * packChoseMultiplier;
  total = total.toFixed(2);
  totalWithoutTaxes.textContent = total + "$";
  totalTaxes = total * taxes;
  totalTaxes = totalTaxes.toFixed(2);
  totalWithTaxes.textContent = totalTaxes + "$";
});

submitButton.addEventListener("click", function() {
  if (purchaseForm.checkValidity()) {
    alert("Thank you for puchasing War Energy");
  }
});
