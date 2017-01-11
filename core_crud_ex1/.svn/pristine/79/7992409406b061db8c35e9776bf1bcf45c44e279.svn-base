$(function(){
	var ctx = $('#ctx').val();
	dboardbtnfunc(ctx);
	
	var auth = $('#auth').val();
	authFunction(auth); //본인글만 수정, 삭제
	
});

//자료실 글 읽고 닫기버튼 눌렀을 떄
function closeBtn(ctx){
	var ctx = $("#ctx").val();

	window.opener.location.reload();
	window.close();
}

//수정, 삭제 ajax
function dboardbtnfunc(ctx){
	//수정 후 저장버튼 눌렀을 때
	$('#adddboardbtn').click(function(){
		var modifyconfirm = window.confirm("수정 하시겠습니까?");
		
		if(modifyconfirm == false){
			return false;
		}
		
		var fileExist = $('#filedata').val();
		if(fileExist != null || fileExist != undefined || fileExist != ""){
			
			var fileYN = 'Y';
			
			var dboardData = {
					
					data_board_id : $('#hiddenId').val(),
					title : $('#dboard_title').text(),
					cont : $('#dboard_cont').text(),
					
					file_yn : fileYN
			}
			
		}else{
			
			var dboardData = {
					
					data_board_id : $('#hiddenId').val(),
					title : $('#dboard_title').text(),
					cont : $('#dboard_cont').text(),
			}
		}

			var jsonData = JSON.stringify(dboardData);
			jQuery.ajaxSettings.traditional = true;
			
			$.ajax({
				
				url : ctx+'/dboardModify',				//보낼 URL
				dataType : 'json',						//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식s
				data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
				contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){

					alert("수정 되었습니다.");
					
					$('#fileform').submit();
					
				},error : function(){
					
					alert("오류");
				}
	
			});
});
			
	
	//수정버튼 눌렀을 때 버튼 효과
	$('#modifydboardbtn').click(function(){
		
		$('#adddboardbtn').attr("disabled", false);
		$('#dboard_cont').attr("contenteditable", "true");
		$('#dboard_title').attr("contenteditable", "true");
		$('#modifydboardbtn').attr("disabled", true);
		
		$('#modifydboardbtn').removeClass('btn');
		$('#modifydboardbtn').removeClass('btn-default');
		$('#modifydboardbtn').addClass('wbtn');
		$('#adddboardbtn').removeClass('wbtn');
		$('#adddboardbtn').addClass('btn');
		$('#adddboardbtn').addClass('btn-default');
		
		$("#dboard_title").css("background-color", "#EAEAEA");
		$("#dboard_title").focus();
		$("#dboard_cont").css("background-color", "#EAEAEA");
		/*$("#filedatadiv").css("background-color", "#EAEAEA");*/
		
		$('#modifydboardbtn').attr("disabled", true);
		$('#fileuploadPop').css('display', 'inline-block');
		
	});
	
	//목록버튼 눌렀을 때
	$('#listdboardbtn').click(function(){
		
		location.href=ctx+'/dboard';
		
	});
	
	//삭제버튼 눌렀을 때
	$('#deletedboardbtn').click(function(){
		
		var delYN= window.confirm("게시물을 삭제 하시겠습니까?");
		
		if(delYN==false){
			return false;
		}
		
		var dboard_id = $('#hiddenId').val();
		
		location.href=ctx+"/dboardDelete?dboardId="+dboard_id;
		
		alert("삭제 되었습니다.");
		
		//부모창으로 삭제 값을 저장하고 , 자식창은 종료된다.
		window.opener.location.href=ctx+"/dboardDelete?dboardId="+dboard_id;
		self.close();
	});
	
	//파일업로드 버튼 눌렀을 때
	$('#fileuploadPop').click(function(){
		
		var fileselectYN = $('#filedata').click();
		/*if(fileselectYN.val() == false || fileselectYN.val() == "" || fileselectYN.val() == undefined){
			alert("선택안함");
			return false;
		}*/
		
		//alert($('#filedata').val());
		$('#filedatadiv').appendTo($('#filedata').val()); //$('#filedata').val() 값을 filedatadiv 에 맨뒤에 추가된다
		
	});
}

function filelistener(filelist){
	
	var filelistText="";
	
	for(var f=0; f<filelist.length; f++){
		
		$('#filedatadiv').append("<input type='hidden' value='"+filelist[f]+"' id='filelist' class='filelist'>");
		
		if(filelist.length-1==f){
			filelistText += filelist[f];
			break;
		}
		
		filelistText += ' | '+ filelist[f]+' | ';
	}
	
	$('#filedatadiv').append(filelistText);
	
	alert("전송되었습니다.");
}

//본인글만 수정 삭제하는 곳
function authFunction(auth){

	if(auth=="noAuth"){
		$('#modifydboardbtn').hide();	
		$('#deletedboardbtn').hide();
		$('#adddboardbtn').hide();
	}
}

