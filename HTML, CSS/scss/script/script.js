var input = document.querySelector(".input");
var darkMode = document.querySelector("#dark-mode");
input.addEventListener("click", function () {
  darkMode.classList.toggle("darkstyle");
});

/************************************************/

var welcome = $(".welcome");
var menu = $(".nav-menu");
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > welcome.height()) {
    menu.addClass("menu-fixed");
  } else {
    menu.removeClass("menu-fixed");
  }
});

/************************************************/

var myCircle = Circles.create({
  id: "circle-1",
  radius: 65,
  value: 85,
  maxValue: 100,
  width: 5,
  text: function (value) {
    return value + "%";
  },
  colors: ["transparent", "#ffffff"],
  duration: 400,
  textClass: "progress_text",
});

var myCircle = Circles.create({
  id: "circle-2",
  radius: 65,
  value: 55,
  maxValue: 100,
  width: 5,
  text: function (value) {
    return value + "%";
  },
  colors: ["transparent", "#ffffff"],
  duration: 400,
  textClass: "progress_text",
});

var myCircle = Circles.create({
  id: "circle-3",
  radius: 65,
  value: 65,
  maxValue: 100,
  width: 5,
  text: function (value) {
    return value + "%";
  },
  colors: ["transparent", "#ffffff"],
  duration: 400,
  textClass: "progress_text",
});

var myCircle = Circles.create({
  id: "circle-4",
  radius: 65,
  value: 85,
  maxValue: 100,
  width: 5,
  text: function (value) {
    return value + "%";
  },
  colors: ["transparent", "#ffffff"],
  duration: 400,
  textClass: "progress_text",
});
