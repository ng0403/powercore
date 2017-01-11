//리스트 목로 전체 선택
$(document).ready(function() {
	
	// 기업고객 리스트 체크박스 선택, 해제
	$("#leadListCheck").click(function(){
		// 만약 전체 선택 체크박스가 체크된 상태일 경우
		if($("#leadListCheck").prop("checked")){
			// 해당화면 전체 checkbox들을 체크해준다.
			$("input[type=checkbox]").prop("checked", true);
		// 전체선택 체크박스가 해제된 경우
		} else {
			// 해당화면에 모든 checkbox들의 체크를 해제시킨다.
			$("input[type=checkbox]").prop("checked", false);
		}
	});
});

//전체 체크 해제
function chkCancel() {
	$(document).ready(function() {
		$("#leadListCheck").prop("checked", false);
	});
}

//숫자값만 입력받기
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 9) 
        return;
    else
        return false;
}
// 문자로 입력시 삭제
function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else{
    	event.target.value = event.target.value.replace(/[^0-9]/g, "");
    	event.target.focus();
    }
}
	
//리드고객 삭제
function leadDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_lead_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				$.ajax({
					url : ctx+'/leadDelete',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.result == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.result);
							location.href = ctx + "/lead";
						}
					},
					error : function(data){
						alert(data.result);
						history.back();
					}
				});
			} else {
				return;
			}
		}
	});
}

