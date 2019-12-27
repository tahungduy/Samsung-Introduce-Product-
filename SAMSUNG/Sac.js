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
var a=[1,"kday20175.jpg","kdayep20172.jpg","kdayep20171.jpg","kdayep20173.jpg","kday20174.jpg"];
var b=[1,"epin1.jpg","epn61.jpg","epn62.jpg","empn63.jpg","epn64.jpg"];
var c=[1,"pg950.jpg","pg953.jpg","pg951.jpg","pg952.jpg","pg954.jpg"];
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

