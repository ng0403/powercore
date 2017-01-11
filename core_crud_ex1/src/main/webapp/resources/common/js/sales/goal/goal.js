$(function(){
	var ctx = $('#ctx').val();
	var index = $("#index").val();
	var year = $("#year").val();
	
	// 화면 호출 시 select box 값 지정
	$("#queryteam").val($("#year").val()).attr("selected", "selected");
	
	var teamgoal = $("#teamgoalA").text();
	if (teamgoal == "담당자별 목표" ) {
		if($("#param_org_id").val() != null || $("#param_org_id").val() != '') {
			$("#queryorg").val($("#param_org_id").val()).attr("selected", "selected");
		}
	}
	
	//엑셀 다운로드
	ExcelDown(ctx);
	// 엑셀 업로드
	ExcelUpLoad(ctx);
	//년도별 팀목표 찾기
	searchTeamGoal(ctx);
	//편집버튼 클릭 
	ModiGoalAmt(ctx, year);
	//취소 버튼
	CancelModiGoal(ctx);
	// 체크박스 클릭
	GoalCheckbox(ctx,  year);
	//팀별목표 저장
	SaveTeamGoal(ctx, year);
});
/**
 *  스크롤 이동
 */
function whileScroll() {
	$(document).ready(function() {
		var height = $("#tableline2").scrollTop();
		$("#tableline").scrollTop(height);
		
		var left = $("#tableline2").scrollLeft();
		
		$("#articleline2").scrollLeft(left);
	});
	setTimeout(function() {
		whileScroll();
	}, 3000);
}

/**
 * 숫자 체크 후 포맷 함수 호출
 * @param obj
 */
function number_chk(obj) {
	var inp_value = obj.value.replace(/,/g, "");
	var chg_value = inp_value.substr(0, 1);
	var obj_length = inp_value.length;
	
	if (chg_value == 0) {
		inp_value = inp_value.substr(1, obj_length);
	}
	obj.value = num_format(inp_value);
}

/**
 * format 형식 지정(###### -> ###,###)
 * @param n
 * @returns
 */
function num_format(n) {
	var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
	n = String(n); // 숫자 -> 문자변환
	while (reg.test(n)) {
		n = n.replace(reg, "$1" + "," + "$2");
	}
	return n;
}

/**
 * input box에 금액 입력 시 숫자만 입력
 * @param event
 */
function fnkeypress(event) {
	if ((event.keyCode < 48) || (event.keyCode > 57))
		event.returnValue = false;
}
/**
 * 엑셀 다운로드
 *  - 서버에 있는 문서 다운로드
 * Excel DownLoad 
 */
function ExcelDown(ctx) {
	$('#exceldown').click(function(){
		var teamgoal = $("#teamgoalA").text();
		if (teamgoal == "팀별목표" ) {
			location.href = ctx+'/TeamExceldownload.do?filename=팀별목표_양식.xls';
		} else {
			location.href = ctx+'/StaffExceldownload.do?filename=담당자별목표_양식.xls';
		}
	});
}
	
/**
 * 팀별목표 select box 조회
 * @param ctx
 */
function searchTeamGoal(ctx) {
	$("#rightbutton").click(function() {
		var teamgoal = $("#teamgoalA").text();
		if (teamgoal == "팀별목표" ) {
			$('#year').val($('#queryteam').val());
			document.searchform.action = ctx+"/teamgoal",
			document.searchform.submit();
		}
		else {
			$('#year').val($('#queryteam').val());
			$('#param_org_id').val($('#queryorg').val());
			document.searchform.action = ctx+"/staffgoalsch",
			document.searchform.submit();
		}
	});
}
/**
 * 엑셀 업로드
 * @param ctx
 * 
 */
function ExcelUpLoad(ctx) {
	$("#excelup").click(function() {
		var teamgoal = $("#teamgoalA").text();
		if (teamgoal == "팀별목표" ) {
			var newWindow = 
				window.open
				(
					ctx+"/ExcelUpload.do",
					"팀별목표 파일업로드",
					"width=350 ,height=10, toolbars=no, resizable=no, scrollbars=no"
				);
			newWindow.focus();
			
		}
		else {
			var newWindow = 
				window.open
				(
					ctx+"/StaffExcelUpload.do",
					"담당자별 목표 파일업로드",
					"width=350 ,height=10, toolbars=no, resizable=no, scrollbars=no"
				);
			newWindow.focus();
		}
	});
}

