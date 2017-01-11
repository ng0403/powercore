/**
 * 
 */
// jsp파일에서 설정한 input의 아이디의 value값을 가져오는 역할.
$(function(){
	var ctx = $('#ctx').val();

	actOpptListPopup(ctx);
	//actOpptNmSelect(ctx);//여기에 써주면 바디부분까지 다 로드가 된다음에 이것을 자동으로 실행해 준다는 것(계속 실행되고있는 것)
	custcompListPopup(ctx);
	//custNmSelect(ctx);
});


//영업기회 팝업창 띄우기
function actOpptListPopup(ctx){
	$('#act_oppt_nm').click(function(){
		if($('#cust_id').val() == "")
			{
				alert("고객사를 먼저 선택해주세요");
			}else
				{
				window.open(ctx+'/contActOpptList?cust_id='+$('#cust_id').val(),'newwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
				
				}
	});
}

function inputOpptNm(sales_oppt_id,sales_oppt_nm,estim_id, sales_price){
	$('#sales_oppt_id').val(sales_oppt_id);
	$('#sales_oppt_nm').val(sales_oppt_nm);
	$('#estim_id').val(estim_id);
	$('#contr_amt').val(sales_price);
	$('#act_oppt_nm').attr('disabled',false);
}

//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function actOpptNmSelect(sales_oppt_id,sales_oppt_nm,estim_id, sales_price){
	window.opener.inputOpptNm(sales_oppt_id,sales_oppt_nm,estim_id, sales_price);
	self.close();
}

//고객사리스트 팝업창 띄우기
function custcompListPopup(ctx){
	$('#customer').click(function(){
		window.open(ctx+'/contCustcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes');
	});
}

function inputCustNm(cust_id,cust_nm){
	
	$('#cust_id').val(cust_id);
	$('#cust_nm').val(cust_nm);
	$('#cust_nm').attr('disabled',false).attr('readonly', true);
	$('#act_oppt_nm').attr('disabled',false).attr('readonly', false);
}

//고객사리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function custNmSelect(cust_id, cust_nm){
	window.opener.inputCustNm(cust_id,cust_nm);
	self.close();
	$('#act_oppt_nm').val("");
	$('#contr_amt').val("");
}