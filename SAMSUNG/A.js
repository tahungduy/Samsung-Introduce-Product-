
var a7={
    path:"a7.png",
    name:"SAMSUNG GALAXY A7 2018",
    HDH:"Hệ điều hành:   Android 8.0 (Oreo)",
    manhinh:"Màn hình:   	Super AMOLED, 6.0\", Full HD+",
    camsau:"Camera sau:   24 MP, 8 MP và 5 MP (3 camera)",
    camtruoc:"Camera trước:   24 MP",
    cpu:"CPU:   Exynos 7885 8 nhân 64-bit",
    ram:"RAM:	4 GB",
    bntrong:"   Bộ nhớ trong: 64 GB",
    SIM:"Thẻ SIM:   2 SIM Nano, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3300 mAh ",
};
var a72017={
    path:"a72017.png",
    name:"SAMSUNG GALAXY A7 2017",
    HDH:"Hệ điều hành:   	Android 6.0 (Marshmallow)",
    manhinh:"Màn hình:   Super AMOLED, 5.7\", Full HD",
    camsau:"Camera sau:   15 MP",
    camtruoc:"Camera trước:   16MP",
    cpu:"CPU:   Exynos 7880 8 nhân 64-bit",
    ram:"RAM:	3 GB",
    bntrong:"   32GB",
    SIM:"Thẻ SIM:   2 Nano SIM, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3600 mAh, có sạc nhanh",
};
var a8={
    path:"a8.png",
    name:"SAMSUNG GALAXY A8",
    HDH:"Hệ điều hành:   Android 7.1 (Nougat)",
    manhinh:"Màn hình:   Super AMOLED, 5.6\", Full HD+",
    camsau:"Camera sau:   16 MP",
    camtruoc:"Camera trước:  16 MP và 8 MP",
    cpu:"CPU:   	Exynos 7885 8 nhân 64-bit",
    ram:"RAM:	4 GB",
    bntrong:"   Bộ nhớ trong: 32 GB",
    SIM:"Thẻ SIM:   2 SIM Nano , Hỗ trợ 4G",
    pin:"Dung lượng pin:   3000 mAh, có sạc nhanh",
};
var a8plus={
    path:"a8+.png",
    name:"SAMSUNG GALAXY A8 PLUS",
    HDH:"Hệ điều hành:   Android 7.1 (Nougat)",
    manhinh:"Màn hình:   Super AMOLED, 6\", Full HD+",
    camsau:"Camera sau:   16 MP",
    camtruoc:"Camera trước:   16 MP và 8 MP",
    cpu:"CPU:   Exynos 7885 8 nhân 64-bit",
    ram:"RAM:	6 GB",
    bntrong:"   Bộ nhớ trong: 64 GB",
    SIM:"Thẻ SIM:   2 SIM Nano, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3500 mAh, có sạc nhanh",
    
};
var a8star={
    path:"a8str.png",
    name:"SAMSUNG GALAXY A8 STAR",
    HDH:"Hệ điều hành:   Android 8.0 (Oreo))",
    manhinh:"Màn hình:   Super AMOLED, 6.3\", Full HD+",
    camsau:"Camera sau:   24 MP và 16 MP (2 camera)",
    camtruoc:"Camera trước:   24 MP ",
    cpu:"CPU:   Qualcomm Snapdragon 660 8 nhân",
    ram:"RAM:	4 GB",
    bntrong:"   Bộ nhớ trong: 64 GB",
    SIM:"Thẻ SIM:   2 SIM Nano, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3700 mAh, có sạc nhanh",
    
};
var a9={
    path:"a9.png",
    name:"SAMSUNG GALAXY A9 2018",
    HDH:"Hệ điều hành:   Android 8.0 (Oreo)",
    manhinh:"Màn hình:   Super AMOLED, 6.3\", Full HD+)",
    camsau:"Camera sau:   24 MP, 10 MP, 8 MP và 5 MP (4 camera)",
    camtruoc:"Camera trước:   24 MP",
    cpu:"CPU:   Qualcomm Snapdragon 660 8 nhân",
    ram:"RAM:	6 GB",
    bntrong:"   Bộ nhớ trong: 128 GB",
    SIM:"Thẻ SIM:   2 SIM Nano  , Hỗ trợ 4G",
    pin:"Dung lượng pin:   3800 mAh, có sạc nhanh",
};
var a9pro={
    path:"a9pro.png",
    name:"SAMSUNG GALAXY A9 PRO",
    HDH:"Hệ điều hành:   Android 6.0 (Marshmallow)",
    manhinh:"Màn hình:  Super AMOLED, 6.0\", Full HD)",
    camsau:"Camera sau:     16 MP",
    camtruoc:"Camera trước:   8 MP",
    cpu:"CPU:   	Qualcomm Snapdragon 652 8 nhân",
    ram:"RAM:	4 GB",
    bntrong:"   Bộ nhớ trong: 32 GB",
    SIM:"Thẻ SIM:   2 SIM Nano  , Hỗ trợ 4G",
    pin:"Dung lượng pin:   	5000 mAh, có sạc nhanh",
    
};
function show(id,id2,hang,hang2){
    var t=document.getElementById(id);
    while (t.hasChildNodes()) {
        t.removeChild(t.firstChild);
    }
    var img=document.createElement("img");

    img.src=hang.path;
    var p1=document.createElement("p");
    p1.innerHTML=hang.name;
    var h=document.createElement("hr");
    var p2=document.createElement("p");
    p2.innerHTML=hang.HDH;  
    
    var p3=document.createElement("p");
    p3.innerHTML=hang.manhinh;
    
    var p4=document.createElement("p");
    p4.innerHTML=hang.camsau;
    
    var p5=document.createElement("p");
    p5.innerHTML=hang.camtruoc;
    
    var p6=document.createElement("p");
    p6.innerHTML=hang.cpu;
    
    var p7=document.createElement("p");
    p7.innerHTML=hang.ram;
    
    var p8=document.createElement("p");
    p8.innerHTML=hang.bntrong;
    
    var p9=document.createElement("p");
    p9.innerHTML=hang.SIM;
    
    var p10=document.createElement("p");
    p10.innerHTML=hang.pin;
    
    t.appendChild(img);
    t.appendChild(p1);
    t.appendChild(h);
    t.appendChild(p2);
    t.appendChild(p3);
    t.appendChild(p4); 
    t.appendChild(p5);
    t.appendChild(p6);
    t.appendChild(p7);
    t.appendChild(p8);
    t.appendChild(p9);
    t.appendChild(p9);
    t.appendChild(p10);
    t.style.display="block";
	show2(id2,hang2);
}

