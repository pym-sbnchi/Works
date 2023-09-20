var plus = document.getElementById("plus");
var plus1 = document.getElementById("plus1");
var plus2 = document.getElementById("plus2");
var plus3 = document.getElementById("plus3");
var minus = document.getElementById("minus");
var minus1 = document.getElementById("minus1");
var minus2 = document.getElementById("minus2");
var minus3 = document.getElementById("minus3");
var answer = document.getElementById("answer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

plus.addEventListener("click", function () {
  plus.style.display = "none";
  minus.style.display = "unset";
  answer.style.display = "unset";
});
plus1.addEventListener("click", function () {
  plus1.style.display = "none";
  minus1.style.display = "unset";
  answer1.style.display = "unset";
});
plus2.addEventListener("click", function () {
  plus2.style.display = "none";
  minus2.style.display = "unset";
  answer2.style.display = "unset";
});
plus3.addEventListener("click", function () {
  plus3.style.display = "none";
  minus3.style.display = "unset";
  answer3.style.display = "unset";
});
minus.addEventListener("click", function () {
  plus.style.display = "unset";
  minus.style.display = "none";
  answer.style.display = "none";
});
minus1.addEventListener("click", function () {
  plus1.style.display = "unset";
  minus1.style.display = "none";
  answer1.style.display = "none";
});
minus2.addEventListener("click", function () {
  plus2.style.display = "unset";
  minus2.style.display = "none";
  answer2.style.display = "none";
});
minus3.addEventListener("click", function () {
  plus3.style.display = "unset";
  minus3.style.display = "none";
  answer3.style.display = "none";
});
















//مشکل من تو خط 76 چیه؟
// plus.addEventListener("click", function open() {
//   plus.style.display = "none";
//   minus.style.display = "unset";
//   answer.style.display = "unset";
// });
// qustion.removeEventListener("click", open);


// این رو هم نتونستم داخل خود لووپ رو بنویسم
// و این که نمیدونستم تو خط 83 باید تعداد سکشن های انسر رو براش لحاظ کنم یا سکشن دیگه ای رو
// var qustion = document.getElementById("qustion");
// var FAQ = document.getElementById("FAQ");
// for (let n = 0; n < answer.length; n++) {

// }
