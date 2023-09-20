  var main = document.querySelector(".main");
var image = document.getElementById("image");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var info = document.getElementById("info");

function information(image, firstName, lastName) {
  this.image = image;
  this.fname = firstName;
  this.lname = lastName;
}

var array = [];
var num = 0;

array.push(new information("image/1.jpeg", "Payam", "Saboonchi"));
array.push(new information("image/2.jpeg", "Amir", "Namvar"));
array.push(new information("image/3.jpeg", "Mehran", "Zahedi"));
array.push(new information("image/4.jpeg", "Parisa", "Saheb alam"));

image.src = array[num].image
firstName.innerHTML = array[num].fname
lastName.innerHTML = array[num].lname

right.addEventListener("click", function () {
  num++;

  image.src = array[num].image;
  firstName.innerHTML = array[num].fname;
  lastName.innerHTML = array[num].lname;

  if (num == 3) num = -1;
});

left.addEventListener("click", function () {
  num--;

  image.src = array[num].image;
  firstName.innerHTML = array[num].fname;
  lastName.innerHTML = array[num].lname;

  if (num == 0) {
    num = 4;
  }
});

info.addEventListener("click", () => {
  main.innerHTML = "";

  for (i of array) {
    main.innerHTML += `
        <div class="box">
            <div class="div">
                <img src="${i.image}"" id="image">
                <p class="first-name">${i.fname}</p>
                <p class="last-name">${i.lname}</p>
            </div>
        </div>
        `;
  }

  main.style.display = "flex";
  main.style.flexDirection = "row";
});
