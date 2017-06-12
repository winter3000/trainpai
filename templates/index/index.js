/**
 * Created by Ruoyu on 2017/5/2.
 */

$(function(){
    //图片立起来
    setTimeout(function(){
        //$('#mainpart>div').css('transform','rotateX(0deg)');
        for(var i=1;i<4;i++){
            $('#mainpart>div').eq(i).css('transform','rotateX(0deg) translate3d(0,0,'+-140*(i-1)+'px)');
            $('#mainpart .middle-f').css('transform','rotateX(0deg) translateZ(100px)');
            $('#mainpart .shadow').css('transform','rotateX(0deg) translateZ(100px)');
        }
    },1000);
    //图片与鼠标反向旋转与位移
    var windowW=$(window).width();
     var frontBg=$('#mainpart .front');
    var middleBg=$('#mainpart .middle');
     var laterBg=$('#mainpart .later');
     $('#mainpart').mousemove(function(e){
     var distance=e.pageX-windowW/2;    //距离差
     var  distanceRatio=distance/windowW*2; //距离差比率-1~1
     frontBg.css('transform','rotateY('+distanceRatio*12+'deg) translate3d('+(-distance/75)+'px,0,0)');
     middleBg.css('transform','rotateY('+distanceRatio*8+'deg) translate3d('+(-distance/60)+'px,0,-140px)');
     laterBg.css('transform','rotateY('+distanceRatio*8+'deg) translate3d('+(-distance/65)+'px,0,-270px)');
     });
    //底部按钮
    $('.botnav .button').click(function(){
        $('.botnav .botnav-main').toggle('800');
        $('#mainpart .shadow').css('opacity')==0?$('#mainpart .shadow').css('opacity','0.2'):$('#mainpart .shadow').css('opacity','0');
    });
});