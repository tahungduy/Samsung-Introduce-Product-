var fe={
    path:"FE.png",
    name:"SAMSUNG GALAXY NOTE FE",
    HDH:"Hệ điều hành:   Android 7.0 (Nougat)",
    manhinh:"Màn hình:   Super AMOLED, 5.7 inch, Quad HD (2K)",
    camsau:"Camera sau:   12 MP",
    camtruoc:"Camera trước:   5 MP",
    cpu:"Exynos 8890 8 nhân 64-bit",
    ram:"RAM:   4 GB",
    bntrong:"Bộ nhớ trong:   64 GB",
    SIM:"Thẻ SIM:   2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
    pin:"Dung lượng pin:   3500 mAh, có sạc nhanh",
    
};
var note8={
    path:"note8.png",
    name:"SAMSUNG GALAXY NOTE 8",
    HDH:"Hệ điều hành:   Android 7.1 (Nougat)",
    manhinh:"Màn hình:   Super AMOLED, 6.3\", Quad HD+ (2K+)",
    camsau:"Camera sau:   2 camera 12 MP",
    camtruoc:"Camera trước:   8 MP",
    cpu:"CPU:   Exynos 8895 8 nhân 64-bit",
    ram:"RAM:   6 GB",
    bntrong:"Bộ nhớ trong:   64 GB",
    SIM:"Thẻ SIM:   2 Nano SIM, Hỗ trợ 4G",
    pin:"Dung lượng pin:   3300 mAh",

    
};
var note9={
    path:"note9.png",
    name:"SAMSUNG GALAXY NOTE 9",
    HDH:"Hệ điều hành:   Android 8.1 (Oreo)",
    manhinh:"Màn hình:   Super AMOLED, 6.4\", Quad HD+ (2K+)",
    camsau:"Camera sau:   2 camera 12 MP",
    camtruoc:"Camera trước:   8 MP",
    cpu:"CPU:   Exynos 9810 8 nhân 64 bit",
    ram:"RAM:	6 GB",
    bntrong:"   Bộ nhớ trong: 64-128 GB",
    SIM:"Thẻ SIM:   2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
    pin:"Dung lượng pin:   	4000 mAh, có sạc nhanh",

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

var fein={
	anh1:"fein2.jpg",
	anh2:"fein1.png",
	anh3:"fein3.jpg",
	anh4:"fein4.png",
	anh5:"a72017in5.jpg",
	big1:"Hiệu Suất Mạnh Mẽ với Pin An Toàn Hơn",
	big2:"Cấu hình mạnh mẽ, vượt trội",
	big3:"Trải Nghiệm Giao Diện Mới Nhất",
	big4:"Dung Lượng Lớn",
	para1:"Galaxy Note FE sử dụng pin hoàn toàn mới (dung lượng 3.200mAh) khác biệt so với dòng sản phẩm Galaxy Note7 (dung lượng 3.500mAh) trước đây và đã trải qua Quy trình Kiểm Tra Pin An Toàn Trên 8-Điểm cùng các biện pháp kiểm nghiệm an toàn tăng cường nhiều lớp. Chúng tôi cam kết đặt sự an toàn của bạn lên hàng đầu.",
	para2:"Samsung Galaxy Note FE tất nhiên vẫn sở hữu cấu hình mạnh mẽ vượt trội, với vi xử lý Exynos 8890 thua kém một chút so với Exynos 8895 trên Note 8, như vậy cũng đủ yên tâm để bạn đảm bảo mọi hoạt động trơn tru, chơi mọi thể loại game bạn yêu thích và không sợ lỗi thời sau vài năm.",
	para3:"Tận hưởng hiệu suất tối ưu trên nền giao diện mới nhất kế thừa từ dòng Galaxy S8.Chuyển đổi mượt mà từ Màn Hình Khóa sang Màn Hình Chính và Màn Hình Ứng Dụng với trải nghiệm hình ảnh đồng nhất.",
	para4:"Bộ nhớ trong lớn 64GB giúp bạn thoải mái lưu trữ hình ảnh, bài hát, video, trò chơi và nhiều nội dung khác. Bạn thậm chí có thể mở rộng bộ nhớ với thẻ microSD có dung lượng tối đa lên đến 256 GB để lưu giữ thậm chí nhiều nội dung hơn mà không lo thiếu bộ nhớ.",
	videointro:"https://www.youtube.com/embed/3YQ-znmdTxQ?start=5",
};
var note8in={
	anh1:"a8in1.png",
	anh2:"note8in2.jpg",
	anh3:"note8in2.png",
	anh4:"note8in4.png",
	anh5:"note8in5.PNG",
	big1:"Bút S Pen. Một Phương Thức Giao Tiếp Hoàn Toàn Mới",
	big2:"Hình Ảnh Sắc Nét, Ổn Định Ngay Cả Trong Điều Kiện Thiếu Sáng",
	big3:"Kết Nối Thế Giới Rộng Lớn Hơn với Phone+",
	big4:"Chuyển Đổi Dữ Liệu Thông Minh",
	para1:"Bạn muốn ghi chú nhanh, viết tay hay vẽ một tác phẩm nghệ thuật? Samsung Notes là công cụ hoàn hảo cho mọi nhu cầu. Với tùy chọn đầu cọ đa dạng , nét bút với nhiều màu sắc, bạn có thể thỏa sức phác thảo, lập kế hoạch và tạo nên những tuyệt tác cho riêng mình.",
	para2:"Chụp ảnh sắc nét ngay cả khi trời tối hay những lúc khó giữ điện thoại ổn định. Được trang bị camera kép tiên tiến, Galaxy Note8 gồm một ống kính góc rộng cho khả năng chụp thiếu sáng tuyệt vời như kỳ vọng trên các dòng điện thoại Galaxy, và một ống kính chụp lấy nét từ xa với tính năng zoom quang học gấp 2 lần. Cả hai ống kính đều được tích hợp khả năng ổn định hình ảnh quang học giúp bạn chụp rõ nét ngay cả khi zoom cận.",
	para3:"Galaxy Note8 sẽ trở thành cánh cổng dẫn lối bạn vào thế giới mới khi được kết nối với các thiết bị và giao diện được hỗ trợ. Thế giới mà các ranh giới xích lại gần nhau, các rào cản bị phá vỡ ",
	para4:"Chuyển đổi dữ liệu là một vấn đề lớn nhưng không phải quá phức tạp. Smart Switch sẽ giúp đơn giản hóa quá trình chuyển đổi tất cả dữ liệu từ điện thoại cũ sang Galaxy Note8. Dù là danh bạ, cài đặt, tin nhắn hay hình ảnh sẽ được chuyển và đặt chính xác vị trí bạn muốn trên Galaxy Note8, đúng như trên điện thoại cũ.",
	videointro:"https://www.youtube.com/embed/UZuooIDfTsc?start=1",
};

var note9in={
	anh1:"noin1.jpg",
	anh2:"no9in2.png",
	anh3:"no9in3.png",
	anh4:"no9in4.png",
	anh5:"no9in5.PNG",
	big1:"Bút S-Pen cải tiến đến vi diệu",
	big2:"Thời Lượng Pin",
	big3:"Dung Lượng",
	big4:"Xem nhiều hơn trên Màn Hình Vô Cực",
	para1:"Thế hệ S Pen mới giờ đây đã có công nghệ Bluetooth đầy quyền năng, cho phép bạn nhấn nút để điều khiển máy ảnh, bài thuyết trình và các ứng dụng mà không cần chạm vào điện thoại.4 Vẽ, ghi chú và gửi Tin nhắn Động với S Pen rất chân thật và tự nhiên như trên bút và giấy, nhờ đầu bút mỏng và 4069 cấp độ tương tác lực.",
	para2:"Thời lượng pin được nâng cấp, kỉ lục suốt ngày dài chỉ trong một lần sạc, giúp bạn giữ nhịp độ cuộc sống.",
	para3:"Lưu trữ nhiều hơn. Xóa ít đi. Với sức mạnh của bộ nhớ 512GB tích hợp sẵn - có thể mở rộng thêm tối đa 512GB - bạn luôn có chỗ cho những thứ quan trọng.",
	para4:"Trải nghiệm thị giác không giới hạn trên màn hình vô cực Super AMOLED mang độ phân giải Quad HD+. Bộ cảm biến và quét mống mắt được giấu khéo léo để không cản trở tầm nhìn.",
  videointro:"https://www.youtube.com/embed/rjaL94yEJME",
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
	
	var ifar=document.createElement("iframe");
	ifar.src=hang.videointro;
	
	
	t.appendChild(img);
	t.appendChild(ifar);
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
    if(y<=0){
        window.clearInterval(thoigian);
    }
    window.scroll(0,y);
}