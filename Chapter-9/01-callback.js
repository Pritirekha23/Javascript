
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

// function loadScript(src,callback)
// {
//     var script=document.createElement("script");
//     script.src=src;

//     script.onload=function()
//     {
//         console.log("Loaded script withSRC:" +src)
//         callback(src);
//     }

//     document.body.appendChild(script);
// }

// function hello(src)
// {
//     alert("hello callback" + src)
// }
// function gm(src)
// {
//     alert("Good morning" + src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",gm);

function loadScript(src,callback)
{
    var script=document.createElement("script");
    script.src=src;

    script.onload=function()
    {
        console.log("Loaded script withSRC:" +src)
        callback(null,src);
    }

    script.onerror=funtion()
    {
        console.log("Error loading sript with SRC:" + src)
        callback(new Error("Src got some Error"))
    }
    document.body.appendChild(script);
}

function hello(error,src)
{
    if(error)
    {
        console.log(error)
        return
    }
    alert("hello callback" + src)
}
function gm(error,src)
{
    alert("Good morning" + src)
}

// if there is any error in the src then we can handle it

loadScript("https://cdn.jsdegglivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello);