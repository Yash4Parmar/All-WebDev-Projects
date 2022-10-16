const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.querySelector('button');
const color = document.querySelector(".color");
button.addEventListener('click', function () {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hexArray.length)
        hex += hexArray[randomNumber];
    }
    color.textContent = hex
    document.body.style.background = hex
})