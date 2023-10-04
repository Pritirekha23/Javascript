
//synchronous programming
// let a=prompt("What is your name:")
// let b=prompt("What is your age:")
// let c=prompt("What is your branch:")
// document.write(a + " is " + b +" years old and branch is " + c)

//Asynchronous programming

// document.write('start')
// setTimeout(function()
// {
//     document.write('Hey i am ok');
// },3000)
// document.write('End')


//CALL BACK

function loadScript(src,callback)
{
    var script=document.createElement("script");
    script.src=src;

    script.onload=function()
    {
        console.log("Loaded script withSRC:" +src)
        callback();
    }

    document.body.appendChild(script);
}

function hello()
{
    alert("hello callback")
}
function gm()
{
    alert("Good morning")
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",gm);