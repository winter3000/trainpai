/**
 * Created by Ruoyu on 2017/5/2.
 */
//加载

$(document).ready(function () { $("#loadgif").show();});
$(function(){
    window.onload=function(){
        setTimeout(function(){
            $("#loadgif").hide();
        },1000)
    };
    //设置主体高
    /*var windowW=$(window).width();
    $('#mainpart').height(windowW/1920*895+'px');*/
    $('body').height($(window).height());
    $('#mainpart').height($(window).height()-160);
    //底部按钮
    $('.botnav .button').click(function(){
        $('.botnav .botnav-main').toggle('500');
        $('#mainpart .shadow').css('opacity')==0?$('#mainpart .shadow').css('opacity','0.3'):$('#mainpart .shadow').css('opacity','0');
    });
});