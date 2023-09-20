var fName = document.querySelector("#fName");
var lName = document.querySelector("#lName");
var age = document.querySelector("#age-input");
var gender = document.querySelector("#gender-input");
var subject = document.querySelector("#subject-input");
var interests = document.querySelector("#interests-input");
var bio = document.querySelector("#bio-input");
var greeting = document.querySelector("#greeting-input");
var submit = document.querySelector("#submit");

function Teacher(fName, lName, age, gender, subject, interests, bio, greeting) {
  (this.fName = fName),
    (this.lName = lName),
    (this.age = age),
    (this.gender = gender),
    (this.subject = subject),
    (this.interests = interests),
    (this.bio = bio),
    (this.greeting = greeting);
}

submit.addEventListener("click", function () {
  var box = document.createElement("section");
  box.classList.add("padding");
  document.body.appendChild(box);
  var teachers = [];
  teachers.push(
    new Teacher(
      fName.value,
      lName.value,
      age.value,
      gender.value,
      subject.value,
      interests.value,
      bio.value,
      greeting.value
    )
  );
  for (t in teachers) {
    box.innerHTML += `
        <main class="main">
        <section class="image">
            <img src="image/download.png" alt="your photo">
        </section>
        <section class="info">
            <div class="title">
                <h1 class="h1">Teacher${[t]}</h1>
            </div>
            <div class="inputs">
                <div class="names">
                    <label id="input-title">Name:</label>
                    <p>${teachers[t].fName}, ${teachers[t].lName}</p>
                </div>
                <div class="age">
                    <label id="input-title">Age:</label>
                    <p>${teachers[t].age}</p>
                </div>
                <div class="gender">
                    <label id="input-title">Gender:</label>
                    <p>${teachers[t].gender}</p>
                </div>
                <div class="subject">
                    <label id="input-title">subject:</label>
                    <p>${teachers[t].subject}</p>
                </div>
                <div class="interests">
                    <label id="input-title">Interests:</label>
                    <p>${teachers[t].interests}</p>
                </div>
                <div class="bio">
                    <label id="input-title">Bio:</label>
                    <p>${teachers[t].bio}</p>
                </div>
                <div class="greeting">
                    <label id="input-title">Greeting:</label>
                    <p>${teachers[t].greeting}</p>
                </div>
            </div>
        </section>
    </main>
    `;
  }

  fName.value = "";
  lName.value = "";
  age.value = "";
  gender.value = "";
  subject.value = "";
  interests.value = "";
  bio.value = "";
  greeting.value = "";
});
