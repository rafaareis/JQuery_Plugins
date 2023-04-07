$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function () {
        $('nav').slideToggle();
    })

})