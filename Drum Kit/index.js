let crashSfx = new Audio("sounds/crash.mp3")
let kickSfx = new Audio("sounds/kick-bass.mp3")
let snareSfx = new Audio("sounds/snare.mp3")
let tom1Sfx = new Audio("sounds/tom-1.mp3")
let tom2Sfx = new Audio("sounds/tom-2.mp3")
let tom3Sfx = new Audio("sounds/tom-3.mp3")
let tom4Sfx = new Audio("sounds/tom-4.mp3")


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        btnAnim(this.innerHTML);
    })
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    btnAnim(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            crashSfx.play();
            break;
        case "a":
            kickSfx.play();
            break;
        case "s":
            snareSfx.play();
            break;
        case "d":
            tom1Sfx.play();
            break;
        case "j":
            tom2Sfx.play();
            break;
        case "k":
            tom3Sfx.play();
            break;
        case "l":
            kickSfx.play();
            break;

    }
}

function btnAnim(key) {
    let pressedKey = document.querySelector("." + key);
    pressedKey.classList.add("pressed");
    setTimeout(() => {
        pressedKey.classList.remove("pressed");
    }, 100);
}