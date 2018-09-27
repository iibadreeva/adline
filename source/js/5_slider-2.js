$('.js-slideshow,.js-slideshow-popup').slide({
    cdTime : 5000,
    controllerLeftButton : "image/left.png",
    controllerRightButton : "image/right.png"
});


var  item = '.overlay'
    ,$item = $(item)
    ,popup = '.js-popup'
    ,$popup = $(popup);

$('body').on('click', popup, function(e) {
    var modal = '.popup'
        ,$modal = $(modal)
        ,height =  $modal.height()
        ,width =  $modal.width()
        ,top =  ($(window).scrollTop() + 50)
        ,footTop =  $('.footer').offset().top
        ,tops = footTop-top;

    if( tops < 1000 ) top = top-(tops/2) - 500;

    e.preventDefault();

    $modal.show();
    $item.show();
    $modal.css({'top':top});
    var left = $modal.offset().left + (width);
    var close = $('.conteiner').append('<div class="popup__close"><div class="js-popup-inner"><span></span><span></span></div></div>')

    $('.popup__close').css({
        'top':top,
        'left': left,
        'height':height
    });
    $(".js-popup-inner").stick_in_parent({
        offset_top: 73
    });

    var id = $('.popup');

    if ($(id).length != 0) {
        $('html, body').animate({ scrollTop: $(id).offset().top }, 500);
    }
});

$('body').on('click', '.overlay, .popup__close', function() {
    var $modal = $('.popup');
    $modal.hide();
    $item.hide();
    $(this).hide();
    $('.popup__close').remove();
});


$('body').on('click', '#controller-right, #controller-left', function() {
    $('#controller-right, #controller-left').removeClass('active');
    $(this).addClass('active');
    setTimeout(function() {  $('#controller-right, #controller-left').removeClass('active') }, 1000)
});