function success(url) {
	var teamgoal = $("#teamgoalA").text();
	if (teamgoal == "팀별목표" ) {
		location.href = url;
	} else {
		location.href = url;
	}
	
}
/**
 * 체크박스 선택 시 input box 보여주기, 편집, 저장, 취소 버튼 활성화
 *   - 하나만 선택 가능...(배열 추후 예정)
 * @param ctx
 * @param index
 * @param year
 * @param org
 */
function GoalCheckbox(ctx, year) {
	$('.tr_goalchk').click(function() {
		if(this.checked) {
			$("#chkFuncBtn").css("display", "block");
			index = $('.tr_goalchk').index(this);
			year = $('#year').val();
			setTdInput(index);
			$('#goal_button_modify').attr("disabled", false);
			$('#goal_button').attr("disabled", false);
			$('#goal_button_cancel').attr("disabled", false);
		} else {
			$("#chkFuncBtn").css("display", "none");
			$(this).attr("checked", false);
			$('#goal_button_modify').attr("disabled", true);
			$('#goal_button').attr("disabled", true);
			$('#goal_button_cancel').attr("disabled", true);
			index = 0;
			year = ""; 
		}
	});
}
/**
 * 편집 버튼 클릭 시 readonly 및 disabled 된 input box 활성화 
 * @param ctx
 * @param index
 * @param year
 * @param org
 */
function ModiGoalAmt(ctx, year) {
	$("#goal_button_modify").click(function() {
		
		var index = $('.tr_goalchk').index($('.tr_goalchk:checked'));
		$("#index").val(index);
		var checked = $(".tr_goalchk:checked");
		if(checked && checked.length > 0) {
			$(":checkbox[id='goalchk']").each(function(index, item){
				if(this.checked){
					$('#tableline2 tbody tr').eq(index).find('td').find('input[name^="amt_inp"]').each(function(idx) {
						$(this).attr("disabled", false);
						$(this).attr("readonly", false);
					});
				}
			});n
		}else {
			alert("편집할 부서를 선택하세요");
			return;
		}
	});
}

/**
 * 취소 버튼 클릭 시 원상태로 돌리기
 * @param ctx
 * @param index
 * @param year
 * @param org
 */
function CancelModiGoal(ctx) {
	$('#goal_button_cancel').click(function() {
		$("#chkFuncBtn").css("display", "none");
//		alert("Can 조직 : "+org);
		var colCount = $('#tableline2 tbody tr').eq(index).find('td').length;
		
		$(":checkbox[id='goalchk']").each(function(index, item){
			if(this.checked){
				for(var i=1; i<= colCount; i++) {
					$('#tableline2 tbody tr').eq(index).find('td').eq(i).prev().find(".amt_class").attr("hidden", false);
					
					$('#tableline2 tbody tr').eq(index).find('td').eq(i).prev().find("input.inp_class").attr("type","hidden");
					$('#tableline2 tbody tr').eq(index).find('td').eq(i).prev().find("input.inp_class").attr("readonly","readonly").attr("disabled", true);
					$('#tableline2 tbody tr').eq(index).find('td').eq(i).prev().find("input.inp_class").css('width', '');
					if (i== colCount) {
						$('#tableline2 tbody tr').eq(index).find('td').eq(i-1).find("#dec_amt").attr("hidden", false);
						
						$('#tableline2 tbody tr').eq(index).find('td').eq(i-1).find("input.inp_class").attr("type", "hidden");
						$('#tableline2 tbody tr').eq(index).find('td').eq(i-1).find("input.inp_class").attr("readonly","readonly").attr("disabled", true);
						$('#tableline2 tbody tr').eq(index).find('td').eq(i-1).find("input.inp_class").css("width", "");
					}
				}
			}
		});
		
		$('.tr_goalchk:checked').attr("checked", false);
		$('.tr_goalchk').attr("disabled", false);
		$('#goal_button_modify').attr("disabled", true);
		$('#goal_button').attr("disabled", true);
		$('#goal_button_cancel').attr("disabled", true);
	});
}

/**
 * 저장 버튼 클릭 시 내용 저장
 * @param ctx
 * @param year
 */
