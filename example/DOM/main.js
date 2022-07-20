// lấy Element có Attribute ID là intro gán cho element
const element = document.getElementById("intro");

// in ra text hihi và element trên tab console
console.log('Hihi', element);

//in ra text Hello World! trên html
document.getElementById("demo").innerHTML = "Hello World!";

//lấy Element có Attribute ID là main gán cho x
const x = document.getElementById("main");
console.log('x', x);

//lấy ra một mảng từ x gán cho y 
const y = x.getElementsByTagName("p");
console.log('y', y);

document.getElementById('demo').innerHTML =
    `The first paragraph (index 0) inside "main" is: ${y[0].innerHTML}`

// ----------------------------------------------------------------
// const l = document.querySelector(".intro").innerHTML.split("")
// console.log('l:', l)

// document.getElementById('intro').innerHTML =
//     `The second paragraph (index 1) inside "main" is: ${l}}`
// ----------------------------------------------------------------
    
const z = document.getElementsByClassName("intro");
console.log('z', z);
for (let i = 0; i < z.length; i++) {
    console.log('Hello', z[i]);
}

// const t = document.querySelectorAll("p");
// console.log('t: ', t[2].innerText);

// const m = document.querySelectorAll(".intro p");
// console.log('m: ', m[1].style.backgroundColor = "red");

const n = document.forms["frm1"];
console.log('n', n);
let text = '';
for (let i = 0; i < n.length; i++) {
    text += `${n[i].value} `;
}

console.log('text: ', text);

document.getElementById("test").textContent = "Hello";
document.getElementById("test").innerHTML = "Change Test";

function validateForm() {
    const n = document.forms["frm1"];
    for (let i = 0; i < n.length; i++) {
        if (n[i].value === '') alert('Ban can nhap vao input!');
        return false;
    }
}