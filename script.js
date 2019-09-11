'use strict';


$(document).ready(function(){

    function slowScroll(id) { 
        let offset = 0;
        $('html, body').animate({ 
            scrollTop: $(id).offset().top - offset 
        }, 800);
        return false; 
    } 


    $('.about-us-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,    
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }},
            {
            breakpoint: 750,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }}
            
        ]

    });

    $('.clients-logos-bar').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
            }
        ]
        });


    $('.clients-description').slick({
        dots: true,
        arrows: false,
    });    

    $('a.start').hover(function(){
        $(this).removeClass('fadeInUpBig');
        $(this).addClass('tada');
        });
    
    $('a.start').mouseleave(function(){
        $(this).removeClass('tada');
        });

    $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
        });


    let windowHeight = $(window).height();
    
    $(document).on('scroll', function() {
        $('.service').each(function() {
            let self = $(this),
            height = self.offset().top + self.height();
            if ($(document).scrollTop() + windowHeight >= height) {
                $('.service').css('visibility', 'visible');
                $('a .left').addClass('animated fadeInRight');
                $('a .center').addClass('animated fadeInUp');
                $('a .right').addClass('animated fadeInLeft')
            }
        });
    });

});