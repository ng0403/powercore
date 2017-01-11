$(function(){
	var ctx = $('#ctx').val();
	orgInsertInit();
	orgTree(ctx);
	orgButtonEvent(ctx);
	orgAnckEvent(ctx);
});

$(document).ready(function() {
	
	// 부서상세 탭 클릭시
	$("#tab1").click(function() {
		var org_id = $("#nowOrg_id").val();
		if(org_id != ''){
			orgDetail(org_id);
		}
	});
	
	// 부서별 사용자 탭 클릭시
	$("#tab2").click(function() {
		var org_id = $("#nowOrg_id").val();
		if(org_id == ''){
			var tbody = $('#orgTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr id='null_tr' style='height: 100%;'><td colspan='5' style='text-align: center;'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			userAuthTab(org_id);
		}
	});
	
});

// 부서목록 클릭시
function treeFunc(org_id) {
	
	$("#nowOrg_id").val(org_id);
	
	if($("#tab1").is(":checked")){ // 부서상세 불러오기
		if(org_id != '')	orgDetail(org_id);
	} else if($("#tab2").is(":checked")){ // 부서별사용자 불러오기
		if(org_id != '')	userAuthTab(org_id);
	}
}

// 부서상세 ajax
function orgDetail(org_id) {
	var ctx = $('#ctx').val();
	if($('#org_mode').val() == 'waiting'){
		$('.orgDetail').show();
		$('.orgtypeDetail').hide();
		$('#orgInsertForm input[type="button"]').hide();
		$('#orgUpdateBtn').show();
		var obj = new Object();
		obj.org_flag = 'org';
		obj.org_id = org_id;
		
		var data = JSON.stringify(obj);
		$.ajaxSettings.traditional = true;
		$.ajax({
			url: ctx+'/orgDetail',
			type: 'POST',
	        data: data,
	        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
	        dataType:'json',
	        success: function(result){
	        	$('#org_id').val(result.org_id);
	        	$('#org_name').val(result.org_nm);
	        	$('#org_name').val(result.org_nm);
	        	$('#p_org_id').val(result.up_org_id);
	        	$('#org_type_id').val(result.org_type_id);
	        	$('#user_id').val(result.rep_emp_id);
	        	$('#iuser_nm').val(result.iuser_nm);
	        	$('#code').val(result.org_lev_cd);
	        	$('#phone_no1').val(result.ph1);
		        $('#phone_no2').val(result.ph2);
		        $('#phone_no3').val(result.ph3);
	        	$('#fax_no1').val(result.fax_ph1);
		        $('#fax_no2').val(result.fax_ph2);
		        $('#fax_no3').val(result.fax_ph3);
	        	if(result.act_yn == 'Y'){
	        		$('#active_flg_Y').prop('checked',true);
	        	}else{
	        		$('#active_flg_N').prop('checked',true);
	        	}
	        },
	        error: function(){
	            alert("error");
	        }
		});
		$('#orgInsertForm').find('input[type="text"]').prop('disabled',true);
		$('#orgInsertForm').find('input[type="radio"]').prop('disabled',true);
		$('#org_insert_mode').val('p_org');
	}else if($('#org_mode').val() == 'insert'){
		alert('정보 입력중입니다.');
	}else{
		alert('수정중입니다.');
	}
}

// 부서별 사용자 ajax
function userAuthTab(org_id) {
	var ctx = $('#ctx').val();
	var list = '';
	$.ajax({
		url: ctx+'/orgUser',
		type: 'POST',
		data: "org_id="+org_id,
		dataType: "json",
        success: function(data){
        	$('#mastertable tbody tr').remove();
        	if(data.length == 0){
				list = "<tr id='null_tr' style='height: 100%;'><td colspan='5' style='text-align: center;'>조회된 결과가 없습니다.</td></tr>";
				$('#mastertable tbody').append(list);
			}else{
				for(var i=0; i<data.length; i++){
					list+='<tr><td style="width: 20.5%;">'+data[i].org_nm+'</td>'
					+'<td style="width: 15.5%;">'+data[i].rep_emp_nm+'</td>'
					+'<td style="width: 15%;">'+data[i].iuser_nm+'</td>'
					+'<td style="width: 25%;">'+data[i].ph1+'-'+data[i].ph2+'-'+data[i].ph3+'</td>'
					+'<td style="width: 25%;">'+data[i].email1+'@'+data[i].email2+'</td></tr>\n';
				}
				for(var i=0; i<(12-data.length); i++){
					list+='<tr><td style="width: 20.5%; height: 16px;"></td>'
					+'<td style="width: 15.5%;"></td>'
					+'<td style="width: 15%;"></td>'
					+'<td style="width: 25%;"></td>'
					+'<td style="width: 25%;"></td></tr>\n';
				}
				$('#mastertable tbody').append(list);
			}
        },
        error: function(){
            alert("error");
        }
	});
}

function orgInsertInit(){
	$('.orgtypeDetail').hide();
	$('#orgSubmitBtn').hide();
	$('#orgUpdateBtn').hide();
	$('#orgResetBtn').hide();
}

//조직 트리
function orgTree(ctx){
	//상위메뉴 커서 이미지 클릭시
	$('#orgTree').delegate('.f_orgFlag','click',function(){
		var children = $(this).parent().find('.orgtree_sub').children('li');
		if(children.css('display') == 'none'){
			$(this).prop('src',ctx+"/resources/image/treebtn2.png");
			children.show();
		}else{
			$(this).prop('src',ctx+"/resources/image/treebtn1.png");
			children.hide();
		}
	});
	
	//부서 커서 이미지 클릭시
	$('#orgTree').delegate('.s_orgFlag','click',function(){
		var children = $(this).parent().find('.orgtree_super_sub').children('li');
		if(children.css('display') == 'none'){
			$(this).prop('src',ctx+"/resources/image/treebtn2.png");
			children.show();
		}else{
			$(this).prop('src',ctx+"/resources/image/treebtn1.png");
			children.hide();
		}
	});
	
	//실의 하위 커서 이미지 클릭시
	$('#orgTree').delegate('.ss_orgFlag','click',function(){
		var children = $(this).parent().find('.orgtree_super_ssub').children('li');
		if(children.css('display') == 'none'){
			$(this).prop('src',ctx+"/resources/image/treebtn2.png");
			children.show();
		}else{
			$(this).prop('src',ctx+"/resources/image/treebtn1.png");
			children.hide();
		}
	});
}

//각 메뉴의 a태그를 누를시 이벤트
function orgAnckEvent(ctx){
		//조직유형의 a태그 누를시
		$('#orgTree').delegate('.master_org','click',function(){
			if($('#org_mode').val() == 'waiting'){
				$('.orgDetail').hide();
				$('.orgtypeDetail').show();
				$('#orgUpdateBtn').show();
				var obj = new Object();
				obj.org_flag = 'org_type';
				obj.org_id = $(this).prev().val();
				
				var data = JSON.stringify(obj);
				$.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/orgDetail',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	$('#org_type_id2').val(result.org_type_id);
			        	$('#org_type_name').val(result.org_type_nm);
			        	if(result.act_yn == 'Y'){
			        		$('#active_flg2_Y').prop('checked',true);
			        	}else{
			        		$('#active_flg2_N').prop('checked',true);
			        	}
			        },
			        error: function(){
			            alert("error");
			        }
				});
				$('#orgInsertForm').find('input[type="text"]').prop('disabled',true);
				$('#orgInsertForm').find('input[type="radio"]').prop('disabled',true);
				$('#org_insert_mode').val('org_type');
			}else if($('#org_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});
		
		//부서의 a태그 누를시
		/*$('#orgTree').delegate('.sub_org','click',function(){
			if($('#org_mode').val() == 'waiting'){
				$('.orgDetail').show();
				$('.orgtypeDetail').hide();
				$('#orgInsertForm input[type="button"]').hide();
				$('#orgUpdateBtn').show();
				var obj = new Object();
				obj.org_flag = 'org';
				obj.org_id = $(this).prev().val();
				
				var data = JSON.stringify(obj);
				$.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/orgDetail',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	$('#org_id').val(result.org_id);
			        	$('#org_name').val(result.org_nm);
			        	$('#org_name').val(result.org_nm);
			        	$('#p_org_id').val(result.up_org_id);
			        	$('#org_type_id').val(result.org_type_id);
			        	$('#user_id').val(result.rep_emp_id);
			        	$('#iuser_nm').val(result.iuser_nm);
			        	$('#code').val(result.org_lev_cd);
			        	$('#phone_no1').val(result.ph1);
				        $('#phone_no2').val(result.ph2);
				        $('#phone_no3').val(result.ph3);
			        	$('#fax_no1').val(result.fax_ph1);
				        $('#fax_no2').val(result.fax_ph2);
				        $('#fax_no3').val(result.fax_ph3);
				        if(result.zip_cd != ""){
				        	$('#post1').val(result.zip_cd.substring(0,3));
				        	$('#post2').val(result.zip_cd.substring(3,6));
			        	}
				        $('#addr').val(result.addr_detail);
				        $('#zip_cd_sri_num').val(result.zip_cd_sri_num);
			        	$('#addr_detail').val(result.org_addr_dtl);
			        	if(result.act_yn == 'Y'){
			        		$('#active_flg_Y').prop('checked',true);
			        	}else{
			        		$('#active_flg_N').prop('checked',true);
			        	}
			        },
			        error: function(){
			            alert("error");
			        }
				});
				$('#orgInsertForm').find('input[type="text"]').prop('disabled',true);
				$('#orgInsertForm').find('input[type="radio"]').prop('disabled',true);
				$('#org_insert_mode').val('p_org');
			}else if($('#org_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});*/
		
		//실의 a태그 누를시
		/*$('#orgTree').delegate('.orgtree_sub','click',function(){
			if($('#org_mode').val() == 'waiting'){
				$('.orgDetail').show();
				$('.orgtypeDetail').hide();
				$('#orgInsertForm input[type="button"]').hide();
				$('#orgUpdateBtn').show();
				var obj = new Object();
				obj.org_flag = 'org';
				obj.org_id = $(this).prev().val();
				
				var data = JSON.stringify(obj);
				$.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/orgDetail',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	$('#org_id').val(result.org_id);
			        	$('#org_name').val(result.org_nm);
			        	$('#org_name').val(result.org_nm);
			        	$('#p_org_id').val(result.up_org_id);
			        	$('#org_type_id').val(result.org_type_id);
			        	$('#user_id').val(result.rep_emp_id);
			        	$('#code').val(result.org_lev_cd);
			        	$('#phone_no1').val(result.ph1);
				        $('#phone_no2').val(result.ph2);
				        $('#phone_no3').val(result.ph3);
			        	$('#fax_no1').val(result.fax_ph1);
				        $('#fax_no2').val(result.fax_ph2);
				        $('#fax_no3').val(result.fax_ph3);
			        	if(result.act_yn == 'Y'){
			        		$('#active_flg_Y').prop('checked',true);
			        	}else{
			        		$('#active_flg_N').prop('checked',true);
			        	}
			        },
			        error: function(){
			            alert("error");
			        }
				});
				$('#orgInsertForm').find('input[type="text"]').prop('disabled',true);
				$('#orgInsertForm').find('input[type="radio"]').prop('disabled',true);
				$('#org_insert_mode').val('org');
			}else if($('#org_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});*/
		
		//실의 하위메뉴의 a태그 누를시
		$('#orgTree').delegate('.super_s_sub_org','click',function(){
			if($('#org_mode').val() == 'waiting'){
				$('.orgDetail').show();
				$('.orgtypeDetail').hide();
				$('#orgInsertForm input[type="button"]').hide();
				$('#orgUpdateBtn').show();
				var obj = new Object();
				obj.org_flag = 'org';
				obj.org_id = $(this).prev().val();
				
				var data = JSON.stringify(obj);
				$.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/orgDetail',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	$('#org_id').val(result.org_id);
			        	$('#org_name').val(result.org_nm);
			        	$('#org_name').val(result.org_nm);
			        	$('#p_org_id').val(result.up_org_id);
			        	$('#org_type_id').val(result.org_type_id);
			        	$('#user_id').val(result.rep_emp_id);
			        	$('#code').val(result.org_lev_cd);
			        	$('#phone_no1').val(result.ph1);
				        $('#phone_no2').val(result.ph2);
				        $('#phone_no3').val(result.ph3);
			        	$('#fax_no1').val(result.fax_ph1);
				        $('#fax_no2').val(result.fax_ph2);
				        $('#fax_no3').val(result.fax_ph3);
				        if(result.zip_cd != ""){
				        	$('#post1').val(result.zip_cd.substring(0,3));
				        	$('#post2').val(result.zip_cd.substring(3,6));
			        	}
				        $('#addr').val(result.addr_detail);
				        $('#zip_cd_sri_num').val(result.zip_cd_sri_num);
			        	$('#addr_detail').val(result.org_addr_dtl);
			        	if(result.act_yn == 'Y'){
			        		$('#active_flg_Y').prop('checked',true);
			        	}else{
			        		$('#active_flg_N').prop('checked',true);
			        	}
			        },
			        error: function(){
			            alert("error");
			        }
				});
				$('#orgInsertForm').find('input[type="text"]').prop('disabled',true);
				$('#orgInsertForm').find('input[type="radio"]').prop('disabled',true);
				$('#org_insert_mode').val('org');
			}else if($('#org_mode').val() == 'insert'){
				alert('정보 입력중입니다.');
			}else{
				alert('수정중입니다.');
			}
		});
		
		//org_id에 대한 ack이벤트
		$('#org_id').blur(function(){
			checkNode = org_All_checkedNode();
			var addNode = org_searchNode($(checkNode).parent(), 'NEW');
			if($(addNode).attr('class') == 'subCheck'){
				$('#p_org_id').val($('#org_id').val());
			}else{
				$('#p_org_id').val($(checkNode).val());
			}
		});
};


