$(function(){
	cate_init();
});

function cate_init(){
	var ctx = $('#ctx').val();
	cateButtonEvent(ctx);
	cateAnckEvent(ctx);
	cateCheckEvent(ctx);
}

//각 클래스명으로 체크된 갯수
function cate_totalCheckCount(){
	var count=0;
	var checkList =	$('#cateTree').find('input[type="checkbox"]');

	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			count++;
		}
	}	
	return count;
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

//체크에 대한 이벤트처리
function cateCheckEvent(ctx){	
	//트리이벤트
	$('#cateTree').delegate('.cateFlag','click',function(){
		var children = $(this).parent().children('.catetree_sub').children('li');
		if(children.css('display') == 'none'){
			$(this).prop('src',ctx+"/resources/image/treebtn2.png");
			children.show();
		}else{
			$(this).prop('src',ctx+"/resources/image/treebtn1.png");
			children.hide();
		}
	});
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

//메뉴상세 정보 적용
function cateDetailSetting(cate){
	$('#cate_id').val(cate.cate_id);
	$('#cate_nm').val(cate.cate_nm);
	$('#up_cate_id').val(cate.up_cate_id);
	$('#up_cate_nm').val(cate.up_cate_nm);
	$('#cate_dtl_cont').val(cate.cate_dtl_cont);
	if(cate.act_yn == 'Y'){
		$('#act_y').prop('checked',true);
		$('#act_n').prop('checked',false);
	}else{
		$('#act_n').prop('checked',true);
		$('#act_y').prop('checked',false);
	}
}

//체크된 노드의 cateID
function cate_checkedCateIDList(ClassName){
	var list = new Array();
	var checkList =	$('.'+ClassName);
	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			list.push($(checkList[i]).val());
		}
	}
	return list;
}

//메뉴이름 여부 확인
function validatecateName(ctx,cate_name){
	var count;
	var obj = new Object();
	obj.cate_nm = cate_name;
	var data = JSON.stringify(obj);
	$.ajaxSettings.traditional = true;
	$.ajax({
		url: ctx+'/cateNameValidate',
		type: 'POST',
        data: data,
        async: false,
        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
        dataType:'json',
        success: function(result){
        	if(result == 0){
        		count = 'false';
        	}else{
        		count = 'true';
        	}
        },
        error: function(){
            alert("error");
        }
	});
	return count;
}

