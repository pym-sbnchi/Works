var main = document.getElementById("main");
var input = document.createElement("input");
var output = document.createElement("output");

main.appendChild(output);
main.appendChild(input);

document.body.style.backgroundColor = "#eaeaea";

main.style.display = "flex";
main.style.flexDirection = "column";
main.style.marginTop = "150px";
main.style.alignItems = "center";
main.style.gap = "25px";

output.style.display = "flex";
output.style.flexDirection = "row";
output.style.alignItems = "center";
output.style.backgroundColor = "#fff";
output.style.border = "1px solid black";
output.style.borderRadius = "8px";
output.style.width = "55%";
output.style.height = "40px";
output.style.padding = "0 5px";
output.style.color = "white";

input.style.backgroundColor = "#fff";
input.style.borderRadius = "8px";
input.style.border = "1px solid black";
input.style.width = "50%";
input.style.height = "40px";
input.style.outline = "none";
input.style.padding = "0 15px";

input.addEventListener("blur", function write() {
  for (n = 0; n < 1; n++) {
    var ptag = document.createElement("p");
    output.appendChild(ptag);

    ptag.style.color = "white";
    ptag.style.border = "none";
    ptag.style.borderRadius = "8px";
    ptag.style.width = "auto";
    ptag.style.height = "28px";
    ptag.style.padding = "0 5px";
    ptag.style.margin = "0 2px";
    ptag.style.textAlign = "center";
    ptag.style.backgroundColor = "#1BBF9A";
    ptag.style.fontFamily = "Arial";
    ptag.style.fontSize = "20px";

    var text = input.value;
    ptag.innerHTML = text;
  }
});