/**
 * Created by Ruoyu on 2017/5/2.
 */
$(function(){
    //跳转二级
    $('#mainpart .first .btn-r').click(function(){
        $('#mainpart .first').css('left','-100%');
        $('#mainpart .second').css('left','0');
    });
    $('#trans-tooltip').remove();
});
