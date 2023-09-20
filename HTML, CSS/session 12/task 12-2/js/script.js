let year = document.getElementById("year")
let digits = "" 
for(let n=1300 ; n < 1403 ; n++){
    digits = digits + "<option>" + n + "</option>"
}
year.innerHTML = digits