$(function(){
	cateDetail_init();
});

function cateDetail_init(){
	var ctx = $('#ctx').val();
	$('#act_y').prop('checked',true);
	$('#cateUpdateBtn').hide();
	$('#cateSubmitBtn').hide();
	$('#cateResetBtn').hide();
	$('#upCateSearch').hide();
	cateDetailButtonEvent(ctx);
}

//from에 disable 설정
function cateForm_disable(flag){
	$('#cateInsertForm').children().each(function(){
		if(flag == true){
			$(this).prop('disabled',true);
		}else{
			$(this).prop('disabled',false);
		}
	});
}

//각 클래스명으로 체크된 갯수
function cate_checkCount(selectNodeClass){
	var count=0;
	var checkList =	$('.'+selectNodeClass);
	
	for(var i=0; i<checkList.size(); i++){
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
	for(var i=0; i<$(checkList).size(); i++){
		if($(checkList[i]).is(':checked')){
			node = checkList[i];
		}
	}
	return node;
}

//체크된 메뉴리스트
function cate_checkNodeList(ClassName){
	var list = new Array();
	var checkList =	$('.'+ClassName);

	for(var i=0; i<$(checkList).size(); i++){
		if($(checkList[i]).is(':checked')){
			list.push(checkList[i]);
		}
	}	
	return list;
}

function serializeObject(a)
{
    var o = {};
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}


//select태그 value값의 태그노드 찾기
function selectNode(id, className, value){
	var node=null;
	var selectList = $('#'+id).find('.'+className);
	for(var i=0; i<selectList.size(); i++){
		if($(selectList[i]).val() == value){
			node = selectList[i];
		}
	}
	return node;
}

function cateDetailButtonEvent(ctx){
	$('#cateUpdateBtn').click(function(){
		cateForm_disable(false);
		$('#cate_mode').val('update');
		$('#cateUpdateBtn').hide();
		$('#cateSubmitBtn').show();
		if($('#up_cate_nm').val() == ''){
			$('#up_cate_nm').prop('disabled',true);
		}else{
			$('#upCateSearch').show();
		}
	});
	
	//저장버튼 누를시 DB저장 및 텍스트 클리어
	$('#cateSubmitBtn').click(function(){
		var flag=true;
		
		if($('#cate_mode').val() == 'insert'){
			var node = $('#cateInsertForm').find('input[type="text"]');
			
			//텍스트 입력 공백 확인
			$(node).each(function(){
				if(!$(this).is(':disabled') && $(this).val() == ''){
					flag = false;
				}
			});
			
			if(flag == true){
				var data = JSON.stringify(serializeObject($('#cateInsertForm').serializeArray()));
				jQuery.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/cateInsert',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	if(result.insertCateOk != 1){
			        		alert("올바르게 저장되지 않았습니다.");
			        	}else{
			        		alert("입력정보가 저장되었습니다.");
			        		var list = cate_checkNodeList('subCheck');
				        	if($(list).size() == 0){
				        		$(cate_checkedNode('masterCheck')).val(result.cate_id);
				        	}else{
				        		$(cate_checkedNode('subCheck')).val(result.cate_id);
				        	}
				        	
				        	//저장후 입력한 노드에 대한 메뉴이름 목록에 재지정
							if($('#up_cate_nm').is(':disabled')){
								$(cate_checkedNode('masterCheck')).next().text($('#cate_nm').val());
							}else{
								$(cate_checkedNode('subCheck')).next().text($('#cate_nm').val());
							}
			        	}  	
						
						//메뉴 목록 체크 및 disable 해제, 입력창 클리어
						$('#cateTree').find('input[type="checkbox"]').prop('checked',false);
						$('#cateTree').find('input[type="checkbox"]').prop('disabled',false);
						$('#upCateSearch').hide();
						$('#cateUpdateBtn').hide();
						$('#cateSubmitBtn').hide();
						$('#cateResetBtn').hide();
						$('#cate_mode').val('waiting');
						$('#cateInsertForm').each(function() {
							this.reset();
				        });
			        },
			        error: function(request,status,error){
			            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			        }
				});
			}else{
				alert("빈 공간을 입력해주세요!!");
			}
		}else if($('#cate_mode').val() == 'update'){
			var node = $('#cateInsertForm').find('input[type="text"]:not(input[type="text"]:disabled)');
			
			//텍스트 입력 공백 확인
			$(node).each(function(){
				if($(this).val() == ''){
					flag = false;
				}
			});
			
			if(flag == true){
				var data = JSON.stringify(serializeObject($('#cateInsertForm').serializeArray()));
				jQuery.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/cateUpdate',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	if(result != 1 ){
			        		alert("올바르게 수정되지 않았습니다.");
			        	}else{
			        		alert("입력정보가 수정되었습니다.");
			        		//저장후 입력한 노드에 대한 메뉴이름 목록에 재지정
							if($('#up_cate_nm').val() == ''){	//메뉴레벨1로 선택하여 수정했을 경우
								var cateID = $('#cate_id').val();
								var node = selectNode("cateTree", "masterCheck", cateID);
								if($(node).size() == 1 ){	//상위메뉴에 있는 정보 그대로 수정할 경우
									if($('#act_y').is(':checked')){	//활성화여부가 Y일 경우
										$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
									}else{
										$(node).next().css('text-decoration','line-through');
									}
									$(node).next().text($('#cate_nm').val());
								}else{	//하위메뉴를 상위메뉴로 수정할 경우
									//하위노드를 상위노드로 옮기기
									var node1 = $(selectNode("cateTree", "subCheck", cateID)).parent();
									var masterImgNode = $(selectNode("cateTree", "subCheck", cateID)).parent().parent().parent().children('img');
									if($('#act_y').is(':checked')){	//활성화여부가 Y일 경우
										$(node1).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
									}else{
										$(node1).next().css('text-decoration','line-through');
									}
									var tmp = $(node1).detach();
									$(tmp).prepend('<img class="no_cateFlag" src="'+ctx+'/resources/image/no_treebtn.png"/>');
									$(tmp).children('input').prop('class','masterCheck');
									$(tmp).children('a').prop('class','master_cate');
									
									$('#cateTree').last().append(tmp);
									
									//기존에 있던 상위노드 이미지 전환
									var childCount = $(masterImgNode).children('li').size();
									if(childCount == 0){
										$(masterImgNode).prop('src',ctx+'/resources/image/no_treebtn.png');
									}
								}
							}else{	//메뉴레벨2로 선택하여 수정했을 경우
								var cateID = $('#cateInsertForm').find('#cate_id').val();
								p_cateID = $('#up_cate_id').val();
								var node = selectNode("cateTree", "subCheck", cateID);
								if($(node).parent().parent().children().size() == 1){
									$(node).parent().parent().parent().children('img').prop('src',ctx+'/resources/image/no_treebtn.png');
								}else{
									$(node).parent().parent().parent().children('img').prop('src',ctx+'/resources/image/treebtn2.png');
								}
								if($(node).size() == 1 ){	//하위메뉴에 있는 정보 그대로 수정할 때
									var currentMasterNode = $(selectNode("cateTree", "subCheck", cateID)).parent().parent().parent();
									if($(currentMasterNode).find('.masterCheck').val() == p_cateID){	//현재보이는 상위메뉴와 입력한 정보의 상위메뉴가 같으면
										if($('#act_y').is(':checked')){	//활성화여부가 Y일 경우
											$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
										}else{
											$(node).next().css('text-decoration','line-through');
										}
										$(node).next().text($("#cate_nm").val());
									}else{	//다른상위메뉴 아래로 옮길 경우
										if($('#act_y').is(':checked')){	//활성화여부가 Y일 경우
											$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
										}else{
											$(node).next().css('text-decoration','line-through');
										}
										$(node).next().text($("#cate_nm").val());
										var tmp = $(node).parent().detach();
										var masterNode = $(selectNode("cateTree", "masterCheck", p_cateID)).parent();
										if($(masterNode).find('ul').size() == 0){	//이동할 상위메뉴에 하위메뉴 리스트가 없는 경우
											$(masterNode).append('<ul class="catetree_sub"></ul>');
											$(masterNode).find('ul').append(tmp);
										}else{	//이동할 상위메뉴에 하위메뉴 리스트가 있는 경우
											$(masterNode).find('ul').append(tmp);
										}
										
										$(masterNode).children('img').prop('src',ctx+'/resources/image/treebtn2.png');
									}
								}else{	//상위메뉴를 하위메뉴로 수정할 때
									var node1 = $(selectNode("cateTree", "masterCheck", cateID)).parent();	//이동할 노드
									var nodelist = $(node1).find('li');	//이동노드의 자식리스트
									var masterNode = $(selectNode("cateTree", "masterCheck", p_cateID)).parent();	//이동할 상위메뉴위치
									
									if($(nodelist).size() == 0){	//이동노드의 자식이 없는 경우
										if($('#act_y').is(':checked')){	//활성화여부가 Y일 경우
											$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
										}else{
											$(node).next().css('text-decoration','line-through');
										}
										//상위노드를 하위노드로 옮기기
										var tmp = $(node1).detach();
										if($(masterNode).find('ul').size() == 0){	//이동할 상위메뉴에 하위메뉴 리스트가 없는 경우
											$(masterNode).append('<ul class="catetree_sub"></ul>');
											$(masterNode).find('ul').append(tmp);
										}else{	//이동할 상위메뉴에 하위메뉴 리스트가 있는 경우
											$(masterNode).find('ul').append(tmp);
										}
										$(tmp).find('img').remove();
										$(tmp).children('input').prop('class','subCheck');
										$(tmp).children('a').prop('class','sub_cate');
									}else{	//자식노드가 있을 경우
										alert('하위메뉴가 있는 상위메뉴는 하위메뉴가 될 수 없습니다.');
									}
								}
							}
			        	}
			        	//메뉴 목록 체크 및 disable 해제, 입력창 클리어
						$('#cateTree').find('input[type="checkbox"]').prop('checked',false);
						$('#cateTree').find('input[type="checkbox"]').prop('disabled',false);
						$('#cateTree').find('input[tyoe="radio"]').children().prop('selected',false);
						$('#cateSubmitBtn').hide();
						$('#upCateSearch').hide();
						$('#cateResetBtn').hide();
						$('#cate_mode').val('waiting');
						$('#cate_id').val("");
						$('#cate_nm').val("");
						$('#up_cate_id').val("");
						$('#up_cate_nm').val("");
						$('#up_cate_nm').prop('disabled',false);
						$('#cate_dtl_cont').val("");
			        },
			        error: function(){
			            alert("error");
			        }
				});
				
				
			}else{
				alert("빈 공간을 입력해주세요!!");
			}
		}
	});
	
	//취소버튼 누를시 생성된 노드 삭제 및 텍스트 클리어
	$('#cateResetBtn').click(function(){
		if($('#cate_mode').val() == 'insert'){
			if(cate_checkCount('subCheck') == 0 ){
				var node = cate_checkedNode('masterCheck');
				$(node).parent().remove();
			}else{
				var node = cate_checkedNode('subCheck');
				$(node).parent().remove();
			}
			$('#cateTree').find('input[type="checkbox"]').prop('checked',false);
			$('#cateTree').find('input[type="checkbox"]').prop('disabled',false);
		}
		$('#cate_mode').val('waiting');
		cateForm_disable(false);
		$('#up_cate_nm').prop('disabled',false);
		$('#cateInsertForm').each(function() {
			this.reset();
        });
		$('#act_y').prop('checked',true);
		$('#upCateSearch').hide();
		$('#cateUpdateBtn').hide();
		$('#cateSubmitBtn').hide();
		$('#cateResetBtn').hide();
	});
	
	//부모 카테고리 검색버튼 누를시 팝업창 띄움
	$('#upCateSearch').click(function(){
		upCateSearch(ctx);
	});
}

//부모 카테고리 팝업
function upCateSearch(ctx) {
	window.open(ctx+"/upCateSearch", "카테고리",	
			'width=800,height=500,resizable=no,status=no,location=no,catebar=no,toolbar=no');
}