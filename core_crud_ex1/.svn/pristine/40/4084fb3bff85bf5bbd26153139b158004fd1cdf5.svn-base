$(function(){
	var ctx = $('#ctx').val();
	prodCateListPopup(ctx);
//	custcompListPopup(ctx);
	prodNmSelect(ctx);
	custNmSelect(ctx);
	
});

//상품 팝업창 띄우기
function prodCateListPopup(ctx){
	$('#prod_cate').click(function(){
		window.open(ctx+'/prodCateList ','newwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}


//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function prodNmSelect(ctx){
	$('#act_oppt_list_table tbody tr').click(function(){
/*		var cateNm=$(this).find('#cate_nm').text();
		var cateId=$(this).find('#cate_id').text();
		alert($(this).find('#cate_nm').text());*/
		var cateNm=$(this).find('#cate_nm').text();
		var cateId=$(this).find('#cate_id').text();
		
		
		window.opener.inputProdNm(cateNm,cateId);
		
		self.close();
		
	});
}

function inputCustNm(custNm,custId){
	
	$('#cust_nm').val(custNm);
	$('#cust_id').val(custId);
}

//고객사리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function custNmSelect(ctx){
	$('#custcomp_list_table tbody tr').click(function(){
		
		var custNm=$(this).find('#cust_nm').text();
		var custId=$(this).find('#cust_id').text();

		window.opener.inputCustNm(custNm,custId);
		
		self.close();
		
	});
}