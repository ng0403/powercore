/**
 * 함수 목록
 * custCompNmSelect(ctx)		:		고객명 클릭 시
 * 
 */

$(function(){
	var ctx = $('#ctx').val();
	custCompNmSelect(ctx);
});	

//고객리스트 tr를 클릭했을 때 고객명 텍스트를 넣어주는 작업
function custCompNmSelect(ctx){
	$('#custcomp_list_table tbody tr').click(function(){
		var custNm=$(this).find('#cust_nm').text();
		var custId=$(this).find('#cust_id').text();
		window.opener.inputCustNm(custNm,custId);
		self.close();
	});
}
