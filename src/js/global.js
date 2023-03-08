// timer function
function Timer(duration, display) 
{
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt((timer /3600)%18, 10)
        minutes = parseInt((timer / 60)%60, 10)
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.html("<span>" + hours + "</span> : <span>" + minutes + "</span> : <span>" + seconds + "</span>");

        --timer;
    }, 1000);
}

//services slider function
$servicesSlider = false;
function serviceSlider(){    
    if($(window).width() < 1400){
        if(!$servicesSlider){
            $(".js-services").slick({
                dots: true,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                centerMode: false,
                appendDots: $('.s-services__dots'),
                responsive: [
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,                        
                      }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                        }
                    }
                  ]
            });
            $servicesSlider = true;
        }
    } else if($(window).width() >= 1400){
        if($servicesSlider){
            $('.js-services').slick('unslick');
            $servicesSlider = false;
        }
    }
};

$(document).ready(function () {

    //scroll animation
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    // timer in hero section  
    jQuery(function ($) 
    {
        var twentyFourHours = 18 * 60 * 60;
        var display = $('#timer');
        Timer(twentyFourHours, display);
    });
  
    // services slider
    serviceSlider();

    // hero buttons animation on hover
    $('.js-hero-btn').mouseenter(function() {
        if (!$(this).hasClass('active')) {
            $('.js-hero-btn.active').removeClass('active');
            $(this).addClass('active');
        }
    });
});

$(window).on('resize', function(){
    // services slider
    serviceSlider();
});