$(function() {
	var ctx = $('#ctx').val();
	allChk();
	checkCount();
	userDetailClick(ctx);
	iuserListAdd();
	iuserListEdit(ctx);
	iuserDelete(ctx);
});


//페이지 입력 이동
function pageInputIuser(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			var iUserPageNum = $("#iUserPageInput").val();
			var endPageNum = $("#endPageNum").val();
			var iUser_name = $("#iUser_name").val();
			var iUser_email = $("#iUser_email").val();
			var iUser_tel = $("#iUser_tel").val();
			var iUser_iuser_nm = $("#iUser_iuser_nm").val();
			if (parseInt(iUserPageNum) > parseInt(endPageNum) || parseInt(iUserPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#iUserPageInput").val("1");
			} else {
				if(iUser_name == '' && iUser_email == '' && iUser_tel == '' && iUser_iuser_nm == ''){
					iUserPaging(iUserPageNum);
				} else {
					iUserPaging(iUserPageNum);
				}
			}
		}
	event.stopPropagation();
}


//검색 input에서 엔터로 검색 조회 가능하게 하는 함수
function iUserSearchInput(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		iUserSchPaging(1);
	}
	event.stopPropagation();
}

//사용자 리스트 그냥 페이징
function iUserPaging(iUserPageNum) {
	var ctx = $("#ctx").val();
	var tbody = $('#usertbody');
	var tbodyContent = "";
	var iUserData = { "iUserPageNum": iUserPageNum };

	$.ajax({
		url : ctx+'/iUserPaging',
		type : 'POST',
		data : iUserData,
		success : function(data) {
			if(data.result == 'standard/home/session_expire'){
				location.href = ctx + '/sessionExpire';
			}else{
				if(data.iUserListSize == 0){
					alert("검색결과가 없습니다.");
					location.href = ctx+'/user';
				}else{
					tbody.children().remove();
					
					for (var i = 0; i < data.iUserList.length; i++) {
						var act_yn='';
						if(data.iUserList[i].act_yn == 'Y'){
							act_yn='<td style="width:10%; ">활성</td></tr>'
						}else{
							act_yn='<td style="width:10%; ">비활성</td></tr>'
						}
						
						tbodyContent +='<tr><th><input type="checkbox" id="iUser_chek" class="ab" name="del_code" value="'+data.iUserList[i].iuser_id+'"></th>'
						+'<td style="width:10%;" onclick=callTabFunc("'+data.iUserList[i].iuser_id+'")><a style="color: blue; cursor: pointer;" class="iUserClick">'+data.iUserList[i].id_nm+'</a></td>'
						+'<td style="width:10%; ">'+data.iUserList[i].iuser_nm+'</td>'
						+'<td style="width:10%; ">'+data.iUserList[i].org_nm+'</td>'
						+'<td style="width:20%; ">'+data.iUserList[i].email1+'@'+data.iUserList[i].email2+'</td>'
						+'<td style="width:20%;" >'+data.iUserList[i].cell_ph1+'-'+data.iUserList[i].cell_ph2+'-'+data.iUserList[i].cell_ph3+'</td>'
						+'<td style="width:10%;" >'+data.iUserList[i].auth_nm+'</td>'
						+'<td style="width:10%;" >'+data.iUserList[i].cd_nm+'</td>'
						+act_yn;
					}
					
					tbody.append(tbodyContent);
				}
				
				if(data.iUserList.length < 4){
					for(var i=0; i<4-data.iUserListSize; i++){
						tbodyContent='<tr style="height: 24.5px;"><th></th>'
							+'<td style="width:10%;"></td>'
							+'<td style="width:10%;"></td>'
							+'<td style="width:10%;"></td>'
							+'<td style="width:20%;"></td>'
							+'<td style="width:20%;"></td>'
							+'<td style="width:10%;"></td>'
							+'<td style="width:10%;"></td>'
							+'<td style="width:10%;"></td></tr>';
						tbody.append(tbodyContent);
					}		
				}
				
				var pageContent = "";
				// 페이징 다시그리기
				$("#pager").children().remove();
				
				if(data.iUserPageNum == data.page.startPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+" style='width: 14%;'/>"
					+"<input type='hidden'  style='width: 14%;' id='iUserPageNum' value='"+data.iUserPageNum+"'/>"
					+"<a style='text-decoration: none;'> ◀ </a> <input type='text'  style='width: 14%;' id='iUserPageInput' class='iUser_page_txt' value='"+data.iUserPageNum+"' onkeypress=\"pageInputIuser(event);\"/>" 
					+"<a href='#' onclick=iUserPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=iUserPaging("+(data.iUserPageNum+1)+") id='pNum' style='text-decoration: none;'> ▶ </a>";
				} else if(data.iUserPageNum == data.page.endPageNum){
					
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"' style='width: 14%;'/>"
					+"<input type='hidden' style='width: 14%;' id='iUserPageNum' value='"+data.iUserPageNum+"'/>"
					+"<a href='#' onclick=iUserPaging("+(data.iUserPageNum-1)+") id='pNum' style='text-decoration: none;'> ◀ </a>"
					+"<input type='text' style='width: 14%;' id='iUserPageInput' class='iUser_page_txt' value='"+data.page.endPageNum+"' onkeypress=\"pageInputIuser(event);\"/>"
					+"<a href='#' onclick=iUserPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
					+"<a style='text-decoration: none;'> ▶ </a>";
				} else {
					
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"' style='width: 14%;'/>"
					+"<input type='hidden' style='width: 14%;' id='iUserPageNum' value='"+data.iUserPageNum+"'/>"
					+"<a href='#' onclick=iUserPaging("+(data.iUserPageNum-1)+") id='pNum' style='text-decoration: none;'> ◀ </a>"
					+"<input type='text' style='width: 14%;' id='iUserPageInput' class='iUser_page_txt' value='"+data.iUserPageNum+"' onkeypress=\"pageInputIuser(event);\"/>"
					+"<a href='#' onclick=iUserPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=iUserPaging("+(data.iUserPageNum+1)+") id='pNum' style='text-decoration: none;'> ▶ </a>";
				}
				$("#pager").append(pageContent);
			}
		},
		error : function() {
			alert("에러발생 페이징 list.js 105line");
		}
	});
}

