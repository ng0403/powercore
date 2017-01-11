$(function(){
	var ctx = $('#ctx').val();
	noticePopToPage(ctx);
});

function noticePopToPage(ctx){
	
	$('.bs-example2 table tbody').delegate('tr', 'click', function(){
		
		var notice_id = $(this).children().find('input[type="hidden"]').val();
		
		$.ajax({
			
			url : ctx+'/noticeclickNum',				//보낼 URL
			dataType : 'text',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  notice_id,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'text/html; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				window.opener.noticelistenToGoPage(ctx, notice_id);
				self.close();
				
			}, error : function(){
				alert("실패");
			}
			
		});
		
	});
	
}