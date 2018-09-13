jQuery(document).ready(function($) {
    $('.faydaliLinkler_carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,


            },
            600:{
                items:3,


            },
            1000:{
                items:7,

            }
        }
    })
});

$(document).ready(function(){
    var x = $('.searchGroup__input').attr('placeholder');

    $('.searchGroup__input').on('click', function() {
        $('.searchGroup__input').attr('placeholder' ,'');
        $('.searchGroup__input').css({
            'border-bottom': '1px solid rgba(255,255,255,1)',
            'width': '150px',
            'transition': '.9s all',
            
        });


    });

    $("html").click(function (event) {
        if (!$(event.target).is(".searchGroup__input")) {
            $('.searchGroup__input').attr('placeholder' ,x);
            $('.searchGroup__input').css({
                'border-bottom': '1px solid rgba(255,255,255,0)',
                'width': '32px',
                'transition': '.5s all',
            });


        } else {



        }
    });

});



function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(40.4093,49.8671),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}