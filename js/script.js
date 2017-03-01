$(function() {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    var scroll_start = 0;
    var startchange = $('nav');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > $('#hero').height()-1) {
            $('nav').css('background-color', 'rgba(121,67,27,0.9)');
        }
        else {
            $('nav').css('background-color', 'transparent');
        }
    });
});
