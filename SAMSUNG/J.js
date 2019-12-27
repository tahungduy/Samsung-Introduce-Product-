var j6={
    path:"J6.png",
    name:"SAMSUNG GALAXY J6",
    HDH:"Hệ điều hành:   Android 8.0 (Oreo)",
    manhinh:"Màn hình:  Super AMOLED, 5.6 inch, HD\+",
    camsau:"Camera sau:   13 MP",
    camtruoc:"Camera trước:   8 MP",
    cpu:"Exynos 7870 8 nhân 64-bit",
    ram:"RAM:   3 GB",
    bntrong:"Bộ nhớ trong:   32 GB",
    SIM:"Thẻ SIM:   2 Nano SIM, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3000 mAh",
    
};
var j6plus={
    path:"j6+.png",
    name:"SAMSUNG GALAXY J6 PLUS",
    HDH:"Hệ điều hành:   Android 8.1 (Oreo)",
    manhinh:"Màn hình:   Super AMOLED, 6 inch,HD+ (720 × 1480 Pixels)",
    camsau:"Camera sau:   13 MP",
    camtruoc:"Camera trước:   5 MP",
    cpu:"CPU:   Qualcomm Snapdragon 425 4 nhân 64-bit",
    ram:"RAM:	3 GB",
    bntrong:"   Bộ nhớ trong: 32 GB",
    SIM:"Thẻ SIM:   1 Nano SIM, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3300 mAh",
    
};
 
 
var j7={
    path:"j7.png",
    name:"SAMSUNG GALAXY J7",
    HDH:"Hệ điều hành:   Android 5.1 (Lollipop))",
    manhinh:"Màn hình:   Super AMOLED, 5.5\", HD",
    camsau:"Camera sau:   13 MP",
    camtruoc:"Camera trước:   5 MP",
    cpu:"CPU:   Exynos 7580 8 nhân 64-bit",
    ram:"RAM:	1.5 GB",
    bntrong:"   Bộ nhớ trong: 16 GB",
    SIM:"Thẻ SIM:  2 Micro SIM",
    pin:"Dung lượng pin:   3000 mAh",
};
var j7prime={
    path:"j7prime.png",
    name:"SAMSUNG GALAXY J7 PRIME",
    HDH:"Hệ điều hành:   Android 6.0 (Marshmallow)",
    manhinh:"Màn hình:   PLS TFT LCD, 5.5\", Full HD",
    camsau:"Camera sau:   13 MP",
    camtruoc:"Camera trước:   8",
    cpu:"CPU:   Exynos 7870 8 nhân 64-bit",
    ram:"RAM:	3 GB",
    bntrong:"   32 GB",
    SIM:"Thẻ SIM:   2 Nano SIM, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3300 mAh",
};
var j7plus={
    path:"j7+.png",
    name:"SAMSUNG GALAXY J7 PRIME",
    HDH:"Hệ điều hành:   Android 7.0 (Nougat)",
    manhinh:"Màn hình:   	Super AMOLED, 5.5\", Full HD)",
    camsau:"Camera sau:   13 MP và 5 MP (2 camera)",
    camtruoc:"Camera trước:   16 MP",
    cpu:"CPU:   	Mediatek Helio P25 Lite 8 nhân",
    ram:"RAM:	4 GB",
    bntrong:"   Bộ nhớ trong: 32 GB",
    SIM:"Thẻ SIM:   2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
    pin:"Dung lượng pin:   3000 mAh ",
};
var j7pro={
    path:"j8pro.png",
    name:"SAMSUNG GALAXY J7 PRO",
    HDH:"Hệ điều hành:   Android 7.0 (Nougat)",
    manhinh:"Màn hình:   Super AMOLED, 5.8 inch, Quad HD+ (2K+))",
    camsau:"Camera sau:   13 MP",
    camtruoc:"Camera trước:   5 MP",
    cpu:"CPU:   Exynos 7580 8 nhân 64-bit",
    ram:"RAM:	1.5 GB",
    bntrong:"   Bộ nhớ trong: 16 GB",
    SIM:"Thẻ SIM:   2 Micro SIM",
    pin:"Dung lượng pin:   3000 mAh ",
};
var j8={
    path:"j8.png",
    name:"SAMSUNG GALAXY J8",
    HDH:"Hệ điều hành:   Android 8.0 (Oreo)",
    manhinh:"Màn hình:   Super AMOLED, 6.0\", HD+",
    camsau:"Camera sau:   16 MP và 5 MP (2 camera)",
    camtruoc:"Camera trước:   16 MP",
    cpu:"CPU:   Qualcomm Snapdragon 450 8 nhân 64-bit",
    ram:"RAM:	3 GB",
    bntrong:"   Bộ nhớ trong: 32 GB",
    SIM:"Thẻ SIM:   2 SIM Nano , Hỗ trợ 4G",
    pin:"Dung lượng pin:   3500 mAh ",
    
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

var j6in={
	anh1:"j6in1.jpg",
	anh2:"j6in2.png",
	anh3:"j6in3.jpg",
	anh4:"j6in4.jpg",
	anh5:"j6in5.jpg",
	big1:"Sắc Màu Sống Động với Màn Hình sAMOLED",
	big2:"Ba Mức Độ Sáng Vượt Trội",
	big3:"Đa Nhiệm Mượt Mà Trên Màn Hình Lý Tưởng",
	big4:"Linh Hoạt Chuyển Đổi Tin Nhắn Cá Nhân và Công Việc",
	para1:"Tận hưởng sắc màu sống động, độ phân giải ấn tượng trên Màn Hình Vô Cực 5.6 inch HD+. Công nghệ Super AMOLED cùng tỷ lệ 18.5:9 mang đến độ bao phủ màn hình tối đa, cho trải nghiệm xem bất tận đỉnh cao.",
	para2:"Cho bức hình selfie thêm rõ ràng sắc nét, chống loá hiệu quả với ba mức độ sáng từ đèn flash tại camera trước của Galaxy J6. Bắt trọn mọi khoảnh khắc sống động về đêm.",
	para3:"Thiết kế Màn Hình Tràn Viền 5.6 inch của Galaxy J6 lý tưởng cho mọi nhu cầu chạy đa nhiệm như chơi game, nhắn tin hoặc lướt web. Sử dụng App Pair để quản lý hai tác vụ cùng một lúc, thoải mái xem nội dung tin nhắn ngay khi đang xem phim, mà không gián đoạn.",
	para4:"Tách biệt giữa tin nhắn công việc và các cuộc trò chuyện cá nhân. Với Dual Messenger, bạn dễ dàng kết nối hai tài khoản nhắn tin khác nhau trên ứng dụng nhắn tin yêu thích - Nhanh chóng cài đặt tài khoản thứ hai ngay tại màn hình chính.",
};

var j6plusin={
	anh1:"j6+in1.jpg",
	anh2:"j6+in2.jpg",
	anh3:"j6+in3.jpg",
	anh4:"j6+in4.jpg",
	anh5:"6+in5.jpg",
	big1:"Màn Hình Tràn Viền 6.0 inch Ấn Tượng",
	big2:"Camera Kép Chinh Phục Bóng Tối",
	big3:"Đa Nhiệm Mạnh Mẽ",
	big4:"Xoá Phông Chuyên Nghiệp",
	para1:" Đắm chìm trong thế giới giải trí đỉnh cao với Màn Hình Tràn Viền HD+ 6.0 inch ấn tượng, tỷ lệ chuẩn điện ảnh tối ưu 18.5:9 từ Galaxy J6+. Trọng lượng gọn nhẹ kết hợp thiết kế mỏng tinh tế cho bạn thoải mái tận hưởng mọi nội dung yêu thích.",
	para2:"Thách thức bóng tối, chinh phục mọi cơ hội với tuyệt đỉnh camera sau kép 13MP (F1.9) / 5MP (F2.2) kết hợp camera trước 8MP giúp bạn thoả sức chụp ảnh ngay cả khi thiếu sáng. Selfie thêm sắc nét và rực rỡ với đèn flash LED ba mức độ sáng vượt trội từ camera trước của Galaxy J6+.",
	para3:"Tận hưởng khả năng chạy đa nhiệm mạnh mẽ từ Galaxy J6+ giúp bạn thoả sức chơi game, nhắn tin và lướt web trên màn hình 6.0 inch HD+ lý tưởng. Sử dụng App Pair để quản lý hai ứng dụng cùng một lúc, cho trải nghiệm liền mạch hoàn hảo. ",
	para4:"Thoả sức sáng tạo, tự tin cho ra đời bức ảnh mang đậm màu sắc riêng của bạn với tính năng xoá phông nghệ thuật kết hợp các bộ lọc bokeh đặc sắc trong bộ đôi camera sau kép tiên tiến từ Galaxy J6+.",
};

var j7in={
	anh1:"j7in1.jpg",
	anh2:"j7in2.jpg",
	anh3:"j7in3.jpg",
	anh4:"j7in5.jpg",
	anh5:"j7in4.jpg",
	big1:"Vẻ Ngoài Thanh Lịch, Mạnh Mẽ",
	big2:" Lưu Giữ Khoảnh Khắc Cuộc Sống",
	big3:"Hoàn Hảo Mọi Khung Hình",
	big4:"S-Bike Giữ An Toàn Tay Lái",
	para1:"Chất liệu cứng cáp giúp bảo vệ vẻ ngoài thanh lịch của điện thoại với khung kim loại phủ toàn thân cao cấp, được chế tác tinh xảo. Bạn có thể yên tâm sử dụng điện thoại trong thời gian dài vì thiết bị đã được bảo vệ tối đa.",
	para2:"Giữ lấy mọi khoảnh khắc đáng nhớ qua những bức ảnh sắc nét kể cả trong điều kiện ánh sáng yếu với camera trước sau siêu nhạy, khẩu độ F1.9. Tuyệt vời hơn, bạn chỉ cần nhấn nút Home 2 lần để khởi động camera.",
	para3:"Những bức ảnh của bạn sẽ đẹp hoàn hảo mọi góc độ, mọi lúc, mọi nơi và lấy cả khung cảnh rộng đằng sau. Đèn LED đằng trước, chế độ Beauty Mode giúp bức hình đẹp ấn tượng, trong khi chế độ Nhận Diện Tay cho bạn bức hình hoàn hảo hơn.",
	para4:"Bạn luôn được bảo đảm an toàn khi lái xe với ứng dụng S-Bike độc quyền được tích hợp sẵn giúp lọc cuộc gọi khẩn cấp khi lái xe và chỉ thực hiện cuộc gọi khi dừng xe an toàn.",
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