//리드 리스트 출력
function paging(leadListPageNum) {
	$(document).ready(function() {
				
		var ctx = $("#ctx").val();
		var allData = {"leadListPageNum": leadListPageNum};
		var tbodyContent = "";
		
		$.ajax({
			url : ctx+'/leadajax',
			type : 'POST',
			data : allData,
			dataType : "json",
			success : function(data) {
				$("#leadListBody").children().remove();
				
				$('addBtn').css("display","none");
				$('updateBtn').css("display","none");
				
				for (var i = 0; i < data.leadList.length; i++) {
					tbodyContent = "<tr>" 
						+"<th><input type='checkbox' id='chk_lead_id' value='"+data.leadList[i].cust_id+"' onclick='chkCancel();'></th>"
						+"<td id =leadListBody1><a href=javascript:leadDetail('"+data.leadList[i].cust_id+"') class='lnClick' style='color:blue;'>"+data.leadList[i].cust_nm+"</a></td>"
						+"<td id =leadListBody1>"+data.leadList[i].email+"</td>" 
						+"<td id =leadListBody3>"+data.leadList[i].cell_ph+"</td>"
						+"<td id =leadListBody3>"+data.leadList[i].rep_ph+"</td>"
						+"<td id =leadListBody3>"+data.leadList[i].lead_src_cd+"</td>"
						+"<td id =leadListBody3>"+data.leadList[i].lead_stat_cd+"</td>"
						+"<td id =leadListBody3>"+data.leadList[i].fst_reg_id_nm+"</td>"
						+"<td id =leadListBody3>"+data.leadList[i].fst_reg_dt+"</td></tr>";
					$("#leadListBody").append(tbodyContent);
				}
				if(data.leadList.length < 5){ //리스트 개수(줄수)
					for(var j = 0; j < 5-data.leadList.length; j++){
						tbodyContent ="<tr style='height:25px;'>"
							+"<th></th><td></td><td></td><td></td><td></td>"
							+"<td></td><td></td><td></td><td></td>"
							+"</tr>";
						$("#leadListBody").append(tbodyContent);
					}
				}
				var pageContent = "";
				// 페이징 다시그리기
				$("#pagingDiv").children().remove();
				
				if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a>◀ </a><input type='text' id='leadListPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
					+"<a> / "+data.page.endPageNum+"</a><a> ▶</a>";
				} else if(data.leadListPageNum == data.page.startPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a>◀ </a><input type='text' id='leadListPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
					+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=paging("+(data.leadListPageNum+1)+") id='pNum'> ▶</a>";
				} else if(data.leadListPageNum == data.page.endPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a href='#' onclick=paging("+(data.leadListPageNum-1)+") id='pNum'>◀ </a>"
					+"<input type='text' id='leadListPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
					+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a> ▶</a>";
				} else {
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a href='#' onclick=paging("+(data.leadListPageNum-1)+") id='pNum'>◀ </a>"
					+"<input type='text' id='leadListPageInput' value='"+data.leadListPageNum+"' onkeypress=\"pageInput(event);\"/>"
					+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=paging("+(data.leadListPageNum+1)+") id='pNum'> ▶</a>";
				}
				$("#pagingDiv").append(pageContent);
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

//조회 페이징
function schPaging(leadListPageNum) {
		var ctx = $("#ctx").val();
		
		var scust_nm = $("#scust_nm").val();
		var semail1 = $("#semail1").val();
		var semail2 = $("#semail2").val();
		var scell_ph1 = $("#scell_ph1").val();
		var scell_ph2 = $("#scell_ph2").val();
		var scell_ph3 = $("#scell_ph3").val();
		var srep_ph1 = $("#srep_ph1").val();
		var srep_ph2 = $("#srep_ph2").val();
		var srep_ph3 = $("#srep_ph3").val();
		var slead_src_cd = $("#slead_src_cd").val();
		var slead_stat_cd = $("#slead_stat_cd").val();
		
		if(scust_nm == '' && semail1 == '' && semail2 == '' && scell_ph1 == '' 
			&& scell_ph2 == '' && scell_ph3 == '' && srep_ph1 == '' && srep_ph2 == '' 
				&& srep_ph3 == '' && slead_src_cd == 0 && slead_stat_cd == 0){
			alert("검색어를 입력하세요");
		} else{
			var allData = {"leadListPageNum": leadListPageNum, "scust_nm": scust_nm, "semail1":semail1, "semail2":semail2
					     , "scell_ph1":scell_ph1, "scell_ph2":scell_ph2, "scell_ph3":scell_ph3, "srep_ph1":srep_ph1, "srep_ph2":srep_ph2, "srep_ph3":srep_ph3
					     , "slead_src_cd":slead_src_cd, "slead_stat_cd":slead_stat_cd};
			var tbody = $('#leadListBody');
			var tbodyContent = "";
			
			$.ajax({
				url : ctx+'/leadajax',
				type : 'POST',
				data : allData,
				dataType : "json",
				success : function(data) {
					if(data.leadListSize == 0){
						alert("검색결과가 없습니다.");
						location.href = ctx+'/lead';
					}else{
						tbody.children().remove();
						
						$("#scust_nm").val(data.scust_nm);
						$("#semail1").val(data.semail1);
						$("#semail2").val(data.semail2);
						$("#scell_ph1").val(data.scell_ph1);
						$("#scell_ph2").val(data.scell_ph2);
						$("#scell_ph3").val(data.scell_ph3);
						$("#srep_ph1").val(data.srep_ph1);
						$("#srep_ph2").val(data.srep_ph2);
						$("#srep_ph3").val(data.srep_ph3);
						$("#slead_src_cd").val(data.slead_src_cd);
						$("#slead_stat_cd").val(data.slead_stat_cd);
						
						//tbody.children().remove();
						for (var i = 0; i < data.leadList.length; i++) {
							tbodyContent = "<tr>" 
								+"<th><input type='checkbox' id='chk_lead_id' value='"+data.leadList[i].cust_id+"' onclick='chkCancel();'></th>"
								+"<td id =leadListBody1><a href=javascript:leadDetail('"+data.leadList[i].cust_id+"') class='lnClick' style='color:blue;'>"+data.leadList[i].cust_nm+"</a></td>"
								+"<td id =leadListBody1>"+data.leadList[i].email+"</td>" 
								+"<td id =leadListBody3>"+data.leadList[i].cell_ph+"</td>"
								+"<td id =leadListBody3>"+data.leadList[i].rep_ph+"</td>"
								+"<td id =leadListBody3>"+data.leadList[i].lead_src_cd+"</td>"
								+"<td id =leadListBody3>"+data.leadList[i].lead_stat_cd+"</td>"
								+"<td id =leadListBody3>"+data.leadList[i].fst_reg_id_nm+"</td>"
								+"<td id =leadListBody3>"+data.leadList[i].fst_reg_dt+"</td></tr>";
							tbody.append(tbodyContent);
						}
						
						if(data.leadList.length < 5){ //리스트 개수(줄수)
							for(var j = 0; j < 5-data.leadList.length; j++){
								tbodyContent ="<tr style='height:25px;'>"
									+"<th></th><td></td><td></td><td></td><td></td>"
									+"<td></td><td></td><td></td><td></td>"
									+"</tr>";
								tbody.append(tbodyContent);
							}
						}
					var pageContent = "";
					// 페이징 다시그리기
					$("#pagingDiv").children().remove();
					
					if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
						pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a>◀ </a><input type='text' id='leadListPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
						+"<a> / "+data.page.endPageNum+"</a><a> ▶</a>";
					} else if(data.leadListPageNum == data.page.startPageNum){
						pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a>◀ </a><input type='text' id='leadListPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
						+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
						+"<a href='#' onclick=paging("+(data.leadListPageNum+1)+") id='pNum'> ▶</a>";
					} else if(data.leadListPageNum == data.page.endPageNum){
						pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a href='#' onclick=paging("+(data.leadListPageNum-1)+") id='pNum'>◀ </a>"
						+"<input type='text' id='leadListPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
						+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
						+"<a> ▶</a>";
					} else {
						pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a href='#' onclick=paging("+(data.leadListPageNum-1)+") id='pNum'>◀ </a>"
						+"<input type='text' id='leadListPageInput' value='"+data.leadListPageNum+"' onkeypress=\"pageInput(event);\"/>"
						+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
						+"<a href='#' onclick=paging("+(data.leadListPageNum+1)+") id='pNum'> ▶</a>";
					}
					$("#pagingDiv").append(pageContent);
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
			});  //ajax
		} //else
}

//검색 엔터키 기능
function schLead(event) { 
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		if ($("#scust_nm").val() == '' && $("#semail1").val() == '' && $("#semail2").val() == '' 
			&& $("#scell_ph1").val() == ''&& $("#scell_ph2").val() == ''&& $("#scell_ph3").val() == ''
			&& $("#srep_ph1").val() == ''&& $("#srep_ph2").val() == ''&& $("#srep_ph3").val() == ''
			&& $("#slead_src_cd").val() == ''&& $("#slead_stat_cd").val() == '') {
			alert("검색어를 입력하세요.")
			$("#scust_nm").focus();
		} else {  //
			schPaging(1);
		}
	}
	event.stopPropagation();
}

//리드 상세보기 ajax 통신
function leadDetail(cust_id) {
	
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		
		$("#CupP").attr("disabled", false);
		$("#CandP").attr("disabled", false);
		$("#leadTabtbody input[type='text']").css("background-color", "#EAEAEA");
		
		$.ajax({
			type : 'POST',
			url : ctx+'/leadDetail',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				$("#nowCust_id").val(data.cust_id);
				
				var lead_stat = "";
				
				$("#lead_stat_cd_btn").children().remove();
				
				if(data.lead_stat_cd == '0001'){
					lead_stat = "<input type='button' id='leadSuit'   class='btn-success-tel' value='심사적합' onclick=\"leadSuit('"+ctx+"');\">"
								+"<input type='button' id='leadUnsuit' class='btn-success-tel' value='심사부적합' onclick=\"leadUnsuit('"+ctx+"');\">"
				} else if(data.lead_stat_cd == '0002'){
					lead_stat = "<input type='button' id='leadChangebtn' class='btn-success-tel' value='리드변환' onclick=\"leadChange('"+ctx+"');\">"
								+"<input type='button' id='leadUnsuit' class='btn-success-tel' value='심사부적합' onclick=\"leadUnsuit('"+ctx+"');\">"
				} else if(data.lead_stat_cd == '0003'){
					lead_stat = "<input type='button' id='leadSuit'   class='btn-success-tel' value='심사적합' onclick=\"leadSuit('"+ctx+"');\">"
				} else{
					lead_stat = "<input type='button' id='leadChangebtn' class='btn-success-tel' value='리드변환' onclick=\"leadChange('"+ctx+"');\">"
								+"<input type='button' id='leadSuit'   class='btn-success-tel' value='심사적합' onclick=\"leadSuit('"+ctx+"');\">"
								+"<input type='button' id='leadUnsuit' class='btn-success-tel' value='심사부적합' onclick=\"leadUnsuit('"+ctx+"');\">"
				}
			
				$("#lead_stat_cd_btn").append(lead_stat);  //id가 lead_stat_cd_btn 인 div에 lead_stat 그려주기
				
				//상세정보에 값 넣기
				$("#cust_id").val(data.cust_id); //기업아이디
				$("#lead_id").val(data.lead_id); //리드아이디
				$("#cust_nm").val(data.cust_nm).attr("readonly","readonly"); //고객명
				$("#email1").val(data.email1).attr("readonly","readonly"); //이메일1
				$("#email2").val(data.email2).attr("readonly","readonly"); //이메일2
				$("#rep_ph1").val(data.rep_ph1).attr("readonly","readonly"); //전화번호1
				$("#rep_ph2").val(data.rep_ph2).attr("readonly","readonly"); //전화번호2
				$("#rep_ph3").val(data.rep_ph3).attr("readonly","readonly"); //전화번호3
				$("#cell_ph1").val(data.cell_ph1).attr("readonly","readonly"); //이동 전화번호1
				$("#cell_ph2").val(data.cell_ph2).attr("readonly","readonly"); //이동 전화번호2
				$("#cell_ph3").val(data.cell_ph3).attr("readonly","readonly"); //이동 전화번호3
				$("#comp_num").val(data.comp_num).attr("readonly","readonly"); //사업자번호
				$("#corp_num").val(data.corp_num).attr("readonly","readonly"); //법인번호
				$("#lead_src_cd").children().eq(data.lead_src_cd).attr("selected", "selected"); //리드소스
				$("#lead_stat_cd").children().eq(data.lead_stat_cd).attr("selected", "selected"); //리드상태
				$("#cust_zip_cd1").val(data.cust_zip_cd.substring(0, 3)); //우편번호
				$("#cust_zip_cd2").val(data.cust_zip_cd.substring(3, 6)); //우편번호
				$("#cust_zip_addr").val(data.cust_zip_addr).attr("readonly","readonly"); //우편번호 상 주소
				$("#cust_addr").val(data.cust_addr); //고객 주소
				$("#zip_cd_sri_num").val(data.zip_cd_sri_num); //우편번호 일련번호
				
				// 히든 속성에 value값 설정하기
				$("#hcust_nm").val(data.cust_nm); //기업명
				$("#hemail1").val(data.email1); //이메일1
				$("#hemail2").val(data.email2); //이메일2
				$("#hrep_ph1").val(data.rep_ph1); //전화번호1
				$("#hrep_ph2").val(data.rep_ph2); //전화번호2
				$("#hrep_ph3").val(data.rep_ph3); //전화번호3
				$("#hcell_ph1").val(data.cell_ph1); //이동 전화번호1
				$("#hcell_ph2").val(data.cell_ph2); //이동 전화번호2
				$("#hcell_ph3").val(data.cell_ph3); //이동 전화번호3
				$("#hcomp_num").val(data.comp_num); //사업자번호
				$("#hcorp_num").val(data.corp_num); //법인번호
				$("#hlead_src_cd").val(data.lead_src_cd); //리드소스
				$("#hlead_stat_cd").val(data.lead_stat_cd); //리드상태
				$("#hcust_zip_cd").val(data.cust_zip_cd); //우편번호
				$("#hcust_zip_addr").val(data.cust_zip_addr); //우편번호 상 주소
				$("#hcust_addr").val(data.cust_addr); //고객 주소
				$("#hzip_cd_sri_num").val(data.zip_cd_sri_num); //우편번호 일련번호
				
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}


	