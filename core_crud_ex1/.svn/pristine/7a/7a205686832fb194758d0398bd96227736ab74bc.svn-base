$(function(){
	var ctx = $('#ctx').val();
	compListPopup(ctx);
	addrPop(ctx);
	employeePop(ctx);
	compNmSelect(ctx);

});

//회사명리스트 팝업창 띄우기
function compListPopup(ctx){
	$('#comp_list_bt').click(function(){
		window.open(ctx+'/compList','newwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function inputCompNm(compNm,compId){
	
	$('#comp_nm').val(compNm);
	$('#comp_id').val(compId);
}

//회사명리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function compNmSelect(ctx){
	$('#comp_list_table tbody tr').click(function(){
		
		var compNm=$(this).find('#comp_nm').text();
		var compId=$(this).find('#comp_id').text();

		window.opener.inputCompNm(compNm,compId);
		
		self.close();
		
	});
}

function addrPop(ctx){
	//우편번호 검색 팝업
	$('#addr').click(function(){
		window.open(ctx+'/ccAddrListPop.do','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function employeePop(ctx){
	// 직원검색 팝업
	$('#iuser_search').click(function(){
		window.open(ctx+'/iuserSearchPop.do','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
