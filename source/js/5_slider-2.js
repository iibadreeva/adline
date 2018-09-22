//mini slider
const slider = document.querySelector('.js-slider');
function bounceOut(time, begin, change, duration) {}
const  left = document.querySelectorAll('.js-slider-link')[1],
    right = document.querySelectorAll('.js-slider-link')[0];
let isNext = true;

try{
    const imgSlider = simpleslider.getSlider({
        container: slider,
        prop: 'left',
        init: -100,
        show: 0,
        delay: 3.2,
        duration: 1,
        end: 100,
        unit: '%',
        ease: bounceOut
    });

    left.addEventListener('click', function (e) {
        if (!isNext) {
            imgSlider.reverse();
            isNext = true;
        }
        imgSlider.next();
        e.preventDefault();
    });
    right.addEventListener('click', function (e) {
        if (isNext) {
            imgSlider.reverse();
            isNext = false;
        }
        imgSlider.next();
        e.preventDefault();
    });
}catch (e){}