//사용자 검색 후 리스트 그냥 페이징
function iUserSchPaging(iUserPageNum) {
	var ctx = $("#ctx").val();
	var tbody = $('#usertbody');
	var tbodyContent = "";
	var u_id = $('#u_id').val();
	var u_name = $('#u_name').val();
	var o_name = $('#o_name').val();
	var iUserData = { "iUserPageNum": iUserPageNum, "u_id":u_id,"u_name":u_name,"o_name":o_name };

	$.ajax({
		url : ctx+'/iUserPaging',
		type : 'POST',
		data : iUserData,
		success : function(data) {
			if(data.result == 'standard/home/session_expire'){
				location.href = ctx + '/sessionExpire';
			}else{
				if(data.iUserListSize == 0){
					alert("검색결과가 없습니다.");
					location.href = ctx+'/user';
				}else{
					tbody.children().remove();
					
					for (var i = 0; i < data.iUserList.length; i++) {
						var act_yn='';
						if(data.iUserList[i].act_yn == 'Y'){
							act_yn='<td style="width:10%; ">활성</td></tr>'
						}else{
							act_yn='<td style="width:10%; ">비활성</td></tr>'
						}
						
						tbodyContent +='<tr><th><input type="checkbox" id="iUser_chek" class="ab" name="del_code" value="'+data.iUserList[i].iuser_id+' style="width: 3.4%; height: 30px;""></th>'
						+'<td onclick=callTabFunc("'+data.iUserList[i].iuser_id+'")><a style="color: blue; cursor: pointer;" class="iUserClick">'+data.iUserList[i].id_nm+'</a></td>'
						+'<td>'+data.iUserList[i].iuser_nm+'</td>'
						+'<td>'+data.iUserList[i].org_nm+'</td>'
						+'<td>'+data.iUserList[i].email1+'@'+data.iUserList[i].email2+'</td>'
						+'<td>'+data.iUserList[i].cell_ph1+'-'+data.iUserList[i].cell_ph2+'-'+data.iUserList[i].cell_ph3+'</td>'
						+'<td>'+data.iUserList[i].auth_nm+'</td>'
						+'<td>'+data.iUserList[i].cd_nm+'</td>'
						+act_yn;
					}
					
					tbody.append(tbodyContent);
				}
				
				if(data.iUserList.length < 4){
					for(var i=0; i<4-data.iUserListSize; i++){
						tbodyContent='<tr style="height: 30px;"><th></th>'
							+'<td style="width:10%; height:19px;"></td>'
							+'<td style="width:10%; height:19px;"></td>'
							+'<td style="width:10%; height:19px;"></td>'
							+'<td style="width:20%; height:19px;"></td>'
							+'<td style="width:20%; height:19px;"></td>'
							+'<td style="width:10%; height:19px;"></td>'
							+'<td style="width:10%; height:19px;"></td>'
							+'<td style="width:10%; height:19px;"></td></tr>';
						tbody.append(tbodyContent);
					}		
				}
				
				var pageContent = "";
				// 페이징 다시그리기
				$("#pager").children().remove();
				
				if(data.iUserPageNum == data.page.startPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+" style='width: 14%;'/>"
					+"<input type='hidden'  style='width: 14%;' id='iUserPageNum' value='"+data.iUserPageNum+"'/>"
					+"<a style='text-decoration: none;'> ◀ </a> <input type='text'  style='width: 14%;' id='iUserPageInput' class='iUser_page_txt' value='"+data.iUserPageNum+"' onkeypress=\"pageInputIuser(event);\"/>" 
					+"<a href='#' onclick=iUserSchPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=iUserSchPaging("+(data.iUserPageNum+1)+") id='pNum' style='text-decoration: none;'> ▶ </a>";
				} else if(data.iUserPageNum == data.page.endPageNum){
					
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"' style='width: 14%;'/>"
					+"<input type='hidden' style='width: 14%;' id='iUserPageNum' value='"+data.iUserPageNum+"'/>"
					+"<a href='#' onclick=iUserSchPaging("+(data.iUserPageNum-1)+") id='pNum' style='text-decoration: none;'> ◀ </a>"
					+"<input type='text' style='width: 14%;' id='iUserPageInput' class='iUser_page_txt' value='"+data.page.endPageNum+"' onkeypress=\"pageInputIuser(event);\"/>"
					+"<a href='#' onclick=iUserSchPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
					+"<a style='text-decoration: none;'> ▶ </a>";
				} else {
					
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"' style='width: 14%;'/>"
					+"<input type='hidden' style='width: 14%;' id='iUserPageNum' value='"+data.iUserPageNum+"'/>"
					+"<a href='#' onclick=iUserSchPaging("+(data.iUserPageNum-1)+") id='pNum' style='text-decoration: none;'> ◀ </a>"
					+"<input type='text' style='width: 14%;' id='iUserPageInput' class='iUser_page_txt' value='"+data.iUserPageNum+"' onkeypress=\"pageInputIuser(event);\"/>"
					+"<a href='#' onclick=iUserSchPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=iUserSchPaging("+(data.iUserPageNum+1)+") id='pNum' style='text-decoration: none;'> ▶ </a>";
				}
				
				$("#pager").append(pageContent);
			}
		},
		error : function() {
			alert("에러발생 페이징 list.js 105line");
		}
	});
}


