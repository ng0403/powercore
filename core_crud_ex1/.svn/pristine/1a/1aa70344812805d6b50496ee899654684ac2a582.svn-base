
//13자리 날짜 변환 함수
function dateFormat(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day) + " "+ (hour==0 ? "00" : hour )+":"+(min==0 ? "00" : min );

	return retVal
}

//모두체크
function callAllChk(){
	$(document).ready(function() {  
		var checkbox=$('#goaltable tbody').find('input[type=checkbox]');
		
		if($('#callCheck').is(":checked")){
			$(checkbox).prop("checked", true);
		}else{
			$(checkbox).prop("checked", false);
		}
	});
}

//전체 체크 해제
function callChkCancel() {
	$(document).ready(function() {
		$("#callCheck").prop("checked", false);
	});
}


//체크박스 개수 검색함수
function checkCount(){
	   var count=0;
	   var checkList = $('.call_chek');
	   for(var i=0; i<checkList.size(); i++){
	      if($(checkList[i]).is(':checked')){
	         count++;
	      }
	   }
	   return count;
	};

//페이지 입력 이동
function pageInputCall(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			var callPageNum = $("#callPageInput").val();
			var endPageNum = $("#endPageNum").val();
			var call_name = $("#call_name").val();
			var call_email = $("#call_email").val();
			var call_tel = $("#call_tel").val();
			var call_iuser_nm = $("#call_iuser_nm").val();
			if (parseInt(callPageNum) > parseInt(endPageNum) || parseInt(callPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#callPageInput").val("1");
			} else {
				if(call_name == '' && call_email == '' && call_tel == '' && call_iuser_nm == ''){
					callPaging(callPageNum);
				} else {
					callPaging(callPageNum);
				}
			}
		}
	event.stopPropagation();
}
	
