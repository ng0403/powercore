/**
 * 키맨추가 관련 js파일
 */
function keymanListRefresh(cust_id) {
	window.opener.keymanList(cust_id);
	self.close();
}

function keymanAdd() {
	$(document).ready(function() {
		
		if($("#kmn_nm").val() == '' || $("#kmn_nm").val() == null) {
			alert("키맨명을 입력해 주세요");
			$("#kmn_nm").focus();
			return false;
		} else if($("#pos_nm").val() == '' || $("#pos_nm").val() == null) {
			alert("직급을 입력해 주세요");
			$("#pos_nm").focus();
			return false;
		} else if($("#ph1").val() == '' || $("#ph1").val() == null || $("#ph1").val().length < 2){
			alert("대표 전화 번호를 모두 입력해 주세요");
			$("#ph1").focus();
			return false;
		} else if($("#ph2").val() == '' || $("#ph2").val() == null || $("#ph2").val().length < 3){
			alert("대표 전화 번호를 모두 입력해 주세요");
			$("#ph2").focus();
			return false;
		} else if($("#ph3").val() == '' || $("#ph3").val() == null || $("#ph3").val().length < 4){
			alert("대표 전화 번호를 모두 입력해 주세요");
			$("#ph3").focus();
			return false;
		} else if($("#cell_ph1").val() == '' || $("#cell_ph1").val() == null || $("#cell_ph1").val().length < 2){
			alert("이동 전화 번호를 모두 입력해 주세요");
			$("#cell_ph1").focus();
			return false;
		} else if($("#cell_ph2").val() == '' || $("#cell_ph2").val() == null || $("#cell_ph2").val().length < 3){
			alert("이동 전화 번호를 모두 입력해 주세요");
			$("#cell_ph2").focus();
			return false;
		} else if($("#cell_ph3").val() == '' || $("#cell_ph3").val() == null || $("#cell_ph3").val().length < 4){
			alert("이동 전화 번호를 모두 입력해 주세요");
			$("#cell_ph3").focus();
			return false;
		} else if($("#email1").val()  == '' || $("#email1").val()  == null){
			alert("이메일 주소을 입력해 주세요");
			$("#email1").focus();
			return false;
		} else if($("#email2").val()  == '' || $("#email2").val()  == null){
			alert("이메일 주소를 입력해 주세요");
			$("#email2").focus();
			return false;
		} 
		var ctx = $("#ctx").val();
		var cust_id = $("#cust_id").val();
		
		var keymanData = { "cust_id": cust_id, "kmn_nm": $("#kmn_nm").val(), "pos_nm": $("#pos_nm").val()
				, "ph1":$("#ph1").val(), "ph2":$("#ph2").val(),"ph3":$("#ph3").val()
				,"cell_ph1":$("#cell_ph1").val(), "cell_ph2":$("#cell_ph2").val(),"cell_ph3":$("#cell_ph3").val()
				,"email1":$("#email1").val(), "email2":$("#email2").val(), "memo":$("#memo").val()};
		
		$.ajax({
			url : ctx+'/addKeyman.do',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				if(data.addResult == 'standard/home/session_expire'){
					alert("세션이 만료되었습니다.");
					alert("로그인 페이지로 이동합니다.");
					location.href = ctx + '/';
				} else {
					alert(data.addResult);
					keymanListRefresh(cust_id);
				}
			}, error : function(data){
				alert(data.addResult);
			}
		});
	});
}

function keymanMdfy() {
	$(document).ready(function() {
		if($("#kmn_nm").val() == '' || $("#kmn_nm").val() == null) {
			alert("키맨명을 입력해 주세요");
			$("#kmn_nm").focus();
			return false;
		} else if($("#pos_nm").val() == '' || $("#pos_nm").val() == null) {
			alert("직급을 입력해 주세요");
			$("#pos_nm").focus();
			return false;
		} else if($("#ph1").val() == '' || $("#ph1").val() == null || $("#ph1").val().length < 2){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#ph1").focus();
			return false;
		} else if($("#ph2").val() == '' || $("#ph2").val() == null || $("#ph2").val().length < 3){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#ph2").focus();
			return false;
		} else if($("#ph3").val() == '' || $("#ph3").val() == null || $("#ph3").val().length < 4){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#ph3").focus();
			return false;
		} else if($("#cell_ph1").val() == '' || $("#cell_ph1").val() == null || $("#cell_ph1").val().length < 3){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#cell_ph1").focus();
			return false;
		} else if($("#cell_ph2").val() == '' || $("#cell_ph2").val() == null || $("#cell_ph2").val().length < 3){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#cell_ph2").focus();
			return false;
		} else if($("#cell_ph3").val() == '' || $("#cell_ph3").val() == null || $("#cell_ph3").val().length < 4){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#cell_ph3").focus();
			return false;
		} else if($("#email1").val()  == '' || $("#email1").val()  == null){
			alert("이메일 주소을 입력해 주세요");
			$("#iuser_search").focus();
			return false;
		} else if($("#email2").val()  == '' || $("#email2").val()  == null){
			alert("이메일 주소를 입력해 주세요");
			$("#iuser_search").focus();
			return false;
		} 
		
		var ctx = $("#ctx").val();
		var memo = $("#memo").val();
		alert(memo);
		if(memo == ''){
			$("#memo").val('');
		}
		var keymanData = { "kmn_id": $("#kmn_id").val(), "kmn_nm": $("#kmn_nm").val(), "pos_nm": $("#pos_nm").val()
				, "ph1":$("#ph1").val(), "ph2":$("#ph2").val(),"ph3":$("#ph3").val()
				,"cell_ph1":$("#cell_ph1").val(), "cell_ph2":$("#cell_ph2").val(),"cell_ph3":$("#cell_ph3").val()
				,"email1":$("#email1").val(), "email2":$("#email2").val(), "memo":$("#memo").val()};
		
		var cust_id = $("#cust_id").val();
		
		$.ajax({
			url : ctx+'/mdfyKeyman.do',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				if(data.mdfyResult == 'standard/home/session_expire'){
					alert("세션이 만료되었습니다.");
					alert("로그인 페이지로 이동합니다.");
					location.href = ctx + '/';
				} else {
					alert(data.mdfyResult);
					keymanListRefresh(cust_id);
				}
			}, error : function(data){
				alert(data.mdfyResult);
			}
		});
	});
}

//전체 체크 해제
function kmchkCancel() {
	$(document).ready(function() {
		$("#keymanListCheck").prop("checked", false);
	});
}

$(document).ready(function() {
	$("#keymanListCheck").click(function(){
		if($("#keymanListCheck").prop("checked")){
			$("input[id=kmChkbox]").prop("checked", true);
		} else {
			$("input[id=kmChkbox]").prop("checked", false);
		}
	});
	
	$("#ph1").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
	$("#ph2").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
	$("#ph3").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
	$("#cell_ph1").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
	$("#cell_ph2").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
	$("#cell_ph3").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
	$("#email1").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\-_]/gi,'') );  });
	$("#email2").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\.]/gi,'') );  });
});

// 취소버튼
function keymanClose(){
	var chk = confirm("정말 취소 하시겠습니까?");
	if(chk){
		self.close();
	}else{
		return;
	}
}