$(function() {
	SelectType();
});

//tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function SelectType(){
	
	$('#mastertable tbody tr').click(function(){
		var code=$(this).find(".ab").val();
		window.opener.typeNm(code);
		self.close();
	});	
}
