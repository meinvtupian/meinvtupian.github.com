
function addimg(cont,num){
	$(cont).empty();
	var firstindex = parseInt(Math.random()*num);
	var imgobj = "<li><img src=\"images/mm ("+firstindex+").png\" alt=\"img\"></li>";
	for(i=0;i<20;i++){
		imgobj = "<li><img src=\"images/mm ("+(firstindex+i)+").png\" alt=\"img\"></li>";
		$(cont).append(imgobj);
	}	
}


$(function(){
	addimg(".c_main",10);
	
	$(".ui_huan").click(function(){
		addimg(".c_main",10);
		$(".ui_gotop").click();
	});
	
	$(".ui_gotop").click(function(){
		document.documentElement.scrollTop = document.body.scrollTop =0;
	});
	
});
