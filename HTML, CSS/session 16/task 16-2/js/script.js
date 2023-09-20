var numbers = document.getElementById("numbers");
var pTag = document.getElementById("p");
var result = document.getElementById("sort");
var reset = document.getElementById("reset");

var num = (numbers.innerHTML = [7, 3, 45, 7, 194, 6, 11]);

var sorted = num.sort(function (a, b) {
  return a - b;
});
result.addEventListener("click", function () {
  pTag.innerHTML = sorted;
  pTag.style.display = "unset";
});
reset.addEventListener("click", function () {
  pTag.style.display = "none";
});
