var audio = {
    'w': new Audio('sounds/tom-1.mp3'),
    'a': new Audio('sounds/tom-2.mp3'),
    's': new Audio('sounds/tom-3.mp3'),
    'd': new Audio('sounds/tom-4.mp3'),
    'j': new Audio('sounds/crash.mp3'),
    'k': new Audio('sounds/kick-bass.mp3'),
    'l': new Audio('sounds/snare.mp3'),
}

for(var item of document.getElementsByClassName('drum')) {
    item.addEventListener('click', handleClick);
}
document.addEventListener('keydown', handleClick)

function handleClick(event) {
    if(event.type === 'click') {
        audio[this.innerHTML].play();
        buttonAnimation(this.innerHTML);
    } else if(event.type === 'keydown' && Object.keys(audio).includes(event.key)) {
        audio[event.key].play();
        buttonAnimation(event.key);
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector(`.${key}`)
    activeButton.classList.add('pressed');

    setTimeout(() => activeButton.classList.remove('pressed'), 100);
}