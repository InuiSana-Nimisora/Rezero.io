
window.onload=function(){
            // 动画旋转
        var music = document.getElementById("music");    //获取音乐
        var musicico = document.getElementById("musicico");   //获取音乐图标
        var tem = false;  //设置一个变量，用来控制音乐是否在播放。
        
        //定义一个函数，当用户单击的时候触发这个函数，从而实现音乐的暂停与播放。
        musicico.onclick=function(){
            //tem用来控制音乐当前是否在播放。true代表音乐正在播放，false代表音乐当前正在处于暂停的状态。
            if(tem == false){
                music.play();  //播放音乐
                tem = true;  
                musicico.style.animationPlayState="running";  //播放音乐图标
            }else{
                music.pause();  //暂停音乐
                musicico.style.animationPlayState="paused"; //暂停音乐图标
                tem = false;
            }
        }
    var items=document.getElementsByClassName("item");
    var circles=document.getElementsByClassName("circle");
    var leftBtn=document.getElementById("btn-left");
    var rightBtn=document.getElementById("btn-right");
    var content=document.querySelector('.content');
    var index=0;
    var timer=null;
    
    //清除class
    var clearclass=function(){
        for(let i=0;i<items.length;i++){
            items[i].className="item";
            circles[i].className="circle";
            circles[i].setAttribute("num",i);
        }
    }
    /*只显示一个class*/
    function move(){
        clearclass();
        items[index].className="item active";
        circles[index].className="circle white";
    }
    move();
    //点击右边按钮切换下一张图片
    rightBtn.onclick=function(){
        if(index<items.length-1){
            index++;
        }
        else{
            index=0;
        }
        move();
    }
    //点击左边按钮切换上一张图片
    leftBtn.onclick=function(){
        if(index>0){
            index--;
        }
        else{
            index=items.length-1;
        }
        move();
    }
    //开始定时器，点击右边按钮，实现轮播
    timer=setInterval(function(){
        rightBtn.onclick();
    },1500)
    //点击圆点时，跳转到对应图片
    for(var i=0;i<circles.length;i++){
        circles[i].addEventListener("click",function(){
            var point_index=this.getAttribute("num");
            index=point_index;
            move();
        })
    
    }
    //鼠标移入清除定时器，并开启一个三秒的定时器，使慢慢转动
    content.onmouseover=function(){
        clearInterval(timer);
            timer=setInterval(function(){
                rightBtn.onclick();
            },3000)
    }
    //鼠标移出又开启定时器
    content.onmouseleave=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            rightBtn.onclick();
        },1500)
    }
    var bg = document.getElementsByClassName("box_bg");
    
    if((w/h) >= (1920/1080)){
        for(var i = 0;i < bg.length; i++){
           bg[i].style.width = w + 'px';
           bg[i].style.height = w * (1080/1920) + 'px';
           bg[i].style.top = -(w * (1080/1920) - h)/2 + 'px';
           bg[i].style.left = '0';
        }
    }
    else{
        for(var i = 0; i < bg.length; i++){
            bg[i].style.height = h + 'px';
            bg[i].style.width = h*(1920/1080) + 'px';
            bg[i].style.left = -(h*(1920/1080) - w)/2 + 'px';
            bg[i].style.top = '0';
        }
    }

    }

