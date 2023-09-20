var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var check = document.getElementById("check");
var reset = document.getElementById("reset");
var result = document.getElementById("result");
var ptag = document.createElement("p");

result.appendChild(ptag);

check.addEventListener("click", function () {
  var num1 = parseInt(input1.value);
  var num2 = parseInt(input2.value);
  var num3 = parseInt(input3.value);
  if (num1 > num2 && num1 > num3) {
    ptag.innerHTML =
      "The first number (" + input1.value + ") is the biggest number";
  } else if (num2 > num3 && num2 > num1) {
    ptag.innerHTML =
      "The second number (" + input2.value + ") is the biggest number";
  } else if (num3 > num2 && num3 > num1) {
    ptag.innerHTML =
      "The third number (" + input3.value + ") is the biggest number";
  } else {
    ptag.innerHTML = "Your numebers are equal";
  }
  ptag.style.color = "green";
  ptag.style.fontSize = "20px";
  result.style.backgroundColor = "white";
  result.style.display = "unset";
});

reset.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  result.style.display = "none";
});
