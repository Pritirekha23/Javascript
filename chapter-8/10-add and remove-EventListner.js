let x = function (e) {
    
    //console.log(e.target)
    // In the place of e we can write anything (it is basically a eventpointer)
    //console.log(e.type,e.clientX,e.clientY) -> It will give the information that where the mouse is moving.

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