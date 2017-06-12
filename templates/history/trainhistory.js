/**
 * Created by Ruoyu on 2017/5/2.
 */
$(function(){
//点击轮播
    var imgGroup=$('#mainpart .img-group li');
    //向右键
    $('.btn-direction .right').click(function(){
        imgGroup.each(function(index,ele){
            if($(this).hasClass('active')){
                //最后一个不能向右
                if($(this).index()==18){return false}
                //移动
                $(this).removeClass('active active-right').addClass('active-left')
                    .next().removeClass('active-right active-left').addClass('active');
                //按钮变色
                var _thisNext=$(this).next();
                if(_thisNext.hasClass('item1')){btnColor('.item1');}
                else if(_thisNext.hasClass('item2')){btnColor('.item2')}
                else if(_thisNext.hasClass('item3')){btnColor('.item3')}
                else if(_thisNext.hasClass('item4')){btnColor('.item4')}
                return false;
            }
        })
    });
    //向左键
    $('.btn-direction .left').click(function(){
        imgGroup.each(function(index,ele){
            if($(this).hasClass('active')){
                //第一个不能向左
                if($(this).hasClass('item0')){return false}
                //移动
                $(this).removeClass('active active-left').addClass('active-right')
                    .prev().removeClass('active-right active-left').addClass('active');
                //按钮变色
                var _thisPrev=$(this).prev();
                if(_thisPrev.hasClass('item1') ||$(this).hasClass('item0')){ btnColor('.item1');}
                else if(_thisPrev.hasClass('item2')){btnColor('.item2')}
                else if(_thisPrev.hasClass('item3')){btnColor('.item3')}
                else if(_thisPrev.hasClass('item4')){btnColor('.item4')}
                return false;
            }
        })
    });
    //按钮变色
    function btnColor(classname){
            $('.btn-year').find(classname).addClass('active').siblings().removeClass('active');
    }
    //年份按钮跳转
    function btnLink(classname,index){
        $('.btn-year').find(classname).click(function(){
            //图片跳转
            imgGroup.eq(index).removeClass('active-right active-left').addClass('active').siblings().removeClass('active');
            for(var i=0;i<imgGroup.length;i++){
                if(i<index){imgGroup.eq(i).removeClass('active-right').addClass('active-left')}
                else if(i>index){imgGroup.eq(i).removeClass('active-left').addClass('active-right')}
            }
            //按钮变色
            btnColor(classname);
        })
    }
    btnLink('.item1',1);
    btnLink('.item2',4);
    btnLink('.item3',9);
    btnLink('.item4',17);
});
