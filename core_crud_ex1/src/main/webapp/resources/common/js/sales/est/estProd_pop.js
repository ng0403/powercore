/**
 * 함수 목록
 * prodNmSelect(ctx)			:		상품명 클릭 시
 * 
 */

$(function(){
	var ctx = $('#ctx').val();
	prodNmSelect(ctx);
});	

//상품리스트 tr를 클릭했을 때 상품명 텍스트를 넣어주는 작업
function prodNmSelect(ctx){
	$('#product_list_table tbody tr').click(function(){
		var prod_id=$(this).find('#prod_id').text();
		var prod_nm=$(this).find('#prod_nm').text();
		var prod_sales_amt=$(this).find('#prod_sales_amt').text();	
		window.opener.inputProd(prod_id,prod_nm,prod_sales_amt);
		self.close();
	});
}