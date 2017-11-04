/* 
* @Author: anchen
* @Date:   2017-08-25 14:23:08
* @Last Modified by:   anchen
* @Last Modified time: 2017-10-16 01:15:35
*/

function Product(){
    //名称
    this.name = '';
    this.name2 = '';
    //id
    this.id = '';
    this.id2 = '';
    //等级
    this.level = '';
    this.level2 = '';
    //是否新品
    this.isNew = '';
    this.isNew2 = '';
    //攻略
    this.title = '';
    this.span = '';
    this.author = '';
}

Product.prototype = {

  bindDom:function (){
    var str = '';

      str+='<ul>';
          str+='<li>';
            str+='<a href="javascript:;"><span><s><u><em>'+this.name+'</em></u></s></span></a>';
            str+='<img src="images/'+this.id+'.png" alt="" />';
            if(this.isNew==true){
                str+='<i></i>';
            }
          str+='</li>';
          if (this.name2){
            str+='<li>'
              str+='<a href="javascript:;"><span><s><u><em>'+this.name2+'</em></u></s></span></a>';
              str+='<img src="images/'+this.id2+'.png" alt="" />';
              if(this.isNew2==true){
                  str+='<i></i>';
              }
            str+='</li>';
          }
      str+='</ul>';

    return str;
  },
  inUl:function (){
    var ra = '';

    ra+='<li>'
      ra+='<a href="javascript:;" title="'+this.title+'">'
          ra+='<p><i></i><span>'+this.span+'</span></p>'
          ra+='<s>'+this.author+'</s>'
      ra+='</a>'
    ra+='</li>'

    return ra;
  }
}