function SaveTeamGoal(ctx, year) {
	var teamgoal = $("#teamgoalA").text();
	if (teamgoal == "팀별목표" ) {
		$('#goal_button').click(function () {
			var org = $('.tr_goalchk:checked').val();
			var Object = {
				year : year,
				org : org, // 조직아이디
				amt_array : new Array(12) // 컬럼값을 넣을 array설정
			};
			
			var chked_val = [];
			$(":checkbox[id='goalchk']").each(function(index, item){
				if(this.checked){
					if($(this).val() != ''){
						Object.org = $(this).val();
						
						$('#tableline2 tbody tr').eq(index).find('td').find('input[name^="amt_inp"]').each(function(idx) {
							if( $(this).val() != '') {
								Object.amt_array[idx] = del_comma($(this).val());// 컬럼값 넣기
							}
						});
						chked_val[index] = Object;
						Object = {
								year : year,
								org : org, // 조직아이디
								amt_array : new Array(12) // 컬럼값을 넣을 array설정
						};
					}
				}
			});
			
			$.ajax({
				url : ctx + "/UpdateTeamGoal.do",
				type : 'POST',
				dataType : 'json',
				data : JSON.stringify(chked_val),
				contentType: "application/json",
				success : function(data, textStatus, jqXHR) {
					if (data.result == "Y") {
						alert("팀별 목표 업데이트를 성공하였습니다.");
						
						//재조회
						location.href = ctx+"/teamgoal?year="+year;
					}else if (data.result == "standard/login/login"){
						location.href = ctx+"/sessionExpire";
					}
					else if (data.result = "N") {
						alert("팀별 목표 업데이트에 실패하였습니다.");
						return;
					}
					
				},
				error : function(request,status,error) {
					 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
		});
	}
	else {
		$('#goal_button').click(function () {
			
			var queryorg = $("#queryorg").val();
			var queryteam = $("#queryteam").val();
			
			var chkval = $('.tr_goalchk:checked').val().split("/");
			alert(queryorg);
			var Object = {
				year : year,
				org : chkval[1], 
				reg_id : chkval[0],
				amt_array : new Array(12),
				queryorg : queryorg,
				queryteam : queryteam
			};
			
			var chked_val = [];
			$(":checkbox[id='goalchk']").each(function(index, item){
				if(this.checked){
					if($(this).val() != ''){
						chkval = $(this).val().split("/");
						Object.org = chkval[1];
						Object.reg_id = chkval[0];
						
						$('#tableline2 tbody tr').eq(index).find('td').find('input[name^="amt_inp"]').each(function(idx) {
							if( $(this).val() != "") {
								Object.amt_array[idx] = del_comma($(this).val());
							}
						});
						chked_val[index] = Object;
						Object = {
								year : year,
								org : chkval[1], 
								reg_id : chkval[0],
								amt_array : new Array(12),
								queryorg : queryorg,
								queryteam : queryteam
						};
					}
				}
			});
			
			$.ajax({
				url : ctx + "/UpdateStaffGoal.do",
				type : 'POST',
				dataType : 'json',
				data : JSON.stringify(chked_val),
				contentType: "application/json",
				success : function(data, textStatus, jqXHR) {
					if (data.result == "Y") {
						alert("담당자별 목표 업데이트를 성공하였습니다.");
						//재조회
						location.href = ctx+"/staffgoal?year="+data.queryteam+"&param_org_id="+data.queryorg;
					}else if (data.result == "standard/login/login"){
						location.href = ctx+"/sessionExpire";
					}
					else if (data.result = "N") {
						alert("담당자별 목표 업데이트에 실패하였습니다.");
						return;
					}
					
				},
				error : function(request,status,error) {
					 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
			
		});
	}
	
}

/**
 * 숫자 콤마 제거(Server 전달 시 필요)
 * @param str
 * @returns
 */
function del_comma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}
/**
 * td 안에 input box 나타내기
 * @param rowIndex
 */
function setTdInput(rowIndex) {
    var colCount = $('#tableline2 tbody tr').eq(rowIndex).find('td').length;
    var aa ='';
		for(var i=1; i<= colCount; i++) {
			
			amt = $('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find(".amt_class").text();
			$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find(".amt_class").attr("hidden", true);
			
			$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find("input.inp_class").attr("type","text").val(amt);
			$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find("input.inp_class").css('width', '100px');
			if (i== colCount) {
				amt = $('#tableline2 tbody tr').eq(rowIndex).find("#dec_amt").text();
				$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i-1).find("#dec_amt").attr("hidden", true);
				
				$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i-1).find("input.inp_class").attr("type", "text").val(amt);
				$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i-1).find("input.inp_class").css("width", "100px");
			}
		}
}