var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");
var reset = document.getElementById("reset");
var result = document.getElementById("result");
var ptag = document.createElement("p");

result.appendChild(ptag);

plus.addEventListener("click", function () {
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  ptag.innerHTML = num1 + num2;
  ptag.style.color = "green";
  ptag.style.fontSize = "25px";
  result.style.backgroundColor = "white";
  result.style.display = "unset";
});
minus.addEventListener("click", function () {
  ptag.innerHTML = input1.value - input2.value;
  ptag.style.color = "green";
  ptag.style.fontSize = "25px";
  result.style.backgroundColor = "white";
  result.style.display = "unset";
});
multiply.addEventListener("click", function () {
  ptag.innerHTML = input1.value * input2.value;
  ptag.style.color = "green";
  ptag.style.fontSize = "25px";
  result.style.backgroundColor = "white";
  result.style.display = "unset";
});
divide.addEventListener("click", function () {
  ptag.innerHTML = input1.value / input2.value;
  ptag.style.color = "green";
  ptag.style.fontSize = "25px";
  result.style.backgroundColor = "white";
  result.style.display = "unset";
});
modulus.addEventListener("click", function () {
  ptag.innerHTML = input1.value % input2.value;
  ptag.style.color = "green";
  ptag.style.fontSize = "25px";
  result.style.backgroundColor = "white";
  result.style.display = "unset";
});
reset.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
  result.style.display = "none";
});
