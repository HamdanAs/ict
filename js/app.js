$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll < 300){
            $('#nav').css('background', 'transparent');
        } else {
            $('#nav').css('background', '#4547ec');
        }
    })
})