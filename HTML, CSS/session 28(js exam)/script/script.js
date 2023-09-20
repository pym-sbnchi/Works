$(document).ready(function () {
  var car = document.querySelector(".car");
  var valueMargine = 0;
  $(".run-f").click(function () {
    var forward = setInterval(function () {
      valueMargine++;
      car.style.marginLeft = valueMargine + "px";
      if (valueMargine >= window.innerWidth - 350) {
        valueMargine = 0;
      }
    }, 10);
    $(".stop").click(function () {
      clearInterval(forward);
    });
  });

  $(".run-b").click(function () {
    var backward = setInterval(function () {
      valueMargine = --valueMargine;
      car.style.marginLeft = valueMargine + "px";
      if (valueMargine <= 0) {
        valueMargine = 0;
      }
    }, 10);
    $(".stop").click(function () {
      clearInterval(backward);
    });
  });
});
