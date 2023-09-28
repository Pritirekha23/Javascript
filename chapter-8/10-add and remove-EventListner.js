let x = function (e) {
    alert("Hello Preety!")
}
let y = function (e) {
    alert("Hello Kreety!")
}

btn.addEventListener('click', x)

btn.addEventListener('click', y)

let a = prompt("what is your favourite number::")
if (a == "2") {
    btn.removeEventlistener('click', x)
}