// 1.모두 체크
function allChk() {
	var test3 = $('#mastertable tbody').find('input[type=checkbox]');

	if ($('#allCheck').is(":checked")) {
		$(test3).prop("checked", true);
	} else {
		$(test3).prop("checked", false);
	}
}

function checkCount() {
	var count = 0;
	var checkList = $('.ab');
	for (var i = 0; i < checkList.size(); i++) {
		if ($(checkList[i]).is(':checked')) {
			count++;
		}
	}
	return count;
};

function iuserDelete(ctx) {
	$('#iuserDelBtn').click(function() {
		var form = $('#delAllForm');
		if (checkCount() == 0) {
			alert("삭제할 항목을 선택해주세요.");
		} else {
			var n = confirm("정말 삭제하시겠습니까??");
			if(n){
				form.submit();
			}
		}
	});
}

function userDetailClick(ctx) {
	$('#usertbody').delegate('a', 'click', function(event) {

		var userId = $(this).text();
		userDetail(userId);
		userAuth(userId);
	});
}

function userDetail(userId)
{
	event.preventDefault();
	var ctx = $('#ctx').val();
	$.ajax({
		url : ctx + '/iuserDetail',
		data : userId, //보낼 데이터값
		dataType : 'json',
		type : "POST", //
		contentType : "application/json",
		success : function(data) {
			$('#iuser_id').val(data.iuser_id);
			$('#id_nm').val(data.id_nm);
			$('#iuser_nm').val(data.iuser_nm);
			$('#pwd').val(data.pwd);
			$('#user_type_cd').val(data.iuser_div_cd);
			$('#userTypePop').attr("disabled", true);
			$('#home_phone1').val(data.ph1);
			$('#home_phone2').val(data.ph2);
			$('#home_phone3').val(data.ph3);
			$('#company_phone1').val(data.comp_ph1);
			$('#company_phone2').val(data.comp_ph2);
			$('#company_phone3').val(data.comp_ph3);
			$('#cell_phone1').val(data.cell_ph1);
			$('#cell_phone2').val(data.cell_ph2);
			$('#cell_phone3').val(data.cell_ph3);
			$('#email1').val(data.email1);
			$('#email2').val(data.email2);

			$('#org_id').val(data.org_id);
			$('#org_nm').val(data.org_nm);
			$('#orgPopup').attr("disabled", true);

			if (data.act_yn == "Y") {
				$('#active_flg_Y').prop("checked", true);
				$('#active_flg_N').prop("checked", false);
				$('#active_flg_N').attr("disabled", true);
			} else {
				$('#active_flg_Y').prop("checked", false);
				$('#active_flg_N').prop("checked", true);
				$('#active_flg_Y').attr("disabled", true);
			}

			$('#auth_name').val(data.auth_id);
			$('#auth_name').attr("disabled", true);
			$('#user_type_cd').attr("disabled", true);
			$('#tabDiv1 input').attr("disabled", true);
			$('#addsavebtn').attr("disabled", false);
			$('#modifybtn').attr("disabled", false);
			$("#iUserBaseBtnDiv").css("display", "block");
			$("#iUserAddBtnDiv").css("display", "none");
			$("#iUserMdfyBtnDiv").css("display", "none");
			
			//권한 가져오기
		},
		error : function(e) {
			alert("오류발생");
		}
	});
}

