$(function(){
	var ctx = $('#ctx').val();
	pauthWriteConfirm();
	pauthCancel();
	
	dauthModify();
	dauthModifyConfirm(ctx);
	dauthCancel();
	
	dmenuModify();
	dmenuModifyConfirm(ctx);
	dmenuCancel();
	
	searchUserIdByClick(ctx);
	selectAuthIdByClick();
	MenuNamePopbyClick(ctx);
	
	selectMenuIdByClick(ctx);
	authMenuConfirm(ctx);
});

function pauthWriteConfirm(){
	
	$('#pauth_flg_Y').click(function(){
		$('#pauth_flg_N').prop("checked", false);
	});
	$('#pauth_flg_N').click(function(){
		$('#pauth_flg_Y').prop("checked", false);
	});
	
	$('#pauth_confirm').click(function(){
		
		var pauth_id= $('#pauth_id').val();
		var pauth_name= $('#pauth_name').val();
		
		if($('#pauth_flg_Y').is(":checked")){
			
			var pauth_flg = $('#pauth_flg_Y').val();
		}else{
			
			var pauth_flg = $('#pauth_flg_N').val();
		}
		
		window.opener.pauthSendConfirm(pauth_id, pauth_name, pauth_flg);
		self.close();
		
	});
	
}

function pauthCancel(){
	
	$('#pauth_cancel').click(function(){
		self.close();
	});
	
}

function dauthModify(){
	
	$('#dauth_flg_Y').click(function(){
		$('#dauth_flg_N').prop("checked", false);
	});
	$('#dauth_flg_N').click(function(){
		$('#dauth_flg_Y').prop("checked", false);
	});
	
	$('.auth_bt_position').delegate('#dauth_modify', 'click', function(event){
		
		event.preventDefault();
		
		$('#dauth_name').attr("disabled", false);
		$('#dauth_flg_Y').attr("disabled", false);
		$('#dauth_flg_N').attr("disabled", false);
		$('#dauth_confirm').attr("disabled", false);
		
	});

}

function dauthCancel(){
	
	$('#dauth_cancel').click(function(event){
		event.preventDefault();
		self.close();
	});
	
}

function dauthModifyConfirm(ctx){
	
	$('#dauth_confirm').click(function(event){
		
		event.preventDefault();
		
		if($('#dauth_flg_Y').is(':checked')){
			var dactive_flg = $('#dauth_flg_Y').val();
		}else{
			var dactive_flg = $('#dauth_flg_N').val();
		}

		var obj = {
				auth_id : $('#dauth_id').val(),
				auth_nm : $('#dauth_name').val(),
				active_yn : dactive_flg
		}
		
		var jsonData = JSON.stringify(obj);

		jQuery.ajaxSettings.traditional = true;
		
		$.ajax(
				{
				url : ctx +'/authEdit',						//보낼 URL
				dataType : 'json',							//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,	
				contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					
					window.opener.editAuth(data);
					self.close();
				},error : function(e){
					alert(e.responseText);
				}
			});
		
		
	});
	
}

function dmenuModify(){
	
	$('#dmenu_modify').click(function(){
		$('#dmenu_confirm').attr("disabled", false);
		$('#tbody1').find('input').attr("disabled", false);
		$('#dauth_id').attr("disabled", true);
		$('#dauth_name').attr("disabled", true);
		$('#dmenu_name').attr("disabled", true);
	});
}

function dmenuCancel(){
	
	$('#dmenu_cancel').click(function(){
		self.close();
	});
}

