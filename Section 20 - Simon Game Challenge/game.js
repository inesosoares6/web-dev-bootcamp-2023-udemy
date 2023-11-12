var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text(`Level ${level}`);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function handleClick(id) {
    var userChosenColor = id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
}

function playSound(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass('pressed');
    setTimeout(() => {
        $(`#${currentColor}`).removeClass('pressed');
    }, 100);
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout( () => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');
        $('body').addClass('game-over');
        $('#level-title').text('Game Over, Press Any Key to Restart');

        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

$('.btn').click(function() {
    handleClick($(this).attr('id'));
});

$(document).keydown(function() {
    if(!started) {
        $('#level-title').text('Level 0');
        nextSequence();
        started = true;
    }
})