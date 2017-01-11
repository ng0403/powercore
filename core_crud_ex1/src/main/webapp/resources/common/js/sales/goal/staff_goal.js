$(function(){
	var ctx = $('#ctx').val();
	
/*  배열 처리용
//	var indexArr = [];
//	var yearArr = []; 
//	var orgArr = []; 
*/	
	var index = $("#index").val();
	var year = $("#year").val();
	
	// 화면 호출 시 select box 값 지정
	$("#queryteam").val($("#year").val()).attr("selected", "selected");
	
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
	
//	배열 처리할 경우
//	ModiGoalAmt(ctx,indexArr, yearArr, orgArr);
//	CancelModiGoal(ctx, indexArr, yearArr, orgArr);
//	GoalCheckbox(ctx, indexArr, yearArr, orgArr);
//	SaveTeamGoal(ctx, indexArr, yearArr, orgArr);
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
//	alert($("#titleline").html());
	
	$('#exceldown').click(function(){
		if ($("#titleline").html() == "■ 영업목표 &gt; 팀별목표") {
			location.href = ctx+'/TeamExceldownload.do?filename=팀별목표_양식.xls';
		}
		
	});
}
	
/**
 * 팀별목표 select box 조회
 * @param ctx
 */
function searchTeamGoal(ctx) {
	$("#rightbutton").click(function() {
//	alert("ASDFASDF :"+ $('#queryteam').val());
	$('#year').val($('#queryteam').val());
	document.searchform.action = ctx+"/teamgoal",
	document.searchform.submit();
		
	});
}


/**
 * 엑셀 업로드
 * @param ctx
 * 
 */
function ExcelUpLoad(ctx) {
	$("#excelup").click(function() {
		 
		var newWindow = 
			window.open
			(
					ctx+"/ExcelUpload.do",
					"팀별목표 파일업로드",
					"width=350 ,height=10, toolbars=no, resizable=no, scrollbars=no"
			);
		newWindow.focus();
		
		location.href = ctx+"/teamgoal";
	});
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
//		alert($(".tr_goalchk:checked").length);
		
		if ($(".tr_goalchk:checked").length >= 2) {
			alert("한 팀만 선택 가능합니다.");
			$(this).attr("checked", false);
			return;
		}
		else {
			if(this.checked) {
				index = $('.tr_goalchk').index(this);
//				org = $('.tr_goalchk:checked').val();
				year = $('#year').val();
//				alert("Chk 조직 : "+org);
				setTdInput(index);
				$('#goal_button_modify').attr("disabled", false);
				$('#goal_button').attr("disabled", false);
				$('#goal_button_cancel').attr("disabled", false);
				
			}
			else {
//				alert("1111");
				$(this).attr("checked", false);
				$('#goal_button_modify').attr("disabled", true);
				$('#goal_button').attr("disabled", true);
				$('#goal_button_cancel').attr("disabled", true);
				index = 0;
				year = ""; 
//				org = "";
			}
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
//		alert("Mod 조직 : "+org);
		
		var index = $('.tr_goalchk').index($('.tr_goalchk:checked'));
		$("#index").val(index);
//		alert($("#index").val());
//		alert(index);
		var checked = $(".tr_goalchk:checked");
		if(checked && checked.length > 0) {
			$('#tableline2 tbody tr').eq(index).find('td').find('input[name^="amt_inp"]').each(function(idx) {
				$(this).attr("disabled", false);
				$(this).attr("readonly", false);
			});
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
//		alert("Can 조직 : "+org);
		var colCount = $('#tableline2 tbody tr').eq(index).find('td').length;
		
		for(var i=1; i<= colCount; i++) {
//			alert("!!!");
			$('#tableline2 tbody tr').eq(index).find('td').eq(i).prev().find(".amt_class").attr("hidden", false);
			
			$('#tableline2 tbody tr').eq(index).find('td').eq(i).prev().find("input.inp_class").attr("type","hidden");
			$('#tableline2 tbody tr').eq(index).find('td').eq(i).prev().find("input.inp_class").css('width', '');
			if (i== colCount) {
				$('#tableline2 tbody tr').eq(index).find('td').eq(i-1).find("#dec_amt").attr("hidden", false);
				
				$('#tableline2 tbody tr').eq(index).find('td').eq(i-1).find("input.inp_class").attr("type", "hidden");
				$('#tableline2 tbody tr').eq(index).find('td').eq(i-1).find("input.inp_class").css("width", "");
			}
		}
		
		$('.tr_goalchk:checked').attr("checked", false);
		$('#goal_button_modify').attr("disabled", true);
		$('#goal_button').attr("disabled", true);
		$('#goal_button_cancel').attr("disabled", true);
	});
	
//	index = 0;
//	year = ""; 
//	org = "";

}

/**
 * 저장 버튼 클릭 시 내용 저장
 * @param ctx
 * @param year
 */
function SaveTeamGoal(ctx, year) {
	
	$('#goal_button').click(function () {
		var org = $('.tr_goalchk:checked').val();
		var Object = {
			year : year,
			org : org, 
			amt_array : new Array(12)
		};
		
		$('#tableline2 tbody tr').eq(index).find('td').find('input[name^="amt_inp"]').each(function(idx) {
			if( $(this).val() != "") {
				Object.amt_array[idx] = del_comma($(this).val());
			}
		});
		
		$.ajax({
			url : ctx + "/UpdateTeamGoal.do",
			type : 'POST',
			dataType : 'json',
			data : JSON.stringify(Object),
			contentType: "application/json",
//			processData : false,
//			contentType : false,
			success : function(data, textStatus, jqXHR) {
//				alert(data.result);
//				alert(data);
				if (data.result == "Y") {
					alert("목표금액을 업데이트 성공하였습니다.");
					//재조회
					location.href = ctx+"/teamgoal";
				}else {
					alert("목표금액을 업데이트 실패하였습니다.");
					return;
//					history.go(-1);
				}
				
			},
			error : function(request,status,error) {
				 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
		});
		
//		alert(Object.amt_array[11]);
		
	});
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
//배열 처리용
/*
function ModiGoalAmt(ctx,indexArr, yearArr, orgArr) {
	$("#goal_button_modify").click(function() {
		
		var checked = $(".tr_goalchk:checked");
		if(checked && checked.length > 0) {
//			setTdInput(index);
			for(var i= 0; i < indexArr.length; i++) {
				setTdInput(indexArr[i]);
			}
		}
		else {
			alert("편집할 부서를 선택하세요");
			return;
		}
		
	});
}

function CancelModiGoal(ctx, indexArr, yearArr, orgArr) {
	$('#goal_button_cancel').click(function() {
//		$('.tr_goalchk:checked').each(function(idx, row) {
////			$(".tr_goalchk:checked").attr("disabled", false);
//			$('.tr_goalchk:checked').attr("checked", false);
//		});
//		alert($('.tr_goalchk:checked').length);
		$('.tr_goalchk').attr("checked", false);
		for(var i = 0; i < $('.tr_goalchk:checked').length; i++) {
			
		}
	});
	
}

function GoalCheckbox(ctx, indexArr, yearArr, orgArr) {
		$('.tr_goalchk').click(function() {
//			if (jQuery.type($("#tableline tbody tr").eq($('.tr_goalchk').index(this)).find("td").eq(1).find('input[type="hidden"]').val()) == 'undefined') {
//				alert("같은 실에 해당하는 팀만 선택가능하합니다.");
//				$(this).attr("checked", false);
//				return;
//			}
			
			if(this.checked) {
//				index = $('.tr_goalchk').index(this);

				orgArr.push($('.tr_goalchk').val());
				indexArr.push($('.tr_goalchk').index(this));
				yearArr.push($('#year').val());
				
//				console.log(indexArr);
//				console.log(yearArr);
//				console.log(orgArr);
				$('#goal_button_modify').attr("disabled", false);
				$('#goal_button').attr("disabled", false);
				$('#goal_button_cancel').attr("disabled", false);
				
			}
			else if (!this.checked){
//				alert($(".tr_goalchk:checked").length);
				if ($(".tr_goalchk:checked").length == 0) {
					$('#goal_button_modify').attr("disabled", true);
					$('#goal_button').attr("disabled", true);
					$('#goal_button_cancel').attr("disabled", true);
				}else if ($(".tr_goalchk:checked").length != 0){
					$(".tr_goalchk:checked").each(function (idx, row) {
						var tmp_rec = $(row).parents("tr");
						alert(tmp_rec[0].rowIndex);
//						indexArr.splice(tmp_rec[0].rowIndex, indexArr.length-1, tmp_rec[0].rowIndex);
//						orgArr.splice(tmp_rec[0].rowIndex, orgArr.length-1, $(this).val());
//						yearArr.splice(tmp_rec[0].rowIndex, yearArr.length-1, $('#year').val());
						
						indexArr.splice(idx-1, indexArr.length, tmp_rec[0].rowIndex);
						orgArr.splice(idx-1, orgArr.length, $(this).val());
						yearArr.splice(idx-1, yearArr.length, $('#year').val());
						
//						alert(row);
					});
					indexArr.shift();
					orgArr.shift();
					yearArr.shift();
					
					console.log(indexArr);
					console.log(yearArr);
					console.log(orgArr);
				}
			}
		});
}
function SaveTeamGoal(ctx, indexArr, yearArr, orgArr) {

}
*/

/**
 * td 안에 input box 나타내기
 * @param rowIndex
 */
function setTdInput(rowIndex) {
    var colCount = $('#tableline2 tbody tr').eq(rowIndex).find('td').length;
		for(var i=1; i<= colCount; i++) {
			
			$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find(".amt_class").attr("hidden", true);
			var aa = $('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find(".amt_class")val();
			alert(aa);
			
			$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find("input.inp_class").attr("type","text").val(aa);
			$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i).prev().find("input.inp_class").css('width', '100px');
			if (i== colCount) {
				$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i-1).find("#dec_amt").attr("hidden", true);
				
				$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i-1).find("input.inp_class").attr("type", "text");
				$('#tableline2 tbody tr').eq(rowIndex).find('td').eq(i-1).find("input.inp_class").css("width", "100px");
			}
		}
}