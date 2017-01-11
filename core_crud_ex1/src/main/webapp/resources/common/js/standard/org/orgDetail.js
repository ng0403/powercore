$(function(){
	var ctx = $('#ctx').val();
	orgDetailButtonEvent(ctx);	
});

//삭제할 노드의 css수정
function org_deleteCss(list){
	var node = org_searchChkNode($('#orgTree'), list[i]);
	$(node).next().css('text-decoration','line-through');
	$(node).parent().find('a').css('text-decoration','line-through');
}

//체크노드 찾기
function org_searchChkNode(parentNode, id){
	var node;
	var list =	$(parentNode).find('input[type="checkbox"]');
		if($(list).val() == id){
			node = list;
		}
	return node;
}

function orgTreeAddr_pop(){
	var ctx = $('#ctx').val();
	var p_org_id = window.open(ctx+"/orgTreeAddrListPop.do","상위조직",'width=500,height=620,resizable=no,status=no,location=no,menubar=no,toolbar=no');
}

function POrgName() {
	var ctx = $('#ctx').val();
	var p_org_id = window.open(ctx+"$/pOrgList","상위조직",'width=420,height=500,resizable=no,status=no,location=no,menubar=no,toolbar=no');

}
function TOrgName() {
	var ctx = $('#ctx').val();
	var p_org_id = window.open(ctx+"/tOrgList","조직유형",'width=420,height=500,resizable=no,status=no,location=no,menubar=no,toolbar=no');

}

//조직대표 검색 팝업
function OOrgName() {
	var ctx = $('#ctx').val();
	var p_org_id = window.open(ctx+"/oOrgList","조직대표",'width=420,height=500,resizable=no,status=no,location=no,menubar=no,toolbar=no');

}

//
function COrgName() {
	var ctx = $('#ctx').val();
	var p_org_id = window.open(ctx+"/cOrgList","조직레벨",'width=420,height=500,resizable=no,status=no,location=no,menubar=no,toolbar=no');

}

function inputZipNm(addr_dtl_cont, zipCd, zip_cd_sri_num){
	$('#post1').val(zipCd.substring(0, 3));
	$('#post2').val(zipCd.substring(3, 6));
	$('#addr').val(addr_dtl_cont);
	$('#zip_cd_sri_num').val(zip_cd_sri_num);
	$('#addr_detail').focus();
}

function orgRepNm(id_nm, iuser_nm){
	console.log(id_nm);
	$('#user_id').val(id_nm);
	$('#iuser_nm').val(iuser_nm);
}

//입력창 리셋
function reset(){
	$('#orgInsertForm').each(function() {
		this.reset();
    });
}

function orgResetBtn_funct(ctx){
	if($('#org_mode').val() != 'waiting'){
		if($('#org_mode').val() == 'insert'){
			var checknode = org_All_checkedNode();
			if($('#org_insert_mode').val() == 'org_type'){
				var node = org_searchTextNode($(checknode).parent(), $('#org_type_name').val());
				$(node).parent().remove();
			}else{
				var node = org_searchTextNode($(checknode).parent(), $('#org_name').val());
				var nodeCount = $(node).parent().parent().children('li').size();
				if(nodeCount == 1){
					$(node).parent().parent().parent().children('img').attr('src',ctx+"/resources/image/no_treebtn.png");
				}
				$(node).parent().remove();
			}
		}else{
			$('#orgInsertForm').find('input[type="text"]').prop('disabled',false);
			$('#orgInsertForm').find('input[type="radio"]').prop('disabled',false);
		}
		$('#orgTree').find('input[type="checkbox"]').prop('disabled',false);
		reset();
		$('#orgTree').find('input').prop('checked',false);
		$('#orgSubmitBtn').hide();
		$('#orgUpdateBtn').hide();
		$('#orgResetBtn').hide();
		$('#org_mode').val('waiting');
	}
}

