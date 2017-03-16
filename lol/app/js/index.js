$(function () {
    //tab 
    $("#tabs1 a").mousemove(function (e) {
        $(this).tab('show');
    });
    $("#tabs2 a").mousemove(function (e) {
        $(this).tab('show');
    });
    $("#tabs3 a").mousemove(function (e) {
        $(this).tab('show');
    });
    $("#tabs4 a").mousemove(function (e) {
        $(this).tab('show');
    });
    $("#tabs5 a").mousemove(function (e) {
        $(this).tab('show');
    });

    $("#tabs6 a").mousemove(function (e) {
        $(this).tab('show');
    });
    $("#tabs7 a").mousemove(function (e) {
        $(this).tab('show');
    });
    $("#tabs8 a").mousemove(function (e) {
        $(this).tab('show');
    });
    $("#tabs9 a").mousemove(function (e) {
        $(this).tab('show');
    });

    //carousel
    $('#myCarousel').carousel({
        interval: 3500
    });
    $(".body3_3 .point1").mousemove(function (e) {
        $("#myCarousel").carousel(0);
    });
    $(".body3_3 .point2").mousemove(function (e) {
        $("#myCarousel").carousel(1);
    });
    $(".body3_3 .point3").mousemove(function (e) {
        $("#myCarousel").carousel(2);
    });

    $('#myCarousel2').carousel({
        interval: 5000
    });
    $(".body4 .point1").mousemove(function (e) {
        $("#myCarousel2").carousel(0);
    });
    $(".body4 .point2").mousemove(function (e) {
        $("#myCarousel2").carousel(1);
    });

    //animation
    $('.body1 #animate1').mouseenter(function (e) {

        $('.body1 #animate1 .buttonLoge').animate({
            left: '20px'
        }, 1)
            .animate({
                left: '30px'
            }, 300);
        $('.body1 #animate1 .text1').animate({
            top: '70px'
        }, 1).animate({
            top: '85px'
        }, 300);

        $('.body1 #animate1 .text2').animate({
            left: '60px'
        }, 1).animate({
            left: '70px'
        }, 300);
    });

    $('.body1 #animate2').mouseenter(function (e) {

        $('.body1 #animate2 .buttonLoge').animate({
            left: '205px'
        }, 1)
            .animate({
                left: '220px'
            }, 300);
        $('.body1 #animate2 .text1').animate({
            top: '70px'
        }, 1).animate({
            top: '85px'
        }, 300);

        $('.body1 #animate2 .text2').animate({
            left: '250px'
        }, 1).animate({
            left: '260px'
        }, 300);
    });

    $('.body1 #animate3').mouseenter(function (e) {
        $('.body1 #animate3 .buttonLoge').animate({
            left: '395px'
        }, 1)
            .animate({
                left: '410px'
            }, 300);
        $('.body1 #animate3 .text1').animate({
            top: '70px'
        }, 1).animate({
            top: '85px'
        }, 300);

        $('.body1 #animate3 .text2').animate({
            left: '445px'
        }, 1).animate({
            left: '455px'
        }, 300);
    });

    $('.body1 #animate4').mouseenter(function (e) {
        $('.body1 #animate4 .buttonLoge').animate({
            left: '585px'
        }, 1)
            .animate({
                left: '600px'
            }, 300);
        $('.body1 #animate4 .text1').animate({
            top: '70px'
        }, 1).animate({
            top: '85px'
        }, 300);

        $('.body1 #animate4 .text2').animate({
            left: '635px'
        }, 1).animate({
            left: '645px'
        }, 300);
    });

    $('.body1 #animate5').mouseenter(function (e) {
        $('.body1 #animate5 .buttonLoge').animate({
            left: '785px'
        }, 1)
            .animate({
                left: '800px'
            }, 300);
        $('.body1 #animate5 .text1').animate({
            top: '70px'
        }, 1).animate({
            top: '85px'
        }, 300);

        $('.body1 #animate5 .text2').animate({
            left: '835px'
        }, 1).animate({
            left: '845px'
        }, 300);
    });

    //footer
    $('.footer .buttonOff').click(function(){
        $('.footer .buttonGroup').toggle(1000);
    });


});