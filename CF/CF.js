const colorArray = ["green", "blue", "#f5f5f5", "rgba(133,122,200)"]
let button = document.querySelector('button');
const color = document.querySelector(".color");

button.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * colorArray.length)
    color.textContent = colorArray[randomNumber]
    document.body.style.background = colorArray[randomNumber]
})