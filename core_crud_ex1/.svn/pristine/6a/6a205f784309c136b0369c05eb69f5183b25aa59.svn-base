$(function(){
	menu_init();
});

function menu_init(){
	var ctx = $('#ctx').val();
	$('#edit_menu').hide();
	$('#submit_menu').hide();
	$('#search_pMenuName_btn').hide();
	menuAnckEvent(ctx);
	menuCheckEvent(ctx);
	menuButtonEvent(ctx);
	
}

//from에 disable 설정
function menuForm_disable(flag){
	$('#menuInsertForm').children().each(function(){
		if(flag == true){
			$(this).prop('disabled',true);
		}else{
			$(this).prop('disabled',false);
		}
	});
}

//각 클래스명으로 체크된 갯수
function menu_checkCount(selectNodeClass){
	var count=0;
	var checkList =	$('.'+selectNodeClass);

	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			count++;
		}
	}	
	return count;
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

//체크노드 찾기
function menu_checkedNode(ClassName){
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
function menu_checkNodeList(ClassName){
	var list = new Array();
	var checkList =	$('.'+ClassName);

	for(var i=0; i<$(checkList).size(); i++){
		if($(checkList[i]).is(':checked')){
			list.push(checkList[i]);
		}
	}	
	return list;
}

//체크된 노드의 menuID
function menu_checkedMenuIDList(ClassName){
	var list = new Array();
	var checkList =	$('.'+ClassName);
	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			list.push($(checkList[i]).val());
		}
	}
	return list;
}

//p_menu_id의 체크된 하위메뉴 노드 MenuId 찾기
function menu_checkedSubMenuIDList(p_menu_id){
	var list = new Array();
	var node = selectNode('menuTree', 'masterCheck', p_menu_id);
	var subList = $(node).parent().find('.subCheck');
	for(var i=0; i<$(subList).size(); i++){
		if($(subList[i]).is(':checked')){
			list.push($(subList[i]).val());
		}
		
	}
	return list;
}

//권한메뉴 팝업
function authId_Popup(ctx) {
	window.open(ctx+"/menu_authId", "권한",	
			'width=800,height=500,resizable=no,status=no,location=no,menubar=no,toolbar=no');
}

//권한메뉴 팝업
function pMenuName_Popup(ctx) {
	window.open(ctx+"/menu_pMenuName", "상위메뉴",	
			'width=800,height=500,resizable=no,status=no,location=no,menubar=no,toolbar=no');
}

