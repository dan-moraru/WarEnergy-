let firstQuizPage = document.getElementById("firstQuizPage");
let secondQuizPage = document.getElementById("secondQuizPage");
/*let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");*/
let resultPoints = 0;
let choice1q1 = document.getElementById("topLeftQuestion1");
let choice2q1 = document.getElementById("topRightQuestion1");
let choice3q1 = document.getElementById("bottomLeftQuestion1");
let choice4q1 = document.getElementById("bottomRightQuestion1");

let choice1 = document.getElementById("topLeftQuestion1");
let choice2 = document.getElementById("topRightQuestion1");
let choice3 = document.getElementById("bottomLeftQuestion1");
let choice4 = document.getElementById("bottomRightQuestion1");



firstQuizPage.style.display = "";
secondQuizPage.style.display = "none";
/*question3.style.display = "none";
question4.style.display = "none";*/

choice1q1.addEventListener("click", function(){
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  resultPoints += 10;
  /*div3.style.display = "none";
  div4.style.display = "none";*/
})
choice2q1.addEventListener("click", function(){
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  resultPoints+= 15;
  /*div3.style.display = "none";
  div4.style.display = "none";*/
})
choice3q1.addEventListener("click", function(){
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  resultPoints+= 20;
  /*div3.style.display = "none";
  div4.style.display = "none";*/
})
choice4q1.addEventListener("click", function(){
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  resultPoints+= 25;
  /*div3.style.display = "none";
  div4.style.display = "none";*/
})
/*question3.addEventListener("click", function(){
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
  div4.style.display = "none";
})
question4.addEventListener("click", function(){
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "block";
})*/

/*let input = document.getElementByid("input1");
let inputValue = input.getAttribute("value");
let total = 0;
input.addEventListener("click", function(){
  total += inputValue;
})
img = document... 
img.setAttribute("src", "");

if (total > 0 && total <= 15){
  alert("you are...")
  img.setAttribute("src", "url");
}else if()*/