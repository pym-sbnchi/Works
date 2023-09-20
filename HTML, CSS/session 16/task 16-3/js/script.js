var pTag1 = document.getElementById("p1");
var pTag2 = document.getElementById("p2");

function hour() {
  var x = new Date();
  var hours = x.getHours();
  var min = x.getMinutes();
  var sec = x.getSeconds();
  pTag1.innerHTML = hours + ":" + min + ":" + sec;
}
setInterval(hour, 1000);

function h() {
  var y = new Date();
  pTag2.innerHTML = y.toLocaleTimeString();
}
setInterval(h, 1000);
