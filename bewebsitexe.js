
$(function() {
    $(".rslides").responsiveSlides();
  });

//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

$(function () {
    $(".introduction h1").on("mouseover", function() {
        $(".introduction h1").animate({
            paddingLeft: "+=10"
        }, 100)
    })
});

$(function () {
    $(".introduction h1").on("mouseout", function() {
        $(".introduction h1").animate({
            paddingLeft: "-=10"
        }, 100)
    })
})


$(".introduction h1").mouseover(function (){
    $(".introduction h1").css("color", "deepskyblue");
});

$(".introduction h1").mouseout(function () {
    $(".introduction h1").css("color", "black");
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

$(function () {
    $(".covering-letter h2").on("mouseover", function() {
        $(".covering-letter h2").animate({
            paddingLeft: "+=10"
        }, 100)
    })
});

$(function () {
    $(".covering-letter h2").on("mouseout", function() {
        $(".covering-letter h2").animate({
            paddingLeft: "-=10"
        }, 100)
    })
})


$(".covering-letter h2").mouseover(function (){
    $(".covering-letter h2").css("color", "deepskyblue");
});

$(".covering-letter h2").mouseout(function () {
    $(".covering-letter h2").css("color", "black");
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

$(function () {
    $(".CV h2").on("mouseover", function() {
        $(".CV h2").animate({
            paddingLeft: "+=10"
        }, 100)
    })
});

$(function () {
    $(".CV h2").on("mouseout", function() {
        $(".CV h2").animate({
            paddingLeft: "-=10"
        }, 100)
    })
})


$(".CV h2").mouseover(function (){
    $(".CV h2").css("color", "deepskyblue");
});

$(".CV h2").mouseout(function () {
    $(".CV h2").css("color", "black");
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------//


$(".skills h2").mouseover(function (){
    $(".skills h2").css("color", "deepskyblue");
});

$(".skills h2").mouseout(function () {
    $(".skills h2").css("color", "black");
});

$(function () {
    $(".skills h2").on("mouseover", function() {
        $(this).animate({
            paddingBottom: "+=10"
        }, 100)
    })
});

$(function () {
    $(".skills h2").on("mouseout", function() {
        $(this).animate({
            paddingBottom: "-=10"
        }, 100)
    })
})



$(".contact h2").mouseover(function (){
    $(".contact h2").css("color", "deepskyblue");
});

$(".contact h2").mouseout(function () {
    $(".contact h2").css("color", "black");
});

$(function () {
    $(".contact h2").on("mouseover", function() {
        $(this).animate({
            paddingBottom: "+=10"
        }, 100)
    })
});

$(function () {
    $(".contact h2").on("mouseout", function() {
        $(this).animate({
            paddingBottom: "-=10"
        }, 100)
    })
})








