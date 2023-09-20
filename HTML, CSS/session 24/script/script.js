var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");

var boxArray = [box1, box2, box3, box4, box5];

$(document).ready(function () {
  var currentQuestion = 0;

  $(".next").on("click", function () {
    var lastQuestion = currentQuestion++;
    boxArray[currentQuestion].style.display = "block";
    lastQuestion - 1;
    boxArray[lastQuestion].style.display = "none";
    if (currentQuestion == 4) {
      $(".submite").css("display", "unset");
    }
  });
  $(".previose").click(function () {
    var lastQuestion = currentQuestion--;
    boxArray[currentQuestion].style.display = "block";
    lastQuestion - 1;
    boxArray[lastQuestion].style.display = "none";
  });
  $(".submite").click(function () {
    var scoreNum = document.querySelector(".score-num");
    var score = 0;
    $(".question-box").each(function () {
      var selectedAnswer = $(this).find("input[type = 'radio']:checked").val();
      if (selectedAnswer === "4") {
        score++;
      }
    });
    $(".popup").css("display", "flex");
    scoreNum.textContent = `${score} of 5`;
  });
  $(".close").click(function () {
    $(".popup").css("display", "none");
  });
});
