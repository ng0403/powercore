$(function() {
	//checkCount();
	//oorgChoice();
	Select();
});

//tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function Select(){
	$('#mastertable tbody tr').click(function(){
		var id_nm=$(this).find(".ab").val();
		var iuser_nm=$(this).find(".cd").val();
		window.opener.orgRepNm(id_nm, iuser_nm);
		self.close();
		
	});
}

/*function oorgChoice() {
	$('#oorgChoice').click(function() {
		if (checkCount() == 0) {
			alert("선택할 항목을 선택해주세요.");
		}else if(checkCount()>1){
			alert("한가지 항목을 선택해주세요.");
		}  		
		else {
			var node = searchCheckNode();
			var confi = confirm("정말 선택하시겠습니까??");
			if(confi){
				var code = $(node).val();
				$(opener.document).find('#user_id').val(code);
				self.close();
			}			
		}
	});
}*/