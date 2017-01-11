$(function() {
	SelectName();
});

//tr를 클릭했을 때 텍스트를 넣어주는 작업
function SelectName(){
	$('#mastertable tbody tr').click(function(){
		var org_nm=$(this).find(".ab").val();
		var org_id=$(this).find(".ab2").val();
		window.opener.nameNm(org_nm);
		window.opener.nameId(org_id);
		self.close();
	});	
}


