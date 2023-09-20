var main = document.getElementById("main")
var hover = document.getElementById("hov")

main.addEventListener("mouseover", () => {
    main.style.display = "none"
    hover.style.display = "unset"
})
main.addEventListener("mouseout",()=>{
    main.style.display = "unset"
    hover.style.display = "none"

})