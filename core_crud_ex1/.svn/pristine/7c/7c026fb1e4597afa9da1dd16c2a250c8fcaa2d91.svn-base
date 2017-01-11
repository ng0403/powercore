$(function(){
	var ctx = $('#ctx').val();
	allchk(ctx);
	deleteAuthClick(ctx);
	writeAuthPopup(ctx);
	DeleteAuthUser(ctx);
	writeAuthUserPopup(ctx);
	writeAuthMenuPopup(ctx);
	ckDeleteAuthMenu(ctx);
	authKeyMdiBtn();
	/*searchAuthList(ctx);
	searchAuthClick(ctx);
	searchAuthUserList(ctx);
	searchAuthMenuList(ctx);
	searchAuthMenuClick(ctx);
	searchAuthUserClick(ctx);
	*/
});

function AuthcheckCount(tabID) {
	var count = 0;
	var checkList = $('#'+tabID+' tbody').find('input[type="checkBox"]');
	for (var i = 0; i < checkList.size(); i++) {
		if ($(checkList[i]).is(':checked')) {
			count++;
		}
	}
	return count;
};

function allchk(ctx){
	
	var test3=$('#authtable tbody').find('input[type=checkbox]');
	
	if($('#allCheck').is(":checked")){
		
		$(test3).prop("checked", true);

	}else{
		
		$(test3).prop("checked", false);

	}
}

function deleteAuthClick(ctx){
	
	$('.auth_bt_position').delegate('#deleteauth', 'click', function(event){
	
		event.preventDefault();
		
		var authcheck = $('#authtable tbody').find('input[type=checkbox]');
		
		var data = [];

		for(var i=0, b=0; i<authcheck.length; i++){	
		
			if($(authcheck[i]).is(':checked')){
				data[b]=$(authcheck[i]).val();
				b++;
			}
			
		}
		
		if(data == null || data == ""){
			alert("삭제할 항목을 선택해주세요");
			return false;
		}
		
		var jsonData = JSON.stringify(data);

		jQuery.ajaxSettings.traditional = true;
		var delChk = confirm("정말 삭제 하시겠습니까?");
		if(delChk){
		$.ajax(
				{
				url : ctx+'/authDelete',				//보낼 URL
				dataType : 'json',							//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,	
				contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					
					$('#authtable tbody tr').remove();
					for(var i=0; i<data.length;i++){
						var args = "<tr><th scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].auth_id+"'></th>"
						+"<td style='width:25%;' id='authclick' onclick=authUserTabFunc('"+data[i].auth_id+"')>"
						+"<a style='color: blue; cursor: pointer;' class='authClick'>"+data[i].auth_id+"</a></td>"
						+"<td style='width:40%;'>"+data[i].auth_nm+"</td>";
						
						if(data[i].act_yn=='Y'){
							args+="<td style='width:35%;'>"+"활성화"+"</td></tr>";
						}else{
							args+="<td style='width:35%;'>"+"비활성화"+"</td></tr>";
						}
						$('#authtable tbody').append(args);
					}
					
				},error : function(data){
					alert("에러");
				}
		
				});
		}else{
			return;
		}
	});
}

