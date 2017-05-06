/**
 * Created by Ruoyu on 2017/5/2.
 */
$(function(){
    //底部按钮
    $('#footer .button').click(function(){
        $('#footer .main').toggle('500');
    });
    //图片与鼠标反向旋转
    var windowW=$(window).width();
    var frontBg=$('#mainpart .front');
    var laterBg=$('#mainpart .later');
    $('#mainpart').mousemove(function(e){
        var distance=e.pageX-windowW/2;    //距离差
        var  distanceRatio=distance/windowW*2; //距离差比率-1~1
        frontBg.css('transform','rotateY('+distanceRatio*8+'deg)');
        laterBg.css('transform','rotateY('+distanceRatio*15+'deg)');
    });
});