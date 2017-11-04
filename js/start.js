/* 
* @Author: anchen
* @Date:   2017-08-06 17:25:21
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-25 18:25:53
*/

$(document).ready(function(){

    skrollr.init();

    $(window).resize(function(event) {
        var ww = $(window).width();
        if(ww > 1680){
            $('.topBar_w').css('width', '1260px');
            $('.topBar_list').css('width', '1260px');
            $('.tt_Li2').css('width', '1012px');
            $('.tt_news').css('width', '676px');
            $('.tnews_btn').hide();
        }else{
            $('.topBar_w').css('width', '1000px');
            $('.topBar_list').css('width', '1000px');
            $('.tt_Li2').css('width', '603px');
            $('.tt_news').css('width', '416px');
            $('.tnews_btn').show();
        }
    });
    
    $(window).trigger('resize');

    var timeOut='';
    $('.topBar_news').hover(function() {
        if(timeOut){
            clearTimeout(timeOut);
            timeOut=null;
        }
        timeOut=setTimeout(function(){
            $('.topBar_news').children('span').css('visibility', 'hidden');
            $('.topBar_news').children('a').show();
        },200)
    }, function() {
        clearTimeout(timeOut);
        $(this).children('span').css('visibility', 'visible');
        $(this).children('a').hide();
    });

    var timeOut1='';
    $('.topBar_list').hover(function() {
        clearTimeout(timeOut1);
        if(timeOut1){
            clearTimeout(timeOut1);
            timeOut1=null;
        }
        timeOut1=setTimeout(function(){
            // $('.topBar_list').css('opacity', '0.95');
            $('.topBar_list').children('.topBar_table').show().stop().animate({height:'475px'}, 10);
        },150)
    }, function() {
        clearTimeout(timeOut1);
        if(timeOut){
            clearTimeout(timeOut1);
            timeOut1=null;
        }
        timeOut1=setTimeout(function(){
            // $('.topBar_list').children('.topBar_table').animate({height:'0'}, 10).hide();
            // $('.topBar_list').css('opacity', '1');
            $('.topBar_list').children('.topBar_table').hide().css('height', '0');
        },500)
    });

    var timer= '';
    var aa = 0;
    timer=setInterval(roll,5000)
    function roll(){
        aa++;
        if(aa > 2){
            aa=1;
            $('.topBar_right ul').css('top', '0');
        }
       $('.topBar_right ul').stop().animate({top:-52*aa}, 800);
    }
    
    var bb = 0;
    $('.tnews_btn').click(function(event) {
        bb ++;
        $('.tt_Li2').stop().animate({left:'30',width:'821'}, 100).addClass('shadow');
        $('.tt_hot').stop().animate({left:'30'}, 100).addClass('shadow');
        $('.tt_news').stop().animate({left:'188',width:'649'}, 100);
        $(this).removeClass('tnews_btn').addClass('tnews_btn1');
        $(this).html('>>');
        if(bb >1){
            bb=0;
            $('.tt_Li2').stop().animate({left:'248',width:'603'}, 100).removeClass('shadow');
            $('.tt_hot').stop().animate({left:'263'}, 100).removeClass('shadow');
            $('.tt_news').stop().animate({left:'421',width:'416'}, 100);
            $(this).removeClass('tnews_btn1').addClass('tnews_btn');
            $(this).html('更多热门手游');
        }
    });


    // var info_font = $('.info_font').offset().top;
    // var newli1 = $('.item1').offset().top;
    // var newli2 = $('.item4').offset().top;
    // var one = $('.item1').offset().top;
    // var two = $('.item4').offset().top;
    var dh = $(document).height();
    

    // console.log(newfont);
    // console.log(one);
    // console.log(two);

    $(window).scroll(function(event) {
        var val = $(document).scrollTop();
        var wh = $(window).height();
        var scrollBottom = dh - wh -val;
        // console.log(scrollBottom);
        if(scrollBottom<=1900){
            $('.info_font').addClass('nlshow');
        }
        if(scrollBottom<=1700){
            $('.item1,.item2,.item3').addClass('nlshow');
        }
        if(scrollBottom<=1430){
            $('.item4,.item5,.item6').addClass('nlshow');
        }
        if(scrollBottom<=1000){
            $('.feature>img').addClass('nlshow');
        }
        if(scrollBottom<=860){
            $('.outer_wrap').addClass('nlshow');
        }
    });

    //新情报人物右移
    // $('.item_char').hover(function() {
    //     $(this).stop().animate({left:'56px'}, 500);
    // }, function() {
    //     $(this).stop().animate({left:'46px'}, 500);
    // });
});