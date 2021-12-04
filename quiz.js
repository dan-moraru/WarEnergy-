let quizStart = document.getElementById("quizStart");
let startButton = document.getElementById("startButton");

let firstQuizPage = document.getElementById("firstQuizPage");
let secondQuizPage = document.getElementById("secondQuizPage");
let thirdQuizPage = document.getElementById("thirdQuizPage");
let fourthQuizPage = document.getElementById("fourthQuizPage");

let choice1q1 = document.getElementById("topLeftQuestion1");
let choice2q1 = document.getElementById("topRightQuestion1");
let choice3q1 = document.getElementById("bottomLeftQuestion1");
let choice4q1 = document.getElementById("bottomRightQuestion1");

let choice1q2 = document.getElementById("topLeftQuestion2");
let choice2q2 = document.getElementById("topRightQuestion2");
let choice3q2 = document.getElementById("bottomLeftQuestion2");
let choice4q2 = document.getElementById("bottomRightQuestion2");

let choice1q3 = document.getElementById("topLeftQuestion3");
let choice2q3 = document.getElementById("topRightQuestion3");
let choice3q3 = document.getElementById("bottomLeftQuestion3");
let choice4q3 = document.getElementById("bottomRightQuestion3");

let choice1q4 = document.getElementById("topLeftQuestion4");
let choice2q4 = document.getElementById("topRightQuestion4");
let choice3q4 = document.getElementById("bottomLeftQuestion4");
let choice4q4 = document.getElementById("bottomRightQuestion4");

let quizEnd = document.getElementById("quizEnd");
let resultH2 = document.getElementById("resulth2");
let result = document.getElementById("result");

let resultPoints = 0;

let coffeePoints = 0;
let boostPoints = 0;
let sugarfreePoints = 0;
let originalPoints = 0;

quizStart.style.display = "";
firstQuizPage.style.display = "none";
secondQuizPage.style.display = "none";
thirdQuizPage.style.display = "none";
fourthQuizPage.style.display = "none";
quizEnd.style.display = "none";

//Start Quiz
startButton.addEventListener("click", function() {
  quizStart.style.display = "none";
  startButton.style.display = "none";
  firstQuizPage.style.display = "";
});

//Question 1
choice1q1.addEventListener("click", function() {
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  sugarfreePoints += 25;
});
choice2q1.addEventListener("click", function() {
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  coffeePoints += 25;
});
choice3q1.addEventListener("click", function() {
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  originalPoints += 25;
});
choice4q1.addEventListener("click", function() {
  firstQuizPage.style.display = "none";
  secondQuizPage.style.display = "";
  boostPoints += 25;
});

//Question 2

choice1q2.addEventListener("click", function() {
  secondQuizPage.style.display = "none";
  thirdQuizPage.style.display = "";
  boostPoints += 25;
});
choice2q2.addEventListener("click", function() {
  secondQuizPage.style.display = "none";
  thirdQuizPage.style.display = "";
  originalPoints += 25;
});
choice3q2.addEventListener("click", function() {
  secondQuizPage.style.display = "none";
  thirdQuizPage.style.display = "";
  coffeePoints += 25;
});
choice4q2.addEventListener("click", function() {
  secondQuizPage.style.display = "none";
  thirdQuizPage.style.display = "";
  sugarfreePoints += 25;
});

//Question 3

choice1q3.addEventListener("click", function() {
  thirdQuizPage.style.display = "none";
  fourthQuizPage.style.display = "";
  coffeePoints += 25;
});
choice2q3.addEventListener("click", function() {
  thirdQuizPage.style.display = "none";
  fourthQuizPage.style.display = "";
  originalPoints += 25;
});
choice3q3.addEventListener("click", function() {
  thirdQuizPage.style.display = "none";
  fourthQuizPage.style.display = "";
  sugarfreePoints += 25;
});
choice4q3.addEventListener("click", function() {
  thirdQuizPage.style.display = "none";
  fourthQuizPage.style.display = "";
  boostPoints += 25;
});

//Question 4

choice1q4.addEventListener("click", function() {
  fourthQuizPage.style.display = "none";
  quizEnd.style.display = "";
  sugarfreePoints += 25;
  outputResult();
});
choice2q4.addEventListener("click", function() {
  fourthQuizPage.style.display = "none";
  quizEnd.style.display = "";
  boostPoints += 25;
  outputResult();
});
choice3q4.addEventListener("click", function() {
  fourthQuizPage.style.display = "none";
  quizEnd.style.display = "";
  coffeePoints += 25;
  outputResult();
});
choice4q4.addEventListener("click", function() {
  fourthQuizPage.style.display = "none";
  quizEnd.style.display = "";
  originalPoints += 25;
  outputResult();
});

function outputResult() {
  let pointArray = [coffeePoints, boostPoints, sugarfreePoints, originalPoints];
  let pointsChosenIndex = pointArray.indexOf(Math.max(...pointArray));
  switch (pointsChosenIndex) {
    case (pointsChosenIndex = 0):
      resultH2.textContent = "You are a War Energy Coffee flavour!";
      result.setAttribute(
        "src",
        "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FcoffeeStanding.png?v=1638493771188"
      );
      break;
    case (pointsChosenIndex = 1):
      resultH2.textContent = "You are a War Energy BOOST flavour!";
      result.setAttribute(
        "src",
        "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FboostStanding.png?v=1638493776859"
      );
      break;
    case (pointsChosenIndex = 2):
      resultH2.textContent = "You are a War Energy Sugar Free flavour!";
      result.setAttribute(
        "src",
        "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FsugarfreeStanding.png?v=1638493764626"
      );
      break;
    case (pointsChosenIndex = 3):
      resultH2.textContent = "You are a War Energy Original flavour!";
      result.setAttribute(
        "src",
        "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2ForiginalStanding.png?v=1638493757083"
      );
      break;
  }
}

/*function outputResult(){
  if (resultPoints > 0 && resultPoints <= 40){
    resultH2.textContent = "You are a War Energy Original flavour!";
    result.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2ForiginalStanding.png?v=1638493757083");
    console.log(resultPoints);
  }
  else if (resultPoints > 40 && resultPoints <= 80){
    resultH2.textContent = "You are a War Energy Sugar Free flavour!";
    result.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FsugarfreeStanding.png?v=1638493764626");
    console.log(resultPoints);
  }
  else if (resultPoints > 80 && resultPoints <= 120){
    resultH2.textContent = "You are a War Energy Coffee flavour!";
    result.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FcoffeeStanding.png?v=1638493771188");
    console.log(resultPoints);
  }
  else if (resultPoints > 120 && resultPoints <= 160){
    resultH2.textContent = "You are a War Energy BOOST flavour!";
    result.setAttribute("src", "https://cdn.glitch.me/536f4a60-7027-4969-bb7b-dc4f746a8da3%2FboostStanding.png?v=1638493776859");
    console.log(resultPoints);
  }
}*/
