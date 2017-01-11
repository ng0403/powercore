$(function(){
	var ctx = $('#ctx').val();
	uauthInit();
	uauthModify();
	uauthModifyConfirm(ctx);
	uauthCancel();
	PopupEvent(ctx);
});

function uauthInit(){
	$('#searchAuthIuser_authId').hide();
	$('#searchAuthIuser_iuserId').hide();
}

function uauthCancel(){
	$('#uauth_cancel').click(function(){
		self.close();
	});
}

function uauthModify(){
	$('.auth_bt_position').delegate('#uauth_modify', 'click', function(event){
		event.preventDefault();
		$('#uauth_id').attr("disabled", false);
		//$('#uu_user_id').attr("disabled", false);
		$('#uauth_confirm').attr("disabled", false);
		$('#searchAuthIuser_authId').show();
		//$('#searchAuthIuser_iuserId').show();
	});
}

function uauthModifyConfirm(ctx){
	
	$('#uauth_confirm').click(function(event){
		
		event.preventDefault();

		var obj = {
				auth_id : $('#uauth_id').val(),
				iuser_id : $('#iuser_id').val(),
				id_nm : $('#uu_user_id').val(),
		}
		
		var jsonData = JSON.stringify(obj);

		jQuery.ajaxSettings.traditional = true;
		
		$.ajax(
				{
				url : ctx +'/authIuserEdit',						//보낼 URL
				dataType : 'json',							//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,	
				contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					if(data.checkResult == true){
						alert('중복되는 정보입니다.');
					}else{
						window.opener.editUserAuth(data.userAuthList);
						self.close();
					}
				},error : function(e){
					alert(e.responseText);
				}
			});
		
		
	});
}

function PopupEvent(ctx){
	$('#searchAuthIuser_authId').click(function(event){
		window.open(ctx+'/searchAuthIuser_authId','newwindow1','width=750, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	$('#searchAuthIuser_iuserId').click(function(event){
		window.open(ctx+'/searchAuthIuser_iuserId','newwindow1','width=1250, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}