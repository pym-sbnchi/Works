var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var pTag = document.getElementById("p");
var result = document.getElementById("result");
var reset = document.getElementById("reset");

result.addEventListener("click", function () {
  let number1 = parseInt(num1.value);
  let number2 = parseInt(num2.value);
  let number3 = parseInt(num3.value);
  var natije = number1 * number2 * number3;
  if (natije < 0) {
    pTag.innerHTML = "-";
  } else if (natije > 0) {
    pTag.innerHTML = "+";
  } else {
    pTag.innerHTML = "need more data";
  }
  pTag.style.display = "unset";
});
reset.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  num3.value = "";
  pTag.style.display = "none";
});
