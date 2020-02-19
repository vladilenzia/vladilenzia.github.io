function endlessCarousel() {
    let Slider = {
        btnCondition: true,
        counter: -(document.querySelector('.slider_item').clientWidth),
        consts() {
            return {
                offset: document.querySelector('.slider_item'),
                leftArrow: document.querySelector('.arrow-left'),
                rightArrow: document.querySelector('.arrow-right'),
                imgs: document.querySelectorAll('.slider_item img'),
                imgSize: document.querySelector('.slider img').clientWidth,
                slider: document.querySelector('.slider'),
                arrowLeft: document.querySelector('.arrow-left'),
                arrowRight: document.querySelector('.arrow-right'),
            }
        },

        imgResize() {
            this.consts().imgs.forEach(item => {
                item.style.height = this.consts().imgSize + 'px';
            })
        },

        arrowsPosition() {
            this.consts().leftArrow.style.top = (this.consts().offset.clientHeight - this.consts().arrowLeft.clientHeight) / 2 + 'px';
            this.consts().rightArrow.style.top = (this.consts().offset.clientHeight - this.consts().arrowRight.clientHeight) / 2 + 'px';
        },

        moveLeft() {
            this.consts().slider.style.transition = 1 + 's';
            this.counter += this.consts().offset.clientWidth;
            this.consts().slider.style.left = this.counter + 'px';
            this.consts().slider.style.transition = 0 + 's';
        },

        moveRight() {
            this.consts().slider.style.transition = 1 + 's';
            this.counter -= this.consts().offset.clientWidth;
            this.consts().slider.style.left = this.counter + 'px';
            this.consts().slider.style.transition = 0 + 's';
        },

        replaceLeft() {
            let items = document.querySelectorAll('.slider_item');
            this.counter = -(this.consts().offset.clientWidth);
            this.consts().slider.style.left = -(this.consts().offset.clientWidth) + 'px';
            let clone = items[0].cloneNode(true);
            this.consts().slider.insertAdjacentElement('beforeend', clone);
            items[0].remove();
        },

        replaceRight() {
            let items = document.querySelectorAll('.slider_item');
            this.counter = -(this.consts().offset.clientWidth);
            this.consts().slider.style.left = -(this.consts().offset.clientWidth) + 'px';
            let clone = items[items.length - 1].cloneNode(true);
            this.consts().slider.insertAdjacentElement('afterbegin', clone);
            items[items.length - 1].remove();
        },

        defaultOffcet() {
            this.consts().slider.style.left = -(document.querySelector('.slider_item').clientWidth) + 'px';
        }
    }

    window.addEventListener('resize', () => {
        Slider.imgResize();
        Slider.arrowsPosition();
        Slider.defaultOffcet();
    })

    Slider.consts().arrowRight.addEventListener('click', () => {
        if (Slider.btnCondition == true) {
            Slider.btnCondition = false;
            Slider.moveRight();
            setTimeout(() => {
                Slider.replaceLeft();
            }, 1000);
            setTimeout(() => {
                Slider.btnCondition = true;
            }, 1000);
        }
    })

    Slider.consts().arrowLeft.addEventListener('click', () => {
        if (Slider.btnCondition == true) {
            Slider.btnCondition = false;
            Slider.moveLeft();
            setTimeout(() => {
                Slider.replaceRight();
            }, 1000);
            setTimeout(() => {
                Slider.btnCondition = true;
            }, 1000);
        }
    })

    Slider.imgResize();
    Slider.arrowsPosition();
    Slider.defaultOffcet();
}
endlessCarousel();

function sidebar() {
    const imgs = document.querySelectorAll('.sidebar img');
    imgs.forEach(item => {
        item.style.height = imgs[0].clientWidth + 'px';
    })
}
window.addEventListener('resize', () => {
    sidebar();
})
sidebar();