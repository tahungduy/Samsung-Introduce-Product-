var hinhanh=window.setInterval("ti",25000);
function chuyen1(vitri){
    var t=document.getElementById("ti");
    t.style.animation="none";
    if(vitri==1){
         t.style.left="0px";
    }
    else if(vitri==2){
        t.style.left="-1200px";
    }
    else if(vitri==3){
        t.style.left="-2400px";
    }
    else if(vitri==4){
        t.style.left="-3600px";
    }
    else if(vitri==5){
        t.style.left="-4800px";
    }
 
}
function chuyen(id,vitri){
    var t=document.getElementById("ti");
     var c=setTimeout(chuyen1(vitri) ,3000);
  }