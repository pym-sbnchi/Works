var submite = document.getElementById("submite");
var tax = document.getElementById("tax");
var show = document.getElementById("show");

tax.style.display = "none";

var saleryArray = [];

submite.addEventListener("click", function () {
  var salery = document.getElementById("salery").value;
  saleryArray.push(salery);
  show.innerHTML = saleryArray;
  if (saleryArray.length == 5) {
    submite.style.display = "none";
    document.getElementById("salery").style.display = "none";
    tax.style.display = "unset";
  }
  document.getElementById("salery").value = "";
});

var saleryResult = []

tax.addEventListener("click", function () {
  var text= []
  saleryArray.forEach((x) => {
    if (x <= 5) {
      text = x - 0.5;
    } else if (x < 10 && x > 5) {
      text = x - 0.7;
    } else {
      text = x - 1;
    }
    saleryResult.push(text)
    show.innerHTML = saleryResult
  });
});