function orgDetailButtonEvent(ctx){
	//등록버튼 누를시 이벤트
	$('#orgSubmitBtn').click(function(){
		if($('#org_mode').val() == 'insert'){
			var flag=true;
			var org_flag = $('#org_insert_mode').val();
			var node;
			if(org_flag == 'org_type'){
				node = $('.orgDetail').find('input[type="text"]');
				/*node = $('.orgtypeDetail').find('input[type="text"]');*/
			}else{
				node = $('.orgDetail').find('input[type="text"]');
			}
					
			var obj = new Object();
			
			//텍스트 입력 공백 확인
			$(node).each(function(){
				if($(this).val() == ''){
					flag = false;
				}
			});
			if(flag == true){
				if(confirm("정말 저장하시겠습니까?")) {
				if(org_flag == 'org_type'){
					/*obj.org_flag = 'org_type';
					obj.org_type_id = $('#org_type_id2').val();
					obj.org_type_nm = $('#org_type_name').val();
					if($('#active_flg2_Y').is(':checked')){
						obj.act_yn = $('#active_flg2_Y').val();
					}else{
						obj.act_yn = $('#active_flg2_N').val();
					}*/
					obj.org_flag = 'org';
					obj.org_nm = $('#org_name').val();
					$('#p_org_id').prop('disabled',false);
					obj.up_org_id = $('#p_org_id').val();
					obj.org_type_id = $('#org_type_id').val();
					obj.rep_emp_id = $('#user_id').val();
					obj.org_lev_cd= $('#code').val();
					obj.phone_no1 = $('#phone_no1').val();
					obj.phone_no2 = $('#phone_no2').val();
					obj.phone_no3 = $('#phone_no3').val();
					obj.fax_no1 = $('#fax_no1').val();
					obj.fax_no2 = $('#fax_no2').val();
					obj.fax_no3 = $('#fax_no3').val();
					if($('#active_flg_Y').is(':checked')){
						obj.act_yn = $('#active_flg_Y').val();
					}else{
						obj.act_yn = $('#active_flg_N').val();
					} 
				}else{
					obj.org_flag = 'org';
					obj.org_nm = $('#org_name').val();
					$('#p_org_id').prop('disabled',false);
					obj.up_org_id = $('#p_org_id').val();
					obj.org_type_id = $('#org_type_id').val();
					obj.rep_emp_id = $('#user_id').val();
					obj.org_lev_cd= $('#code').val();
					obj.phone_no1 = $('#phone_no1').val();
					obj.phone_no2 = $('#phone_no2').val();
					obj.phone_no3 = $('#phone_no3').val();
					obj.fax_no1 = $('#fax_no1').val();
					obj.fax_no2 = $('#fax_no2').val();
					obj.fax_no3 = $('#fax_no3').val();
					if($('#active_flg_Y').is(':checked')){
						obj.act_yn = $('#active_flg_Y').val();
					}else{
						obj.act_yn = $('#active_flg_N').val();
					} 
				}
				var data = JSON.stringify(obj);
				$.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/orgInsert',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	if(result.ok != 1 ){
			        		alert("올바르게 저장되지 않았습니다.");
			        	}else{
			        		alert("입력정보가 저장되었습니다.");
			        		//editTree(data.TreeList, data.TreeListTwo);
			        		location.href='org';
			        		detaildisabled();
			        	}
			        	var node = org_searchNode($('#orgTree'), 'NEW');
						if(org_flag == 'org_type'){
							$(node).val(result.org_type_id);
							if($('#active_flg2_Y').is(':checked')){	//활성화여부가 Y일 경우
								$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
							}else{
								$(node).next().css('text-decoration','line-through');
							}
						}else{
							$(node).val(result.org_id);
							if($('#active_flg_Y').is(':checked')){	//활성화여부가 Y일 경우
								$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
							}else{
								$(node).next().css('text-decoration','line-through');
							}
						}
			        },
			        error: function(){
			            alert("error");
			        }
				});
				$('#orgTree').find('input[type="checkbox"]').prop('disabled',false);
				reset();
				$('#orgTree').find('input').prop('checked',false);
				$('#orgSubmitBtn').hide();
				$('#orgUpdateBtn').hide();
				$('#orgResetBtn').hide();
				$('#org_mode').val('waiting');	
				}
			}else{
				/*alert('빈 공간을 채워주세요.');*/
				if($('#org_name').val() == '') {
					alert("부서명을 입력해 주세요");
					$('#org_name').focus();
				}
				else if($('#user_id').val() == '') {
					alert("부서장을 입력해 주세요.");
					$('#user_id').focus();
				}
				else if($('#phone_no1').val() == '') {
					alert("전화번호를 입력해 주세요.");
					$('#phone_no1').focus();
				}
				else if($('#phone_no2').val() == '') {
					alert("전화번호를 입력해 주세요.");
					$('#phone_no2').focus();
				}
				else if($('#phone_no3').val() == '') {
					alert("전화번호를 입력해 주세요.");
					$('#phone_no3').focus();
				}
				else if($('#fax_no1').val() == '') {
					alert("팩스번호를 입력해 주세요.");
					$('#fax_no1').focus();
				}
				else if($('#fax_no2').val() == '') {
					alert("팩스번호를 입력해 주세요.");
					$('#fax_no2').focus();
				}
				else if($('#fax_no3').val() == '') {
					alert("팩스번호를 입력해 주세요.");
					$('#fax_no3').focus();
				}
			}
		}else if($('#org_mode').val() == 'update'){
			var flag=true;
			var org_flag = $('#org_insert_mode').val();
			var node;
			masterNode = org_CheckedIdList('masterCheck');
			subNode = org_CheckedIdList('subCheck');
			ssubNode = org_CheckedIdList('ssubCheck');
			if(org_flag == 'org_type'){
				node = $('.orgtypeDetail').find('input[type="text"]');
			}else{
				node = $('.orgDetail').find('input[type="text"]');
			}
			var obj = new Object();
			
			//텍스트 입력 공백 확인
			$(node).each(function(){
				if($(this).val() == ''){
					flag = false;
				}
			});
			
			if(flag == true){
				if(confirm("정말 저장하시겠습니까?")) {
				if(org_flag == 'org_type'){
					/*obj.org_flag = 'org_type';
					obj.org_type_id = $('#org_type_id2').val();
					obj.org_type_nm = $('#org_type_name').val();
					if($('#active_flg2_Y').is(':checked')){
						obj.act_yn = $('#active_flg2_Y').val();
					}else{
						obj.act_yn = $('#active_flg2_N').val();
					}*/
				}else{
					obj.org_flag = 'org';
					obj.org_id = $('#org_id').val();
					obj.org_nm = $('#org_name').val();
					obj.up_org_id = $('#p_org_id').val();
					obj.org_type_id = $('#org_type_id').val();
					obj.rep_emp_id = $('#user_id').val();
					obj.org_lev_cd = $('#code').val();
					obj.phone_no1 = $('#phone_no1').val();
					obj.phone_no2 = $('#phone_no2').val();
					obj.phone_no3 = $('#phone_no3').val();
					obj.fax_no1 = $('#fax_no1').val();
					obj.fax_no2 = $('#fax_no2').val();
					obj.fax_no3 = $('#fax_no3').val();
					if($('#active_flg_Y').is(':checked')){
						obj.act_yn = $('#active_flg_Y').val();
					}else{
						obj.act_yn = $('#active_flg_N').val();
					} 
				}
				var data = JSON.stringify(obj);
				$.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/orgUpdate',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(data){
			        	if(data.result != 1 ){
			        		alert("올바르게 수정되지 않았습니다.");
			        	}else{
			        		alert("입력정보가 수정되었습니다.");
			        		//editTree(data.TreeList, data.TreeListTwo);
			        		//org_deleteCss(obj.org_id);
			        		location.href="org";
			        		detaildisabled();
			        	}
			        },
			        error: function(){
			            alert("error");
			        }
				});
				reset();
				$('#orgSubmitBtn').hide();
				$('#orgUpdateBtn').hide();
				$('#orgResetBtn').hide();
				$('#org_mode').val('waiting');
				}
			}else{
				/*alert('빈 공간을 채워주세요.');*/
				if($('#org_name').val() == '') {
					alert("부서명을 입력해 주세요");
					$('#org_name').focus();
				}
				else if($('#user_id').val() == '') {
					alert("부서장을 입력해 주세요.");
					$('#user_id').focus();
				}
				else if($('#phone_no1').val() == '') {
					alert("전화번호를 입력해 주세요.");
					$('#phone_no1').focus();
				}
				else if($('#phone_no2').val() == '') {
					alert("전화번호를 입력해 주세요.");
					$('#phone_no2').focus();
				}
				else if($('#phone_no3').val() == '') {
					alert("전화번호를 입력해 주세요.");
					$('#phone_no3').focus();
				}
				else if($('#fax_no1').val() == '') {
					alert("팩스번호를 입력해 주세요.");
					$('#fax_no1').focus();
				}
				else if($('#fax_no2').val() == '') {
					alert("팩스번호를 입력해 주세요.");
					$('#fax_no2').focus();
				}
				else if($('#fax_no3').val() == '') {
					alert("팩스번호를 입력해 주세요.");
					$('#fax_no3').focus();
				}
				
			}
		}
	});

	//편집 버튼 누를시 체크박스 전체해제
	$('.bt_position_detail').delegate('#orgUpdateBtn','click',function(){
		if($('#org_mode').val() == 'waiting'){
			if($('#org_insert_mode').val() == 'org_type'){
				$('#orgInsertForm').find('#org_type_name').prop('disabled',false);
			}else{
				$('#orgInsertForm').find('input[type="text"]').prop('disabled',false);
				$('#oorg').show();
				$('#orgaddr').show();
				$('#org_id').prop('disabled',true);
				$('#p_org_id').prop('disabled',true);
				$('#org_type_id').prop('disabled',true);
				$('#code').prop('disabled',true);
				
			}
			$('#org_mode').val('update');
			$('#orgInsertForm').find('input[type="radio"]').prop('disabled',false);
			$('#orgUpdateBtn').hide();
			$('#orgSubmitBtn').show();
			$('#orgResetBtn').show();
		}else{
			alert('입력이 완료되지 않은 상태입니다!\n 정보를 입력하거나 취소버튼을 눌러주세요.');
		}
	});
	
	//취소버튼 누르시 이벤트
	$('#orgResetBtn').click(function(){
		orgResetBtn_funct(ctx);
		detaildisabled();		
		location.href="org";
	});
	
	$('#orgUserAuthSearch').click(function(){
		var obj = new Object();
		obj.searchKey = $('#searchKey').val();
		obj.searchValue = $('#title_text').val();
		var data = JSON.stringify(obj);
		$.ajaxSettings.traditional = true;
		$.ajax({
			url: ctx+'/orgUserAuthSearch',
			type: 'POST',
	        data: data,
	        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
	        dataType:'json',
	        success: function(data){
	        	var list="";
	        	$('#mastertable tbody tr').remove();
	        	for(var i=0; i<data.length; i++){
	        		list+='<tr><td style="width: 20%;">'+data[i].org_nm+'</td>'
					+'<td style="width: 20%;">'+data[i].rep_emp_nm+'</td>'
					+'<td style="width: 20%;">'+data[i].iuser_nm+'</td>'
					+'<td style="width: 20%;">'+data[i].ph1+'-'+data[i].ph2+'-'+data[i].ph3+'</td>'
					+'<td style="width: 20%;">'+data[i].email1+'@'+data[i].email2+'</td></tr>\n';
	        	}
	        	$('#mastertable tbody').append(list);
	        },
	        error: function(){
	            alert("error");
	        }
		});
	});
}
function detaildisabled(){
	$('.int').prop('disabled',true);
	$('.int_zipadd1').prop('disabled',true);
	$('.int_zipadd2').prop('disabled',true);
	$('.int_zip').prop('disabled',true);
	$('.int_tel').prop('disabled',true);
	$('#active_flg_N').prop('disabled',true);
	$('#active_flg_Y').prop('disabled',true); 
	$('#active_flg2_N').prop('disabled',true);
	$('#active_flg2_Y').prop('disabled',true); 
}



