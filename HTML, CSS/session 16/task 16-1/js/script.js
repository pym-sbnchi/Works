var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var pTag = document.getElementById("p");
var result = document.getElementById("result");
var reset = document.getElementById("reset");

result.addEventListener("click", function () {
  let number1 = parseFloat(num1.value);
  let number2 = parseFloat(num2.value);
  pTag.innerHTML = Math.floor((Math.random() * (number2 - number1 + 1)) + number1)
  pTag.style.display = "unset";
});
reset.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  pTag.style.display = "none";
});
