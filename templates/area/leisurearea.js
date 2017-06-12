/**
 * Created by Ruoyu on 2017/5/4.
 */
$(function(){
    //图片与鼠标反向旋转与位移
    var windowW=$(window).width();
    var frontBg=$('#mainpart .front');
    var middleBg=$('#mainpart .middle');
    var laterBg=$('#mainpart .later');
    $('#mainpart').mousemove(function(e){
        var distance=e.pageX-windowW/2;    //距离差
        var  distanceRatio=distance/windowW*2; //距离差比率-1~1
        frontBg.css('transform','rotateY('+distanceRatio*8+'deg)');
        middleBg.css('transform','rotateY('+distanceRatio*8+'deg) translate3d('+(-distance/55)+'px,0,-80px)');
        laterBg.css('transform','rotateY('+distanceRatio*8+'deg) translate3d('+(-distance/65)+'px,0,-160px)');
    });
    //遮罩
    $('.link-read').mouseenter(function(){
        $('#mainpart .shadow-read').css('opacity','1')
    }).mouseleave(function(){
        $('#mainpart .shadow-read').css('opacity','0')
    });
    $('.link-game').mouseenter(function(){
        $('#mainpart .shadow-game').css('opacity','1')
    }).mouseleave(function(){
        $('#mainpart .shadow-game').css('opacity','0')
    });
    $('.link-movie').mouseenter(function(){
        $('#mainpart .shadow-movie').css('opacity','1')
    }).mouseleave(function(){
        $('#mainpart .shadow-movie').css('opacity','0')
    })
});