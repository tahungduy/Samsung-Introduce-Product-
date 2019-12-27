var a=[1,"gear2017.jpg","gear20171.jpg","gear20172.jpg","gear20173.jpg","gear20174.jpg"];
var b=[1,"control1.jpg","control2.jpg","control3.jpg","control4.jpg" ];
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
        id2=window.setInterval(truot,5);
//        truot();
    }
}