
// const btn = document.getElementById('myBtn');
// const div = document.getElementId('div');


// div.addEventListener('click', alMessage, true);

// btn.remouveEventListener('click', alMessage, true);
// function alMessage() {
//     alert('Hello!');
// }
//     // btn.onclick = function () {
//     //     alert('Hello!');
//     // }
//     // let btn = document.getElementById('myBtn');
//     // btn.addEventListener('click', alMessage, false);
//     // function alMessage() {
//     //     alert('Hello!');
//     //     const div = document.getElementId('div');


// window.addEventListener('scroll', () => {
//     console.log('scroll');
// });

// window.addEventListener('resize', () => {
//     console.log('resize');
// });

let div = document.getElementById('div');
div.addEventListener('mousedown', function (event) {
    console.log('click', this.textContent);
});

div.addEventListener('mouseenter', () => {
    console.log('enter');
});

div.addEventListener('mousemove', () => {
    console.log('move');
});

let a = document.getElementById('a');
a.addEventListener("click", function (event) {
    event.preventDefault();
});

let input = document.getElementById('input');

input.addEventListener("keydown", function (event) {
    console.log(event.key);
});

input.addEventListener("keyup", function (event) {
    console.log("key up", event);
});


// 1
let ol = document.getElementById('ol');
let liElement = document.getElementsByClassName('li');

for (let i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener("mouseenter", function () {
        ol.style.display = "none";
    })
}


//2
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.addEventListener("click", function () {
    let span = document.createElement("span");
    span.innerText = 'Информация1'
    console.log(span)
})