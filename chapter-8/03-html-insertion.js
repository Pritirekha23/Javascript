

let a=document.getElementsByTagName('div')[0]
//a.innerHTML=a.innerHTML + '<h1>Hi this is priti</h1>';

let div=document.createElement("div")
div.innerHTML='<h1>Hi this is child</h1>'
a.append(div)

a.prepend(div)
//a.before(div)
//a.after(div)
//a.replaceWith(div)