$(document).ready(function(){

  // 式神
  var products = [
      {  
        "id": 291,   
        "level": "SR", 
        "name": "书翁",
        "isNew": true  
      },    
      {  
        "id": 289,   
        "level": "R", 
        "name": "兔丸",
        "isNew": true  
      },    
      {  
        "id": 290,   
        "level": "SR", 
        "name": "小松丸"
      },  
      {  
        "id": 288,   
        "level": "SSR", 
        "name": "彼岸花"
      },    
      {  
        "id": 287,   
        "level": "SR", 
        "name": "匣中少女"
      },    
      {  
        "id": 285,   
        "level": "SR", 
        "name": "鸩"
      },     
      {  
        "id": 286, 
        "level": "SR",   
        "name": "以津真天"
      },
      {
        "id": 283,
        "level": "SSR",
        "name": "荒"
      },{
        "id": 282,
        "level": "SR",
        "name": "金鱼姬"
      },{
        "id": 275,
        "level": "SR",
        "name": "万年竹"
      },{
        "id": 273,
        "level": "SR",
        "name": "青坊主"
        
      },{
        "id": 274,
        "level": "R",
        "name": "古笼火"
      },{
        "id": 276,
        "level": "SR",
        "name": "夜叉"
      },{
        "id": 277,
        "level": "SR",
        "name": "黑童子"
      },{
        "id": 278,
        "level": "SR",
        "name": "白童子"
      },{
        "id": 279,
        "level": "SSR",
        "name": "花鸟卷"
      },{
        "id": 281,
        "level": "SR",
        "name": "烟烟罗"
      },{
        "id": 280,
        "level": "SSR",
        "name": "辉夜姬"
      },
      {
        "id": 200,
        "name": "桃花妖",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649280.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649280.html"
      },
      {
        "id": 201,
        "name": "雪女",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/09/26/23027_644475.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20160919/23007_642923.html"
      },
      {
        "id": 202,
        "name": "三尾狐",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649273.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649273.html"
      },
      {
        "id": 203,
        "name": "灯笼鬼",
        "level": "N"
      },
      {
        "id": 205,
        "name": "座敷童子",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649191.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649191.html"
      },
      {
        "id": 206,
        "name": "鲤鱼精",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649194.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649194.html"
      },
      {
        "id": 207,
        "name": "九命猫",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649246.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649246.html"
      },
      {
        "id": 208,
        "name": "狸猫",
        "level": "R"
      },
      {
        "id": 209,
        "name": "河童",
        "level": "R"
      },
      {
        "id": 210,
        "name": "鬼使白",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649274.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649274.html"
      },
      {
        "id": 211,
        "name": "鬼使黑",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649272.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649272.html"
      },
      {
        "id": 212,
        "name": "童男",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649394.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649394.html"
      },
      {
        "id": 213,
        "name": "童女",
        "level": "R"
      },
      {
        "id": 214,
        "name": "饿鬼",
        "level": "R"
      },
      {
        "id": 215,
        "name": "孟婆",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649283.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649283.html"
      },
      {
        "id": 216,
        "name": "巫蛊师",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/18/23027_648574.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161018/23007_648574.html"
      },
      {
        "id": 217,
        "name": "大天狗",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649355.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649355.html"
      },
      {
        "id": 218,
        "name": "鸦天狗",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649248.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649248.html"
      },
      {
        "id": 219,
        "name": "酒吞童子",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649393.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649393.html"
      },
      {
        "id": 220,
        "name": "犬神",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649262.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649262.html"
      },
      {
        "id": 221,
        "name": "食发鬼",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649292.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649292.html"
      },
      {
        "id": 222,
        "name": "武士之灵",
        "level": "R"
      },
      {
        "id": 223,
        "name": "骨女",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649255.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649255.html"
      },
      {
        "id": 224,
        "name": "雨女",
        "level": "R"
      },
      {
        "id": 225,
        "name": "跳跳弟弟",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649300.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649300.html"
      },
      {
        "id": 226,
        "name": "跳跳妹妹",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649265.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649265.html"
      },
      {
        "id": 227,
        "name": "兵俑",
        "level": "R",
        "url_pc": "http://yys.163.com/shishen/2016/10/21/24447_648004.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161014/23007_648004.html"
      },
      {
        "id": 228,
        "name": "丑时之女",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649462.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649462.html"
      },
      {
        "id": 230,
        "name": "独眼小僧",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649200.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649200.html"
      },
      {
        "id": 231,
        "name": "鬼女红叶",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649258.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649258.html"
      },
      {
        "id": 232,
        "name": "铁鼠",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649198.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649198.html"
      },
      {
        "id": 233,
        "name": "跳跳哥哥",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649293.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649293.html"
      },
      {
        "id": 234,
        "name": "椒图",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649459.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649459.html"
      },
      {
        "id": 236,
        "name": "管狐",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649269.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649269.html"
      },
      {
        "id": 237,
        "name": "山兔",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/14/23027_648007.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161014/23007_648007.html"
      },
      {
        "id": 238,
        "name": "萤草",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649281.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649281.html"
      },
      {
        "id": 241,
        "name": "蝴蝶精",
        "level": "R",
        "url_pc": "http://tuku.yys.163.com/s/pic.html?id=57ee077c94ca6e410b5ccbb9&image_id=57ee09e8f874e86468839647",
        "url_m": "http://yys.163.com/m/tuku/work.html?id=57ee077c94ca6e410b5ccbb9&image_id=57ee09e8f874e86468839647"
      },
      {
        "id": 242,
        "name": "傀儡师",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649256.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649256.html"
      },
      {
        "id": 243,
        "name": "山童",
        "level": "R"
      },
      {
        "id": 244,
        "name": "首无",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649252.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649252.html"
      },
      {
        "id": 245,
        "name": "提灯小僧",
        "level": "N"
      },
      {
        "id": 246,
        "name": "赤舌",
        "level": "N"
      },
      {
        "id": 247,
        "name": "海坊主",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649257.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649257.html"
      },
      {
        "id": 248,
        "name": "荒川之主",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/yuhun/2016/10/21/23028_649347.html",
        "url_m": "http://yys.163.com/m/gonglve/yh/20161021/23008_649347.html"
      },
      {
        "id": 249,
        "name": "觉",
        "level": "R"
      },
      {
        "id": 250,
        "name": "青蛙瓷器",
        "level": "R",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649259.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649259.html"
      },
      {
        "id": 251,
        "name": "判官",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649254.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649254.html"
      },
      {
        "id": 252,
        "name": "凤凰火",
        "level": "SR",
        "url_pc": "http://yys.163.com/shishen/2016/10/24/24465_649344.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649344.html"
      },
      {
        "id": 253,
        "name": "吸血姬",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649276.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649276.html"
      },
      {
        "id": 254,
        "name": "妖狐",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649279.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649279.html"
      },
      {
        "id": 255,
        "name": "阎魔",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/09/29/23027_645510.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20160929/23007_645510.html"
      },
      {
        "id": 256,
        "name": "妖琴师",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649296.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649296.html"
      },
      {
        "id": 257,
        "name": "食梦貘",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649285.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649285.html"
      },
      {
        "id": 258,
        "name": "两面佛",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/19/23027_648987.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161019/23007_648987.html"
      },
      {
        "id": 259,
        "name": "小鹿男",
        "level": "SSR",
        "url_pc": "http://yys.163.com/shishen/2016/10/21/24472_649247.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649247.html"
      },
      {
        "id": 260,
        "name": "清姬",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649253.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649253.html"
      },
      {
        "id": 261,
        "name": "镰鼬",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649405.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649405.html"
      },
      {
        "id": 262,
        "name": "姑获鸟",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/24/23027_649266.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161024/23007_649266.html"
      },
      {
        "id": 263,
        "name": "二口女",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/10/23027_647067.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161010/23007_647067.html"
      },
      {
        "id": 264,
        "name": "白狼",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/09/29/23027_645517.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20160929/23007_645517.html"
      },
      {
        "id": 265,
        "name": "茨木童子",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649220.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649220.html"
      },
      {
        "id": 266,
        "name": "青行灯",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649250.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649250.html"
      },
      {
        "id": 267,
        "name": "樱花妖",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/21/23027_649339.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161021/23007_649339.html"
      },
      {
        "id": 268,
        "name": "惠比寿",
        "level": "SR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/09/29/23027_645519.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20160929/23007_645519.html"
      },
      {
        "id": 269,
        "name": "妖刀姬",
        "level": "SSR",
        "url_pc": "http://yys.163.com/skill/shishen/2016/10/20/23027_649236.html",
        "url_m": "http://yys.163.com/m/gonglve/ss/20161020/23007_649236.html"
      },
      {
        "id": 270,
        "name": "络新妇",
        "level": "SR"
      },
     
      {
        "id": 400,
        "name": "盗墓小鬼",
        "level": "N"
      },
      {
        "id": 401,
        "name": "寄生魂",
        "level": "N"
      },
      
      {
        "id": 403,
        "name": "唐纸伞妖",
        "level": "N"
      },
      {
        "id": 404,
        "name": "天邪鬼绿",
        "level": "N"
      },
      {
        "id": 405,
        "name": "天邪鬼赤",
        "level": "N"
      },
      {
        "id": 406,
        "name": "天邪鬼黄",
        "level": "N"
      },
      {
        "id": 407,
        "name": "天邪鬼青",
        "level": "N"
      },
      {
        "id": 408,
        "name": "帚神",
        "level": "N"
      },
      {
        "id": 409,
        "name": "涂壁",
        "level": "N"
      },
      {
        "id": 272,
        "name": "一目连",
        "level": "SSR"
      },
      {
        "id": 271,
        "name": "般若",
        "level": "SR"
      }
]

var productssr = [];
var productsr = [];
var productr = [];
var productn = [];
// for(var j=0;j<4;j++){
//   productssr = [];
//   for(var i=0;i<products.length;i++){

//     if(products[i].level == "SSR"){
//       productssr.push(products[i])
//     }
//   }
//   for (var i=0;i<productssr.length;i+=2){

//       var goods = new Product();
//       goods.name = productssr[i].name;
//       goods.id = productssr[i].id;
//       goods.level = productssr[i].level;
//       goods.isNew = productssr[i].isNew;

//       if (productssr[i+1]!=null){
              
//           goods.name2 = productssr[i+1].name;
//           goods.id2 = productssr[i+1].id;
//           goods.level2 = productssr[i+1].level;
//           goods.isNew2 = productssr[i+1].isNew;
//       }
      
//       boxSSR += goods.bindDom();

//   }
// }
for(var i=0;i<products.length;i++){
  switch(products[i].level){
    case "SSR":productssr.push(products[i]);break;
    case "SR":productsr.push(products[i]);break;
    case "R":productr.push(products[i]);break;
    case "N":productn.push(products[i]);break;
  }
}

  var boxAll = '';
  //全部数据
  for (var i=0;i<products.length;i+=2){

      var goods = new Product();
      goods.name = products[i].name;
      goods.id = products[i].id;
      goods.level = products[i].level;
      goods.isNew = products[i].isNew;

      if (products[i+1]!=null){
              
          goods.name2 = products[i+1].name;
          goods.id2 = products[i+1].id;
          goods.level2 = products[i+1].level;
          goods.isNew2 = products[i+1].isNew;
      }
      
      boxAll += goods.bindDom();

  }

  var boxSSR = '';
  //SSR数据
  for (var i=0;i<productssr.length;i+=2){

      var goods = new Product();
      goods.name = productssr[i].name;
      goods.id = productssr[i].id;
      goods.level = productssr[i].level;
      goods.isNew = productssr[i].isNew;

      if (productssr[i+1]!=null){
              
          goods.name2 = productssr[i+1].name;
          goods.id2 = productssr[i+1].id;
          goods.level2 = productssr[i+1].level;
          goods.isNew2 = productssr[i+1].isNew;
      }

      boxSSR += goods.bindDom();
  }

  var boxSR = '';
  //SR数据
  for (var i=0;i<productsr.length;i+=2){

      var goods = new Product();
      goods.name = productsr[i].name;
      goods.id = productsr[i].id;
      goods.level = productsr[i].level;
      goods.isNew = productsr[i].isNew;

      if (productsr[i+1]!=null){
              
          goods.name2 = productsr[i+1].name;
          goods.id2 = productsr[i+1].id;
          goods.level2 = productsr[i+1].level;
          goods.isNew2 = productsr[i+1].isNew;
      }
      
      boxSR += goods.bindDom();
  }

  var boxR = '';
  //R数据
  for (var i=0;i<productr.length;i+=2){

      var goods = new Product();
      goods.name = productr[i].name;
      goods.id = productr[i].id;
      goods.level = productr[i].level;
      goods.isNew = productr[i].isNew;

      if (productr[i+1]!=null){
              
          goods.name2 = productr[i+1].name;
          goods.id2 = productr[i+1].id;
          goods.level2 = productr[i+1].level;
          goods.isNew2 = productr[i+1].isNew;
      }
      
      boxR += goods.bindDom();
  }

  var boxN = '';
  //N数据
  for (var i=0;i<productn.length;i+=2){

      var goods = new Product();
      goods.name = productn[i].name;
      goods.id = productn[i].id;
      goods.level = productn[i].level;
      goods.isNew = productn[i].isNew;

      if (productr[i+1]!=null){
              
          goods.name2 = productn[i+1].name;
          goods.id2 = productn[i+1].id;
          goods.level2 = productn[i+1].level;
          goods.isNew2 = productn[i+1].isNew;
      }
      
      boxN += goods.bindDom();
  }

  if ($('.all').is('.on')){
    $('.list_all').html(boxAll);
  }

  $.fn.extend({
    iData:function(arrayL,data,hh){
      var la = Math.ceil((arrayL.length/2))*138;
      $(this).on('click', function(event) {
        $('.list_all').css('width', la).html(data);

        if (hh == true){
          $('.next').hide();
          $('.prev').hide();
        }
      });
    }
  })

  $('.all').iData(products,boxAll);
  $('.ssr').iData(productssr,boxSSR);
  $('.sr').iData(productsr,boxSR);
  $('.r').iData(productr,boxR);
  $('.n').iData(productn,boxN,true);

// 攻略
  var raiders = [
    {  
    "title": "天青色等烟雨而我在等你——青花瓷防战后手椒图队冲跨服前十",
    "span": "【玩法】 天青色等烟雨而我在等你——青花瓷防战后手椒图队冲跨服前十",
    "author": "作者：好了啦乖别闹",
    "tabs": "one"
    },{  
    "title": "安利一波犬神，无兵勇后手犬斗花心得",
    "span": "【式神】 安利一波犬神，无兵勇后手犬斗花心得",
    "author": "作者：好了啦乖别闹",
    "tabs": "one"
    },{  
    "title": "食茨青坊主魂十的属性要求计算",
    "span": "【玩法】 食茨青坊主魂十的属性要求计算",
    "author": "作者：SolarExplode",
    "tabs": "one"
    },{  
    "title": "[雨女10] 鱼头神教大胜利！",
    "span": "【玩法】 [雨女10] 鱼头神教大胜利！",
    "author": "作者：Harukaede",
    "tabs": "one"
    },{  
    "title": "荒川睡杀入门养成攻略",
    "span": "【玩法】 荒川睡杀入门养成攻略",
    "author": "作者：holahola傻兔",
    "tabs": "one"
    },{  
    "title": "3200分鸟姐核心输出心得",
    "span": "【式神】 3200分鸟姐核心输出心得",
    "author": "作者：草爷",
    "tabs": "one"
    },{  
    "title": "1000分直达2400！！协斗新版本是强控的天下！",
    "span": "【玩法】 1000分直达2400！！协斗新版本是强控的天下！",
    "author": "作者：蹦豆",
    "tabs": "one"
    },{  
    "title": "变形之章后手队挣扎指北",
    "span": "【玩法】 变形之章后手队挣扎指北",
    "author": "作者：holahola傻兔",
    "tabs": "one"
    },{  
    "title": "安利一波犬神，3000分阿黄分斗花心得",
    "span": "【斗技】 安利一波犬神，3000分阿黄分斗花心得",
    "author": "作者：草爷",
    "tabs": "one"
    },{  
    "title": "无花中速队跨服3000达成！翻牌阶段的博弈小感",
    "span": "【玩法】 无花中速队跨服3000达成！翻牌阶段的博弈小感",
    "author": "作者：高速公鹿",
    "tabs": "one"
    },{  
    "title": "【伞剑的守护】第十层攻略（仅供参考）",
    "span": "【新手】 【伞剑的守护】第十层攻略（仅供参考）",
    "author": "作者：小gin",
    "tabs": "two"
    },{  
    "title": "资源的合理利用姿势 道具使用技巧",
    "span": "【新手】 资源的合理利用姿势 道具使用技巧",
    "author": "作者：Yeno1996",
    "tabs": "two"
    },{  
    "title": "阴阳师辅助式神排名，快来看你培养对了没",
    "span": "【新手】 阴阳师辅助式神排名，快来看你培养对了没",
    "author": "作者：手游神回复",
    "tabs": "two"
    },{  
    "title": "秘闻！双奶过河童本十层",
    "span": "【新手】 秘闻！双奶过河童本十层",
    "author": "作者：龙仕少爷",
    "tabs": "two"
    },{  
    "title": "【新手】40级阴阳师的合理式神搭配",
    "span": "【新手】 【新手】40级阴阳师的合理式神搭配",
    "author": "作者：垣语刖",
    "tabs": "two"
    },{  
    "title": "【新手】友谊的见证！好友羁绊打开方式",
    "span": "【新手】 【新手】友谊的见证！好友羁绊打开方式",
    "author": "作者：吴妍",
    "tabs": "two"
    },{  
    "title": "时间静止，开启魂10之路",
    "span": "【新手】 时间静止，开启魂10之路",
    "author": "作者：水之生灵",
    "tabs": "two"
    },{  
    "title": "阴阳师主流四治疗大盘点！",
    "span": "【新手】 阴阳师主流四治疗大盘点！",
    "author": "作者：秋瓷的好爸爸",
    "tabs": "two"
    },{  
    "title": "全【御魂】详解与欣赏",
    "span": "【新手】 全【御魂】详解与欣赏",
    "author": "作者：流浪的书生",
    "tabs": "two"
    },{  
    "title": "有奶便是娘！热门治疗式神推荐",
    "span": "【新手】 有奶便是娘！热门治疗式神推荐",
    "author": "作者：itmo爱萌游戏",
    "tabs": "two"
    },{  
    "title": "安利一波犬神，无兵勇后手犬斗花心得",
    "span": "【式神】 安利一波犬神，无兵勇后手犬斗花心得",
    "author": "作者：好了啦乖别闹",
    "tabs": "three"
    },{  
    "title": "荒川睡杀入门养成攻略",
    "span": "【式神】 荒川睡杀入门养成攻略",
    "author": "作者：holahola傻兔",
    "tabs": "three"
    },{  
    "title": "3200分鸟姐核心输出心得",
    "span": "【式神】 3200分鸟姐核心输出心得",
    "author": "作者：草爷",
    "tabs": "three"
    },{  
    "title": "金鱼姬：对不起你的多动可能会让你团灭喵~",
    "span": "【式神】 金鱼姬：对不起你的多动可能会让你团灭喵~",
    "author": "作者：蓝老师",
    "tabs": "three"
    },{  
    "title": "阎魔斗技之大型攻略",
    "span": "【式神】 阎魔斗技之大型攻略",
    "author": "作者：悲伤丶依旧",
    "tabs": "three"
    },{  
    "title": "海坊主：差个皮肤就是SSR的全能奶霸",
    "span": "【式神】 海坊主：差个皮肤就是SSR的全能奶霸",
    "author": "作者：不闻青梅",
    "tabs": "three"
    },{  
    "title": "R独眼小僧：输出全靠弹弹弹！",
    "span": "【式神】 R独眼小僧：输出全靠弹弹弹！",
    "author": "作者：Yeno1996",
    "tabs": "three"
    },{  
    "title": "SSR 荒：一个颜狗不能错过的式神！",
    "span": "【式神】 SSR 荒：一个颜狗不能错过的式神！",
    "author": "作者：Yeno1996",
    "tabs": "three"
    },{  
    "title": "SSR辉夜姬：卖鬼火的小女孩向你招手！",
    "span": "【式神】 SSR辉夜姬：卖鬼火的小女孩向你招手！",
    "author": "作者：Yeno1996",
    "tabs": "three"
    },{  
    "title": "SR黑童子：别奶我，我要砍人！",
    "span": "【式神】 SR黑童子：别奶我，我要砍人！",
    "author": "作者：Yeno1996",
    "tabs": "three"
    },{  
    "title": "安利一波犬神，3000分阿黄分斗花心得",
    "span": "【斗技】 安利一波犬神，3000分阿黄分斗花心得",
    "author": "作者：草爷",
    "tabs": "four"
    },{  
    "title": "斗技编年史三：被般若强控流统治的时代到来了！",
    "span": "【斗技】 斗技编年史三：被般若强控流统治的时代到来了！",
    "author": "作者：Yeno1996",
    "tabs": "four"
    },{  
    "title": "斗技编年史二：椒图反击，小僧反伤，曾经属于反手流的时代！",
    "span": "【斗技】 斗技编年史二：椒图反击，小僧反伤，曾经属于反手流的时代！",
    "author": "作者：Yeno1996",
    "tabs": "four"
    },{  
    "title": "斗技编年史一：镜姬白蛋，一拳超人统治的时代！",
    "span": "【斗技】 斗技编年史一：镜姬白蛋，一拳超人统治的时代！",
    "author": "作者：Yeno1996",
    "tabs": "four"
    },{  
    "title": "斗技系统-核心输出培养推荐",
    "span": "【斗技】 斗技系统-核心输出培养推荐",
    "author": "作者：真白",
    "tabs": "four"
    },{  
    "title": "逆转的胜利！反击流式神阵容推荐！",
    "span": "【斗技】 逆转的胜利！反击流式神阵容推荐！",
    "author": "作者：迷い子",
    "tabs": "four"
    },{  
    "title": "青行灯，美腿姐姐的全面剖析！",
    "span": "【斗技】 青行灯，美腿姐姐的全面剖析！",
    "author": "作者：散佚ROMA",
    "tabs": "four"
    },{  
    "title": "尾速妖琴师 —— 好吧，再给你一次机会",
    "span": "【斗技】 尾速妖琴师 —— 好吧，再给你一次机会",
    "author": "作者：晚风大神",
    "tabs": "four"
    },{  
    "title": "强势R卡，正面挑战SSR！",
    "span": "【斗技】 强势R卡，正面挑战SSR！",
    "author": "作者：无法回头的非酋",
    "tabs": "four"
    },{  
    "title": "小小黑反杀阵容+雨女十层攻略",
    "span": "【斗技】 小小黑反杀阵容+雨女十层攻略",
    "author": "作者：把子小天使",
    "tabs": "four"
    },{  
    "title": "天青色等烟雨而我在等你——青花瓷防战后手椒图队冲跨服前十",
    "span": "【玩法】 天青色等烟雨而我在等你——青花瓷防战后手椒图队冲跨服前十",
    "author": "作者：好了啦乖别闹",
    "tabs": "five"
    },{  
    "title": "食茨青坊主魂十的属性要求计算",
    "span": "【玩法】 食茨青坊主魂十的属性要求计算",
    "author": "作者：SolarExplode",
    "tabs": "five"
    },{  
    "title": "[雨女10] 鱼头神教大胜利！",
    "span": "【玩法】 [雨女10] 鱼头神教大胜利！",
    "author": "作者：Harukaede",
    "tabs": "five"
    },{  
    "title": "荒川睡杀入门养成攻略",
    "span": "【玩法】 荒川睡杀入门养成攻略",
    "author": "作者：好了啦乖别闹",
    "tabs": "five"
    },{  
    "title": "1000分直达2400！！协斗新版本是强控的天下！",
    "span": "【玩法】 1000分直达2400！！协斗新版本是强控的天下！",
    "author": "作者：蹦豆",
    "tabs": "five"
    },{  
    "title": "变形之章后手队挣扎指北",
    "span": "【玩法】 变形之章后手队挣扎指北",
    "author": "作者：holahola傻兔",
    "tabs": "five"
    },{  
    "title": "无花中速队跨服3000达成！翻牌阶段的博弈小感",
    "span": "【玩法】 无花中速队跨服3000达成！翻牌阶段的博弈小感",
    "author": "作者：高速公鹿",
    "tabs": "five"
    },{  
    "title": "镰鼬秘闻副本速通攻略！",
    "span": "【玩法】 镰鼬秘闻副本速通攻略！",
    "author": "作者：清逸喵",
    "tabs": "five"
    },{  
    "title": "非椒图体系反手流派开发---浅谈基于金连体系下的阵容针对",
    "span": "【玩法】 非椒图体系反手流派开发---浅谈基于金连体系下的阵容针对",
    "author": "作者：拽拽的SAMA殇",
    "tabs": "five"
    },{  
    "title": "式神委派任务推荐式神详解",
    "span": "【玩法】 式神委派任务推荐式神详解",
    "author": "作者：温文尔雅的少年",
    "tabs": "five"
    },
  ]
  var one = '';
  var two = '';
  var three = '';
  var four = '';
  var five = '';

  for (var i=0;i<raiders.length;i++){
    if (raiders[i].tabs=="one"){
      var list = new Product();
      list.title = raiders[i].title;
      list.span = raiders[i].span;
      list.author = raiders[i].author;
      
      one += list.inUl();
    }
    if (raiders[i].tabs=="two"){
      var list = new Product();
      list.title = raiders[i].title;
      list.span = raiders[i].span;
      list.author = raiders[i].author;
      
      two += list.inUl();
    }
    if (raiders[i].tabs=="three"){
      var list = new Product();
      list.title = raiders[i].title;
      list.span = raiders[i].span;
      list.author = raiders[i].author;
      
      three += list.inUl();
    }
    if (raiders[i].tabs=="four"){
      var list = new Product();
      list.title = raiders[i].title;
      list.span = raiders[i].span;
      list.author = raiders[i].author;
      
      four += list.inUl();
    }
    if (raiders[i].tabs=="five"){
      var list = new Product();
      list.title = raiders[i].title;
      list.span = raiders[i].span;
      list.author = raiders[i].author;
      
      five += list.inUl();
    }
  }

  var otf =[one,two,three,four,five]
  for (var i=0;i<otf.length;i++){
    $('.rac_list').append($('<ul></ul>').html(otf[i]));
  }
});