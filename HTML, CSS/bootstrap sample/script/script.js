var head = document.querySelectorAll(".accordion-head");
var content = document.querySelectorAll(".content");

content.forEach((cont) => {
  head.addEventListener("click", function () {
    remove();
    cont.classList.add("show");
  });
});

function remove() {
  content.forEach((cont) => {
    cont.classList.remove("show");
  });
}
