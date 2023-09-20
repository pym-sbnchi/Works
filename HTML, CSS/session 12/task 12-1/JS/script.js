let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let jam = document.getElementById("jam")
let tafrigh = document.getElementById("tafrigh")
let zarb = document.getElementById("zarb")
let taghsim = document.getElementById("taghsim")


jam.addEventListener("click" , function(){
    let natije = num1.value + num2.value
    document.getElementById("h2").innerHTML = natije
})
tafrigh.addEventListener("click" , function(){
    let natije = num1.value - num2.value
    document.getElementById("h2").innerHTML = natije
})
zarb.addEventListener("click" , function(){
    let natije = num1.value * num2.value
    document.getElementById("h2").innerHTML = natije
})
taghsim.addEventListener("click" , function(){
    let natije = num1.value / num2.value
    document.getElementById("h2").innerHTML = natije
})
