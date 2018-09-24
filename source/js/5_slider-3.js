//mini slider
const sliderS = document.querySelector('.js-slider');
let isNextS = true;

try{
    var imgSliderS = simpleslider.getSlider({
        container: sliderS,
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
            if (isNextS) {
                imgSliderS.reverse();
                isNextS = false;
            }
            imgSliderS.next();
            e.preventDefault();
            // imgSliderS.pause();
        });
        leftS[i].addEventListener('click', function (e) {
            console.log('left');
            if (!isNextS) {
                imgSliderS.reverse();
                isNextS = true;
            }
            imgSliderS.next();
            e.preventDefault();
            // imgSliderS.pause();
        });
    }



    // imgSliderS.pause();
}catch (e){}