//animate content
new WOW().init();


$(".js-slick").stick_in_parent();


$('.js-sliders, .js-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled:true}
});

$('.simple-slider__zoom, .simple-slider__title').click(function () {
    $('.simple-slider__bg').click();
});
$('.js-share').click(function () {
   $(this).toggleClass('active')
});