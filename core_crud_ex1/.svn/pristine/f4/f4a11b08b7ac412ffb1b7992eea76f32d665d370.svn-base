$(function(){
	
	var ctx = $('#ctx').val();
	dboardPopToPage(ctx);
	
});

function dboardPopToPage(ctx){
	
	$('.bs-example2 table tbody').delegate('tr', 'click', function(){
		
		var dboardid= $(this).children().find('input[type="hidden"]').val();
		
		$.ajax({
			
			url : ctx+'/dboardclickNum',				//보낼 URL
			dataType : 'text',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  dboardid,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'text/html; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				window.opener.dboardlistenToGoPage(ctx, dboardid);
				self.close();
				
			}, error : function(){
				alert("실패");
			}
			
		});
		
	});
	
}