function writeAuthPopup(ctx){
	$('#writeauth').click(function(){
		window.open(ctx+'/authwritePopup','newwindow','width=400, height=300, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});

}

function writeAuthUserPopup(ctx){
	$('#writeauthuser').click(function(){
		window.open(ctx+'/authUserWritePopup','newwindow','width=400, height=200, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});

}

function DeleteAuthUser(ctx){
	$('#deleteauthuser').click(function(){
		if(AuthcheckCount('ausermastertable') == 0){
			alert('삭제할 항목을 선택해주세요.');
		}else{
			var ckdata = $('#ausermastertable tbody').find('input[type=checkbox]');
			
			var data = new Array();
			for(var i=0; i<ckdata.length; i++){
				if($(ckdata[i]).is(':checked')){
					var obj = new Object();
					obj.auth_id = $(ckdata[i]).val();
					obj.id_nm = $(ckdata[i]).parent().next().text();
					alert("ckdata : " + obj.auth_id);
					alert("ckdata : " + obj.id_nm);
					data.push(obj);
				}
			}
			
			var jsonData = JSON.stringify(data);
			jQuery.ajaxSettings.traditional = true;

			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
			$.ajax({		
				url : ctx+'/authUserDelete',					//보낼 URL
				dataType : 'json',						//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
				contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					alert('삭제되었습니다.');
					editUserAuth(data);
				},error : function(e){
					alert(e.responseText);
				}
			});
		   }else{
			   return;
		   }
		}
	});
}

function editUserAuth(data){
	$('#ausermastertable tbody tr').remove();
	for(var i=0; i<data.length;i++){
		fst_reg_d = dateFormat(Number(data[i].fst_reg_d));
		
		var args = "<tr>"
			+"<th><input type='checkbox' id='ckselect' value="+data[i].auth_id+"></th>"
			+"<td style='width: 10%;'>"+data[i].id_nm+"</td>"
			+"<td style='width: 10%;'>"+data[i].iuser_nm+"</td>"
			+"<td style='width: 10%;'>"+data[i].org_nm+"</td>"
			+"<td style='width: 20%;'>"+data[i].email+"</td>"
			+"<td style='width: 15%;'>"+data[i].cell_ph+"</td>"
			if(data[i].act_yn=='Y'){
				args+="<td style='width:10%;'>"+'활성화'+"</td>";
			}else{
				args+="<td style='width:10%;'>"+'비활성화'+"</td>";
			}
		    args+="<td style='width: 10%;'>"+data[i].fst_reg_id_nm+"</td>"
			+"<td style='width: 15%;'>"+fst_reg_d+"</td>"
			
		$('#ausermastertable tbody').append(args);
	}
}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}

function ckDeleteAuthMenu(ctx){
	
	$('#deleteauthmenu').click(function(){
		if(AuthcheckCount('menumastertable') == 0){
			alert('삭제할 항목을 선택해주세요.');
		}else{
			var ckdata = $('#menumastertable tbody').find('input[type=checkbox]');
			var data = new Array();
			for(var i=0; i<ckdata.length; i++){
				if($(ckdata[i]).is(':checked')){
					var obj = new Object();
					obj.auth_id = $(ckdata[i]).val();
					obj.menu_id = $(ckdata[i]).parent().next().next().next().children('input[type="hidden"]').val();
					data.push(obj);
				}
			}
			var jsonData = JSON.stringify(data);
			jQuery.ajaxSettings.traditional = true;

			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
			$.ajax({
				url : ctx+'/authMenuDelete',					//보낼 URL
				dataType : 'json',						//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
				contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					alert('삭제되었습니다.');
					editAuthMenu(data);
				},error : function(e){
					alert(e.responseText);
				}

			});
		}else{
			return;
		}
		}
	});
	
}

function writeAuthMenuPopup(ctx){
	$('#writeauthmenu').click(function(){
		window.open(ctx+'/authmenuwritePopup','newwindow','width=400, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});

}


function pauthSendConfirm(pauth_id, pauth_name, pauth_flg){
	
	var ctx = $('#ctx').val();
	
	var authdata = {
			auth_id : pauth_id,
			auth_nm : pauth_name,
			act_yn : pauth_flg
	}
	
	var jsonData = JSON.stringify(authdata);
	jQuery.ajaxSettings.traditional = true;
	
	$.ajax({
		
		url : ctx+'/authInsert',					//보낼 URL
		dataType : 'json',						//응답 받을 데이터 형식
		type : 'POST',								//서버 요청 방식
		data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
		contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
		success : function(data){
			$('#authtable tbody tr').remove();
			for(var i=0; i<data.length;i++){
				var args = "<tr><th scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].auth_id+"'></th>"
				+"<td style='width:25%;' id='authclick'><a href='#'>"+data[i].auth_id+"</a></td>"
				+"<td style='width:40%;'>"+data[i].auth_nm+"</td>";
				
				if(data[i].act_yn=='Y'){
					args+="<td style='width:35%;'>"+"활성화"+"</td></tr>";
				}else{
					args+="<td style='width:35%;'>"+"비활성화"+"</td></tr>";
				}
				$('#authtable tbody').append(args);
			}
		},
		error : function(data){
			alert(data);
		}
		
	});
}

function authInsert(){
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		if($('#auth_active_flg1').is(':checked')){
			var auth_active_flg1=$('#auth_active_flg1').val();
			
		}else{
			var auth_active_flg1=$('#auth_active_flg_2').val();		
		}	
		
		var authData = { "auth_nm": $("#auth_nm").val(), "act_yn": auth_active_flg1};
		    
			if(authData.auth_nm==""||authData.auth_nm==null){
				alert("권한명을 입력해 주세요");
				return false;
			}/*else if(keymanData.pos_nm==""||keymanData.pos_nm==null ){
				alert("직급을 입력해 주세요");
				return false;			
			}*/
			
			 var jsonData = JSON.stringify(authData);		//JSON Object 생성
			 jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
			    
			 var Chk = confirm("정말 등록 하시겠습니까?");
			 if(Chk){
			 $.ajax({
				url : ctx+'/authInsert',
				data : jsonData,
				type : 'POST',
				dataType : "json",
				contentType : 'application/json; charset=UTF-8',
				success : function(data){
					alert("등록되었습니다");
					location.href = ctx + "/auth";
				}, 
				error : function(request,status,error) {
			          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			      }
			});
		   }else{
			   return;
		   }
		});
}
/*function searchAuthList(ctx){
	
	$('#search_btn').click(function(event){
		event.preventDefault();
		
		var authdata = {
				keyfield : $('#selectOption').val(),
				keyword : $('#title_text').val()
		}
		
		var jsonData = JSON.stringify(authdata);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/auth',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				$('#authtable tbody tr').remove();

				for(var i=0; i<data.length;i++){
					var args = "<tr><th scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].auth_id+"'></th>"
					+"<td style='width:25%;' id='authclick'><a href='#'>"+data[i].auth_id+"</a></td>"
					+"<td style='width:40%;'>"+data[i].auth_nm+"</td>";
					
					if(data[i].act_yn=='Y'){
						args+="<td style='width:35%;'>"+"활성화"+"</td></tr>";
					}else{
						args+="<td style='width:35%;'>"+"비활성화"+"</td></tr>";
					}
					$('#authtable tbody').append(args);

				}
				
			}, error : function(data){
				alert(data);
			}
			
		});
		
	});
	
}

function searchAuthClick(ctx){
	$('#authtable tbody').delegate('a', 'click', function(event){
		event.preventDefault();
		window.open(ctx+"/authViewPopup?auth="+$(this).text(),'newwindow','width=400, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function editAuth(data){
	
	$('#authtable tbody tr').remove();
	for(var i=0; i<data.length;i++){
		var args = "<tr><th scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].auth_id+"'></th>"
		+"<td style='width:25%;' id='authclick'><a href='#'>"+data[i].auth_id+"</a></td>"
		+"<td style='width:40%;'>"+data[i].auth_nm+"</td>";
		
		if(data[i].act_yn=='Y'){
			args+="<td style='width:35%;'>"+"활성화"+"</td></tr>";
		}else{
			args+="<td style='width:35%;'>"+"비활성화"+"</td></tr>";
		}
		$('#authtable tbody').append(args);
	}
}

function searchAuthUserList(ctx){
	$('#userAuthSearch').click(function(event){
		event.preventDefault();
		var obj = {
				keyfield : $('#tabDiv1').find('select').val(),
				keyword : $('#authuser_text').val()
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/authUser',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				editUserAuth(data);
			},error : function(){
				alert("실패");
			}
			
		});

	});
}

function searchAuthMenuList(ctx){
	$('#menuAuthSearch').click(function(){
		var obj = {
				keyfield : $('#tabDiv2').find('select').val(),
				keyword : $('#authmenu_text').val()
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/authMenu',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				editAuthMenu(data)
			}
			,error : function(){
				alert("실패");
			}
			
		});
		
	});
}

function searchAuthMenuClick(ctx){
	$('#menumastertable tbody').delegate('a', 'click', function(event){
		event.preventDefault();
		
		var menu_id=$(this).parent().next().next().children('input').val();
		window.open(ctx+"/authMenuViewPopup?auth_id="+$(this).text()+"&menu_id="+menu_id,'newwindow','width=400, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function insertAuthMenu(data){
	$('#menumastertable tbody tr').remove();

	for(var i=0; i<data.length; i++){
		var args = "<tr><th><input type='checkbox' id='ckselect' value='"+data[i].auth_id+"'></th>"
		+"<td style='width:20%;'><a href='#'>"+data[i].auth_id+"</a></td>"
		+"<td style='width:20%;'>"+data[i].auth_name+"</td>"
		+"<td style='width:20%;'>"+data[i].menu_name+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].retrieve_flg+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].create_flg+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].update_flg+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].delete_flg+"</td></tr>";
		$('#menumastertable tbody').append(args);
	}
}

/*사용자권한 상세 등록 삭제
function searchAuthUserClick(ctx){
	$('#ausermastertable tbody').delegate('a', 'click', function(event){
		event.preventDefault();
		
		var userId=$(this).parent().next().next().next().text();
	
		window.open(ctx+"/authUserViewPopup?authUser="+$(this).text()+"&userId="+userId,'newwindow','width=400, height=300, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}




*/

$(document).ready(function() {
	
	// 권한상세 탭 클릭시
	var auth_id = $("#nowAuth_id").val();
	if($("#tab1").is(":checked")){ // 상세정보 불러오기
		if(auth_id != '') authDetail(auth_id);
	} 
	
	// 메뉴권한 탭 클릭시
	$("#tab2").click(function() {
		var auth_id = $("#nowAuth_id").val();
		if(auth_id == ''){
			var tbody = $('#authMenuTb');
			tbody.children().remove();
			alert(" 권한관리 리스트에서 권한 ID를 클릭해주세요");
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 100%;'><td colspan='7' style='text-align: center;'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			authMenuList(auth_id);
		}
	});
	
	// 사용자권한 탭 클릭시
	$("#tab3").click(function() {
		var auth_id = $("#nowAuth_id").val();
		if(auth_id == ''){
			var tbody = $('#authUserTb');
			tbody.children().remove();
			alert(" 권한관리 리스트에서 권한 ID를 클릭해주세요");
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 100%;'><td colspan='8' style='text-align: center; vertical-align:middle;'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			authUserList(auth_id);
		}
	});
	
});


function authUserTabFunc(auth_id){
	$(document).ready(function() {
		$("#nowAuth_id").val(auth_id); // 현재 sales_actvy_id 저장
			
		if($("#tab1").is(":checked")){ // 상세정보 불러오기
			if(auth_id != '') authDetail(auth_id);
		} 
		if($("#tab2").is(":checked")){ // 상세정보 불러오기
			if(auth_id != '') authMenuList(auth_id);
		} 
		if($("#tab3").is(":checked")){ // 상세정보 불러오기
			if(auth_id != '') authUserList(auth_id);
		} 
		
	});
}

function authUserList(auth_id){
	
	var ctx = $("#ctx").val();
	
	$.ajax({
		type : 'POST',
		url : ctx+'/authUserList',
		data : "auth_id="+auth_id,
		dataType : "json",
		success : function(data) {
			
			var tbody = $('#authUserTb');
			var tbodyContent = "";
			
			if(data.length==0){
				alert("해당 사용자 권한에 대한 내용이 없습니다.");
			}else{
				tbody.children().remove();
				for (var i = 0; i < data.length; i++) {
					fst_reg_d = dateFormat(Number(data[i].fst_reg_d));
					tbodyContent = "<tr>"
						+"<th><input type='checkbox' id='ckselect' value="+data[i].auth_id+"></th>"
						+"<td style='width: 10%;'>"+data[i].id_nm+"</td>"
						+"<td style='width: 10%;'>"+data[i].iuser_nm+"</td>"
						+"<td style='width: 10%;'>"+data[i].org_nm+"</td>"
						+"<td style='width: 20%;'>"+data[i].email+"</td>"
						+"<td style='width: 15%;'>"+data[i].cell_ph+"</td>"
						if(data[i].act_yn=='Y'){
							tbodyContent+="<td style='width:10%;'>"+'활성화'+"</td>";
						}else{
							tbodyContent+="<td style='width:10%;'>"+'비활성화'+"</td>";
						}
						tbodyContent+="<td style='width: 10%;'>"+data[i].fst_reg_id_nm+"</td>"
						             +"<td style='width: 15%;'>"+fst_reg_d+"</td>"
						tbody.append(tbodyContent);
				}
			}
		}
		
	});
}

function authMenuList(auth_id){
    
	var ctx = $("#ctx").val();
	
	$.ajax({
		type : 'POST',
		url : ctx+'/authMenuList',
		data : "auth_id="+auth_id,
		dataType : "json",
		success : function(data) {
			
			var tbody = $('#authMenuTb');
			var tbodyContent = "";
			
			if(data.length==0){
				alert("권한에 대한 해당 메뉴 권한이 없습니다.");
			}else{
				tbody.children().remove();
				for (var i = 0; i < data.length; i++) {
					tbodyContent = "<tr>"
						+"<th><input type='checkbox' id='ckselect' value="+data[i].auth_id+"></th>"
						+"<td style='width: 20%;'>"+data[i].menu_id+"</td>"
						+"<td style='width: 20%;'>"+data[i].menu_nm+"</td>"
						+"<td style='width: 20%;'>"+data[i].up_menu_nm+"</td>"
						+"<td style='width: 10%;'>"+data[i].retrv_yn+"</td>"
						+"<td style='width: 10%;'>"+data[i].creat_yn+"</td>"
						+"<td style='width: 10%;'>"+data[i].mdfy_yn+"</td>"
						+"<td style='width: 10%;'>"+data[i].del_yn+"</td>"
						tbody.append(tbodyContent);
				}
			}
		}
	});
}

//취소 버튼 기능
function authCancelBtn() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	
	if(ynChk){
		// 버튼 활성화
		$("#contactbody input[type='text']").css("background-color", "#EAEAEA");
		
		$(".bt_position_detail").css("display", "none");
		$(".bt_position_modi").css("display", "block");
		$(".bt_position_modi_save").css("display", "none");

		// 상세정보에 값 넣기
		$("#auth_nm").val($("#hauth_nm").val()).attr("disabled", true); 
		if($('#hauth_active_flg1').val()=='Y'){
			$('#auth_active_flg1').val($('#hauth_active_flg1').val()).prop("checked", true);
			$('#auth_active_flg1').attr("disabled", true);
			$('#auth_active_flg2').attr("disabled", true);
		}else{
			$('#auth_active_flg2').val($('#hauth_active_flg1').val()).prop("checked", true);
			$('#auth_active_flg1').attr("disabled", true);
			$('#auth_active_flg2').attr("disabled", true);
		}
	}
}

function authDetail(auth_id) {
	
	var ctx = $("#ctx").val();
	
	$(".bt_position_detail").css("display", "none");
	$(".bt_position_modi").css("display", "block");
	$(".bt_position_modi_save").css("display", "none");
	
	$.ajax({
		type : 'POST',
		url : ctx+'/authDetail',
		data : "auth_id="+auth_id,
		dataType : "json",
		success : function(data) {
			
			$('#auth_id').val(data.auth_id).attr("disabled", true);       
			$('#auth_nm').val(data.auth_nm).attr("disabled", true);
			if (data.act_yn == "Y") {
				$('#auth_active_flg1').prop("checked", true);
				$('#auth_active_flg2').prop("checked", false);
				$('#auth_active_flg2').attr("disabled", true);
			} else {
				$('#auth_active_flg1').prop("checked", false);
				$('#auth_active_flg2').prop("checked", true);
				$('#auth_active_flg1').attr("disabled", true);
			}
			
			//히든속성에 value 값 설정하기
			
			$("#hauth_nm").val(data.auth_nm);
			$("#hauth_active_flg1").val(data.act_yn);
		},
		error : function(request,status,error) {
	          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	      }
	});
}

function authAddCancelBtn(){
	$(document).ready(function() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){	
		
		$('#auth_nm').val("");
		$('#auth_active_flg1').val("Y");
		
		// 버튼 활성화
		$("#bt_position_detail").css("display", "block");
		$("#bt_position_modi").css("display", "none");
	   }
	});
}

