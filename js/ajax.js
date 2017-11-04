/* 
* @Author: anchen
* @Date:   2017-08-28 14:26:36
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-28 17:03:56
*/

$(document).ready(function(){
    // var productssr = [];
    // $('.ssr').ajaxData(productssr,"SSR");
    // $.fn.extend({
    //     ajaxData:function(array1,level){
    //         $(this).on('click', function(event) {
    //             $.ajax({
    //             url: 'js/ajax.php',
    //             dataType :'json',
    //             type: 'get',
    //             success:function(data) {
                    
    //                 var str="";
    //                 // var array1 = [];
    //                 for(var i=0;i<data.length;i++){
    //                     if(data[i].level == level){
    //                         array1.push(data[i]);
    //                     }
    //                 }

    //                  for(var i=0;i<array1.length;i+=2){

    //                     var name1 = array1[i].name;
    //                     var id1 = array1[i].id;
    //                     var isNew1 = array1[i].isNew;
                         
    //                     if(array1[i+1]!=null){
    //                         var name2 = array1[i+1].name;
    //                         var id2 = array1[i+1].id;
    //                         var isNew2 = array1[i+1].isNew;
    //                     }
    //                     str+='<ul>';
    //                         str+='<li>';
    //                             str+='<a href="javascript:;"><span><s><u><em>'+name1+'</em></u></s></span></a>';
    //                             str+='<img src="images/'+id1+'.png" alt="" />';
    //                     if(isNew1==true){
    //                         str+='<i></i>';
    //                     }
    //                         str+='</li>';
    //                     if (array1[i+1]!=null){
    //                         str+='<li>'
    //                             str+='<a href="javascript:;"><span><s><u><em>'+name2+'</em></u></s></span></a>';
    //                             str+='<img src="images/'+id2+'.png" alt="" />';
    //                     if(isNew2==true){
    //                         str+='<i></i>';
    //                     }
    //                         str+='</li>';
    //                     }
    //                   str+='</ul>';
    //                   // return str;
    //                  }
    //                  $('.list_all').html(str);

    //                 },error:function(e){
                         
    //                 }
    //             })
    //         });
    //     }
    // })

    $('.all').on('click', function(event) {
        $.ajax({
        url: 'js/ajax.php',
        dataType :'json',
        type: 'get',
        success:function(data) {
            
            var str="";
            // var productssr = [];
            // for(var i=0;i<data.length;i++){
            //     if(data[i].level == "SSR"){
            //         productssr.push(data[i]);
            //     }
            // }

             for(var i=0;i<data.length;i+=2){

                var name1 = data[i].name;
                var id1 = data[i].id;
                var isNew1 = data[i].isNew;
                 
                if(data[i+1]!=null){
                    var name2 = data[i+1].name;
                    var id2 = data[i+1].id;
                    var isNew2 = data[i+1].isNew;
                }
                str+='<ul>';
                    str+='<li>';
                        str+='<a href="javascript:;"><span><s><u><em>'+name1+'</em></u></s></span></a>';
                        str+='<img src="images/'+id1+'.png" alt="" />';
                if(isNew1==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                if (data[i+1]!=null){
                    str+='<li>'
                        str+='<a href="javascript:;"><span><s><u><em>'+name2+'</em></u></s></span></a>';
                        str+='<img src="images/'+id2+'.png" alt="" />';
                if(isNew2==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                }
              str+='</ul>';
              // return str;
             }
             $('.list_all').html(str);

            },error:function(e){
                 
            }
        })
    });

    $('.ssr').on('click', function(event) {
        $.ajax({
        url: 'js/ajax.php',
        dataType :'json',
        type: 'get',
        success:function(data) {
            
            var str="";
            var productssr = [];
            for(var i=0;i<data.length;i++){
                if(data[i].level == "SSR"){
                    productssr.push(data[i]);
                }
            }

             for(var i=0;i<productssr.length;i+=2){

                var name1 = productssr[i].name;
                var id1 = productssr[i].id;
                var isNew1 = productssr[i].isNew;
                 
                if(productssr[i+1]!=null){
                    var name2 = productssr[i+1].name;
                    var id2 = productssr[i+1].id;
                    var isNew2 = productssr[i+1].isNew;
                }
                str+='<ul>';
                    str+='<li>';
                        str+='<a href="javascript:;"><span><s><u><em>'+name1+'</em></u></s></span></a>';
                        str+='<img src="images/'+id1+'.png" alt="" />';
                if(isNew1==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                if (productssr[i+1]!=null){
                    str+='<li>'
                        str+='<a href="javascript:;"><span><s><u><em>'+name2+'</em></u></s></span></a>';
                        str+='<img src="images/'+id2+'.png" alt="" />';
                if(isNew2==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                }
              str+='</ul>';
              // return str;
             }
             $('.list_all').html(str);

            },error:function(e){
                 
            }
        })
    });
    
    $('.all').trigger('click');
    
    $('.sr').on('click', function(event) {
        $.ajax({
        url: 'js/ajax.php',
        dataType :'json',
        type: 'get',
        success:function(data) {
            
            var str="";
            var productsr = [];
            for(var i=0;i<data.length;i++){
                if(data[i].level == "SR"){
                    productsr.push(data[i]);
                }
            }

             for(var i=0;i<productsr.length;i+=2){

                var name1 = productsr[i].name;
                var id1 = productsr[i].id;
                var isNew1 = productsr[i].isNew;
                 
                if(productsr[i+1]!=null){
                    var name2 = productsr[i+1].name;
                    var id2 = productsr[i+1].id;
                    var isNew2 = productsr[i+1].isNew;
                }
                str+='<ul>';
                    str+='<li>';
                        str+='<a href="javascript:;"><span><s><u><em>'+name1+'</em></u></s></span></a>';
                        str+='<img src="images/'+id1+'.png" alt="" />';
                if(isNew1==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                if (productsr[i+1]!=null){
                    str+='<li>'
                        str+='<a href="javascript:;"><span><s><u><em>'+name2+'</em></u></s></span></a>';
                        str+='<img src="images/'+id2+'.png" alt="" />';
                if(isNew2==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                }
              str+='</ul>';
              // return str;
             }
             $('.list_all').html(str);

            },error:function(e){
                 
            }
        })
    });

    $('.r').on('click', function(event) {
        $.ajax({
        url: 'js/ajax.php',
        dataType :'json',
        type: 'get',
        success:function(data) {
            
            var str="";
            var productr = [];
            for(var i=0;i<data.length;i++){
                if(data[i].level == "R"){
                    productr.push(data[i]);
                }
            }

             for(var i=0;i<productr.length;i+=2){

                var name1 = productr[i].name;
                var id1 = productr[i].id;
                var isNew1 = productr[i].isNew;
                 
                if(productr[i+1]!=null){
                    var name2 = productr[i+1].name;
                    var id2 = productr[i+1].id;
                    var isNew2 = productr[i+1].isNew;
                }
                str+='<ul>';
                    str+='<li>';
                        str+='<a href="javascript:;"><span><s><u><em>'+name1+'</em></u></s></span></a>';
                        str+='<img src="images/'+id1+'.png" alt="" />';
                if(isNew1==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                if (productr[i+1]!=null){
                    str+='<li>'
                        str+='<a href="javascript:;"><span><s><u><em>'+name2+'</em></u></s></span></a>';
                        str+='<img src="images/'+id2+'.png" alt="" />';
                if(isNew2==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                }
              str+='</ul>';
              // return str;
             }
             $('.list_all').html(str);

            },error:function(e){
                 
            }
        })
    });
    $('.n').on('click', function(event) {
        $('.next').hide();
        $.ajax({
        url: 'js/ajax.php',
        dataType :'json',
        type: 'get',
        success:function(data) {
            
            var str="";
            var productn = [];
            for(var i=0;i<data.length;i++){
                if(data[i].level == "N"){
                    productn.push(data[i]);
                }
            }

             for(var i=0;i<productn.length;i+=2){

                var name1 = productn[i].name;
                var id1 = productn[i].id;
                var isNew1 = productn[i].isNew;
                 
                if(productn[i+1]!=null){
                    var name2 = productn[i+1].name;
                    var id2 = productn[i+1].id;
                    var isNew2 = productn[i+1].isNew;
                }
                str+='<ul>';
                    str+='<li>';
                        str+='<a href="javascript:;"><span><s><u><em>'+name1+'</em></u></s></span></a>';
                        str+='<img src="images/'+id1+'.png" alt="" />';
                if(isNew1==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                if (productn[i+1]!=null){
                    str+='<li>'
                        str+='<a href="javascript:;"><span><s><u><em>'+name2+'</em></u></s></span></a>';
                        str+='<img src="images/'+id2+'.png" alt="" />';
                if(isNew2==true){
                    str+='<i></i>';
                }
                    str+='</li>';
                }
              str+='</ul>';
              // return str;
             }
             $('.list_all').html(str);

            },error:function(e){
                 
            }
        })
    });
});