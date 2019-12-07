var field = document.querySelector('#field');
var ball = document.querySelector('#ball');

field.onclick = function(event) {

    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - ball.clientHeight,
        left: event.clientX - fieldCoords.left - ball.clientWidth,
    };
    var lol = window.innerHeight - ball.clientHeight / 2;
    var lolo = window.innerWidth - ball.clientWidth / 2;
    console.log(lol, lolo);

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }

    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }

    if (lol < lol - ball.clientHeight) {
        ballCoords.top = ballCoords.top + 10;
    }

    if (lolo < lolo - ball.clientWidth) {
        ballCoords.left = ballCoords.left - ball.clientWidth / 2;
    }
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}