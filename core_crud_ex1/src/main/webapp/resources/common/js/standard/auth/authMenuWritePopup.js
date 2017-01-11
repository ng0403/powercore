$(function(){
	var ctx = $('#ctx').val();
	authMenu_confirm(ctx);
	PopupEvent(ctx);
	authMenuCancel();
	radioCheckEvent();
});

function radioCheckEvent(){
	$('#tbody1').find('input[type="radio"]').click(function(){
		$(this).siblings().prop('checked',false);
	});
}

function authMenuCancel(){	
	$('#authMenu_cancel').click(function(){
		self.close();
	});
}

function PopupEvent(ctx){
	$('#searchAuthMenu_authId').click(function(event){
		window.open(ctx+'/searchAuthIuser_authId','newwindow1','width=750, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	$('#searchAuthIuser_MenuId').click(function(event){
		window.open(ctx+'/authmenuSearchList','newwindow1','width=1250, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function authMenu_confirm(ctx){
	$('#authMenu_confirm').click(function(){
		if($('#retrieve_flg_Y').is(":checked")){
			var retrieve = $('#retrieve_flg_Y').val();
		}else{
			var retrieve = $('#retrieve_flg_N').val();
		}
		
		if($('#create_flg_Y').is(":checked")){
			var create = $('#create_flg_Y').val();
		}else{
			var create = $('#create_flg_N').val();
		}
		
		if($('#update_flg_Y').is(":checked")){
			var update = $('#update_flg_Y').val();
		}else{
			var update = $('#update_flg_N').val();
		}
		
		if($('#delete_flg_Y').is(":checked")){
			var ddelete = $('#delete_flg_Y').val();
		}else{
			var ddelete = $('#delete_flg_N').val();
		}
		
		if($('#default_flg_Y').is(":checked")){
			var deflt= $('#default_flg_Y').val();
		}else{
			var deflt = $('#default_flg_N').val();
		}
		
		var obj = {
				auth_id : $('#uauth_id').val(),
				menu_id : $('#menu_id').val(),
				retrv_yn : retrieve,
				creat_yn : create,
				mdfy_yn : update,
				del_yn : ddelete,
				deflt_yn : deflt
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		$.ajax({
			url : ctx +'/authMenuInsert',						//보낼 URL
			dataType : 'json',							//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,	
			contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert('저장되었습니다.');
				window.opener.editAuthMenu(data);
				self.close();
			},error : function(e){
				alert('중복된 정보가 존재합니다.');
			}
			
		});
	});	
}