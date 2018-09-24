//animate content
new WOW().init();


$(".js-slick").stick_in_parent();

var  item = '.overlay'
    ,$item = $(item)
    ,popup = '.js-popup'
    ,$popup = $(popup);

$('body').on('click', popup, function(e) {
    var $modal = $('.popup')
        ,top =  ($(window).scrollTop() + 50)
        ,footTop =  $('.footer').offset().top
        ,tops = footTop-top;

    if( tops < 1000 ) top = top-(tops/2) - 500;

    e.preventDefault();

    $modal.show();
    $item.show();
    $modal.css({'top':top});

    // var id = $(this).data('id');
    var id = $('.popup');

    if ($(id).length != 0) {
        $('html, body').animate({ scrollTop: $(id).offset().top }, 500);
    }
});

$('body').on('click', item, function() {
    var $modal = $('.popup');
    $modal.hide();
    $item.hide();
    $(this).hide();
});