var a72017in={
	anh1:"a72017in1.jpg",
	anh2:"a72017in2.jpg",
	anh3:"a72017in3.jpg",
	anh4:"a72017in4.jpg",
	anh5:"a72017in5.jpg",
	big1:"Chụp Ảnh Đỉnh Cao",
	big2:"Trải Nghiệm Đẳng Cấp",
	big3:"Dung Lượng Pin Dài Lâu",
	big4:"Lưu Trữ Nhiều Nội Dung Yêu Thích",
	para1:"Ghi lại mọi hình ảnh sắc nét đến từng chi tiết nhờ vào sức mạnh của camera 16MP, khẩu độ lớn f/1.9. Đặc biệt nhiều chế độ chụp ảnh thông minh như Làm đẹp, Selfie bằng chuyển động tay, Khởi động nhanh... mang đến trải nghiệm thú vị hơn bao giờ hết.",
	para2:"Bảo vệ tin cậy cho bạn thoải mái tận hưởng cuộc sống ở bất kỳ nơi đâu. Galaxy A7 (2017) lần đầu tiên được tích hợp khả năng kháng bụi và nước IP68* và thách thức mọi trở ngại từ mưa bụi, giúp bạn luôn tự tin trong mọi hoàn cảnh.",
	para3:"Với thời lượng pin lớn thậm chí khi thực hiện nhiều tác vụ và tính năng sạc pin nhanh, bạn có thể thoải mái tiếp tục những công việc quan trọng.",
	para4:"Cân bằng hiệu suất tối đa đến hoàn hảo. Với dung lượng bộ nhớ mở rộng lên đến 256GB, bạn có thể lưu trữ nhiều nội dung giải trí đa phương tiện yêu thích trong khi vẫn tối ưu hóa hiệu suất Sim kép, đem lại sự tiện dụng tốt hơn khi đi du lịch.",
};
var a72018in={
	anh1:"a72018in2.jpg",
	anh2:"a72018in1.jpg",
	anh3:"a72018in3.jpg",
	anh4:"a72018in4.jpg",
	anh5:"a72018in5.jpg",
	big1:"Bộ 3 Camera Góc Chụp Siêu Rộng",
	big2:"Chụp Hoàn Hảo với Camera Thông Minh",
	big3:"Sống Động",
	big4:"Gấp Đôi Hiệu Năng",
	para1:"Mở rộng khung hình ấn tượng với Galaxy A7 (2018) sở hữu bộ 3 camera sau 24MP + 5MP + 8MP cho ống kính Góc Rộng và Siêu Rộng đỉnh cao đầu tiên của Samsung. Dễ dàng lưu giữ trọn vẹn mọi khoảnh khắc bạn yêu thích sống động và chân thực nhất.",
	para2:"Tự tin cho ra đời bức ảnh đẹp hoàn hảo với camera thông minh tích hợp công nghệ AI từ Galaxy A7 (2018) với khả năng nhận diện đến 19 bối cảnh, tự động cân bằng sắc trắng, tinh chỉnh mức sáng và độ bão hoà, cho mọi bức ảnh của bạn rực rỡ và sống động ở mức tối ưu nhất.",
	para3:"Đắm chìm vào từng vào khung cảnh trên tuyệt tác Màn Hình Tràn Viền Super AMOLED FHD+ rộng 6.0 inch chuẩn điện ảnh từ Galaxy A7 (2018) cho dải màu sắc rực rỡ và chuỗi hình ảnh tương phản sắc nét ấn tượng.",
	para4:"Sử dụng App Pair để dễ dàng theo dõi và quản lý song song hai ứng dụng như quay video và nhắn tin cùng một lúc. Tiết kiệm thời gian hiệu quả, chạy đa nhiệm mượt mà cho trải nghiệm hoàn hảo với Galaxy A7 (2018).",
};
var a8info={
	anh1:"a8in1.jpg",
	anh2:"a8in2.jpg",
	anh3:"a8in3.jpg",
	anh4:"a8in4.jpg",
	anh5:"a8in5.jpg",
	big1:"Nổi Bật Với Camera Selfie Kép",
	big2:"Màn Hình Tràn Viền Sống Động",
	big3:"Thanh Toán Một Chạm Samsung Pay Thời Thượng",
	big4:"Bứt Phá Giới Hạn",
	para1:"Galaxy A8 là dòng điện thoại đầu tiên của Samsung sở hữu camera Selfie kép cùng bạn tạo nên những bức ảnh Selfie độc đáo. Camera sau 16MP ghi lại mọi khoảnh khắc sáng rõ ngay cả khi thiếu sáng. Chỉ cần nhấn nút chụp và thỏa sức tạo kiểu, bạn sẽ lưu giữ ngay những khoảnh khắc vui nhộn cùng với bạn bè.",
	para2:"Galaxy A8 có viền màn hình siêu mảnh, thách thức ranh giới với tỷ lệ 18.5:9 chuẩn điện ảnh, mang lại cho bạn trải nghiệm giải trí trọn vẹn chưa từng có. Chất lượng màn hình Super AMOLED FullHD+ hiển thị nội dung sống động và tinh tế đến bất ngờ.",
	para3:"Trải nghiệm phương thức thanh toán thời thượng từ công nghệ tiên phong Samsung Pay trên Galaxy A8. Bảo mật tối ưu hơn, thanh toán dễ dàng hơn tại tất cả mọi nơi, Galaxy A8 xóa bỏ mọi giới hạn, khẳng định chất tôi.",
	para4:"Thay đổi phương thức chia sẻ và giúp cuộc sống của bạn dễ dàng hơn với các thiết bị Samsung và bộ ứng dụng dịch vụ của Phone+. Theo dõi hoạt động luyện tập với thiết bị đeo. Khám phá thế giới mới với Gear VR. Điều khiển ngôi nhà thông minh với Samsung Connect. Cho dù bạn đang thư giãn ở nhà hay trải nghiệm bên ngoài, cuộc sống của bạn luôn được nâng cao với những người bạn đồng hành Phone+ và Galaxy A8.",
};
function show2(id, hang){
	 var t=document.getElementById(id);
    while (t.hasChildNodes()) {
        t.removeChild(t.firstChild);
    }
	var img1=document.createElement("img");
    img1.src=hang.anh2;
    var h1=document.createElement("h1");
    h1.innerHTML=hang.big1;
	h1.setAttribute("id","bigword");
	var p1=document.createElement("p");
	p1.innerHTML=hang.para1;
	p1.setAttribute("class","kitu");
	
	var img2=document.createElement("img");
	img2.src=hang.anh3;
    var h2=document.createElement("h1");
    h2.innerHTML=hang.big2;
	h2.setAttribute("id","bigword");
	var p2=document.createElement("p");
	p2.innerHTML=hang.para2;
	p2.setAttribute("class","kitu");
	
	var img3=document.createElement("img");
	img3.src=hang.anh4;
    var h3=document.createElement("h1");
    h3.innerHTML=hang.big3;
	h3.setAttribute("id","bigword");
	var p3=document.createElement("p");
	p3.innerHTML=hang.para3;
	p3.setAttribute("class","kitu");
	
	var img4=document.createElement("img");
	img4.src=hang.anh5;
    var h4=document.createElement("h1");
    h4.innerHTML=hang.big4;
	h4.setAttribute("id","bigword");
	var p4=document.createElement("p");
	p4.innerHTML=hang.para4;
	p4.setAttribute("class","kitu");
	
	var img=document.createElement("img");
	img.src=hang.anh1;
	
	t.appendChild(img);
	t.appendChild(img1);
	t.appendChild(h1);
    t.appendChild(p1);
	t.appendChild(img2);
	t.appendChild(h2);
    t.appendChild(p2);
	t.appendChild(img3);
	t.appendChild(h3);
    t.appendChild(p3);
	t.appendChild(img4);
	t.appendChild(h4);
    t.appendChild(p4);

}


var thoigian;
function totop(){
	thoigian=window.setInterval(truot,5);
}


function truot(){
    var y=window.pageYOffset;
     y=y-10;
    if(y<=150){
        window.clearInterval(thoigian);
    }
    window.scroll(0,y);
}