

const slider = $('.slider img#onUpimg');
let number = 0;
/* $(window).on("click",function(){
    $(slider).toggleClass("hidden");
}) */



/////////// Menu slide toggle on click
const menu = $('nav #menu');
const menuArrow = $('nav ul li:last-child')

function CheckMenuToggle(){
    $('nav ul').is( ":visible" ) ? (
        $('nav #menu').html(`<i class="fas fa-chevron-up"></i>&nbsp;&nbsp;MENU`),
        $('nav').css({"width":"280px","transition":"width 1s ease"})
    ) : (
        $('nav #menu').html(`<i class="fas fa-chevron-down"></i>&nbsp;&nbsp;MENU`),
        $('nav').css({"width":"","transition":"width 1s ease"})
    )
}

menu.on("click",function(){
    $('nav ul').stop().slideToggle(700, CheckMenuToggle)
})

menuArrow.on("click",function(){
    $('nav ul').stop().slideToggle(700, CheckMenuToggle)
})


/////////// stikcy menu on scroll
var num = 74; // position absolute nav from top
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});

/////////// show span.add when click on .bar

$('.bar').unbind().click(function(event){
    $('.bar').children().css({"color":""});
    $('.bar').find("span.add").css({"display":"none"});
    $(event.target).parent().find("span.add").css({"display":"block"});
    $(event.target).parent().children().css({"color":"white"});
    $(slider).stop().toggleClass("hidden");
})




//Transition without crossfade
/*
$(window).on("click",function(){
    slider.attr('src') === 'https://picsum.photos/1920/1080/?image=441' ? (
        slider.fadeOut(function() {
            $(slider).attr("src","https://picsum.photos/1920/1080/?image=452").fadeIn();
          })
    ):(
        slider.fadeOut(function() {
            $(slider).attr("src","https://picsum.photos/1920/1080/?image=441").fadeIn();
          })
    )  
})
*/