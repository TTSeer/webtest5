//复制回馈
function myFunction(){
	$(document).ready(function(){  
		$.post('che.php?pve=copy',function(data) {  
			$(".cons").html(data);  
		})
	})
}

//点击回馈
$(document).ready(function(){  
    $(".butn").click(function(){  
        var check = "";  
        $.post('che.php?pve=che',{check:check},function(data) {  
            $(".cons").html(data);  
        })
    })
})

var a=document.referrer;
if(a=='undefined'){
	$(document).ready(function(){
		$.post('che.php?ev=0&pve=examin',function(data) {  
			$(".cons").html(data);  
		})    
	})  
}else if(a==''){
	$(document).ready(function(){  
		$.post('che.php?ev=0&pve=examin',function(data) {  
			$(".cons").html(data);  
		})    
	})  
}else{
	$(document).ready(function(){  
		$.post('che.php?ev=1&pve=examin',function(data) {  
			$(".cons").html(data);  
		})    
	})  
}

//结束时间回馈
function hello(){ 
	$(document).ready(function(){  
		$.post('che.php?pve=ewtime',function(data) {  
			$(".cons").html(data);  
		})
	})
} 
//重复执行某个方法 
var t1 = window.setInterval(hello,9999); 
var t2 = window.setInterval("hello()",10000); 
//去掉定时器的方法 
window.clearInterval(t1);