function userAuth(userId)
{
	event.preventDefault();
	var ctx = $('#ctx').val();
	var tbody = $('#userAuthBody');
	var tbodyContent = "";
	$.ajax({
		url : ctx + '/iuserAuth',
		data : userId, //보낼 데이터값
		dataType : 'json',
		type : "POST", //
		contentType : "application/json",
		success : function(data) {
			$('#userAuthBody').children("tr").remove();
//			var tbody = $('#userAuthBody');
//			var tbodyContent = "";
			for (var i = 0; i < data.length; i++) {
				tbodyContent +='<tr><td style="width:123px; ">'+data[i].id_nm+'</td>'
				+'<td style="width:10%; ">'+data[i].auth_id+'</td>'
				+'<td style="width:10%; ">'+data[i].auth_nm+'</td>'
				+'<td style="width:10%;">'+data[i].menu_nm+'</td>'
				+'<td style="width:15%; ">'+'생성['+data[i].creat_yn+']'+'</td>'
				+'<td style="width:15%; ">'+'조회['+data[i].mdfy_yn+']'+'</td>'
				+'<td style="width:15%; ">'+'수정['+data[i].retrv_yn+']'+'</td>'
				+'<td style="width:15%; ">'+'삭제['+data[i].del_yn+']'+'</td></tr>';
			}
			tbody.append(tbodyContent);
		},
		error : function(e) {
			alert("오류발생");
		}
	});
}

