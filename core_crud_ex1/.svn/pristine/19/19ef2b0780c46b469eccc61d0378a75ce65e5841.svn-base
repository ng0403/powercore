function contAdd(){
	$("#contTable input[type=text]").css("background-color", "white");
	$("#contTable textarea").css("background-color", "white");
	$('#contr_nm').attr('readonly', false).val('');
	$('#cust_nm').attr('readonly', true).val('');
	$('#customer').attr('disabled', false);
	$('#sales_oppt_nm').attr('disabled', false).attr('readonly', true).val('');
	$('#act_oppt_nm').attr('disabled',false);
	$('#contr_qty').attr('readonly', false).val('');
	$('#contr_amt').attr('readonly', false).val('');
	$('#contr_d_detail').attr('readonly', false).val('');
	$('#memo').attr('readonly', false).val('');
	
	// 버튼 활성화
	$("#contBaseBtnDiv").css("display", "none");
	$("#contAddBtnDiv").css("display", "block");
	$("#contMdfBtnDiv").css("display", "none");
}

function contMdfy(){
	$("#contTable input[type=text]").css("background-color", "white");
	$("#contTable textarea").css("background-color", "white");
	$('#contr_nm').attr('readonly', false);
	$('#cust_nm').attr('readonly', true);
	$('#customer').attr('disabled', true);
	$('#sales_oppt_nm').attr('readonly', true);
	$('#act_oppt_nm').attr('disabled',false);
	$('#contr_qty').attr('readonly', false);
	$('#contr_amt').attr('readonly', false);
	$('#contr_d_detail').attr('readonly', false);
	$('#memo').attr('readonly', false);
	//버튼 활성화
	$("#contBaseBtnDiv").css("display", "none");
	$("#contAddBtnDiv").css("display", "none");
	$("#contMdfyBtnDiv").css("display", "block");
}
//
////계약수량칸에 숫자만 입력받기
//$('#contr_qty').live("keyup",function(event){
//	   var thisObj = $(this);
//	   thisObj .css('imeMode','disabled');
//	   var value = thisObj.val().match(/[^0-9]/g);
//	   if(value!=null) {
//	    thisObj.val(thisObj.val().replace(/[^0-9]/g,''));
//	   }
//	});


function contCancel(){
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		$("#contTable input[type=text]").css("background-color", "#EAEAEA");
		$("#contTable textarea").css("background-color", "#EAEAEA");
		$('#contr_nm').val($('#hcontr_nm').val()).attr('readonly',true);
		$('#cust_nm').val($('#hcust_nm').val()).attr('readonly',true);
		$('#cust_id').val($('#hcust_id').val());
		$('#customer').attr('disabled', true);
		$('#sales_oppt_nm').val($('#hsales_oppt_nm').val()).attr('readonly',true);
		$('#sales_oppt_id').val($('#hsales_oppt_id').val());
		$('#estim_id').val($('#hestim_id').val());
		$('#act_oppt_nm').attr('disabled',true);
		$('#contr_qty').val($('#hcontr_qty').val()).attr('readonly',true);
		$('#contr_amt').val($('#hcontr_amt').val()).attr('readonly',true);
		$('#contr_d_detail').val($('#hcontr_d_detail').val()).attr('readonly',true);
		$('#memo').val($('#hmemo').val()).attr('readonly',true);
		
		$("#contBaseBtnDiv").css("display", "block");
		$("#contAddBtnDiv").css("display", "none");
		$("#contMdfyBtnDiv").css("display", "none");
	}
}