//트리 정보 재갱신
function editTree(TreeList, TreeListTwo){
	var ctx = $('#ctx').val();
	var list = "";
	
	for(var i=0; i<TreeList.length; i++){
		list+='<li>';
		var two_count = 0;
		for(var j=0; j<TreeListTwo.length; j++){
			if(TreeList[i].org_id == TreeListTwo[j].up_org_id){
				two_count++;
			}
		}
		if(two_count==0){
			list+='<img class="no_f_orgFlag" src="'+ctx+'/resources/image/no_treebtn.png"/>';
		}else{
			list+='<img class="f_orgFlag" src="'+ctx+'/resources/image/treebtn1.png"/>';
		}
		list+='<input type="checkbox" class="masterCheck" value="'+TreeList[i].org_id+'"/>';
		
		if(TreeList[i].act_yn == 'Y'){
			list+='<a class="sub_org">'+TreeList[i].org_nm+'</a>';
		}else{
			list+='<a class="sub_org"><del>'+TreeList[i].org_nm+'</del></a>';
		}
		if(TreeListTwo.length != 0){
			list+='<ul class="orgtree_sub">';
			for(var n=0; n<TreeListTwo.length; n++){
				if(TreeList[i].org_id == TreeListTwo[n].up_org_id){
					list+="<li class='hh'>";
									
					list+='<input type="checkbox" class="subCheck" value="'+TreeListTwo[n].org_id+'"/>';
					
					if(TreeListTwo[n].act_yn == 'Y'){
						list+='<a class="sub_org">'+TreeListTwo[n].org_nm+'</a>';
					}else{
						list+='<a class="sub_org"><del>'+TreeListTwo[n].org_nm+'</del></a>';
					}
								
					/*if(TreeListThird.length != 0){
						list+='<ul class="orgtree_super_sub">';
						for(var h=0; h<TreeListThird; h++){
							if(TreeListTwo[n].org_id == TreeListThird[h].up_org_id){
								list+='<li>';
								var fourth_count=0;
								
								for(var ex=0; ex<TreeListFourth.length; ex++){
									if(TreeListThird[h].org_id == TreeListFourth[ex].up_org_id){
										fourth_count++;
									}
								}
								
								if(fourth_count == 0){
									list+='<img class="no_ss_orgFlag" src="'+ctx+'/resources/image/no_treebtn.png"/>';
								}else{
									list+='<img class="ss_orgFlag" src="'+ctx+'/resources/image/treebtn1.png"/>';
								}
								list+='<input type="checkbox" class="ssubCheck" value="'+TreeListThird[h].org_id+'"/>';
									
							
								if(TreeListFourth.length != 0){								
									list+='<ul class="orgtree_super_ssub">';
									for(var v=0; v<TreeListFourth.length; v++){
										if(TreeListThird[h].org_id == TreeListFourth[v].up_org_id){
											list+='<li><input type="checkbox" class="s_ssubCheck" value="'+TreeListFourth[v].org_id+'"/>';
																						
											list+='</li>';
										}
									}
									list+='</ul>';
								}
								list+='</li>';
							}
						}
						list+='</ul>';	
					}*/
					list+='</li>';	
				}
			}
			list+='</ul>';
		}
		list+='</li>';
	}//end
	$('#orgTree').children('li').remove();
	$('#orgTree').append(list);
}