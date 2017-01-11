$(function(){
	checkEvent();
	buttonEvent();
});

//각 클래스명으로 체크된 갯수
function cate_checkCount(selectNodeClass){
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
function cate_checkedNode(ClassName){
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
		var subcheckboxs = $('.cateCheck'); 
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
	$('#choiceCate').click(function(){
		var count = cate_checkCount('cateCheck');
		if(count == 1){
			var node = cate_checkedNode('cateCheck');
			var conf = confirm("정말 선택하시겠습니까??");
			if(conf){
				var up_cate_id = $(node).val();
				var up_cate_nm = $(node).parent().parent().find('#cate_nm').text();
				$(opener.document).find('#up_cate_id').val(up_cate_id);
				$(opener.document).find('#up_cate_nm').val(up_cate_nm);
				self.close();
			}
		}else if(count > 1){
			alert("하나의 항목만 선택해주세요.");
		}else{
			alert("항목을 선택해주세요.");
		}
	});

	//트리이벤트
	$('#restCate').click(function(){
		var checkboxs = $('#mastertable').find('input[type="checkbox"]'); 
		$(checkboxs).prop('checked',false);
	});
}