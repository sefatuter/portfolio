// alert("working");

var buttonColours = ["red" , "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var start = false;
var level = 0;

$(document).keypress(function() {
    if (!start) {
        $("#level-title").text("Level "+ level);
        nextSequence();
        start = true;

    }
});


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    // console.log(userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level "+ level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);

    // console.log(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("/static/projects/ColorGame/sounds/"+ name +".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
        console.log("Fail");
        playSound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");   
          }, 500);
          $("h1").text("Game Over, Press Any Key to Restart");
          startOver();
    }
    // console.log(currentLevel);
}

function startOver(){
    level = 0;
    gamePattern = [];
    start = false;
}


// nextSequence();
// playSound(nextSequence)

