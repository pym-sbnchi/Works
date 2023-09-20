var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var Check = document.getElementById("Check");
var reset = document.getElementById("Reset");
var result = document.getElementById("result");
var ptag = document.createElement("p");

result.appendChild(ptag);

Check.addEventListener("click", function () {
  var num1 = parseInt(input1.value);
  var num2 = parseInt(input2.value);
  if (num1 > num2) {
    ptag.innerHTML = "Your first number (" + num1 + ") is the bigger number";
  } else if (num2 > num1) {
    ptag.innerHTML = "Your second number (" + num2 + ") is the bigger number";
  } else {
    ptag.innerHTML = "Your numebers are equal";
  }
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
