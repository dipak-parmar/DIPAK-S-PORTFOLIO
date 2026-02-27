$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});



// nav burger btn

$(document).ready(function () {
    $("#nav-icon3").click(function () {
        $('.navbar ul').toggleClass('active');


    });
});


$('.navbar ul li a').click(function(){
    $('#nav-icon3').removeClass('open');
    $('.navbar ul').removeClass('active');
});


$(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();

    if (scrollTop > 300) {
        $("#box").addClass("slideLeft");
        $("#box-1").addClass("slideRight");
        $("#box-3").addClass("slideLeft");
    } else {
        $("#box").removeClass("slideLeft");
        $("#box-1").removeClass("slideRight");
        $("#box-3").removeClass("slideLeft");
    }

});


$(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();
    let width = $(window).width();
    let triggerPoint;

    if (width < 550) {
        triggerPoint = 600;

    } else if (width < 768) {
        triggerPoint = 900;

    } else if (width < 992) {
        triggerPoint = 900;

    } else {
        triggerPoint = 1500;
    }

    $(".about").toggleClass("active", scrollTop > triggerPoint);

});

$(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();
    let width = $(window).width();
    let triggerPoint;

    if (width < 576) {
        triggerPoint = 700;

    } else if (width < 768) {
        triggerPoint = 600;

    } else if (width < 992) {
        triggerPoint = 800;

    } else {
        triggerPoint = 1500;
    }

    $(".web-ef").toggleClass("active", scrollTop > triggerPoint);

});


$(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();
    let width = $(window).width();
    let triggerPoint;

    if (width < 576) {
        triggerPoint = 1000;

    } else if (width < 768) {
        triggerPoint = 1400;

    } else if (width < 992) {
        triggerPoint = 1500;

    } else {
        triggerPoint = 2000;
    }

    $(".ser-ef").toggleClass("active", scrollTop > triggerPoint);

});


$(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();
    let width = $(window).width();
    let triggerPoint;

    if (width < 576) {
        triggerPoint = 2100;

    } else if (width < 768) {
        triggerPoint = 2500;

    } else if (width < 992) {
        triggerPoint = 3000;

    } else {
        triggerPoint = 3700;
    }

    $(".we-ef").toggleClass("active", scrollTop > triggerPoint);

});
$(document).ready(function () {


    $(".contact-form").submit(function (e) {

        let name = $("#name").val();

        if (name == "") {
            alert("Name is required")
            e.preventDefault();

        }

        else {
            alert(name + " name succsessful")
        }

    });

    $(".contact-form").submit(function (e) {

        let email = $("#email").val();

        if (email == "") {
            alert("email is required")
            e.preventDefault();

        }

        else {
            alert(email + " email succsessful")
        }

    });


});



$(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();
    let width = $(window).width();

    let trigger1;
    let trigger2;

    if (width < 576) {

        trigger1 = 4100;
        trigger2 = 3500;

    } else if (width < 768) {

        trigger1 = 4700;
        trigger2 = 4350;

    } else if (width < 992) {

        trigger1 = 5200;
        trigger2 = 4900;

    } else {

        trigger1 = 7500;
        trigger2 = 7200;

    }
    $(".con-img").toggleClass("active", scrollTop > trigger1);
    $(".con-img1").toggleClass("active", scrollTop > trigger2);

});

$(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();
    let width = $(window).width();

    let trigger1, trigger2;

    if (width < 576) {

        trigger1 = 4300;
        trigger2 = 4300;

    } else if (width < 768) {

        trigger1 = 5000;
        trigger2 = 5000;

    } else if (width < 992) {

        trigger1 = 5500;
        trigger2 = 5500;

    } else {

        trigger1 = 7800;
        trigger2 = 7800;

    }

    $(".foot-img-left-top").toggleClass("active", scrollTop > trigger1);
    $(".foot-img-right-top").toggleClass("active", scrollTop > trigger2);

});
$('.navbar a').click(function(e){

    e.preventDefault();

    var target = $(this).attr('href');

    if($(target).length){

        $('html, body').animate({
            scrollTop: $(target).offset().top 
        }, 800);

    }

    $('#nav-icon3').removeClass('open');
    $('.navbar ul').removeClass('active');

});