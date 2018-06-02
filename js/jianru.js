window.onload = function(){
    //底层共用
    var audio = document.getElementById('music');           
        audio.play();
    var iBase = {
        Id: function(name){
            return document.getElementById(name);
        },
        //设置元素透明度,透明度值按IE规则计,即0~100
        SetOpacity: function(ev, v){
            ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
        }
    }
    //淡入效果(含淡入到指定透明度)
    function fadeIn(elem, speed, opacity){
        /*
         * 参数说明
         * elem==>需要淡入的元素
         * speed==>淡入速度,正整数(可选)
         * opacity==>淡入到指定的透明度,0~100(可选)
         */
        speed = speed || 20;
        opacity = opacity || 100;
        //显示元素,并将元素值为0透明度(不可见)
        elem.style.display = 'block';
        iBase.SetOpacity(elem, 0);
        //初始化透明度变化值为0
        var val = 0;
        //循环将透明值以5递增,即淡入效果
        (function(){
            iBase.SetOpacity(elem, val);
            val += 5;
            if (val <= opacity) {
                setTimeout(arguments.callee, speed)
            }
        })();
    }
    
    //淡出效果(含淡出到指定透明度)
    function fadeOut(elem, speed, opacity){
        /*
         * 参数说明
         * elem==>需要淡入的元素
         * speed==>淡入速度,正整数(可选)
         * opacity==>淡入到指定的透明度,0~100(可选)
         */
        speed = speed || 20;
        opacity = opacity || 0;
        //初始化透明度变化值为0
        var val = 100;
        //循环将透明值以5递减,即淡出效果
        (function(){
            iBase.SetOpacity(elem, val);
            val -= 5;
            if (val >= opacity) {
                setTimeout(arguments.callee, speed);
            }else if (val < 0) {
                //元素透明度为0后隐藏元素
                elem.style.display = 'none';
            }
        })();
    }

    var tui=document.getElementById('search-bg');
    var jin=document.getElementById('search-text');
    jin.onclick=function (){
        fadeIn(iBase.Id('zhua'),100);
        setTimeout(function(){fadeOut(iBase.Id('zhua'),100)},10000);
        }
    var a=document.getElementById('xuan');
    var b=document.getElementById('xuanka');
    var c=a.getElementsByTagName('li');
    var d=b.getElementsByTagName('ul');
    for (var i=0;i<c.length;i++)
        {
            c[i].index=i;
            c[i].onmouseover=function()
            {
                for(var i=0;i<c.length;i++)
                {
                    c[i].className='';
                    d[i].style.display='none';
                }
                c[this.index].className='hover';
                d[this.index].style.display='block';
            }
        }
        var aa=document.getElementById('shijian')
        var aImg=aa.getElementsByTagName('img');
    
    function tick(){
        var oDate=new Date();
        
        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
        
        for(var i=0;i<aImg.length;i++)
        {
            aImg[i].src='img/'+str[i]+'.png';
        }
    }
    setInterval(tick, 1000);
    tick();
}
