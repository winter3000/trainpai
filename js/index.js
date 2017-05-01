/**
 * Created by Ruoyu on 2017/5/2.
 */
$(function(){
    //背景图与鼠标反向移动
    var laterBg=$('.main .later');
    $('.main').mousemove(function (e){
        var center=$('.main').width()/2;
        var moveLength=(e.pageX-center)/20;//调整幅度
        laterBg.css('left',-moveLength+'px');
        //console.log(moveLength, laterBg.css('left') )
    });

});