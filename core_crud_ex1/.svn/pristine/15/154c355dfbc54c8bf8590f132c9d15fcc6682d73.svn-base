$(function() {
	var ctx = $('#ctx').val();
	
	suit(ctx);  //심사적합으로 변환하기
	unsuit(ctx); //심사 부적합으로 변환하기
	//leadChange(ctx); //리드변환 팝업창
	leadChange_confirm(ctx); //리드변환하기
});


//심사적합으로 변환하기
function suit(ctx) {
	
	$('#suit_confirm').click(function(){
		
		var cust_id = $("#cust_id").val();
		
		$.ajax({
			url : ctx+'/leadSuitState',
			type : 'POST',
			data :  cust_id,
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				alert(data.result);
				
				opener.location = "lead"
				window.close();
				
			},
			error : function(data){
				alert(data.result);
				history.back();
			}
		});
	});
	
	$('#suit_cancel').click(function(){
		window.close();
	});
}

//심사 부적합으로 변환하기
function unsuit(ctx) {
	
	$('#unsuit_confirm').click(function(){
		
		var cust_id = $("#cust_id").val();
		
		$.ajax({
			url : ctx+'/leadUnSuitState',
			type : 'POST',
			data :  cust_id,
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				alert(data.result);
				
				opener.location = "lead"
				window.close();
				
			},
			error : function(data){
				alert(data.result);
				history.back();
			}
		});
	});
	
	$('#unsuit_cancel').click(function(){
		window.close();
	});
}

//리드변환 팝업
function leadChange(ctx){
	var cust_id = $("#cust_id").val();
	window.open(ctx+'/leadChange?cust_id='+cust_id,'newwindow','width=300, height=150');
}

//리드변환 ajax 통신
function leadChange_confirm(ctx){
	$('#leadChange_confirm').click(function(){
		
		var cust_id = $("#cust_id").val();
		//alert(cust_id);
		$.ajax({
			url : ctx+'/leadChange_confirm',
			type : 'POST',
			data :  cust_id,
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				alert(data.result);
				
				opener.location = "lead"
				window.close();
				
			},
			error : function(data){
				alert(data.result);
				history.back();
			}
		});
	});
	
	$('#leadChange_cancel').click(function(){
		
		window.close();
			
	});
}


