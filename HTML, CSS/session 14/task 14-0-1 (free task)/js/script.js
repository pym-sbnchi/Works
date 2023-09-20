var input = document.getElementById("input");
var Check = document.getElementById("Check");
var reset = document.getElementById("Reset");
var result = document.getElementById("result");
var ptag = document.createElement("p");

result.appendChild(ptag);

Check.addEventListener("click", function () {
  var num = parseInt(input.value)
  if (num % 2 == 0) {
    ptag.innerHTML = input.value + " is an even number";
    ptag.style.color = "green";
  } else {
    ptag.innerHTML = input.value + " is an odd number";
    ptag.style.color = "red";
  }
  ptag.style.fontSize = "25px";
  result.style.backgroundColor = "white";
  result.style.display = "unset";
});


reset.addEventListener("click", function () {
  input.value = "";
  result.style.display = "none";
});