$(function() {
    $('#activator').ready(function(){
        $('#overlay').fadeIn('fast',function(){
            $('#box').animate({'top':'15%'},500);
        });
    });
    $('#boxclose').click(function(){
        $('#box').animate({'top':'200%'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });

});