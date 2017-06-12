/**
 * Created by Ruoyu on 2017/5/2.
 */
 //加载动画显示
$(document).ready(function () { $("#loadgif").show();});
$(function(){
    //加载动画显示至少800ms
    window.onload=function(){
        setTimeout(function(){
            $("#loadgif").hide();
        },800)
    };
    //设置主体高{nav 110,foot 50}
    $('body').height($(window).height());
    $('#mainpart').height($(window).height()-160);
    //音乐播放与暂停（自动播放）
    $('#nav .music').click(function(){
        var audio=$(this).find('audio')[0];
        if(audio.paused){
            audio.play();   // 播放
        }else{
            audio.pause();//暂停
        }
    });
});