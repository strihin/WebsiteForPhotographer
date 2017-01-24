$.easing['jswing'] = $.easing['swing'];
$.extend( $.easing, {
    def: 'easeOutQuad',
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    }
});

$(document).ready(function(){

//When mouse rolls over
    $(".black").mouseover(function(){
        $(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'});
        $(this).removeClass("black");
        $(this).addClass("red");
    });

//When mouse is removed
    $(".black").mouseout(function(){
        $(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'});
        $(this).removeClass("red");
        $(this).addClass("black");
    });
    
});

