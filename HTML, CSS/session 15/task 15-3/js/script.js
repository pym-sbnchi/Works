var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var pTag = document.getElementById("p");
var result = document.getElementById("result");
var reset = document.getElementById("reset");

result.addEventListener("click", function () {
  var number1 = parseInt(num1.value);
  var number2 = parseInt(num2.value);
  var number3 = parseInt(num3.value);
  var number4 = parseInt(num4.value);
  var number5 = parseInt(num5.value);

  if (
    number1 > number2 &&
    number1 > number3 &&
    number1 > number4 &&
    number1 > number5
  ) {
    pTag.innerHTML = "First number (" + num1.value + ") is the biggest number";
  }
  else if (
    number2 > number1 &&
    number2 > number3 &&
    number2 > number4 &&
    number2 > number5
  ) {
    pTag.innerHTML = "Second number (" + num2.value + ") is the biggest number";
  }
  else if (
    number3 > number2 &&
    number3 > number1 &&
    number3 > number4 &&
    number3 > number5
  ) {
    pTag.innerHTML = "Third number (" + num3.value + ") is the biggest number";
  }
  else if (
    number4 > number1 &&
    number4 > number2 &&
    number4 > number3 &&
    number4 > number5
  ) {
    pTag.innerHTML = "Fourth number (" + num4.value + ") is the biggest number";
  }
  else if (
    number5 > number1 &&
    number5 > number2 &&
    number5 > number3 &&
    number5 > number4
  ) {
    pTag.innerHTML = "Fifth number (" + num5.value + ") is the biggest number";
  }
  else {
    pTag.innerHTML = "Data are wrong";
  }
  pTag.style.display = "unset";
});

reset.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  num3.value = "";
  num4.value = "";
  num5.value = "";
  pTag.style.display = "none";
});
