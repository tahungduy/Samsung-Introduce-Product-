function checkIN(){
	var UserName=document.f.t1;
	var Pass=document.f.t2;
	var mauUser=/^[A-Za-z]+(\s[A-Za-z]+)*$/;
	var mauPass=/^[0-9]{8}$/
	var a=document.f.getElementsByTagName("span");
	if(mauUser.test(UserName.value)==false){
		a[0].style.display="block";
		a[0].style.color="red";
	}
	else {
		a[0].style.display="none";
	}
	if(mauPass.test(Pass.value)==false){
		a[1].style.display="block";
		a[1].style.color="red";
	}
	else {
		a[1].style.display="none";
	}
	if(mauUser.test(UserName.value)==true && mauPass.test(Pass.value)==true){
 	var logLink=document.getElementById("Link")
		logLink.style.display="block";
	}
}