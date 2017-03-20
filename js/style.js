//横屏


var musicStar = document.getElementById('musicStar');
var firstInit = true;
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        //alert('竖屏状态！');
        //$('#landscape').css({'display':'none','overflow':'hidden'});
        //$('#portrait').css({'display':'block','overflow':'hidden'});
        if(musicStar.played){
            musicStar.pause();
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        $("body").css({"width":w,"height":h});
        $('#landscape').css({'display':'none'});
        $("#portrait").css("display","block");

    }
    if (window.orientation === 90 || window.orientation === -90 ){
        //alert('横屏状态！');
        //$('#portrait').css({'display':'none','overflow':'hidden'});
        //$('#landscape').css({'display':'block','overflow':'hidden','position':'relative'});
        var w = window.innerWidth;
        var h = window.innerHeight;
        init(firstInit);
        //firstInit = false;
        $("#portrait").css("display","none");
        $('#landscape').css({'display':'block'});
        $("body").css({"width":w,"height":h});
        document.addEventListener("WeixinJSBridgeReady", function () {
            audioAutoPlay('musicStar');
        }, false);
        var firstTouch = true;
        $('body').bind("touchstart",function(e){
            if ( firstTouch ) {
                firstTouch = false;
                musicStar.play();
            }else{
                return;
            }
        });
        //动画开始播放音乐
        musicStar.load();
        musicStar.src="video/Echo.mp3";
        musicStar.play();
        $(".open").click(function(){
            musicStar.pause();
            $(this).css("display","none");
            $(".clock").css("display","block");
            $('.btn-music').removeClass('open-music');
        });
        $(".clock").click(function(){
            musicStar.play();
            $(this).css("display","none");
            $(".open").css("display","block");
            $('.btn-music').addClass('open-music');
        });
    }

}, false);

function landscape(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    $(function(){
        init();
    });
    $("#portrait").css("display","none");
    $("body").css({"width":w,"height":h});
    document.addEventListener("WeixinJSBridgeReady", function () {
        audioAutoPlay('musicStar');
    }, false);
    var firstTouch = true;
    $('body').bind("touchstart",function(e){
        if ( firstTouch ) {
            firstTouch = false;
            musicStar.play();
        }else{
            return;
        }
    });
    //动画开始播放音乐
    musicStar.load();
    musicStar.src="video/Echo.mp3";
    musicStar.play();
    $(".open").click(function(){
        musicStar.pause();
        $(this).css("display","none");
        $(".clock").css("display","block");
        $('.btn-music').removeClass('open-music');
    });
    $(".clock").click(function(){
        musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
        $('.btn-music').addClass('open-music');
    });
}

function portrait(){
    if(musicStar.played){
        musicStar.pause();
    }
    var w = window.innerWidth;
    var h = window.innerHeight;
    $("body").css({"width":w,"height":h});
    $('#landscape').css({'display':'block'});
}
//var w = window.innerWidth;
//var h = window.innerHeight;
//$(function(){
//    init();
//});
//
////$("#portrait").css("display","none");
////$("body").css({"width":w,"height":h});
//document.addEventListener("WeixinJSBridgeReady", function () {
//    audioAutoPlay('musicStar');
//}, false);
//var firstTouch = true;
//$('body').bind("touchstart",function(e){
//    if ( firstTouch ) {
//        firstTouch = false;
//        musicStar.play();
//    }else{
//        return;
//    }
//});
////动画开始播放音乐
//musicStar.load();
//musicStar.src="video/Echo.mp3";
//musicStar.play();
//$(".open").click(function(){
//    musicStar.pause();
//    $(this).css("display","none");
//    $(".clock").css("display","block");
//    $('.btn-music').removeClass('open-music');
//});
//$(".clock").click(function(){
//    musicStar.play();
//    $(this).css("display","none");
//    $(".open").css("display","block");
//    $('.btn-music').addClass('open-music');
//});