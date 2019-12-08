const body = document.querySelector('body');


function fun1() {
    let birdAppend = body.innerHTML = `<div class="ufo">
                                        <div class="wing left">
                                            <img src="img/wing.png" alt="wing">
                                        </div>
                                        <div class="wing right">
                                            <img src="img/wing2.png" alt="wing">
                                        </div>
                                    </div>`;
    let bird = document.querySelector('.ufo');
    let x = Math.random() * body.clientWidth - bird.clientWidth;
    let y = Math.random() * body.clientHeight - bird.clientHeight;
    bird.style.top = y + 'px';
    bird.style.left = x + 'px';
    bird.addEventListener('click', () => {
        bird = bird.remove();
    })
    setTimeout(() => {
        return fun1();
    }, 1000);
}


fun1();