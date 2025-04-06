// 
// Korben Link
// 2/24/2025
//

console.log('step 1')
const a = document.createElement("h1");
a.setAttribute("class", "highlight");
a.innerText = "Welcome to DOM homework";
console.log(a)
document.body.appendChild(a);

console.log('step 2')
const b = document.createElement("p");
b.innerText = "This is your first DOM homework assignment";
document.body.appendChild(b);

console.log('step 3')
const d = document.createElement("input");
d.setAttribute("id", "myButton");
d.setAttribute("type", "button");
d.setAttribute("value", "Push The Button");
document.body.appendChild(d);

console.log('step 4')
var c = document.createElement("ul");
c.setAttribute("id", "myUL");
document.body.appendChild(c);    

var e = document.createElement("li");
e.innerText = "Batman";
console.log(e)
document.getElementById("myUL").appendChild(e);

var f = document.createElement("li");
f.innerText = "Spiderman";
console.log(f)
document.getElementById("myUL").appendChild(f);

var g = document.createElement("li");
g.innerText = "Kratos";
document.getElementById("myUL").appendChild(g);


let x = 0

document.getElementById("myButton").onclick = function(){
    x += 1;
    var y = document.createElement("li");
    y.innerText = `New List Item ${x}`;
    document.getElementById("myUL").appendChild(y);
}

