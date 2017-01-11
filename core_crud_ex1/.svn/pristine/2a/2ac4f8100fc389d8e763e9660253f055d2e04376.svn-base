$(function(){
	checkEvent();
	buttonEvent();
	SelectAuth();
});

//tr를 클릭했을 때 텍스트를 넣어주는 작업
function SelectAuth(){
	$('#mastertable tbody tr').click(function(){
		var auth_id=$(this).find(".ai").val();
		var auth_nm=$(this).find(".an").val();
		window.opener.menuNm(auth_id,auth_nm);
		self.close(); 
	});	
}

//각 클래스명으로 체크된 갯수
function auth_checkCount(selectNodeClass){
	var count=0;
	var checkList =	$('.'+selectNodeClass);

	for(var i=0; i<$(checkList).size(); i++){
		if($(checkList[i]).is(':checked')){
			count++;
		}
	}	
	return count;
}

//체크노드 찾기
function auth_checkedNode(ClassName){
	var node;
	var checkList =	$('.'+ClassName);
	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			node = checkList[i];
		}
	}
	return node;
}

//체크에 대한 이벤트처리
function checkEvent(){
	var ctx = $('#ctx').val();
	
	//트리이벤트
	$('#allCheck').click(function(){
		var subcheckboxs = $('.authCheck'); 
		if($(this).is(':checked')){
			$(subcheckboxs).prop('checked',true);
		}else{
			$(subcheckboxs).prop('checked',false);
		}
	});
}

//버튼 이벤트
function buttonEvent(){	
var ctx = $('#ctx').val();
	
	//선택버튼 누를시 
	$('#choiceAuth').click(function(){
		var count = auth_checkCount('authCheck');
		if(count == 1){
			var node = auth_checkedNode('authCheck');
			var conf = confirm("정말 선택하시겠습니까??");
			if(conf){
				var code = $(node).val();
				$(opener.document).find('#auth_id').val(code);
				$(opener.document).find('#auth_nm').val(code);
				self.close();
			}
		}else if(count > 1){
			alert("하나의 항목만 선택해주세요.");
		}else{
			alert("항목을 선택해주세요.");
		}
	});

	//트리이벤트
	$('#restAuth').click(function(){
		var checkboxs = $('#mastertable').find('input[type="checkbox"]'); 
		$(checkboxs).prop('checked',false);
	});
}