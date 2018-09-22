//mini slider
const slider = document.querySelector('.js-slider');
// const slider = $('.js-slider');
const  left = document.querySelectorAll('.js-slider-link')[1],
    right = document.querySelectorAll('.js-slider-link')[0];
let isNext = true;

try{
    // const imgSlider = simpleslider.getSlider({
    //     container: slider,
    //     prop: 'left',
    //     init: -100,
    //     show: 0,
    //     delay: 3.2,
    //     duration: 1,
    //     end: 100,
    //     unit: '%',
    //     ease: bounceOut
    // });
    const imgSlider = simpleslider.getSlider({
        container: slider,
        prop: 'opacity',
        init: '',
        show: 1,
        // delay: 3.2,
        duration: 1,
        end: 0,
        unit: '',
    });

    var rightS = document.getElementsByClassName('js-slider-link-right');
    var leftS = document.getElementsByClassName('js-slider-link-left');

    for(var i =0; 0 <= rightS.length; i++){
        rightS[i].addEventListener('click', function (e) {
            console.log('right');
            if (isNext) {
                imgSlider.reverse();
                isNext = false;
            }
            imgSlider.next();
            e.preventDefault();
            imgSlider.pause();
        });
        leftS[i].addEventListener('click', function (e) {
            console.log('left');
            if (!isNext) {
                imgSlider.reverse();
                isNext = true;
            }
            imgSlider.next();
            e.preventDefault();
            imgSlider.pause();
        });
    }


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
    imgSlider.pause();
}catch (e){}