//트리클릭이벤트
function orgButtonEvent(ctx){
	//추가버튼 누를시 이벤트
	$('.bt_position').delegate('#orgAddBtn','click',function(){
		if($('#org_mode').val() == 'waiting'){
			if(org_checkTotalCount() == 0){	//체크가 하나도 안 되어 있는 경우
				$('#org_mode').val('insert');
				if(!($('#tmpText').is(':focus'))){
					var topNode = $('#orgTree');
					topNode.append(
							'<li><img class="no_f_orgFlag" src="'+ctx+'/resources/image/no_treebtn.png"/>'+
							' <input type="checkbox" class="masterCheck">'+
							' <a class="sub_org">'+
							' <input id="tmpText" type="text" size="5" value="NewNode"></a></li>'
					);
					var lastChildeNode = $(topNode).children().last();
					$(lastChildeNode).children('input[type="checkbox"]').prop('checked',true);
					$('#tmpText').focus();
					$('#tmpText').blur(function(){
						var hasOrgName = validateOrgName(ctx,'org_type',$(this).val());
						
						if(hasOrgName == 'true'){	//조직명이 존재하면
							alert("중복되는 조직명입니다.\n다시 입력해주세요.");
							$(this).focus();
						}else if(hasOrgName == 'false'){
							$('#orgInsertForm').find('input[type="text"]').prop('disabled',false);
							$('#orgInsertForm').find('input[type="radio"]').prop('disabled',false);
							reset();
							$('#orgTree').find('input[type="checkbox"]').prop('disabled','disabled');
							$(this).parent().parent().find('input[type="checkbox"]').val('NEW');
							$('#org_type_name').val($(this).val());	//상세창에 조직유형명 세팅
							$('#org_insert_mode').val('org_type');	//입력모드 조직유형으로 전환
							
							//a태그에 텍스트 입력정보 넣기
							if($(this).val() != ''){
								$(this).parent().text($(this).val());
							}else{
								$(this).parent().text('NewNode');
							}
							
							
							/*$('.orgDetail').hide();
							$('.orgtypeDetail').show();
							$('#oorg').show();
							$('#orgaddr').show();
							$('#orgSubmitBtn').show();
							$('#orgUpdateBtn').hide();
							$('#orgResetBtn').show();
							$('#org_type_id2').prop('disabled',true);
							$('#org_type_id2').val('***');*/
							$('#org_name').val($(this).val());
							$('.orgDetail').show();
							$('.orgtypeDetail').hide();
							$('#oorg').show();
							$('#orgaddr').show();
							$('#orgSubmitBtn').show();
							$('#orgUpdateBtn').hide();
							$('#orgResetBtn').show();
							$('#org_id').prop('disabled',true);
							$('#org_id').val('G***');
							$('#p_org_id').prop('disabled',true);
							$('#p_org_id').val('G***');
							$('#org_type_id').prop('disabled',true);
							$('#org_type_id').val('ORT01');
							$('#code').prop('disabled',true);
							$('#code').val('0001');
							
							
						}else{
							orgResetBtn_funct();
						}
					});
				}
			}else if(org_checkTotalCount() == 1){
				if($(org_All_checkedNode()).attr('class') == 'subCheck'){
					alert('더이상 하위객체를 생성할 수 없습니다.');
				}else{
					$('#org_mode').val('insert');
					if($(org_checkedNode('masterCheck')).attr('class') == 'masterCheck'){	//조직유형에 처크될 경우
						if(!($('#tmpText').is(':focus'))){
							var node = $(org_checkedNode('masterCheck')).parent();
							var hasElement = $(node).children('ul').size(); //ul태그 여부 (하위 서브조직이 없을경우)
							
							if(hasElement == 0){	//조직유형 밑에 조직명이 없을 경우
								$(node).append(
									'<ul class="orgtree_sub">'+					
									'<li><input type="checkbox" class="subCheck">'+
									' <a class="sub_org">'+
									' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li></ul>'
								);
							}else{	//조직유형 밑에 조직명이 있을 경우
								$(node).children('ul').append(				
									'<li><input type="checkbox" class="subCheck">'+
									' <a class="sub_org">'+
									' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li>'
								);
							}
							$(node).find('.orgtree_sub').children('li').show();
							if($(node).children('.f_orgFlag').size() == 0 ){
								$(node).children('.no_f_orgFlag').remove();
								$(node).prepend('<img class="f_orgFlag" src="'+ctx+'/resources/image/treebtn2.png"/>');
							}else{
								$(node).children('.f_orgFlag').attr('src',ctx+"/resources/image/treebtn2.png");
							}
							$('#tmpText').focus();
							$('#tmpText').blur(function(){
								var hasOrgName = validateOrgName(ctx, 'org',$(this).val());
								
								if(hasOrgName == 'true'){	//조직명이 존재하면
									alert("중복되는 조직명입니다.\n다시 입력해주세요.");
									$(this).focus();
								}else{
									$('#orgInsertForm').find('input[type="text"]').prop('disabled',false);
									$('#orgInsertForm').find('input[type="radio"]').prop('disabled',false);
									$("#post1").attr('readonly', true);
									$("#post2").attr('readonly', true);
									$("#addr").attr('readonly', true);
									reset();
									$('#porg').hide();
									$('#torg').hide();
									$('#corg').hide();
									$('#orgTree').find('input[type="checkbox"]').prop('disabled','disabled');
									$(this).parent().parent().find('input[type="checkbox"]').val('NEW');
									
									//조직이 속한 조직유형ID 얻어서 세팅
									org_type_id = $(org_All_checkedNode()).val(); //조직유형의 ID
									$('#org_type_id').val(org_type_id);	//조직유형 세팅
									$('#org_name').val($(this).val()); //상세창에 조직유형명 세팅
									$('#code').val('0002');	//조직레벨 2로 세팅
									$('#code').prop('disabled',true);
									$('#org_insert_mode').val('org'); //입력모드 조직유형으로 전환
														
									//a태그에 텍스트 입력정보 넣기
									if($(this).val() != ''){
										$(this).parent().text($(this).val());
									}else{
										$(this).parent().text('NewNode');
									}								
									
									$('.orgDetail').show();
									$('.orgtypeDetail').hide();
									$('#oorg').show();
									$('#orgaddr').show();
									$('#orgSubmitBtn').show();
									$('#orgUpdateBtn').hide();
									$('#orgResetBtn').show();
									$('#org_id').prop('disabled',true);
									$('#org_id').val('G***');
									var p_org_id = $(org_checkedNode('masterCheck')).val();
									
									$('#p_org_id').prop('disabled',true);
									$('#p_org_id').val(p_org_id);
									$('#org_type_id').prop('disabled',true);
									$('#org_type_id').val('ORT01');
								}
							});
						}
					}else if($(org_checkedNode('subCheck')).attr('class') == 'subCheck'){	//부서에 처크된 경우
						if(!($('#tmpText').is(':focus'))){
							var node = $(org_checkedNode('subCheck')).parent();
							var hasElement = $(node).children('ul').size(); //ul태그 여부 (하위 서브조직이 없을경우)
							
							if(hasElement == 0){	//상위조직에 하위조직이 없을 경우
								$(node).append(
									'<ul class="orgtree_super_sub">'+					
									'<li><input type="checkbox" class="ssubCheck">'+
									' <a class="super_sub_org">'+
									' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li></ul>'
								);
							}else{	//상위조직에 하위조직이 있을 경우
								$(node).children('ul').append(				
									'<li><input type="checkbox" class="ssubCheck">'+
									' <a class="super_sub_org">'+
									' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li>'
								);
							}
							$(node).find('.orgtree_super_sub').children('li').show();
							if($(node).children('.s_orgFlag').size() == 0){
								$(node).children('.no_s_orgFlag').attr('src',ctx+"/resources/image/treebtn2.png");
							}else{
								$(node).children('.s_orgFlag').attr('src',ctx+"/resources/image/treebtn2.png");
							}
							$('#tmpText').focus();
							$('#tmpText').blur(function(){
								var hasOrgName = validateOrgName(ctx, 'org',$(this).val());
								if(hasOrgName == 'true'){	//조직명이 존재하면
									alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
									$(this).focus();
								}else{
									$('#orgInsertForm').find('input[type="text"]').prop('disabled',false);
									$('#orgInsertForm').find('input[type="radio"]').prop('disabled',false);
									$("#post1").attr('readonly', true);
									$("#post2").attr('readonly', true);
									$("#addr").attr('readonly', true);
									reset();
									//검색버튼 숨기기
									$('#porg').hide();
									$('#torg').hide();
									$('#corg').hide();
									$('#orgTree').find('input[type="checkbox"]').prop('disabled','disabled');
									$(this).parent().parent().find('input[type="checkbox"]').val('NEW');
									
									//조직이 속한 조직유형ID, 상위조직ID 얻어서 세팅
									org_type_id = $(org_All_checkedNode()).parent().parent().parent().children('input[type="checkbox"]').val();
									p_org_id = $(org_All_checkedNode()).val(); //조직유형의 ID
									$('#org_type_id').val(org_type_id);	//조직유형ID 세팅
									$('#p_org_id').val(p_org_id);	//상조직ID 세팅
									$('#org_name').val($(this).val()); //상세창에 조직유형명 세팅
									$('#code').val('0002'); //조직레벨 2로 세팅
									$('#org_insert_mode').val('org'); //입력모드 조직유형으로 전환
									
									//a태그에 텍스트 입력정보 넣기
									if($(this).val() != ''){
										$(this).parent().text($(this).val());
									}else{
										$(this).parent().text('NewNode');
									}
									$('.orgDetail').show();
									$('.orgtypeDetail').hide();
									$('#oorg').show();
									$('#orgaddr').show();
									$('#orgSubmitBtn').show();
									$('#orgUpdateBtn').hide();
									$('#orgResetBtn').show();
									$('#org_id').prop('disabled',true);
									$('#org_id').val('G***');
									$('#org_type_id').prop('disabled',true);
									$('#org_type_id').val('ORT01');
								}
							});
						}
					}else{	//조직유형이나 부서에 체크되지 않은 경우 (팀에 체크된 경우)
						if(!($('#tmpText').is(':focus'))){
							var node = $(org_checkedNode('ssubCheck')).parent();
							var hasElement = $(node).children('ul').size(); //ul태그 여부 (하위 서브조직이 없을경우)
							
							if(hasElement == 0){	//상위조직에 하위조직이 없을 경우
								$(node).append(
									'<ul class="orgtree_super_ssub">'+					
									'<li><input type="checkbox" class="s_ssubCheck">'+
									' <a class="super_s_sub_org">'+
									' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li></ul>'
								);
							}else{	//상위조직에 하위조직이 있을 경우
								$(node).children('ul').append(				
									'<li><input type="checkbox" class="s_ssubCheck">'+
									' <a class="super_s_sub_org">'+
									' <input id="tmpText" type="text" size="5" value="NewNode"/></a></li>'
								);
							}
							$(node).find('.orgtree_super_ssub').children('li').show();
							if($(node).children('.ss_orgFlag').size() == 0){
								$(node).children('.no_ss_orgFlag').attr('src',ctx+"/resources/image/treebtn2.png");
							}else{
								$(node).children('.ss_orgFlag').attr('src',ctx+"/resources/image/treebtn2.png");
							}
							$('#tmpText').focus();
							$('#tmpText').blur(function(){
								var hasOrgName = validateOrgName(ctx, 'org',$(this).val());
								if(hasOrgName == 'true'){	//조직명이 존재하면
									alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
									$(this).focus();
								}else{
									$('#orgInsertForm').find('input[type="text"]').prop('disabled',false);
									$('#orgInsertForm').find('input[type="radio"]').prop('disabled',false);
									$("#post1").attr('readonly', true);
									$("#post2").attr('readonly', true);
									$("#addr").attr('readonly', true);
									reset();
									//검색버튼 숨기기
									$('#porg').hide();
									$('#torg').hide();
									$('#corg').hide();
									$('#orgTree').find('input[type="checkbox"]').prop('disabled','disabled');
									$(this).parent().parent().find('input[type="checkbox"]').val('NEW');
									
									//조직이 속한 조직유형ID, 상위조직ID 얻어서 세팅
									org_type_id = $(org_All_checkedNode()).parent().parent().parent().parent().parent().children('input[type="checkbox"]').val();
									p_org_id = $(org_All_checkedNode()).val(); //조직유형의 ID
									$('#org_type_id').val(org_type_id);	//조직유형ID 세팅
									$('#p_org_id').val(p_org_id);	//상조직ID 세팅
									$('#org_name').val($(this).val()); //상세창에 조직유형명 세팅
									$('#code').val('0003'); //조직레벨 2로 세팅
									$('#org_insert_mode').val('org'); //입력모드 조직유형으로 전환
									
									//a태그에 텍스트 입력정보 넣기
									if($(this).val() != ''){
										$(this).parent().text($(this).val());
									}else{
										$(this).parent().text('NewNode');
									}
									$('.orgDetail').show();
									$('.orgtypeDetail').hide();
									$('#oorg').show();
									$('#orgaddr').show();
									$('#orgSubmitBtn').show();
									$('#orgUpdateBtn').hide();
									$('#orgResetBtn').show();
									$('#org_id').prop('disabled',true);
									$('#org_id').val('G***');
									$('#org_type_id').prop('disabled',true);
									$('#org_type_id').val('ORT01');
								}
							});
						}
					}
				}
			}else{
				alert('추가를 하려면 하나만 선택하세요.');
			}
		}else if($('#org_mode').val() == 'insert'){
			alert('정보 입력중입니다.');
		}else if($('#org_mode').val() == 'update'){
			alert('정보 수정중입니다.');
		}
	});
	
	$('#orgDelBtn').click(function(){
		if($('#org_mode').val() == 'waiting'){
			if(org_checkTotalCount() == 0){
				alert('삭제할 항목을 선택해주세요.');
			}else{
				if(confirm("정말 삭제하시겠습니까?")){
					var obj = new Object();
					masterNode = org_CheckedIdList('masterCheck');
					subNode = org_CheckedIdList('subCheck');
					ssubNode = org_CheckedIdList('ssubCheck');
					s_ssubNode = org_CheckedIdList('s_ssubCheck');

					obj.master = masterNode;
					obj.sub = subNode;
					obj.ssub = ssubNode;
					obj.sssub = s_ssubNode;
					var data = JSON.stringify(obj);
					
					$.ajaxSettings.traditional = true;
					$.ajax({
						url: ctx+'/orgDelete',
						type: 'POST',
				        data: data,
				        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				        dataType:'json',
				        success: function(result){
				        	if(result == 0 ){
				        		alert("올바르게 삭제되지 않았습니다.");
				        	}else{
				        		alert("입력정보가 삭제되었습니다.");
				        		org_deleteAction(masterNode);
								org_deleteAction(subNode);
								org_deleteAction(ssubNode);
				        	}
				        },
				        error: function(){
				            alert("error");
				        }
					});
				}	
			}
		}else{
			alert('입력이 완료되지 않은 상태입니다!\n 정보를 입력하거나 취소버튼을 눌러주세요.');
		}
	});
	
	//선택취소 버튼 누를시 체크박스 전체해제
	$('#orgAllCancelBtn').click(function(){
		if($('#org_mode').val() == 'waiting'){
			$('#orgTree').find('input').prop('checked',false);
		}else{
			alert('입력이 완료되지 않은 상태입니다!\n 정보를 입력하거나 취소버튼을 눌러주세요.');
		}
	});
}

