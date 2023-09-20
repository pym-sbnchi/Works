var plus = document.getElementById("plus")
var num = document.getElementById("num")
var minus = document.getElementById("minus")

plus.addEventListener("click", () => {
    num.innerHTML++
})
minus.addEventListener("click", () => {
    if (num.innerHTML > 0)
        num.innerHTML--
})