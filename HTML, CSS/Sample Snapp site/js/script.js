var menu = document.getElementById("menu2");
var ham = document.getElementById("ham");
var cross = document.getElementById("cross");
var download = document.getElementById("download-apps");
var apps2 = document.getElementById("apps2");
var welcome = document.getElementById("welcome");
var up = document.getElementById("up-angle");
var down = document.getElementById("down-angle");

ham.addEventListener("click", () => {
  menu.style.display = "unset";
  menu.style.right = 0;
  ham.style.display = "none";
  cross.style.display = "unset";
  down.style.display = "unset";
  welcome.style.opacity = 0.5;
  document.body.classList.add("stop-scrolling");
});

cross.addEventListener("click", () => {
  menu.style.display = "none";
  ham.style.display = "unset";
  cross.style.display = "none";
  welcome.style.opacity = 1;
  document.body.classList.remove("stop-scrolling");
});

download.addEventListener("click", () => {
  apps2.style.display = "unset";
  up.style.display = "unset";
  down.style.display = "none";
});
