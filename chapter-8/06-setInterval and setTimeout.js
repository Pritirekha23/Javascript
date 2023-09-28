document.write("Hello Priti!")

// setTimeout

// setTimeout(function()
// {
//     alert("Hello this is inside setTimeout function")
// }, 5000)



// let a=setTimeout(function()
// {
//     let b=prompt("Do u want to run setTimeout")
//     if("n"==b)
//     {
//        clearTimeout(a) 
//     }
//     alert("Hello this is inside setTimeout function")
// }, 5000)

// console.log(a)

// const sum=(a,b)=>
// {
//  console.log("Yes I am running"   + (a+b))
//  a+b
// }
// setTimeout(sum,1000,2,2)



// setInterval  -> run again and again the function after the giveen time.

setInterval(function()
{
    console.log("Hey i am setInterval")
},3000)
clearInterval(2000)