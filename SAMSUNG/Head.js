var id2;
var clickinfo=0;
function viewmore(id,seen,cli){
    if(cli==0){
    var  t=document.getElementById(id);
    t.style.display="block";
    var t1=document.getElementById(seen);
        t1.style.display="none";
        clickinfo=1;
    }
    else if(cli==1){
        var  t=document.getElementById(id);
        t.style.display="none"; 
        var t1=document.getElementById(seen);
        t1.style.display="block";
        clickinfo=0;
        id2=window.setInterval(truot,5);
    }
    
}
var a=[ 1,"EG920.jpg","EG920red.jpg","EG920blue.jpg","EG920red2.jpg","allEG920.jpg"];
var b=[1,"IconX1.jpg","IconX2.jpg","IconX3.jpg","IconX4.jpg","IconX5.jpg"];
var c=[1,"bottle1.jpg","bottle2.jpg","bottle3.jpg","bottle4.jpg","bottle6.jpg"];
function trai(anh,hang){
    if(hang[0]>1){
        hang[0]--;
        var t=document.getElementById(anh);
        t.src=hang[hang[0]];
    }
}
function phai(anh,hang){
    if(hang[0]<hang.length-1){
        var t=document.getElementById(anh);
//        count++;
        hang[0]++;
        t.src=hang[hang[0]] ;
        
    }
}
function truot(){
    var y=window.pageYOffset;
     y=y-10;
    if(y<=0){
        window.clearInterval(id2);
    }
    window.scroll(0,y);
}