// 초성 검색 페이징
function searchAcnkEvent(callPageNum, keyword){
		var ctx = $("#ctx").val();
		var call_name = $("#call_name").val();
		var call_email = $("#call_email").val();
		var call_tel = $("#call_tel").val();
		var call_iuser_nm = $("#call_iuser_nm").val();
		var callData = { "callPageNum": callPageNum, 
				"keyword": keyword,
		        "call_name": call_name, 
		        "call_email":call_email, 
		        "call_tel":call_tel,
		        "call_iuser_nm":call_iuser_nm
		        };
		
		if(keyword == '전체'){
			location.href = ctx + '/call';
			return;
		}else{
			var tbody = $('#call_list_tbody');
			var tbodyContent = "";
			
			$.ajax({
				url: ctx+'/searchKeyword',
				type: 'POST',
				data: callData,
				dataType:'json',
				success: function(data){
					if(data.callListSize == 0){
						alert("조회된 결과가 없습니다.");
						location.href = ctx+'/call';
					} else {
						tbody.children().remove();
						
						$("#call_name").val(data.call_name);
						$("#call_email").val(data.call_email);
						$("#call_tel").val(data.call_tel);
						$("#call_iuser_nm").val(data.call_iuser_nm);
						for(var i=0; i<data.callList.length; i++){
							tbodyContent='<tr><th><input type="checkbox" id="call_chek" class="call_chek" name="call_del" value="'+data.callList[i].call_id+'"></th>'
								+'<td style="width:10%; text-align: left; padding-left:5px;" onclick=callTabFunc("'+data.callList[i].call_id+'","'+data.callList[i].cust_div_nm+'")><a style="color: blue; cursor: pointer;" class="callClick">'+data.callList[i].call_nm+'</a></td>'
								+'<td style="width:10%; text-align: left; padding-left:5px;">'+data.callList[i].cust_div_nm+'</td>';
							if(data.callList[i].pos_nm == 'null' || data.callList[i].pos_nm == null || data.callList[i].pos_nm == ""){
								tbodyContent += '<td style="width:10%; text-align: center;"></td>';
							}else{
								tbodyContent +='<td style="width:10%; text-align: center;">'+data.callList[i].pos_nm+'</td>';
							}
							if(data.callList[i].comp_nm == 'null' || data.callList[i].comp_nm == null || data.callList[i].comp_nm == ""){
								tbodyContent += '<td style="width:10%; text-align: left; padding-left:5px;"></td>';
							}else{
								tbodyContent +='<td style="width:10%; text-align: left; padding-left:5px;">'+data.callList[i].comp_nm+'</td>';
							}
							
							tbodyContent +='<td style="width:15%; text-align: left; padding-left:5px;">'+data.callList[i].email1+'@'+data.callList[i].email2+'</td>'
							+'<td style="width:10%; text-align: center;">'+data.callList[i].ph1+'-'+data.callList[i].ph2+'-'+data.callList[i].ph3+'</td>'
							+'<td style="width:10%; text-align: center;">'+data.callList[i].cell_phone1+'-'+data.callList[i].cell_phone2+'-'+data.callList[i].cell_phone3+'</td>'
							+'<td style="width:10%; text-align: center;">'+data.callList[i].iuser_id_nm+'</td>'
							+'<td style="width:15%; text-align: center;">'+dateFormat(data.callList[i].fst_reg_dt)+'</td></tr>';
							tbody.append(tbodyContent);
						}
						if(data.callListSize < 5){
							for(var i=0; i<5-data.callListSize; i++){
								tbodyContent='<tr style="height: 25px;"><th></th>'
									+'<td style="width:10%;"></td>'
									+'<td style="width:10%;"></td>'
									+'<td style="width:10%;"></td>'
									+'<td style="width:10%;"></td>'
									+'<td style="width:15%;"></td>'
									+'<td style="width:10%;"></td>'
									+'<td style="width:10%;"></td>'
									+'<td style="width:10%;"></td>'
									+'<td style="width:15%;"></td></tr>';
								tbody.append(tbodyContent);
							}
						}        		
						
						var pageContent = "";
						// 페이징 다시그리기
						$("#pager").children().remove();
						if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a> ◀ </a><input type='text' id='callPageInput' class='call_page_txt' readonly='readonly' value='"+data.page.startPageNum+"'/>" 
							+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
						} else if(data.callPageNum == data.page.startPageNum){
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a style='text-decoration: none;'> ◀ </a> <input type='text' id='callPageInput' class='call_page_txt' value='"+data.callPageNum+"'/>" 
							+"<a href='#' onclick=\"searchAcnkEvent("+data.page.endPageNum+", '"+data.keyword+"');\" id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
							+"<a href='#' onclick=\"searchAcnkEvent("+(data.callPageNum+1)+", '"+data.keyword+"');\" id='pNum' style='text-decoration: none;'> ▶ </a>";
						} else if(data.callPageNum == data.page.endPageNum){
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a href='#' onclick=\"searchAcnkEvent("+(data.callPageNum-1)+", '"+data.keyword+"');\" id='pNum' style='text-decoration: none;'> ◀ </a>"
							+"<input type='text' id='callPageInput' class='call_page_txt' value='"+data.page.endPageNum+"'/>"
							+"<a href='#' onclick=\"searchAcnkEvent("+data.page.endPageNum+", '"+data.keyword+"');\" id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
							+"<a style='text-decoration: none;'> ▶ </a>";
						} else {
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a href='#' onclick=\"searchAcnkEvent("+(data.callPageNum-1)+", '"+data.keyword+"');\" id='pNum' style='text-decoration: none;'> ◀ </a>"
							+"<input type='text' id='callPageInput' class='call_page_txt' value='"+data.callPageNum+"'/>"
							+"<a href='#' onclick=\"searchAcnkEvent("+data.page.endPageNum+", '"+data.keyword+"');\" id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
							+"<a href='#' onclick=\"searchAcnkEvent("+(data.callPageNum+1)+", '"+data.keyword+"');\" id='pNum' style='text-decoration: none;'> ▶ </a>";
						}
						$("#pager").append(pageContent);
					}
				},
				error: function(){
					alert("error");
				}
			});
		}
}

//검색 엔터키 기능
function callSearchEnter(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	
	if (keycode == '13') {
		if ($("#call_name").val() == '' && $("#call_email").val() == '' && $("#call_tel").val() == '' && $("#call_iuser_nm").val() == '') {
			alert("검색어를 입력하세요.")
			$("#call_name").focus();
		} else {
			searchAcnkEvent(1,'');
		}
	}
	event.stopPropagation();
}

