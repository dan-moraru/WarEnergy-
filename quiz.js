let firstQuizPage = document.getElementById("firstQuizPage");
let secondQuizPage = document.getElementById("secondQuizPage");
/*let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");*/

let question1 = document.getElementById("topLeftQuestion");
let question2 = document.getElementById("topRightQuestion");
let question3 = document.getElementById("bottomLeftQuestion");
let question4 = document.getElementById("bottomRightQuestion");

question1.style.display = "block";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";

question1.addEventListener("click", function(){
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
})
question2.addEventListener("click", function(){
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "none";
  div4.style.display = "none";
})
question3.addEventListener("click", function(){
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
})

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