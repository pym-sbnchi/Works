var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var result = document.getElementById("result");
var reset = document.getElementById("reset");
var pTag = document.getElementById("p");

result.addEventListener("click", function () {
  var number1 = parseInt(num1.value);
  var number2 = parseInt(num2.value);
  var number3 = parseInt(num3.value);
  if (number1 > number2 && number1 > number3) {
    if (number2 > number3) {
      pTag.innerHTML = num1.value + "," + num2.value + "," + num3.value;
    } else {
      pTag.innerHTML = num1.value + "," + num3.value + "," + num2.value;
    }
  } else if (number2 > number1 && number2 > number3) {
    if (number1 > number3) {
      pTag.innerHTML = num2.value + "," + num1.value + "," + num3.value;
    } else {
      pTag.innerHTML = num2.value + "," + num3.value + "," + num1.value;
    }
  } else if (number3 > number2 && number3 > number1) {
    if (number2 > number1) {
      pTag.innerHTML = num3.value + "," + num2.value + "," + num1.value;
    } else {
      pTag.innerHTML = num3.value + "," + num1.value + "," + num2.value;
    }
  } else {
    pTag.innerHTML = "Your numbers are equal";
  }
  pTag.style.display = "unset";
});

reset.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  num3.value = "";
  pTag.style.display = "none";
});