function authKeyMdiBtn(){
	$("#edit_menu").click(function() {

		$('#auth_nm').attr("disabled",false);
		$('#auth_active_flg1').attr("disabled",false);
		$('#auth_active_flg2').attr("disabled",false);
		
		// 버튼 활성화
		$(".bt_position_detail").css("display", "none");
		$(".bt_position_modi").css("display", "none");
		$(".bt_position_modi_save").css("display", "block");
	});
}

//권한수정
function authMdfy() {
	$(document).ready(function() {
		
		var ctx = $("#ctx").val();
		var auth_active_flg1;
		alert($('#auth_active_flg2').val());
		if($('#auth_active_flg1').is(':checked')){
			auth_active_flg1=$('#auth_active_flg1').val();
			
		}else{
			auth_active_flg1=$('#auth_active_flg2').val();		
		}	
		alert("act_yn: " + auth_active_flg1);
		
		var authData = {"auth_id": $("#auth_id").val() , "auth_nm": $("#auth_nm").val(), "act_yn" : auth_active_flg1 };
		
		
		 var jsonData = JSON.stringify(authData);		//JSON Object 생성
		 jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
		
		 var ynChk = confirm("정말 수정하시겠습니까?");
			if(ynChk){	
		 $.ajax({
			type : 'POST',
			url : ctx+'/authEdit',
			data : jsonData,
			contentType : 'application/json; charset=UTF-8',
			dataType : "json",
			success : function(data){
				
				alert("수정되었습니다.");
				
				location.href = ctx + "/auth";
				
				// 버튼 재설정
				$("#bt_position_modi").css("display", "block");
				$("#bt_position_detail").css("display", "none");
				$("#bt_position_modi_save").css("display", "none");
				
				//수정된값 상세정보에 다시 넣기
				
				//히든 속성에 value값 설정하기
				
			}, error : function(data){
				alert(data.callKmMdfyRst);
			}
		});
	   }else{
		   return;
	   }
	});
}

function editAuthMenu(data){

	$('#menumastertable tbody tr').remove();
		for(var i=0; i<data.length; i++){
			var args = '<tr>'
				+'<th><input type="checkbox" id="ckselect" value="'+data[i].auth_id+'"></th>'
				+'<td style="width:20%;">'+data[i].auth_id+'</td>'
				+'<td style="width:20%;">'+data[i].menu_nm+'</td>'
				+'<td style="width:20%;"><input type="hidden" value="'+data[i].menu_id+'"/>'+data[i].up_menu_nm+'</td>'
				+'<td style="width:10%;">'+data[i].retrv_yn+'</td>'
				+'<td style="width:10%;">'+data[i].creat_yn+'</td>'
				+'<td style="width:10%;">'+data[i].mdfy_yn+'</td>'
				+'<td style="width:10%;">'+data[i].del_yn+'</td></tr>';
			$('#menumastertable tbody').append(args);
		}
	}