function dmenuModifyConfirm(ctx){
	
	$('#uretrieve_flg_Y').click(function(){
		$('#uretrieve_flg_N').prop("checked", false);
	});
	$('#uretrieve_flg_N').click(function(){
		$('#uretrieve_flg_Y').prop("checked", false);
	});
	
	$('#ucreate_flg_Y').click(function(){
		$('#ucreate_flg_N').prop("checked", false);
	});
	$('#ucreate_flg_N').click(function(){
		$('#ucreate_flg_Y').prop("checked", false);
	});
	
	$('#uupdate_flg_Y').click(function(){
		$('#uupdate_flg_N').prop("checked", false);
	});
	$('#uupdate_flg_N').click(function(){
		$('#uupdate_flg_Y').prop("checked", false);
	});
	
	$('#udelete_flg_Y').click(function(){
		$('#udelete_flg_N').prop("checked", false);
	});
	
	$('#udelete_flg_N').click(function(){
		$('#udelete_flg_Y').prop("checked", false);
	});
	
	$('#dmenu_confirm').click(function(){
		
		if($('#uretrieve_flg_Y').is(":checked")){
			var uretrieve = $('#uretrieve_flg_Y').val();
		}else{
			var uretrieve = $('#uretrieve_flg_N').val();
		}
		
		if($('#ucreate_flg_Y').is(":checked")){
			var ucreate = $('#ucreate_flg_Y').val();
		}else{
			var ucreate = $('#ucreate_flg_N').val();
		}
		
		if($('#uupdate_flg_Y').is(":checked")){
			var uupdate = $('#uupdate_flg_Y').val();
		}else{
			var uupdate = $('#uupdate_flg_N').val();
		}
		
		if($('#udelete_flg_Y').is(":checked")){
			var udelete = $('#udelete_flg_Y').val();
		}else{
			var udelete = $('#udelete_flg_N').val();
		}
		
		var obj = {
				auth_id : $('#dauth_id').val(),
				auth_name : $('#dauth_name').val(),
				menu_name : $('#dmenu_name').val(),
				retrieve_flg : uretrieve,
				create_flg : ucreate,
				update_flg : uupdate,
				delete_flg : udelete
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

function searchUserIdByClick(ctx){
	
	$('#amauth_id').click(function(event){
		
		window.open(ctx+'/authmenuSearchList','searchNewPopup','width=400, height=400, left='+(event.screenX+200)+', top='+(event.screenY-90)+', toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
}

function selectAuthIdByClick(){
	
	$('#authmenupopuptable tbody tr').click(function(){

		var authId=$(this).find('#mauth_id').text();
		var authName=$(this).find('#mauth_name').text();
		
		window.opener.inputAuthId(authId, authName);
		
		self.close();
		
	});
	
}

function inputAuthId(authId, authName){
	
	$('#amauth_id').val(authId);
	$('#amauth_name').val(authName);
	
}

function MenuNamePopbyClick(ctx){
	
	$('#ammenu_id').click(function(){
		
		window.open(ctx+'/menuSearchList','searchNewPopup','width=400, height=400, left='+(event.screenX+200)+', top='+(event.screenY-170)+', toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		
	});
	
}

function selectMenuIdByClick(){
	
	$('#menupopuptable tbody tr').click(function(){

		var menuId=$(this).find('#maauth_id').text();
		var menuName=$(this).find('#maauth_name').text();
		
		window.opener.inputMenuId(menuId, menuName);
		
		self.close();
		
	});
	
}

function inputMenuId(menuId, menuName){
	
	$('#ammenu_id').val(menuId);
	
}

function authMenuConfirm(ctx){
	$('#amauth_confirm').click(function(){
		
		if($('#amauth_id').val()==null || $('#amauth_id').val()==""){
			alert("권한 ID를 입력해주세요");
			return false;
		}else if($('#amauth_name').val()==null || $('#amauth_name').val()==""){
			alert("권한명을 입력해주세요");
			return false;
		}else if($('#ammenu_id').val()==null || $('#ammenu_id').val()==""){
			alert("메뉴 ID를 입력해주세요");
			return false;
		}
		
		if($('#amretrieve_flg_Y').is(":checked")){
			var retrieve= $('#amretrieve_flg_Y').val();
		}else{
			var retrieve= $('#amretrieve_flg_N').val();
		}
		
		if($('#amcreate_flg_Y').is(":checked")){
			var create= $('#amcreate_flg_Y').val();
		}else{
			var create= $('#amcreate_flg_N').val();
		}
		
		if($('#amupdate_flg_Y').is(":checked")){
			var update= $('#amupdate_flg_Y').val();
		}else{
			var update= $('#amupdate_flg_N').val();
		}
		
		if($('#amdelete_flg_Y').is(":checked")){
			var delete1= $('#amdelete_flg_Y').val();
		}else{
			var delete1= $('#amdelete_flg_N').val();
		}
		
		var obj = {
				auth_id : $('#amauth_id').val(),
				auth_name : $('#amauth_name').val(),
				menu_id : $('#ammenu_id').val(),
				retrieve_flg : retrieve,
				create_flg : create,
				update_flg : update,
				delete_flg : delete1
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx +'/authmenuinsertbyjson',						//보낼 URL
			dataType : 'json',							//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,	
			contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				alert("등록 되었습니다.")
				window.opener.insertAuthMenu(data);
				self.close();
				
			},error : function(){
				alert("해당 데이터가 존재합니다.");
			}
			
		});
		
	});
}