//체크된 갯수
function org_checkTotalCount(){
	var count=0;
	var checkList =	$('#orgTree').find('input[type="checkbox"]');
	
	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			count++;
		}
	}	
	return count;
}

//각 클래스명으로 체크된 갯수
function org_checkCount(selectNodeClass){
	var count=0;
	var checkList =	$('.'+selectNodeClass);

	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			count++;
		}
	}	
	return count;
}

//전체노드 중 노드 찾기
function org_All_checkedNode(){
	var node;
	var checkList =	$('#orgTree').find('input[type="checkbox"]');
	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			node = checkList[i];
		}
	}
	return node;
}

//체크노드 찾기
function org_checkedNode(ClassName){
	var node;
	var checkList =	$('.'+ClassName);
	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			node = checkList[i];
		}
	}
	return node;
}

//체크된 노드의 id값의 List
function org_CheckedIdList(ClassName){
	var list = new Array();
	var checkList =	$('.'+ClassName);
	for(var i=0; i<checkList.size(); i++){
		if($(checkList[i]).is(':checked')){
			list.push($(checkList[i]).val());
		}
	}
	return list;
}

//체크노드 찾기
function org_searchNode(parentNode, id){
	var node;
	var list =	$(parentNode).find('input[type="checkbox"]');
	for(var i=0; i<$(list).size(); i++){
		if($(list[i]).val() == id){
			node = list[i];
		}
	}
	return node;
}

