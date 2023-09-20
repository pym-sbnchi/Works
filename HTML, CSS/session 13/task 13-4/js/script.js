var popup = document.getElementById("popup")
var i = document.getElementById("i")
var main = document.getElementById("main")

i.addEventListener("click", () => {
    main.style.display = "none"
})

let out = setInterval(() => {
    main.style.display = "unset"
}, 5000)

setInterval(() => {
    main.style.display = "none"
}, 10000)

setTimeout(() => {
    clearInterval(out)
}, 30000)

i.addEventListener("click", ()=>{
    clearInterval(out)
})