//메뉴ID에 대한 상세정보
function getcateDetail(ctx,cate_id){
	var list;
	var data = JSON.stringify(cate_id);
	$.ajax({
		url: ctx+'/cateDetail',
		type: 'POST',
        data: data,
        async: false,
        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
        dataType:'json',
        success: function(result){
        	list = result;
        },
        error: function(request,status,error){
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
	});
	return list;
}

//메뉴삭제 ajax
function cateDelete(ctx,list){
	var okFlag;
	var data = JSON.stringify(list);
	$.ajaxSettings.traditional = true;
	$.ajax({
		url: ctx+'/cateDelete',
		type: 'POST',
        data: data,
        async: false,
        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
        dataType:'json',
        success: function(result){
        	okFlag = result;
        },
        error: function(){
            alert("error");
        }
	});
	
	return okFlag;
}

//버튼 이벤트
function cateButtonEvent(ctx){	
	//추가버튼 누를시 메뉴추가
	$('#cateAddBtn').click(function(){
		//초기화면
		if($('#cate_mode').val() == 'waiting'){
			if(cate_checkCount('masterCheck') == 0){	//체크가 없는 경우 상위메뉴 추가
				$('#cate_mode').val('insert');
				if(!($('#tmpText').is(':focus'))){
					var topNode = $('#cateTree');
					topNode.append(
							'<li><img class="no_cateFlag" src="'+ctx+'/resources/image/no_treebtn.png"/>'+
							' <input type="checkbox" class="masterCheck">'+
							' <a class="master_cate">'+
							' <input id="tmpText" type="text" size="5" value="NewNode"></a></li>'
					);
					var lastChildeNode = $(topNode).children().last();
					$(lastChildeNode).children('input[type="checkbox"]').prop('checked',true);
					$('#tmpText').focus();
					$('#tmpText').blur(function(){
						var hascateName = validatecateName(ctx, $(this).val());

						if(hascateName == 'true'){	//메뉴이름이 존재하면
							alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
							$(this).focus();
						}else{
							$('#cateSubmitBtn').show();
							$('#cateResetBtn').show();
							$('#up_cate_nm').prop('disabled',true);
							$('#cateTree').find('input[type="checkbox"]').prop('disabled',true);
							//a태그에 텍스트 입력정보 넣기
							if($(this).val() != ''){
								$(this).parent().text($(this).val());
							}else{
								$(this).parent().text('NewNode');
							}
							$('#cate_nm').val($(cate_checkedNode('masterCheck')).next().text());
							$('#act_y').prop('checked',true);
							$(this).remove();
						}
					});
				}
			}else if(cate_checkCount('masterCheck') == 1){	//상위메뉴가 체크될 경우 하위메뉴 추가
				$('#cate_mode').val('insert');
				if(!($('#tmpText').is(':focus'))){
					var node = $(cate_checkedNode('masterCheck')).parent();
					var hasElement = $(node).find('ul').size(); //ul태그 여부 (하위 서브메뉴틀 없을경우)
					
					if(hasElement == 0){
						$(node).append(
							'<ul class="catetree_sub">'+					
							'<li><input type="checkbox" class="subCheck">'+
							' <a class="sub_cate">'+
							' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li></ul>'
						);
						$(node).find('.subCheck').prop('checked',false);
						$(node).find('.subCheck').last().prop('checked',true);
						$(node).find('li').show();
						if($(node).children('.cateFlag').size() == 0 ){
							$(node).children('.no_cateFlag').remove();
							$(node).prepend('<img class="cateFlag" src="'+ctx+'/resources/image/treebtn2.png"/>');
						}else{
							$(node).children('.cateFlag').attr('src',ctx+"/resources/image/treebtn2.png");
						}
						$('#tmpText').focus();
						$('#tmpText').blur(function(){
							var hascateName = validatecateName(ctx, $(this).val());
							
							if(hascateName == 'true'){	//메뉴이름이 존재하면
								alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
								$(this).focus();
							}else{
								$('#cateSubmitBtn').show();
								$('#cateResetBtn').show();
								$('#cateTree').find('input[type="checkbox"]').prop('disabled',true);
								//a태그에 텍스트 입력정보 넣기
								if($(this).val() != ''){
									$(this).parent().text($(this).val());
								}else{
									$(this).parent().text('NewNode');
								}
								$('#cate_nm').val($(cate_checkedNode('subCheck')).next().text());
								$('#up_cate_id').val($(cate_checkedNode('masterCheck')).val());
								$('#up_cate_nm').val($(cate_checkedNode('masterCheck')).next().text());
								$('#act_y').prop('checked',true);
								$(this).remove();	//임시로 만든 input text "tmpText"삭제
							}
						});
					}else{
						$(node).find('ul').append(				
							'<li><input type="checkbox" class="subCheck">'+
							' <a class="sub_cate">'+
							' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li>'
						);
						$(node).find('.subCheck').prop('checked',false);
						$(node).find('.subCheck').last().prop('checked',true);
						$(node).find('li').show();
						$(node).children('.cateFlag').attr('src',ctx+"/resources/image/treebtn2.png");
						$('#tmpText').focus();
						$('#tmpText').blur(function(){
							var hascateName = validatecateName(ctx, $(this).val());
							
							if(hascateName == 'true'){	//메뉴이름이 존재하면
								alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
								$(this).focus();
							}else{
								$('#cateSubmitBtn').show();
								$('#cateResetBtn').show();
								$('#cateTree').find('input[type="checkbox"]').prop('disabled',true);
								//a태그에 텍스트 입력정보 넣기
								if($(this).val() != ''){
									$(this).parent().text($(this).val());
								}else{
									$(this).parent().text('NewNode');
								}
								$('#cate_nm').val($(cate_checkedNode('subCheck')).next().text());
								$('#up_cate_id').val($(cate_checkedNode('masterCheck')).val());
								$('#up_cate_nm').val($(cate_checkedNode('masterCheck')).next().text());
								$('#act_y').prop('checked',true);
								$(this).remove();	//임시로 만든 input text "tmpText"삭제
							}
						});
					}
				}
			}else{
				alert('추가를 하려면 하나만 선택하세요!');
			}
		}else{
			alert('입력이 완료되지 않은 상태입니다!\n 정보를 입력하거나 취소버튼을 눌러주세요.');
		}
	});
	
	//삭제버튼 누를시 메뉴정보 삭제
	$('#cateDelBtn').click(function(){
		//초기화면
		if($('#cate_mode').val() == 'waiting'){
			if(cate_totalCheckCount() == 0){	//체크가 없는 경우
				alert('삭제할 대상을 선택해주세요.');
			}else{
				var result = confirm("선택한 항목을 삭제하시겠습니까?");
				if(result){
					var data = new Object();
					var master = cate_checkedCateIDList("masterCheck");
					var sub = cate_checkedCateIDList("subCheck");
					data.master = master;
					data.sub = sub;
					
					var okFlag = cateDelete(ctx,data);
					if(okFlag == 1){
						alert('삭제되었습니다.');
						var master = cate_checkNodeList('masterCheck');
						for(var i=0; i<$(master).size(); i++){
							$(master[i]).next().css('text-decoration','line-through');
							$(master[i]).prop('checked',false);
						}
						
						var sub = cate_checkNodeList('subCheck');
						for(var j=0; j<$(sub).size(); j++){
							$(sub[j]).prop('checked',false);
							$(sub[j]).next().css('text-decoration','line-through');
						}
					}else{
						alert('올바르게 삭제되지 않았습니다.');
					}
				}
			}
		}else{
			alert('입력이 완료되지 않은 상태입니다!\n 정보를 입력하거나 취소버튼을 눌러주세요.');
		}
	});
	
	//선택취소 버튼 누를시 체크박스 전체해제
	$('#cateAllCancelBtn').click(function(){
		if($('#cate_mode').val() == 'waiting'){
			$('#cateTree').find('input').prop('checked',false);
		}else{
			alert('입력이 완료되지 않은 상태입니다!\n 정보를 입력하거나 취소버튼을 눌러주세요.');
		}
	});
}




//각 메뉴의 a태그를 누를시 이벤트
function cateAnckEvent(ctx){
		//상위메뉴의 a태그 누를시
		$('#cateTree').delegate('.master_cate','click',function(){
			if($('#cate_mode').val() == 'waiting'){
				$('#cateTree').find('input[type="checkbox"]').prop('checked',false);
				cateForm_disable(true);
				var cate_id = $(this).prev().val();
				var cate = getcateDetail(ctx, cate_id);
				$('#cateUpdateBtn').show();
				$('#cateResetBtn').show();
				cateDetailSetting(cate);
			}else if($('#cate_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});
		
		//하위메뉴의 a태그 누를시
		$('#cateTree').delegate('.sub_cate','click',function(){
			if($('#cate_mode').val() == 'waiting'){
				$('#cateTree').find('input[type="checkbox"]').prop('checked',false);
				cateForm_disable(true);
				var cate_id = $(this).prev().val();
				var cate = getcateDetail(ctx, cate_id);
				$('#cateUpdateBtn').show();
				$('#cateResetBtn').show();
				cateDetailSetting(cate);
			}else if($('#cate_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});
};