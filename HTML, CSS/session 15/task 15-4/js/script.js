var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var paTag = document.getElementById("pa");
var pgTag = document.getElementById("pg");
var mark = document.getElementById("mark");
var result = document.getElementById("result");
var reset = document.getElementById("reset");

result.addEventListener("click", function () {
  var number1 = parseInt(num1.value);
  var number2 = parseInt(num2.value);
  var number3 = parseInt(num3.value);
  var number4 = parseInt(num4.value);
  var number5 = parseInt(num5.value);
  var students = [number1, number2, number3, number4, number5];

  var AVG = (mark.innerHTML =
    (number1 + number2 + number3 + number4 + number5) / students.length);

  if (AVG < 60) {
    pgTag.innerHTML = "Grade: E";
  } else if (AVG < 70) {
    pgTag.innerHTML = "Grade: D";
  } else if (AVG < 80) {
    pgTag.innerHTML = "Grade: C";
  } else if (AVG < 90) {
    pgTag.innerHTML = "Grade: B";
  } else if (AVG < 100) {
    pgTag.innerHTML = "Grade: A";
  } else {
    pgTag.innerHTML = "Data are wroung. No grade.";
  }
  paTag.style.display = "unset";
  pgTag.style.display = "unset";
});

reset.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  num3.value = "";
  num4.value = "";
  num5.value = "";
  paTag.style.display = "none";
  pgTag.style.display = "none";
});
