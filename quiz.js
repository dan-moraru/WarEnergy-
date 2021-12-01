let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");

let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");

div1.style.display = "none";
div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";

q1.addEventListener("click", function(){
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
})
q2.addEventListener("click", function(){
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "none";
  div4.style.display = "none";
})
q3.addEventListener("click", function(){
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
  div4.style.display = "none";
})
q4.addEventListener("click", function(){
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "block";
})