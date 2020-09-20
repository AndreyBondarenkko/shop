$(function () {

    //banner slider
    $(".banner-slider").slick({
        dots: true,
        prevArrow: '<button class="slick-btn btn__prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="slick-btn btn__next"><img src="images/arrow-right.svg" alt=""></button>',

    });

    //all tabs
    $(".tabs-btn").on("clikc", function (e) {
        e.preventDefault();

        $(".tabs-btn").removeClass(".tabs-btn__active");
        $(".tabs__content-inner").removeClass(".tabs-active");

        $(this).addClass("tabs-btn__active");
        $($(this).attr("href")).addClass("tabs-active");

    })

    //card-heard
    $(".card-content__favorite").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("favorite-active");
    })

    //card-slider
    
    $(".card-slider").slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-btn btn__prev"><img src="images/arrow-b-left.png" alt=""></button>',
        nextArrow: '<button class="slick-btn btn__next"><img src="images/arrow-b-right.png" alt=""></button>',

    });
});