$(function(){
	
	var ctx = $('#ctx').val();
	dboardInsertbtnfunc(ctx);
	fileselectfunc(ctx);
	
});

function dboardInsertbtnfunc(ctx){
	
	$('#submitdboardbtn').click(function(){
		
		var temptitle = $('.int').val();
		var tempcont = $('#cont').text();
		var chkcode = $('#selectcode').val();
		var yn;
		
		if(temptitle==null||temptitle==""){
			alert("제목을 입력해주세요");
			return false;
		}else if(tempcont==null||tempcont==""){
			alert("내용을 입력해주세요");
			return false;
		}
		
		if($('#filetextfield').val()==null||$('#filetextfield').val()==''||$('#filetextfield').val()==undefined){
			
			yn='N';
			
		}else{
			yn='Y';
		}
		
		var jdata = {
				code : chkcode,
				title : temptitle,
				cont : tempcont,
				file_yn : yn
		}
		
		var jsonData = JSON.stringify(jdata);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/dboardinsert',				//보낼 URL
			dataType : 'text',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				alert("등록 되었습니다.");
				
				$('#filediv').append("<input type='hidden' id='data_board_id' name='data_board_id' value='"+data + "'>");
				
				$('#fileform').submit();
				
			}, error : function(){
				alert("실패");
			}
			
		});
		
	});
	
	$('#listdboardbtn').click(function(){
		location.href=ctx+"/dboard";
	});
	
	/*$('#canceldboardbtn').click(function(){
		
		$('.titleinput').val("");
		$('#cont').text("");
		$('#filediv').children().remove();
		
	});*/
	
	$('#btndiv').delegate('#fileuploadPop', 'click', function(){
		
		var fileselectYN = $('#filedata').click();
		
		if(fileselectYN == false){
			return false;
		}
		
	});
}

function fileselectfunc(ctx){
		
	$('#filedata').change(function(){
		$('#filetextfield').val($('#filedata').val());
	});
	
}
