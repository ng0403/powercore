$(function(){
	var ctx = $('#ctx').val();
	mauthInit();
	PopupEvent(ctx);
	dmenuModify();
	dmenuCancel();
	radioCheckEvent();
	dmenuModifyConfirm(ctx)
});

function radioCheckEvent(){
	$('#tbody1').find('input[type="radio"]').click(function(){
		$(this).siblings().prop('checked',false);
	});
}

function mauthInit(){
	$('#searchAuthIuser_authId').hide();
	$('#searchAuthIuser_iuserId').hide();
}

function PopupEvent(ctx){
	$('#searchAuthIuser_authId').click(function(event){
		window.open(ctx+'/searchAuthIuser_authId','newwindow1','width=750, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	$('#searchAuthIuser_iuserId').click(function(event){
		window.open(ctx+'/authmenuSearchList','newwindow1','width=1250, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function dmenuModify(){
	$('#dmenu_modify').click(function(){
		$('#dmenu_confirm').prop("disabled", false);
		$('#tbody1').find('input[type="radio"]').prop("disabled", false);
	});
}

function dmenuCancel(){	
	$('#dmenu_cancel').click(function(){
		self.close();
	});
}

function dmenuModifyConfirm(ctx){
	$('#dmenu_confirm').click(function(){
		if($('#dretrieve_flg_Y').is(":checked")){
			var dretrieve = $('#dretrieve_flg_Y').val();
		}else{
			var dretrieve = $('#dretrieve_flg_N').val();
		}
		
		if($('#dcreate_flg_Y').is(":checked")){
			var dcreate = $('#dcreate_flg_Y').val();
		}else{
			var dcreate = $('#dcreate_flg_N').val();
		}
		
		if($('#dupdate_flg_Y').is(":checked")){
			var dupdate = $('#dupdate_flg_Y').val();
		}else{
			var dupdate = $('#dupdate_flg_N').val();
		}
		
		if($('#ddelete_flg_Y').is(":checked")){
			var ddelete = $('#ddelete_flg_Y').val();
		}else{
			var ddelete = $('#ddelete_flg_N').val();
		}
		
		if($('#ddeflt_flg_Y').is(":checked")){
			var ddeflt= $('#ddeflt_flg_Y').val();
		}else{
			var ddeflt = $('#ddeflt_flg_N').val();
		}
		
		var obj = {
				auth_id : $('#uauth_id').val(),
				menu_id : $('#menu_id').val(),
				menu_nm : $('#menu_nm').val(),
				retrv_yn : dretrieve,
				creat_yn : dcreate,
				mdfy_yn : dupdate,
				del_yn : ddelete,
				deflt_yn : ddeflt
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		$.ajax({
			
			url : ctx +'/authmenuEdit',						//보낼 URL
			dataType : 'json',							//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,	
			contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				window.opener.editAuthMenu(data);
				self.close();
				
			},error : function(e){
				alert(e.responseText);
			}
			
		});
	});	
}