function iuserListAdd(){
	$('#iuserListAddBtn').click(function(){
		$('#iuser_id').val("");
		$('#id_nm').val("");
		$('#iuser_nm').val("");
		$('#pwd').val("");
		$('#user_type_cd').val("");
		$('#org_id').val("");
		$('#home_phone1').val("");
		$('#home_phone2').val("")+"-"+$('#home_phone3').val("");
		$('#company_phone1').val("")+"-"+$('#company_phone2').val("")+"-"+$('#company_phone3').val("");
		$('#cell_phone1').val("")+"-"+$('#cell_phone2').val("")+"-"+$('#cell_phone3').val("");
		$('#email1').val("") + "@"+$('#email2').val("");
		$('#tabDiv1 input').attr("disabled", false);
		$('#auth_name').attr("disabled", false);
		$('#addsavebtn').attr("disabled", false);
		$('#modifybtn').attr("disabled", false);
		$('#submitbtn').attr("disabled", true);
		$('#addsavebtn').css("display", "inline-block");
		$('#modifysavebtn').css("display", "none");
	});
}

function iuserListEdit(ctx){
	$('#iuserListEditBtn').click(function(){
		if(checkCount() == 0){
			alert('수정할 정보를 체크하여 주세요.');
		}else if(checkCount() == 1){
			var checkbox = $('#usertbody tr').find('input[type="checkbox"]:checked');
			var userId = $(checkbox).parent().next().children().text()

			$.ajax({
				url : ctx + '/iuserDetail',
				data : userId, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
				contentType : "application/json",
				success : function(data) {
					$('#iuser_id').val(data.iuser_id);
					$('#id_nm').val(data.id_nm);
					$('#iuser_nm').val(data.iuser_nm);
					$('#pwd').val(data.pwd);
					$('#pwd').attr("disabled",true);
					$('#user_type_cd').val(data.iuser_div_cd);
					$('#userTypePop').attr("disabled", true);

					$('#home_phone1').val(data.ph1);
					$('#home_phone2').val(data.ph2);
					$('#home_phone3').val(data.ph3);
					$('#company_phone1').val(data.comp_ph1);
					$('#company_phone2').val(data.comp_ph2);
					$('#company_phone3').val(data.comp_ph3);
					$('#cell_phone1').val(data.cell_ph1);
					$('#cell_phone2').val(data.cell_ph2);
					$('#cell_phone3').val(data.cell_ph3);
					$('#email1').val(data.email1);
					$('#email2').val(data.email2);

					$('#org_id').val(data.org_id).attr("disabled", true);
					$('#orgPopup').attr("disabled", true);

					if (data.act_yn == "Y") {
						$('#active_flg_Y').prop("checked", true);
						$('#active_flg_N').prop("checked", false);
						$('#active_flg_N').attr("disabled", true);
					} else {
						$('#active_flg_Y').prop("checked", false);
						$('#active_flg_N').prop("checked", true);
						$('#active_flg_Y').attr("disabled", true);
					}

					$('#auth_name').val(data.auth_id);
					$('#auth_name').attr("disabled", true);
					$('#tabDiv1 input').attr("disabled", true);
					$('#addsavebtn').attr("disabled", true);
					$('#modifybtn').attr("disabled", true);
					//권한 가져오기
				},
				error : function(e) {
					alert("오류발생");
				}
			});
		}else{
			alert('수정할 정보를 하나만 선택하여 주세요.');
		}
	});
}