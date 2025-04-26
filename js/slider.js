$(document).ready(function(){
    $(".slider").slick({
        arrows: false,
        dots: false,
        fade: true,  
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        easing: "ease",
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000, 
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: false,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        mobileFirst: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
