/* 
* @Author: anchen
* @Date:   2017-08-13 21:06:20
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-31 09:29:08
*/

$(document).ready(function(){

    $(window).resize(function(event) {
        var ww = $(window).width();
        var val = $(document).scrollTop();
        if(ww > 1680){
            $('.topBar_w').css('width', '1260px');
            $('.topBar_list').css('width', '1260px');
            $('.tt_Li2').css('width', '1012px');
            $('.tt_news').css('width', '676px');
            $('.tnews_btn').hide();
            if(val >= nav){
               $('.ssl,.zjl').show(); 
            }
        }else{
            $('.topBar_w').css('width', '1000px');
            $('.topBar_list').css('width', '1000px');
            $('.tt_Li2').css('width', '603px');
            $('.tt_news').css('width', '416px');
            $('.tnews_btn').show();
            $('.ssl,.zjl').hide();
        }
        if (ww > 1860){
            $('.xxhd').show();
        }else{
            $('.xxhd').hide();
        }
        if (ww >= 1440){
            $('.nav_right>li').css('width', '118px');
        }else{
            $('.nav_right>li').css('width', '110px');
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
            $('.topBar_list').children('.topBar_table').show().stop().animate({height:'475px'}, 1);
        },150)
    }, function() {
        clearTimeout(timeOut1);
        if(timeOut){
            clearTimeout(timeOut1);
            timeOut1=null;
        }
        timeOut1=setTimeout(function(){
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
        $('.tt_Li2').stop().animate({left:'30',width:'821'}, 1).addClass('shadow');
        $('.tt_hot').stop().animate({left:'30'}, 1).addClass('shadow');
        $('.tt_news').stop().animate({left:'188',width:'649'}, 1);
        $(this).removeClass('tnews_btn').addClass('tnews_btn1');
        $(this).html('>>');
        if(bb >1){
            bb=0;
            $('.tt_Li2').stop().animate({left:'248',width:'603'}, 1).removeClass('shadow');
            $('.tt_hot').stop().animate({left:'263'}, 1).removeClass('shadow');
            $('.tt_news').stop().animate({left:'421',width:'416'}, 1);
            $(this).removeClass('tnews_btn1').addClass('tnews_btn');
            $(this).html('更多热门手游');
        }
    });

    var nav = $('.nav').offset().top;
    $(window).scroll(function(event) {
        var val = $(document).scrollTop();
        var ww = $(document).width();
        if (val >=nav){
            $('.nav').addClass('nav_fixd');
            $('.nav_left').addClass('nav_current');
            $('.nav_right > li > a').css('color', '#333');
            $('.nav_right > li > span').css('backgroundPosition', '-1689px -248px');
            $('.main_logo').addClass('scale')
            if(ww > 1680){
                $('.ssl,.zjl').show();
            }
        }else{
            $('.nav').removeClass('nav_fixd');
            $('.nav_left').removeClass('nav_current');
            $('.nav_right > li > a').css('color', '');
            $('.nav_right > li > span').css('backgroundPosition', '-1689px -224px');
            $('.ssl,.zjl').hide();
            $('.main_logo').removeClass('scale');
        }
    });

    var time_qd = '';
    $('.gfqd').hover(function() {
        clearTimeout(time_qd);
        var val = $(document).scrollTop();
        if (val<nav){
            $('.gfqd > a').css('color', '#cc4336');
            $('.nav').css('background', 'rgba(255,255,255,0.9)');
        }
        $('.arrow').addClass('nav_current');
        // $('.qd_list').stop().animate({height:'200px'}, 500);
        $('.qd_list').stop().animate({height:'200px'}, 1);//配合css3
    }, function() {
        var val = $(document).scrollTop();
        clearTimeout(time_qd);
        if(time_qd){
            clearTimeout(time_qd);
            time_qd=null;
        }
        time_qd = setTimeout(function(){
            if (val<nav){
                $('.gfqd > a').css('color', '');
                $('.nav').css('background', '');
            }
            $('.arrow').removeClass('nav_current');
            // $('.qd_list').stop().animate({height:'0'}, 500);
            $('.qd_list').stop().animate({height:'0'}, 1);//配合css3
        },150)
    });
    
    
    $('.official_wx').hover(function() {
        $('.official_wx > p').html('网易阴阳师手游');
    }, function() {
        $('.official_wx > p').html('官方微信');
    });
    $('.official_wb').hover(function() {
        $('.official_wb > p').html('网易阴阳师手游');
    }, function() {
        $('.official_wb > p').html('官方微博');
    });

    var cc = 0;
    var time_next = '';
    $('.char_next').click(function(event) {
        clearTimeout(time_next);
        cc ++;
        // if(time_next){
        //     clearTimeout(time_next);
        //     time_next=null;
        // }
        time_next = setTimeout(function(){
            $('.char_box:last-child').addClass('char_current');
            $('.char_box:first-child').hide();
        },900)
        $('.char_box:last-child').show();
        $('.char_box:first-child').removeClass('char_current');

        if (cc > 1){
            cc = 0;
            clearTimeout(time_next);
            $('.char_box:last-child').removeClass('char_current');
            $('.char_box:first-child').show();
            // if(time_next){
            //     clearTimeout(time_next);
            //     time_next=null;
            // }
            time_next = setTimeout(function(){
                $('.char_box:first-child').addClass('char_current');
                $('.char_box:last-child').hide();
            },900)
        }
    });
    $('.char_box:first-child').addClass('char_current');
    $('.char_next').addClass('char_current');

    $.fn.extend({
        download_click:function(ml,w,oTirget1,oTirget2,dSpeed){
            $(this).click(function(event) {
                $('.index_download').stop().animate({marginLeft:ml,width:w}, 500);
                setTimeout(function(){
                   oTirget1.hide(); 
                   oTirget2.show();
               },dSpeed)
            });
        }
    })
    $('.toright').download_click('200px','360px',$('.download_box1'),$('.download_box2'),300);
    $('.download_box2 a').download_click('-291px','533px',$('.download_box2'),$('.download_box1'),120);

    // $('.toright').click(function(event) {
    //     $('.index_download').stop().animate({marginLeft:'200px',width:'360px'}, 500);
    //     setTimeout(function(){
    //        $('.download_box1').hide(); 
    //        $('.download_box2').show();
    //    },300)
    // });
    // $('.download_box2 a').click(function(event) {
    //     $('.index_download').stop().animate({marginLeft:'-291px',width:'533px'}, 500);
        
    //     setTimeout(function(){
    //         $('.download_box2').hide();
    //         $('.download_box1').show();
    //     },120)
        
    // });

    $.fn.extend({
        desktop_hover:function(){
            $(this).hover(function() {
                $('.download_info').stop().show().stop().animate({opacity:'1'}, 250,'linear');
            }, function() {
                $('.download_info').stop().animate({opacity:'0'}, 250,'linear').queue(function(){
                    $(this).hide().dequeue();
                })
            });
        }
    })
    $('.dl_desktop').desktop_hover();
    $('.download_info').desktop_hover();
    // $('.dl_desktop').hover(function() {
    //     $('.download_info').stop().show().stop().animate({opacity:'1'}, 250,'linear');
    // }, function() {
    //     $('.download_info').stop().animate({opacity:'0'}, 250,'linear').queue(function(){
    //         $(this).hide().dequeue();
    //     })
    // });
    // $('.download_info').hover(function() {
    //     $(this).stop().show().stop().animate({opacity:'1'}, 250,'linear');
    // }, function() {
    //     $(this).stop().animate({opacity:'0'}, 250,'linear').queue(function(){
    //         $(this).hide().dequeue();
    //     })
    // });

    
    $.fn.extend({
        calendar_hover:function(h1,speed1,h2,speed2,zi1,zi2){
            $(this).hover(function() {
                $(this).css('z-index', zi1);
                $(this).children('.item_h').stop().animate({height:h1}, speed1).show();
            }, function() {
                $(this).css('z-index', zi2);
                $(this).children('.item_h').stop().animate({height:h2}, speed2).queue(function(){
                    $(this).hide().dequeue();
                });
            });
        }
    });
    $('.item2').calendar_hover('363px',400,'96px',250);
    $('.item3').calendar_hover('187px',350,'97px',200);
    $('.item4').calendar_hover('187px',350,'100px',200);
    $('.item5').calendar_hover('302px',230,'144px',150);
    $('.item6').calendar_hover('364px',300,'99px',200,11,10);
    // $('.item2').hover(function() {
    //     $(this).children('.item_h').stop().animate({height:'363px'}, 400).show();
    // }, function() {
    //     $(this).children('.item_h').stop().animate({height:'96px'}, 250).queue(function(){
    //         $(this).hide().dequeue();
    //     });
    // });

    // $('.item3').hover(function() {
    //     $(this).children('.item_h').stop().animate({height:'187px'}, 400).show();
    // }, function() {
    //     $(this).children('.item_h').stop().animate({height:'97px'}, 200).queue(function(){
    //         $(this).hide().dequeue();
    //     });
    // });
    // $('.item4').hover(function() {
    //     $(this).children('.item_h').stop().animate({height:'187px'}, 400).show();
    // }, function() {
    //     $(this).children('.item_h').stop().animate({height:'100px'}, 200).queue(function(){
    //         $(this).hide().dequeue();
    //     });
    // });
    
    var timer_ba = '';
    var timeOut_ba = '';
    var key = 0;
    var zsq = 0;
    timer_ba = setInterval(autoPlay,5000);
    function autoPlay(){
        key ++;
        if (key > 5){
            key = 0;
            $('.nb_box').stop().animate({left:'0'}, 500);
        }
        $('.nb_box').stop().animate({'left':-key*360+'px'}, 500);

        zsq ++;
        if (zsq>5){
            zsq = 0;
        }

        $('.nb_indicator li').eq(zsq).addClass('on').siblings().removeClass('on');
    }


    $.fn.extend({
        mover:function(oEvent,name,oWidth,to,oid){

            $(this).on(oEvent, function(event) {
                
                var that = this;

                if (timeOut_ba){
                    clearTimeout(timeOut_ba);
                    timeOut_ba = null;
                }
                timeOut_ba = setTimeout(function(){
                    $(that).addClass('on').siblings().removeClass('on');
                    $(name).stop().animate({left:(-oWidth*$(that).index())}, 500);
                },to)
                if(oid == 1){
                    key = $(this).index();
                    zsq = $(this).index();
                }
                if(oid == 2){
                    key1 = $(this).index();
                    zsq1 = $(this).index();
                }
            });

            $(this).on('mouseout', function(event) {
                clearTimeout(timeOut_ba);
            });
        }
    })

    $('.nb_indicator li').mover('mouseover',$('.nb_box'),360,150,1);

    // $.each($('.nb_indicator li'), function(index, val) {
    //      $(this).mouseover(function(event) {

    //         var that = this;

    //         if (timeOut_ba){
    //             clearTimeout(timeOut_ba);
    //             timeOut_ba = null;
    //         }
    //         timeOut_ba = setTimeout(function(){
    //             $(that).addClass('on').siblings().removeClass('on');
    //             $('.nb_box').stop().animate({left:(-360*$(that).index())}, 500);
    //         },300)
    //         key = $(this).index();
    //         zsq = $(this).index();
    //      });
    // });

    $('.notice_banner').hover(function() {
        clearInterval(timer_ba);
    }, function() {
        timer_ba = setInterval(autoPlay,5000);
    });

    $('.notice_tabs a').mover('mouseover',$('.news_list'),500,150);
    
    $('.safety_tabs a').on('click', function(event) {
        $(this).addClass('on').siblings().removeClass('on');
        if($('.st_shishen').is('.on')){
            $('.shishen_container').addClass('on').siblings().removeClass('on');
        }else if ($('.st_zhujue').is('.on')){
            $('.zhujue_cotainer').addClass('on').siblings().removeClass('on');
        }
    });

    $('.ssc_tabs a').on('click', function(event) {
        
        all = 0;
        ssr = 0;
        sr = 0;
        r = 0;

        $('.next').show();
        $('.prev').hide();
        $('.list_all').css('left', '0');
        $(this).addClass('on').siblings().removeClass('on');
    });

    var all = 0;
    var ssr = 0;
    var sr = 0;
    var r = 0;
    $('.next').on('click', function(event) {

        if($('.all').is('.on')){
            all ++;
            all > 0 ? $('.prev').show() : $('.prev').hide();
            all > 6 ? $('.next').hide() : $('.next').show();

            $('.list_all').stop().animate({left:-all*828+'px'}, 400);
        }
        if($('.ssr').is('.on')){
            ssr ++;
            ssr > 0 ? $('.prev').show() : $('.prev').hide();
            ssr > 0 ? $('.next').hide() : $('.next').show();
            $('.list_all').stop().animate({left:-ssr*828+'px'}, 400);
        }
        if($('.sr').is('.on')){
            sr ++;
            sr > 0 ? $('.prev').show() : $('.prev').hide();
            sr > 2 ? $('.next').hide() : $('.next').show();
            $('.list_all').stop().animate({left:-sr*828+'px'}, 400);
        }
        if($('.r').is('.on')){
            r ++;
            r > 0 ? $('.prev').show() : $('.prev').hide();
            r > 1 ? $('.next').hide() : $('.next').show();
            $('.list_all').stop().animate({left:-r*828+'px'}, 400);
        }
    });

    $('.prev').on('click', function(event) {

        if($('.all').is('.on')){
            all --;
            all > 0 ? $('.prev').show() : $('.prev').hide();
            all > 6 ? $('.next').hide() : $('.next').show();
            $('.list_all').stop().animate({left:-all*828+'px'}, 400);
        }
        if($('.ssr').is('.on')){
            ssr --;
            ssr > 0 ? $('.prev').show() : $('.prev').hide();
            ssr > 0 ? $('.next').hide() : $('.next').show();
            $('.list_all').stop().animate({left:-ssr*828+'px'}, 400);
        }
        if($('.sr').is('.on')){
            sr --;
            sr > 0 ? $('.prev').show() : $('.prev').hide();
            sr > 2 ? $('.next').hide() : $('.next').show();
            $('.list_all').stop().animate({left:-sr*828+'px'}, 400);
        }
        if($('.r').is('.on')){
            r --;
            r > 0 ? $('.prev').show() : $('.prev').hide();
            r > 1 ? $('.next').hide() : $('.next').show();
            $('.list_all').stop().animate({left:-r*828+'px'}, 400);
        }
    });

    
    $('.zjc_tabs a').on('click', function(event) {
        $(this).addClass('on').siblings().removeClass('on');
        $('.zhujue_cotainer > div').eq($(this).index()+1).addClass('on').siblings().removeClass('on');
    });

    var timer_raba = '';
    var key1 = 0;
    var zsq1 = 0;
    timer_raba = setInterval(autoPlay1,5000);
    function autoPlay1(){
        key1 ++;
        if (key1 > 1){
            key1 = 0;
            $('.rb_box ul').stop().animate({left:'0'}, 500);
        }
        $('.rb_box ul').stop().animate({'left':-key1*368+'px'}, 500);

        zsq1 ++;
        if (zsq1 > 1){
            zsq1 = 0;
        }

        $('.raiders_ind a').eq(zsq1).addClass('on').siblings().removeClass('on');
    }

    $('.raiders_ind a').mover('mouseover',$('.rb_box ul'),368,150,2);

    $('.raiders_banner').hover(function() {
        clearInterval(timer_raba);
    }, function() {
        timer_raba = setInterval(autoPlay1,5000);
    });

    $('.raiders_tabs a').mover('mouseover',$('.rac_list'),417.5,100);
    $('.coterie_tabs li').mover('mouseover',$('.coterie_list'),1220,100);

    $.fn.extend({
        vclick:function(num){
            $(this).on('click', function(event) {
                $('.mask').show();
                setTimeout(function(){
                    $('.mask').addClass('on');
                },10)
                $('.v1').attr('src', 'images/'+num+'.mp4');
                $('.v1').trigger('load');
                $('.v1').trigger('play');
            });
        }
    })
    $('#vi1').vclick('v1');
    $('#vi2').vclick('v2');
    $('#vi3').vclick('v3');
    
    $('.close_btn').on('click', function(event) {
        $('.mask').removeClass('on');
            setTimeout(function(){
                $('.mask').hide();
            },300)
        $('.v1').trigger('pause');
        // $('.v1').attr('src', '');
    });
    var pp = 0;
    $('.control').on('click', function(event) {
        pp ++;
        $('.v1').trigger('pause');
        if(pp > 1){
            pp = 0;
            $('.v1').trigger('play');
        }
    });

    $(window).scroll(function(event) {
        var dh = $(document).height();
        var val = $(document).scrollTop();
        var wh = $(window).height();
        var scrollBottom = dh - wh -val;
        if(scrollBottom<=160){
            $('.footer_title,.go_ex,.circle').addClass('on');
        }
    });

    $('.back_top').on('click', function(event) {
        $('body,html').stop().animate({'scrollTop':0}, 500,'linear');
    });
});