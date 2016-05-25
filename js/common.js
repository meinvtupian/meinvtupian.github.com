
function addimg(cont,num,imgtype){
	$(cont).empty();
	var firstindex = parseInt(Math.random()*num+1);
	var imgobj = "<li><img src=\"images/"+imgtype+"/mm ("+firstindex+").jpg\" alt=\"img\"></li>";
	for(i=0;i<20;i++){ //控制每次加载图片数量
		imgobj = "<li><img src=\"images/"+imgtype+"/mm ("+(firstindex+i)+").jpg\" alt=\"img\"></li>";
		$(cont).append(imgobj);
	}	
}


$(function(){
	var imgstype="mmimages";
	addimg(".c_main",20,imgstype); //数量为初始加载起始图片编号最大值
	
	$(".ui_huan").click(function(){
		imgstype = $("strong.c_on").attr("data-ctype").trim();
			
		if(imgstype=="mmimages"){
			addimg(".c_main",684,imgstype); //数据为美女图片-21
		}else if(imgstype=="ggimages"){
			addimg(".c_main",42,imgstype); //帅哥图片数量-21
		}else if(imgstype=="dmimages"){
			addimg(".c_main",21,imgstype);  //动漫图片数量-21
		}else if(imgstype=="fjimages"){
			addimg(".c_main",22,imgstype); // 风景图片数量-21
		}

		$(".ui_gotop").click(); //回到顶部
	});
	
	$(".ui_gotop").click(function(){
		document.documentElement.scrollTop = document.body.scrollTop =0;
	});
	
	$("div.c_header").children("strong").on("click",function(){
		$(this).addClass("c_on").siblings().removeClass("c_on"); // 导航栏选中
		
		imgstype = $(this).attr("data-ctype");
		addimg(".c_main",20,imgstype); //数量为初始加载起始图片编号最大值
		$(".ui_gotop").click();
	});
	
});
