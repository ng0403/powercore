$(function(){
	var ctx = $('#ctx').val();
	actOpptListPopup(ctx);
	custcompListPopup(ctx);
	actOpptNmSelect(ctx);
	custNmSelect(ctx);
	
});

//영업기회 팝업창 띄우기
function actOpptListPopup(ctx){
	$('#act_opp_nm').click(function(){
		window.open(ctx+'/actOpptList','newwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function inputOpptNm(opptNm,opptId,estimId){
	
	$('#sales_oppt_nm').val(opptNm);
	$('#sales_oppt_id').val(opptId);
	$('#estim_id').val(estimId);
}

//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function actOpptNmSelect(ctx){
	$('#act_oppt_list_table tbody tr').click(function(){
		
		var opptNm=$(this).find('#sales_oppt_nm').text();
		var opptId=$(this).find('#sales_oppt_id').text();
		var estimId=$(this).find('#estim_id').text();

		window.opener.inputOpptNm(opptNm,opptId,estimId);
		
		self.close();
		
	});
}

//고객사리스트 팝업창 띄우기
function custcompListPopup(ctx){
	$('#customer').click(function(){
		window.open(ctx+'/custcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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