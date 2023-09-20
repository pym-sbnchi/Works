var area = document.getElementById("area")
var use = document.getElementById("use")
var all = document.getElementById("all")
var error = document.getElementById("error-text")

area.addEventListener("input", () => {
    use.innerHTML = area.value.length;
    if (area.value.length == 50)
        error.style.display = "unset"
    else {
        error.style.display = "none"
    }
})