/**
 * 엑셀 업로드 팝업 js
 */
function ExcelUp() {
	var ctx = $('#ctx').val();
//	alert($("#goalup").html());
	if ($("#goalup").html() == "팀별목표") {
		
//		alert(ctx);
				
		var form = new FormData(document.getElementById('fileupload'));
		$.ajax({
			url : ctx + "/ExcelUpload.do",
			type : 'POST',
			dataType : 'text',
			data : form,
			processData : false,
			contentType : false,
			success : function(data, textStatus, jqXHR) {
	//			alert(data);
				if (data == "Y") {
					alert("팀별 목표실적 업데이트를 하였습니다.");
					opener.success(ctx+"/teamgoal");
					self.close();
				}else if (data == "standard/login/login"){
					location.href= ctx+"/";
				}else if(data == "N") {
					alert("팀별 목표실적 업데이트를 실패하였습니다.");
					history.go(-1);
				}
			},
			error : function(request,status,error) {
				 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
		});
	}else {
		
//		alert(ctx);
					
			var form = new FormData(document.getElementById('fileupload'));
			$.ajax({
				url : ctx + "/StaffExcelUpload.do",
				type : 'POST',
				dataType : 'text',
				data : form,
				processData : false,
				contentType : false,
				success : function(data, textStatus, jqXHR) {
		//			alert(data);
					if (data == "Y") {
						alert("담당자별 목표실적 업데이트를 하였습니다.");
//						alert(ctx+"/staffgoal");
						window.opener.success(ctx+"/staffgoal");
						self.close();
					}else if (data == "standard/login/login"){
						location.href= ctx+"/";
					}else if(data == "N") {
						alert("담당자별 목표실적 업데이트를 실패하였습니다.");
						history.go(-1);
					}
				},
				error : function(request,status,error) {
					 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
	}
}

