/**
 * Created by Administrator on 2016/12/29.
 */

$(function () {
    var swiper2;
    new Swiper('.outside',{
        direction:'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            //console.log('end1')
            //如果index是1的话，替换swiper对象为inside对象
            if(swiper.activeIndex == 1){
                swiper = swiper2
                //console.log(swiper2.activeIndex);
            }
            //如果swiper2的初始位置不在0，使它复位
            if(swiper2.activeIndex == 1){
                /*var x = swiper2.getWrapperTranslate('x')
                 console.log(x)
                 swiper2.activeIndex = 0;
                 swiper2.setWrapperTranslate(x);*/
                swiper2.slideTo(0, 1, false);
            }
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });

    swiper2 = new Swiper('.inside',{
        // 如果需要分页器
        pagination: '.swiper-pagination',
        onSlideChangeEnd: function(swiper){
            //console.log('end2')
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
    });

    /*swiper2.on('click', function(swiper){
        //swiper2.setWrapperTranslate(200)
        swiper2.slideTo(0, 1, false);
        swiperAnimate(swiper);
    });*/
})
