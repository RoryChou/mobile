/**
 * Created by Administrator on 2016/12/28.
 */
//var $ = require('jquery');
//var $ = require('webpack-zepto');
//var $ = require('zepto'); 会报错
//var Swiper = require('swiper');
//var swiperAni = require('../../lib/js/swiper.animate1.0.2.min.js');
//require('../../lib/js/rem.js');
/*require('../../lib/css/reset.css');
require('../../lib/css/animate.min.css');
require('../../lib/css/swiper.min.css');
require('../css/index.css');*/


$(function () {
    var flag = true;
    var swiper1 = new Swiper('.outside',{
        direction:'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            console.log('init1')
            swiperAni.swiperAnimateCache(swiper); //隐藏动画元素
            swiperAni.swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            console.log('end1')
            //swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if(flag){
                flag = false;
                var swiper2 = new Swiper('.inside',{
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    initialSlide :0,
                    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                        console.log('init2')
                        swiperAni.swiperAnimateCache(swiper); //隐藏动画元素
                        swiperAni.swiperAnimate(swiper); //初始化完成开始动画
                    },
                    onSlideChangeEnd: function(swiper){
                        console.log('end2',swiper)
                        //swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                    },
                    onSlideChangeStart: function (swiper) {
                        console.log('start2',swiper)
                        swiperAni.swiperAnimate(swiper)
                    }
                });
            }
            if(swiper1.activeIndex == 1){
                console.log('if',swiper2)
                //swiper2.onSlideChangeEnd();
            }
        },
        onSlideChangeStart: function (swiper) {
            console.log('start1',swiper)
            swiperAni.swiperAnimate(swiper)
        }

    });

})
