// alert("test"); // Test javascriptor

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("I got clicked!"); // test
        // what to do when it clicked
        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play();
        
        // console.log(this.innerHTML);
        // this.style.color = "white";

        // if(this.innerHTML === 'w'){
        //     var audio = new Audio('./sounds/tom-1.mp3');
        //     audio.play();
        // }
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting keyboard press

document.addEventListener("keydown", function (event) {
    // alert("key was pressed");

    // console.log(event.key);

        makeSound(event.key); 
        buttonAnimation(event.key);
});
// when it clicked call handleClick

function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('/static/projects/DrumKitGame/sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case 'a':
            var tom2 = new Audio('/static/projects/DrumKitGame/sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio('/static/projects/DrumKitGame/sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case 'd':
            var tom4 = new Audio('/static/projects/DrumKitGame/sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            var snare = new Audio('/static/projects/DrumKitGame/sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            var crash = new Audio('/static/projects/DrumKitGame/sounds/crash.mp3');
            crash.play();
            break;

        case 'l':
            var kick = new Audio('/static/projects/DrumKitGame/sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." +  currentKey);

    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
        
    }, 100);
}