//메뉴이름 여부 확인
function validateMenuName(ctx,menu_name){
	var count;
	var obj = new Object();
	obj.menu_nm = menu_name;
	var data = JSON.stringify(obj);
	$.ajaxSettings.traditional = true;
	$.ajax({
		url: ctx+'/menuNameValidate',
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
function getMenuDetail(ctx,menu_id){
	var list;
	var data = JSON.stringify(menu_id);
	$.ajax({
		url: ctx+'/menuDetail',
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
function menuDelete(ctx,list){
	var okFlag;
	var data = JSON.stringify(list);
	$.ajaxSettings.traditional = true;
	$.ajax({
		url: ctx+'/menuDelete',
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


//체크에 대한 이벤트처리
function menuCheckEvent(ctx){	
	//트리이벤트
	$('#menuTree').delegate('.menuFlag','click',function(){
		var children = $(this).parent().children('.menutree_sub').children('li');
		if(children.css('display') == 'none'){
			$(this).prop('src',ctx+"/resources/image/treebtn2.png");
			children.show();
		}else{
			$(this).prop('src',ctx+"/resources/image/treebtn1.png");
			children.hide();
		}
	});
	
	//상위메뉴 체크
	$('#menuTree').delegate('.masterCheck','click',function(){
		if($(this).parent().children('.menuFlag').attr('src') === ctx+'/resources/image/treebtn2.png'){
			if($(this).is(':checked')){
				$(this).parent().children('.menutree_sub').find('input').prop('checked',true);
			}else{
				$(this).parent().children('.menutree_sub').find('input').prop('checked',false);
			}
		}
	});
	
	//하위메뉴 체크
	$('#menuTree').delegate('.subCheck','click',function(){
		if($(this).is(':checked')){
			$(this).parent().parent().parent().children('.masterCheck').prop('checked',true);
		}else{
			var subBoxChecked =$(this).parent().parent().find('input').is(':checked'); 
			if(!subBoxChecked){
				$(this).parent().parent().parent().children('.masterCheck').prop('checked',false);
			}
		}
	});
}

//메뉴상세 정보 적용
function menuDetailSetting(menu){
	$('#menu_id').val(menu.menu_id);
	$('#menu_name').val(menu.menu_nm);
	$('#p_menu_id').val(menu.up_menu_id);
	$('#p_menu_name').val(menu.up_menu_nm);
	if(menu.menu_lev == '0001'){
		$('#menu_level').children('option[value="0001"]').prop('selected',true);
		$('#menu_level').children('option[value="0002"]').prop('selected',false);
	}else{
		$('#menu_level').children('option[value="0001"]').prop('selected',false);
		$('#menu_level').children('option[value="0002"]').prop('selected',true);		
	}
	$('#menu_url').val(menu.menu_url);
	if(menu.deflt_yn == 'Y'){
		$('.menu_default_flg_Y').prop('checked',true);
		$('.menu_default_flg_N').prop('checked',false);
	}else{
		$('.menu_default_flg_N').prop('checked',true);
		$('.menu_default_flg_Y').prop('checked',false);
	}

	if(menu.act_yn == 'Y'){
		$('.menu_active_flg_Y').prop('checked',true);
		$('.menu_active_flg_N').prop('checked',false);
	}else{
		$('.menu_active_flg_N').prop('checked',true);
		$('.menu_active_flg_Y').prop('checked',false);
	}
}

//각 메뉴의 a태그를 누를시 이벤트
function menuAnckEvent(ctx){
	
		//상위메뉴의 a태그 누를시
		$('#menuTree').delegate('.master_menu','click',function(){
			if($('#menu_mode').val() == 'waiting'){
				$('#menuTree').find('input[type="checkbox"]').prop('checked',false);
				menuForm_disable(true);
				var menu_id = $(this).prev().val();
				var menu = getMenuDetail(ctx, menu_id);
				/*getMenuDetailTep2(ctx,menu_id);*/
				$('#authLine').hide();
				$('#searchyn').hide();
				$('#search_pMenuName_btn').show();
				$('#edit_menu').show();
				menuDetailSetting(menu);
			}else if($('#menu_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});
		
		//하위메뉴의 a태그 누를시
		$('#menuTree').delegate('.sub_menu','click',function(){
			if($('#menu_mode').val() == 'waiting'){
				$('#menuTree').find('input[type="checkbox"]').prop('checked',false);
				menuForm_disable(true);
				var menu_id = $(this).prev().val();
				var menu = getMenuDetail(ctx, menu_id);
				$('#authLine').hide();
				$('#searchyn').hide();
				$('#search_pMenuName_btn').show();
				
				$('#edit_menu').show();
				menuDetailSetting(menu);
			}else if($('#menu_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});
};

function getMenuDetailTep2(ctx,menu_id){
	var data =JSON.stringify(menu_id);
	$.ajax({
		url : ctx+'/authMenuSearch',
		type: 'POST',
        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
        dataType:'json',
        success: function(result){
        	var fst_reg_dt = null;
        	for(var i=0; i<$(result).size(); i++){
        	
        		//날짜함수변환 
				fst_reg_dt = dateFormat(Number(result[i].fst_reg_dt));
				
        		var data = '<tr>'+
				'<td style="width: 10%;">'+result[i].auth_id+'</td>'+
				'<td style="width: 10%;">'+result[i].auth_nm+'</td>'+
				'<td style="width: 10%;">'+result[i].menu_id+'</td>'+
				'<td style="width: 10%;">'+result[i].menu_nm+'</td>'+
				'<td style="width: 7%;">'+result[i].creat_yn+'</td>'+
				'<td style="width: 7%;">'+result[i].retrv_yn+'</td>'+
				'<td style="width: 7%;">'+result[i].mdfy_yn+'</td>'+
				'<td style="width: 7%;">'+result[i].del_yn+'</td>'+
				'<td style="width: 10%;">'+result[i].deflt_yn+'</td>'+
				'<td style="width: 10%;">'+result[i].fst_reg_id_nm+'</td>'+
				'<td style="width: 12%;">'+fst_reg_dt+'</td></tr>';
        		$('#authMenuBody').append(data);	        		
        	}
        },
        error: function(request,status,error){
        	alert("error"+error);
        }
	});	
}

//버튼 이벤트
function menuButtonEvent(ctx){	
	//추가버튼 누를시 메뉴추가
	$('#menuAddBtn').click(function(){
		//초기화면
		if($('#menu_mode').val() == 'waiting'){
			if(menu_checkCount('masterCheck') == 0){	//체크가 없는 경우 상위메뉴 추가
				$('#menu_mode').val('insert');
				if(!($('#tmpText').is(':focus'))){
					var topNode = $('#menuTree');
					topNode.append(
							'<li><img class="no_menuFlag" src="'+ctx+'/resources/image/no_treebtn.png"/>'+
							' <input type="checkbox" class="masterCheck">'+
							' <a class="master_menu">'+
							' <input id="tmpText" type="text" size="5" value="NewNode"></a></li>'
					);
					var lastChildeNode = $(topNode).children().last();
					$(lastChildeNode).children('input[type="checkbox"]').prop('checked',true);
					$('#tmpText').focus();
					$('#tmpText').blur(function(){
						var hasMenuName = validateMenuName(ctx, $(this).val());

						if(hasMenuName == 'true'){	//메뉴이름이 존재하면
							alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
							$(this).focus();
						}else{
							$('#authLine').show();
							$('#submit_menu').show();
							$('#searchyn').show();
							$('#p_menu_id').attr('disabled',true);
							$('#p_menu_name').attr('disabled',true);
							$('#auth_id').attr('disabled',true);
							$('#auth_nm').attr('disabled',true);
							$('#search_pMenuName_btn').css('display','none');
							$('#menuTree').find('input[type="checkbox"]').prop('disabled','disabled');
							//a태그에 텍스트 입력정보 넣기
							if($(this).val() != ''){
								$(this).parent().text($(this).val());
							}else{
								$(this).parent().text('NewNode');
							}
							$('#p_menu_id').val('');
							$('#p_menu_name').val('');
							$('#auth_id').val('');
							$('#auth_nm').val('');
							$('#menu_url').val('');
							$('#menu_name').val($(menu_checkedNode('masterCheck')).next().text());
							$(selectNode('menu_level', 'menu_level_val', '0001')).prop('selected',true);
							$(this).remove();
						}
					});
				}
			}else if(menu_checkCount('masterCheck') == 1){	//상위메뉴가 체크될 경우 하위메뉴 추가
				$('#menu_mode').val('insert');
				if(!($('#tmpText').is(':focus'))){
					var node = $(menu_checkedNode('masterCheck')).parent();
					var hasElement = $(node).find('ul').size(); //ul태그 여부 (하위 서브메뉴틀 없을경우)
					
					if(hasElement == 0){
						$(node).append(
							'<ul class="menutree_sub">'+					
							'<li><input type="checkbox" class="subCheck">'+
							' <a class="sub_menu">'+
							' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li></ul>'
						);
						$(node).find('.subCheck').prop('checked',false);
						$(node).find('.subCheck').last().prop('checked',true);
						$(node).find('li').show();
						if($(node).children('.menuFlag').size() == 0 ){
							$(node).children('.no_menuFlag').remove();
							$(node).prepend('<img class="menuFlag" src="'+ctx+'/resources/image/treebtn2.png"/>');
						}else{
							$(node).children('.menuFlag').attr('src',ctx+"/resources/image/treebtn2.png");
						}
						$('#tmpText').focus();
						$('#tmpText').blur(function(){
							var hasMenuName = validateMenuName(ctx, $(this).val());
							
							if(hasMenuName == 'true'){	//메뉴이름이 존재하면
								alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
								$(this).focus();
							}else{
								$('#authLine').show();
								$('#searchyn').show();
								$('#submit_menu').show();
								$('#menuTree').find('input[type="checkbox"]').prop('disabled','disabled');
								/*$('#search_pMenuName_btn').css('display','inline');*/
								//a태그에 텍스트 입력정보 넣기
								if($(this).val() != ''){
									$(this).parent().text($(this).val());
								}else{
									$(this).parent().text('NewNode');
								}
								$('#menu_name').val($(menu_checkedNode('subCheck')).next().text());
								alert($(menu_checkedNode('masterCheck')).val());
								$('#p_menu_id').val($(menu_checkedNode('masterCheck')).val());
								$('#p_menu_name').val($(menu_checkedNode('masterCheck')).next().text());
								$(selectNode('menu_level', 'menu_level_val', '0002')).prop('selected',true);
								$(this).remove();	//임시로 만든 input text "tmpText"삭제
							}
						});
					}else{
						$(node).find('ul').append(				
							'<li><input type="checkbox" class="subCheck">'+
							' <a class="sub_menu">'+
							' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li>'
						);
						$(node).find('.subCheck').prop('checked',false);
						$(node).find('.subCheck').last().prop('checked',true);
						$(node).find('li').show();
						$(node).children('.menuFlag').attr('src',ctx+"/resources/image/treebtn2.png");
						$('#tmpText').focus();
						$('#tmpText').blur(function(){
							var hasMenuName = validateMenuName(ctx, $(this).val());
							
							if(hasMenuName == 'true'){	//메뉴이름이 존재하면
								alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
								$(this).focus();
							}else{
								$('#authLine').show();
								$('#submit_menu').show();
								$('#searchyn').show();
								$('#menuTree').find('input[type="checkbox"]').prop('disabled','disabled');
								//a태그에 텍스트 입력정보 넣기
								if($(this).val() != ''){
									$(this).parent().text($(this).val());
								}else{
									$(this).parent().text('NewNode');
								}
								$('#menu_name').val($(menu_checkedNode('subCheck')).next().text());
								$('#p_menu_id').val($(menu_checkedNode('masterCheck')).val());
								$('#p_menu_name').val($(menu_checkedNode('masterCheck')).next().text());
								$(selectNode('menu_level', 'menu_level_val', '0002')).prop('selected',true);
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
	$('#menuDelBtn').click(function(){
		//초기화면
		if($('#menu_mode').val() == 'waiting'){
			if(menu_checkCount('masterCheck') == 0){	//체크가 없는 경우
				alert('삭제할 대상을 선택해주세요.');
			}else{
				var result = confirm("선택한 항목을 삭제하시겠습니까?");
				if(result){
					var data = new Array();
					var masterList = menu_checkedMenuIDList("masterCheck");
					for(var i=0; i<$(masterList).size(); i++){
						var obj = new Object();
						obj.p_menu_id = masterList[i];
						var subList = menu_checkedSubMenuIDList(masterList[i]);
						obj.sub_menu_id = subList;
						data.push(obj);
					}
					var okFlag = menuDelete(ctx,data);
					if(okFlag == 1){
						alert('삭제되었습니다.');
						var master = menu_checkNodeList('masterCheck');
						for(var i=0; i<$(master).size(); i++){
							var sub = menu_checkNodeList('subCheck');
							
							if($(sub).size() == 0){	//하위메뉴가 없을 경우
								var tmp = $(master[i]).next().text();
								$(master[i]).next().css('text-decoration','line-through');
								$(master[i]).prop('checked',false);
							}else{	//하위메뉴가 있을 경우
								for(var j=0; j<$(sub).size(); j++){
									$(sub[j]).prop('checked',false);
									$(sub[j]).next().css('text-decoration','line-through');
								}
								$(master[i]).prop('checked',false);
							}
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
	$('#menuAllCancelBtn').click(function(){
		if($('#menu_mode').val() == 'waiting'){
			$('#menuTreeForm').find('input').prop('checked',false);
		}else{
			alert('입력이 완료되지 않은 상태입니다!\n 정보를 입력하거나 취소버튼을 눌러주세요.');
		}
	});
}