// 연락처 리스트 그냥 페이징
function callPaging(callPageNum) {
	var ctx = $("#ctx").val();
	var tbody = $('#call_list_tbody');
	var tbodyContent = "";
	var call_name = $("#call_name").val();
	var call_email = $("#call_email").val();
	var call_tel = $("#call_tel").val();
	var call_iuser_nm = $("#call_iuser_nm").val();
	var callData = { "callPageNum": callPageNum, 
			        "call_name": call_name, 
			        "call_email":call_email, 
			        "call_tel":call_tel,
			        "call_iuser_nm":call_iuser_nm
			        };
	
	$.ajax({
		url : ctx+'/callPaging',
		type : 'POST',
		data : callData,
		success : function(data) {

			if(data.callListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/call';
			}else{
				tbody.children().remove();
			
				$("#call_name").val(data.call_name);
				$("#call_email").val(data.call_email);
				$("#call_tel").val(data.call_tel);
				$("#call_iuser_nm").val(data.call_iuser_nm);
				
				tbody.children().remove();
			
			for (var i = 0; i < data.callList.length; i++) {
				
				tbodyContent +='<tr><th><input type="checkbox" id="call_chek" class="call_chek" name="call_del" value="'+data.callList[i].call_id+'"></th>'
        			+'<td style="width:10%; text-align: left; padding-left:5px;" onclick=callTabFunc("'+data.callList[i].call_id+'","'+data.callList[i].cust_div_nm+'")><a style="color: blue; cursor: pointer;" class="callClick">'+data.callList[i].call_nm+'</a></td>'
        			+'<td style="width:10%; text-align: left; padding-left:5px;">'+data.callList[i].cust_div_nm+'</td>'
        			if(data.callList[i].pos_nm == 'null' || data.callList[i].pos_nm == null || data.callList[i].pos_nm == ""){
        				tbodyContent += '<td style="width:10%; text-align: center;"></td>';
					}else{
						tbodyContent +='<td style="width:10%; text-align: center;">'+data.callList[i].pos_nm+'</td>';
					}
        			if(data.callList[i].comp_nm == 'null' || data.callList[i].comp_nm == null || data.callList[i].comp_nm == ""){
        				tbodyContent += '<td style="width:10%; text-align: left; padding-left:5px;"></td>';
					}else{
						tbodyContent +='<td style="width:10%; text-align: left; padding-left:5px;">'+data.callList[i].comp_nm+'</td>';
					}
        			tbodyContent+='<td style="width:15%; text-align: left; padding-left:5px;">'+data.callList[i].email1+'@'+data.callList[i].email2+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.callList[i].ph1+'-'+data.callList[i].ph2+'-'+data.callList[i].ph3+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.callList[i].cell_phone1+'-'+data.callList[i].cell_phone2+'-'+data.callList[i].cell_phone3+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.callList[i].iuser_id_nm+'</td>'
        			+'<td style="width:15%; text-align: center;">'+dateFormat(data.callList[i].fst_reg_dt)+'</td></tr>';
        		}
				                   
			   tbody.append(tbodyContent);
			}
			
			if(data.callList.length < 5){
				for(var i=0; i<5-data.callListSize; i++){
					tbodyContent='<tr style="height: 25px;"><th></th>'
						+'<td style="width:10%;"></td>'
						+'<td style="width:10%;"></td>'
						+'<td style="width:10%;"></td>'
						+'<td style="width:10%;"></td>'
						+'<td style="width:10%;"></td>'
						+'<td style="width:10%;"></td>'
						+'<td style="width:15%;"></td>'
						+'<td style="width:10%;"></td>'
						+'<td style="width:15%;"></td></tr>';
					tbody.append(tbodyContent);
				}		
			}
			
			var pageContent = "";
			// 페이징 다시그리기
			$("#pager").children().remove();

			if(data.callPageNum == data.page.startPageNum){
				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='callPageNum' value='"+data.callPageNum+"'/>"
								+"<a style='text-decoration: none;'> ◀ </a> <input type='text' id='callPageInput' class='call_page_txt' value='"+data.callPageNum+"' onkeypress=\"pageInputCall(event);\"/>" 
								+"<a href='#' onclick=callPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=callPaging("+(data.callPageNum+1)+") id='pNum' style='text-decoration: none;'> ▶ </a>";
			} else if(data.callPageNum == data.page.endPageNum){

				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='callPageNum' value='"+data.callPageNum+"'/>"
				                +"<a href='#' onclick=callPaging("+(data.callPageNum-1)+") id='pNum' style='text-decoration: none;'> ◀ </a>"
								+"<input type='text' id='callPageInput' class='call_page_txt' value='"+data.page.endPageNum+"' onkeypress=\"pageInputCall(event);\"/>"
								+"<a href='#' onclick=callPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
								+"<a style='text-decoration: none;'> ▶ </a>";
			} else {

				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='callPageNum' value='"+data.callPageNum+"'/>"
				                +"<a href='#' onclick=callPaging("+(data.callPageNum-1)+") id='pNum' style='text-decoration: none;'> ◀ </a>"
								+"<input type='text' id='callPageInput' class='call_page_txt' value='"+data.callPageNum+"' onkeypress=\"pageInputCall(event);\"/>"
								+"<a href='#' onclick=callPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none;'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=callPaging("+(data.callPageNum+1)+") id='pNum' style='text-decoration: none;'> ▶ </a>";
			}
			$("#pager").append(pageContent);
		},
		error : function() {
			alert("제가 문제입니다 페이징");
		}
	});
}

//개인고객 , 키맨 삭제
function callCustKeyDelete() {
	var chked_val = [];
	$(":checkbox[id='call_chek']:checked").each(function(index, item){
		chked_val[index] = item.value;
	});
	var delChk = confirm("정말 삭제 하시겠습니까?");
	if(delChk){
		var ctx = $("#ctx").val();

		$.ajax({
			url : ctx+'/callDelete',
			type : 'POST',
			data :  JSON.stringify(chked_val),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				alert(data.deleteResult);
				
				location.href=ctx+'/call';
			},
			error : function(data){
				alert(data.deleteResult);
				history.back();
			}
		});
	} else {
		return;
	}
}