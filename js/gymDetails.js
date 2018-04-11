$(function(){
	$.ajax({
    type:"post",
    url:"http://www.mffive.com:8080/fiveCmpInfo/getFiveCmpById",
    success:function(data){
        var tplStr1 = template("tpl-1",data);
        console.log(data);
        $(".products").html(tplStr1);   
    },
    error:function(){
        console.log("请求失败!");
    }
})
})

