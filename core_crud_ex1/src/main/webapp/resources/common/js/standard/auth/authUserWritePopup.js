$(function(){
	var ctx = $('#ctx').val();
	PopupEvent(ctx);
	authUserInsert(ctx);
	authUserCancel();
});

function PopupEvent(ctx){
	$('#searchAuthIuser_authId').click(function(event){
		window.open(ctx+'/searchAuthIuser_authId','newwindow1','width=750, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	$('#searchAuthIuser_iuserId').click(function(event){
		window.open(ctx+'/searchAuthIuser_iuserId','newwindow1','width=1250, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function authUserInsert(ctx){
	$('#authUserInsert').click(function(){
		if($('#uauth_id').val()==null || $('#uauth_id').val()==""){
			alert("권한 ID를 검색해주세요");
			return false;
		}else if($('#uu_user_id').val()==null || $('#uu_user_id').val()==""){
			alert("사용자 ID를 검색해주세요");
			return false;
		}
		var obj = {
				auth_id : $('#uauth_id').val(),
				iuser_id : $('#iuser_id').val(),
			    id_nm : $('#uu_user_id').val()
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx +'/authUserInsertData',						//보낼 URL
			dataType : 'json',							//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,	
			contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert("등록 되었습니다.");	
				window.opener.editUserAuth(data);
				self.close();
				
			},error : function(e){
				alert("이미 있는 정보입니다.")
			}
			
		});
	});
}

function authUserCancel(){
	$('#authUserCancel').click(function(){
		self.close();
	});
}