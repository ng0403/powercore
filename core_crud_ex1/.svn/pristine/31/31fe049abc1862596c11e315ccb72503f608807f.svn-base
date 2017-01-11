$(function(){
	var ctx = $('#ctx').val();
	LoginValidate(ctx);
});

function LoginValidate(ctx){
	$('#loginBtn').click(function(){
		var id = $.trim($('#user').val());
		var pass = $.trim($('#pass').val());
		if(id == ''){
			alert('아이디를 입력해 주세요.');
		}else if(pass == ''){
			alert('비밀번호를 입력해 주세요.');
		}else{
			var obj = new Object();
			obj.id_nm=id;
			obj.pwd=pass;
			
			var data = JSON.stringify(obj);
			$.ajaxSettings.traditional = true;
			$.ajax({
				url: ctx+'/loginValidate',
				type: 'POST',
				data:data,
				contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
		        dataType:'json',
		        success: function(result){
		        	if(result == 1){
		        		var form = $('#loginForm');
		        		$(form).attr('action',ctx+'/home').submit();
		        	}else if(result == -1){
		        		alert('정보가 올바르게 조회되지 않았습니다.\n다시 입력해주세요.');
		        	}else{
		        		alert('아이디나 비밀번호가 맞지 않습니다.\n다시 입력해주세요.');
		        	}
		        },
		        error: function(){
		            alert("올바르게 로그인처리 되지 않았습니다.");
		        }
			});
		}
	});
	
	$('input').keydown(function(event){
		if(event.keyCode==13){
			var id = $.trim($('#user').val());
			var pass = $.trim($('#pass').val());
			if(id == ''){
				alert('아이디를 입력해 주세요.');
				$('#user').focus();
			}else if(pass == ''){
				alert('비밀번호를 입력해 주세요.');
				$('#pass').focus();
			}else{
				var obj = new Object();
				obj.id_nm=id;
				obj.pwd=pass;
				
				var data = JSON.stringify(obj);
				$.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/loginValidate',
					type: 'POST',
					data:data,
					contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	if(result == 1){
			        		var form = $('#loginForm');
			        		$(form).attr('action',ctx+'/home').submit();
			        	}else if(result == -1){
			        		alert('정보가 올바르게 조회되지 않았습니다.\n다시 입력해주세요.');
			        	}else{
			        		alert('아이디나 비밀번호가 맞지 않습니다.\n다시 입력해주세요.');
			        	}
			        },
			        error: function(){
			            alert("올바르게 로그인처리 되지 않았습니다.");
			        }
				});
			}
		}
	});
}