//텍스트노드 찾기
function org_searchTextNode(parentNode, name){
	var node;
	var list =	$(parentNode).find('a');
	for(var i=0; i<$(list).size(); i++){
		if($(list[i]).text() == name){
			node = list[i];
		}
	}
	return node;
}

//삭제할 노드의 css수정
function org_deleteAction(list){
	alert(list[0]);
	for(var i=0; i<$(list).size(); i++){
		var node = org_searchNode($('#orgTree'), list[i]);
		$(node).next().css('text-decoration','line-through');
		$(node).parent().find('a').css('text-decoration','line-through');
		$(node).prop('checked',false);
	}
}

//조직유형,조직테이블의 중복이름 확인
function validateOrgName(ctx, type, org_name){
	var flag;
	var obj = new Object();
	obj.type = type;
	obj.org_nm = org_name;
	
	var data = JSON.stringify(obj);
	$.ajaxSettings.traditional = true;
	$.ajax({
		url: ctx+'/orgNameValidate',
		type: 'POST',
        data: data,
        async: false,
        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
        dataType:'json',
        success: function(result){
        	if(result == 0){
        		flag = 'false';
        	}else{
        		flag = 'true';
        	}
        },
        error: function(){
            alert("error");
        }
	});
	return flag;
}

//입력창 리셋
function reset(){
	$('#orgInsertForm').each(function() {
		this.reset();
    });
}