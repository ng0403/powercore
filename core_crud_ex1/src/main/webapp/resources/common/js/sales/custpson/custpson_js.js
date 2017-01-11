// 서브메뉴 유지
$("#navisub3").show();
$("#navicustpson").css("font-weight", "bold");

$(function() {
	var buttonStat = "";
	var ctx = $('#ctx').val();
	//custCalendar(ctx);

});

$(document).ready(function() {
	var ctx = $("#ctx").val();
	// 개인고객 리스트 체크박스 선택, 해제
	$("#allChk").click(function() {
		if ($("#allChk").prop("checked")) {
			$("input[type=checkbox]").prop("checked", true);
		} else {
			$("input[type=checkbox]").prop("checked", false);
		}
	});

	$('#zipcode').click(function() {
		window.open(ctx+'/ccAddrListPop.do','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});

	// 직원검색 팝업
	$('#iuserSearch').click(function() {
		window.open(ctx+'/iuserSearchPop.do','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});

	// 개인고객 상세정보 가져오기
	$("#tab1").click(function() {
		var cust_id = $("#nowCust_id").val();
		if (cust_id != '') custInfo(cust_id);
	});
	
	// 영업기회 리스트 가져오기
	$("#tab2").click(function() {
		var cust_id = $("#nowCust_id").val();
		if (cust_id == '') {
			var tbody = $('#opptTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 175px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			opptList(cust_id);
		}
	});
					
	// 영업활동 리스트 가져오기
	$("#tab3").click(function() {
		var cust_id = $("#nowCust_id").val();
		if (cust_id == '') {
			var tbody = $('#actTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			actList(cust_id);
		}
	});

	// 견적 리스트 가져오기
	$("#tab4").click(function() {
		var cust_id = $("#nowCust_id").val();
		if (cust_id == '') {
			var tbody = $('#estTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 175px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			estList(cust_id);
		}
	});

	// 계약 리스트 가져오기
	$("#tab5").click(function() {
		var cust_id = $("#nowCust_id").val();
		if (cust_id == '') {
			var tbody = $('#contTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 175px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			contList(cust_id);
		}
	});
});

function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

function inputEmpNm(iuser_id_nm, iuser_nm){
	$('#iuser_id_nm').val(iuser_id_nm);
	$('#iuser_nm').val(iuser_nm);
	$('#stat').focus();
}

//검색 엔터키 기능
function schCustPson(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		if ($("#s_cust_nm").val() == '' && $("#s_email").val() == '' && $("#s_cell_ph").val() == '' && $("#s_iuser_nm").val() == '') {
			alert("검색어를 입력하세요.")
			$("#s_cust_nm").focus();
		} else {
			schPaging(1);
		}
	}
	event.stopPropagation();
}

// 전체 체크 해제
function chkCancel() {
	$("#allChk").prop("checked", false);
}

// 달력띄우기
/*function custCalendar(ctx) {
	$("#birth").datepicker({
		changeMonth : true, // 콤보 박스에 월 보이기
		changeYear : true, // 콤보 박스에 년도 보이기
		showOn : 'button', // 우측에 달력 icon 을 보인다.
		buttonImage : ctx + '/resources/image/calendar.jpg', // 우측 달력 icon 의
		buttonImageOnly : true
	// 달력에 icon 사용하기
	});
	// 마우스를 손가락 모양으로 하고 여백주기
	$('img.ui-datepicker-trigger').css({
		'cursor' : 'pointer',
		'margin-left' : '5px',
		'margin-bottom' : '-6px'
	});
	// 날짜 형식을 0000-00-00으로 지정하기
	$.datepicker.setDefaults({
		dateFormat : 'yy-mm-dd'
	});
}*/

function cpTabFunc(cust_id, cust_nm) {
	$(document).ready(function() {
		// 현재 cust_id 저장
		$("#nowCust_id").val(cust_id);
		$("#nowCust_nm").val(cust_nm);
		// 상세정보 불러오기
		if ($("#tab1").is(":checked")) {
			if (cust_id != '') custInfo(cust_id);
		} else if ($("#tab2").is(":checked")) { // 영업기회 불러오기
			if (cust_id != '') opptList(cust_id);
		} else if ($("#tab3").is(":checked")) { // 영업활동 불러오기
			if (cust_id != '') actList(cust_id);
		} else if ($("#tab4").is(":checked")) { // 견젹 불러오기
			if (cust_id != '') estList(cust_id);
		} else if ($("#tab5").is(":checked")) { // 계약 불러오기
			if (cust_id != '') contList(cust_id);
		}
	});
}

// 개인고객 상세보기 ajax
function custInfo(cust_id) {
	$("#inputForm input[type='text']").attr("readonly", true);
	$("#cpMdfy").attr("disabled", false);
	$('#cust_id').val(cust_id);
	$('#nowCust_id').val(cust_id);
	var ctx = $('#ctx').val();
	$.ajax({
		url : ctx + '/custpsonDetail',
		data : "cust_id=" + cust_id,// 보낼 데이터값
		dataType : 'json',
		type : "POST",
		success : function(data) {
			$('#cust_nm').val(data.cust_nm);
			$('#hcust_nm').val(data.cust_nm);
			
			$('#hgen').val(data.gen);
			if (data.gen == "M") {
				$('#man').prop("checked", true);
				$('#female').prop("checked", false);
				$('#man').attr("disabled", true);
				$('#female').attr("disabled", true);
			} else if (data.gen == "F") {
				$('#man').prop("checked", false);
				$('#female').prop("checked", true);
				$('#man').attr("disabled", true);
				$('#female').attr("disabled", true);
			}
			$('#birth').val(data.birth.substring(0, 10));
			$('#hbirth').val(data.birth.substring(0, 10));
			$('#b_year').val(data.birth.substring(0, 4));
			$('#b_month_cd').children().eq(data.birth.substring(5, 7)).attr("selected", "selected");
			$('#b_month_cd').attr("disabled", true);
			$('#b_day').val(data.birth.substring(8, 10));
			$('#email1').val(data.email1);
			$('#hemail1').val(data.email1);
			$('#email2').val(data.email2);
			$('#hemail2').val(data.email2);
			$('#cell_ph1').val(data.cell_ph1);
			$('#cell_ph2').val(data.cell_ph2);
			$('#cell_ph3').val(data.cell_ph3);
			$('#hcell_ph1').val(data.cell_ph1);
			$('#hcell_ph2').val(data.cell_ph2);
			$('#hcell_ph3').val(data.cell_ph3);
			$('#ph1').val(data.ph1);
			$('#ph2').val(data.ph2);
			$('#ph3').val(data.ph3);
			$('#hph1').val(data.ph1);
			$('#hph2').val(data.ph2);
			$('#hph3').val(data.ph3);
			
			$('#hcust_info_yn').val(data.cust_info_yn);
			$('#hmkt_app_yn').val(data.mkt_app_yn);
			if (data.cust_info_yn == "Y" && data.mkt_app_yn == "N") {
				$('#cust_info_yn').prop("checked", true);
				$('#mkt_app_yn').prop("checked", false);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			} else if (data.cust_info_yn == "N" && data.mkt_app_yn == "Y") {
				$('#cust_info_yn').prop("checked", false);
				$('#mkt_app_yn').prop("checked", true);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			} else if (data.cust_info_yn == "Y" 	&& data.mkt_app_yn == "Y") {
				$('#cust_info_yn').prop("checked", true);
				$('#mkt_app_yn').prop("checked", true);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			} else {
				$('#cust_info_yn').prop("checked", false);
				$('#mkt_app_yn').prop("checked", false);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			}
			$('#cust_zip_num').val(data.cust_zip_num);
			$('#cust_zip_cd1').val(data.cust_zip_cd.substring(0, 3));
			$('#cust_zip_cd2').val(data.cust_zip_cd.substring(3, 6));
			$('#addr_dtl_cont').val(data.addr_dtl_cont);
			$('#cust_addr').val(data.cust_addr);
			$('#hcust_zip_num').val(data.cust_zip_num);
			$('#hcust_zip_cd1').val(data.cust_zip_cd.substring(0, 3));
			$('#hcust_zip_cd2').val(data.cust_zip_cd.substring(3, 6));
			$('#haddr_dtl_cont').val(data.addr_dtl_cont);
			$('#hcust_addr').val(data.cust_addr);
			
			$('#iuser_id_nm').val(data.iuser_id_nm);
			$('#iuser_nm').val(data.iuser_nm);
			$('#hiuser_id_nm').val(data.iuser_id_nm);
			$('#hiuser_nm').val(data.iuser_nm);
			
			$('#hstat_cd').val(data.stat_cd);
			$('#stat_cd').children().eq(data.stat_cd).attr("selected", "selected");
			$('#stat_cd').attr("disabled", true);
			// 버튼 비활성화
			$('#zipcode').attr("disabled", true);
			$('#iuserSearch').attr("disabled", true);
		},
		error : function(e) {
			alert("오류발생");
		}
	});
};

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

// 영업기회 ajax
function opptList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#opptTableTbody');
		var tbodyContent = "";
		
		$.ajax({
			type : 'POST',
			url : ctx + '/opptList',
			data : "cust_id=" + cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 175px;'><td colspan='9'>등록된 영업기회가 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 영업기회 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						var expt_sales_amt = comma(data[i].expt_sales_amt);
						tbodyContent = "<tr style='height: 37px;'>" +
						"<td style='width:3%;'><input type='checkbox' value='"+data[i].sales_oppt_id+"' id='chk_oppt_id' onclick=\"opptChkCancel();\"></td>" +
						"<td style='width:30%; text-align: left; padding-left: 8px;'><a href='#' onclick=\"cpOpptDetail('"+data[i].sales_oppt_id+"');\" style='color:blue;' class='pcnClick'>"+data[i].sales_oppt_nm+"</a></td>" +
						"<td style='width:8%;'>"+data[i].sales_lev_cd_nm+"</td>" +
						"<td style='width:12%; text-align:right; padding-right:8px;'>"+expt_sales_amt+"</td>" +
						"<td style='width:12%;'>"+data[i].expt_fin_d+"</td>" +
						"<td style='width:7%;'>"+data[i].psblty_rate+"</td>" +
						"<td style='width:7%;'>"+data[i].sales_oppt_stat_cd_nm+"</td>" +
						"<td style='width:8%;'>"+data[i].fst_reg_id_nm+"</td>" +
						"<td style='width:15%;'>"+data[i].fst_reg_dt+"</td>" +
						"</tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr style='height: 30px;'><td style='width:3%;'></td><td style='width:30%;'></td>" +
							"<td style='width:8%;'></td><td style='width:12%;'></td><td style='width:12%;'></td>" +
							"<td style='width:7%;'></td><td style='width:7%;'></td><td style='width:8%;'></td><td style='width:15%;'></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}
//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}

function dateFormatTime(timestamp){
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal =   year + "-" + (month < 10 ? "0" + month : month) + "-" 
	                        + (day < 10 ? "0" + day : day) + " " 
	                        + (hour < 10 ? "0" + hour : hour) + ":"
	                        + (min < 10 ? "0" + min : min);

	return retVal
}

// 영업활동 ajax
function actList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#actTableTbody');
		var tbodyContent = "";
		$.ajax({
			type : 'POST',
			url : ctx + '/actList',
			data : "cust_id=" + cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='10'>등록된 영업활동이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 영업활동 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						/*var strt_d = dateFormat(Number(data[i].strt_d));
						var end_d = dateFormat(Number(data[i].end_d));
						var fst_reg_dt = dateFormatTime(Number(data[i].fst_reg_dt));*/
						var strt_t = data[i].strt_t;
						var end_t = data[i].end_t;
						
						if(strt_t == null){
							strt_t = '';
						}
						if(end_t == null){
							end_t = '';
						}
						tbodyContent = "<tr>"
							+ "<td rowspan='2'><input type='checkbox' value='"+data[i].sales_actvy_id+"' id='chk_act_id' onclick=\"actChkCancel();\"></td>"
							+ "<td rowspan='2' style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"cpActDetail('"+data[i].sales_actvy_id+"');\" style='color:blue;' class='pcnClick'>"+data[i].sales_actvy_nm+"</a></td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_div_nm+"</td>"
							+ "<td rowspan='2' style='text-align: left; padding-left: 8px;'>"+data[i].sales_oppt_nm+"</td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_type_nm+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+data[i].strt_d+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+strt_t+"</td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_stat_nm+"</td>"
							+ "<td rowspan='2'>"+data[i].fst_reg_id_nm+"</td>"
							+ "<td rowspan='2'>"+data[i].fst_reg_dt+"</td>"
							+ "</tr><tr>"
							+ "<td style='height:12px; padding:5px;'>"+data[i].end_d+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+end_t+"</td></tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr style='height: 25px;'>"
								+ "<td rowspan='2'></td>"
								+ "<td rowspan='2'></td><td rowspan='2'></td>"
								+ "<td rowspan='2'></td><td rowspan='2'></td>"
								+ "<td style=' height:12px; padding:5px;'></td><td style='height:12px; padding:5px;'></td><td rowspan='2'></td>"
								+ "<td rowspan='2'></td><td rowspan='2'></td>"
								+ "</tr><tr style='height: 25px;'><td></td><td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 견적 ajax
function estList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#estTableTbody');
		var tbodyContent = "";
		$.ajax({
			type : 'POST',
			url : ctx + '/estList',
			data : "cust_id=" + cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 175px;'><td colspan='8'>등록된 견적이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 견적 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						var sales_price = comma(data[i].sales_price);
						tbodyContent = "<tr style='height: 37px;'>"
							+ "<th><input type='checkbox' value='" + data[i].estim_id + "' id='chk_est_id' onclick=\"estChkCancel();\"></th>"
							+ "<td style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"cpEstDetail('"+data[i].estim_id+"');\" style='color:blue;' class='pcnClick'>" + data[i].estim_nm + "</td>"
							+ "<td>" + data[i].estim_lev_cd_nm + "</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>" + data[i].estim_qty + "</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>" + sales_price + "</td>"
							+ "<td>" + data[i].estim_valid_d + "</td>"
							+ "<td>" + data[i].fst_reg_id_nm + "</td>"
							+ "<td>" + data[i].fst_reg_dt + "</td>" + "</tr>";
						tbody.append(tbodyContent);
					}
					if (data.length < 5) {
						for (var j = 0; j < 5 - data.length; j++) {
							tbodyContent = "<tr>"
								+ "<th></th>"
								+ "<td></td><td></td><td></td>"
								+ "<td></td><td></td><td></td><td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 계약 ajax
function contList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#contTableTbody');
		var tbodyContent = "";
		$.ajax({
			type : 'POST',
			url : ctx + '/contList',
			data : "cust_id=" + cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 175px;'><td colspan='8'>등록된 계약이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 계약 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						var contr_amt = comma(data[i].contr_amt);
						tbodyContent = "<tr style='height: 37px;'>"
							+ "<th><input type='checkbox' value='"+data[i].contr_id+"' id='chk_cont_id' onclick=\"contChkCancel();\"></th>"
							+ "<td style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"cpContDetail('"+data[i].contr_id+"');\" style='color:blue;' class='pcnClick'>"+data[i].contr_nm+"</a></td>"
							+ "<td>"+data[i].contr_num+"</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>"+data[i].contr_qty+"</td>"
							+ "<td style='text-align:right; padding-right:8px;'>"+contr_amt+"</td>"
							+ "<td>"+data[i].contr_d+"</td>"
							+ "<td>"+data[i].fst_reg_id_nm+"</td>"
							+ "<td>"+data[i].fst_reg_dt+"</td>"
							+ "</tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr>"
								+ "<th></th>"
								+ "<td></td><td></td><td></td>"
								+ "<td></td><td></td><td></td><td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}



//페이징
function paging(cpPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var allData = {"cpPageNum": cpPageNum};
		var tbody = $('#custTbody');
		var tbodyContent = "";
		
		$.ajax({
			url : ctx+'/custpsonAjax',
			type : 'POST',
			data : allData,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				
				for (var i = 0; i < data.cpvo.length; i++) {
					tbodyContent = "<tr>"
						+"<th><input type='checkbox' id='cust_id_chk' value='"+data.cpvo[i].cust_id+"' onclick=\"chkCancel();\"></th>"
						+"<td style='text-align: left; padding-left: 8px;'>"
						+"<a href='#' onclick=\"cpTabFunc('"+data.cpvo[i].cust_id+"');\" style='color: blue;' class='pcnClick'>"+data.cpvo[i].cust_nm+"</a></td>"
						+"	<td>"+data.cpvo[i].birth+"</td>" 
						+"<td style='text-align: left; padding-left: 8px;'>"+data.cpvo[i].email1+"@"+data.cpvo[i].email2+"</td>"
						+"<td>"+data.cpvo[i].cell_ph1+"-"+data.cpvo[i].cell_ph2+"-"+data.cpvo[i].cell_ph3+"</td>"
						+"<td>"+data.cpvo[i].ph1+"-"+data.cpvo[i].ph2+"-"+data.cpvo[i].ph3+"</td>"
						+"<td>"+data.cpvo[i].cust_info_yn+"</td>"
						+"<td>"+data.cpvo[i].mkt_app_yn+"</td>"
						+"<td>"+data.cpvo[i].iuser_nm+"</td>"
						+"<td>"+data.cpvo[i].fst_reg_dt+"</td></tr>";
					tbody.append(tbodyContent);
					$("#ccListCheck").prop("checked", false);
				}
				
				if(data.cpvo.length < 5){
					for(var j = 0; j < 5-data.cpvo.length; j++){
						tbodyContent ="<tr style='height:30px;'>"
							+"<th></th>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td></tr>";
						tbody.append(tbodyContent);
					}
				}
				var pageContent = "";
				// 페이징 다시그리기
				$("#pagingDiv").children().remove();
				
				if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/><input type='hidden' id='cpPageNum' value='"+data.cpPageNum+"'/>"
					+"<a> ◀ </a><input type='text' id='cpPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
					+"<a> / "+data.page.endPageNum+"</a><a>▶ </a>";
				} else if(data.cpPageNum == data.page.startPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/><input type='hidden' id='cpPageNum' value='"+data.cpPageNum+"'/>"
					+"<a> ◀ </a><input type='text' id='cpPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
					+"<a href='#' style='text-decoration: none;' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' style='text-decoration: none;' onclick=paging("+(data.cpPageNum+1)+") id='pNum'> ▶ </a>";
				} else if(data.cpPageNum == data.page.endPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/><input type='hidden' id='cpPageNum' value='"+data.cpPageNum+"'/>"
					+"<a href='#' style='text-decoration: none;' onclick=paging("+(data.cpPageNum-1)+") id='pNum'> ◀ </a>"
					+"<input type='text' id='cpPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
					+"<a href='#' style='text-decoration: none;' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a> ▶ </a>";
				} else {
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/><input type='hidden' id='cpPageNum' value='"+data.cpPageNum+"'/>"
					+"<a href='#' style='text-decoration: none;' onclick=paging("+(data.cpPageNum-1)+") id='pNum'> ◀ </a>"
					+"<input type='text' id='cpPageInput' value='"+data.cpPageNum+"' onkeypress=\"pageInput(event);\"/>"
					+"<a href='#' style='text-decoration: none;' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' style='text-decoration: none;' onclick=paging("+(data.cpPageNum+1)+") id='pNum'> ▶ </a>";
				}
				$("#pagingDiv").append(pageContent);
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 조회 페이징
function schPaging(cpPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		
		var s_cust_nm = $("#s_cust_nm").val();
		var s_email = $("#s_email").val();
		var s_cell_ph = $("#s_cell_ph").val();
		var s_iuser_nm = $("#s_iuser_nm").val();
		if(s_cust_nm == '' && s_email == '' && s_cell_ph == '' && s_iuser_nm == ''){
			alert("검색어를 입력하세요");
		} else {
			var allData = {"cpPageNum": cpPageNum, "s_cust_nm": s_cust_nm, "s_email":s_email, "s_cell_ph":s_cell_ph,"s_iuser_nm":s_iuser_nm};
			var tbody = $('#custTbody');
			var tbodyContent = "";
			
			$.ajax({
				url : ctx+'/custpsonAjax',
				type : 'POST',
				data : allData,
				dataType : "json",
				success : function(data) {
					if(data.cpvoSize == 0){
						alert("검색결과가 없습니다.");
						location.href = ctx+'/custpson';
					}else{
						tbody.children().remove();
						// 검색정보
						$("#s_cust_nm").val(data.s_cust_nm);
						$("#s_email").val(data.s_email);
						$("#s_cell_ph").val(data.s_cell_ph);
						$("#s_iuser_nm").val(data.s_iuser_nm);
						
						for (var i = 0; i < data.cpvo.length; i++) {
							tbodyContent = "<tr>"
								+"<th><input type='checkbox' id='cust_id_chk' value='"+data.cpvo[i].cust_id+"' onclick=\"chkCancel();\"></th>"
								+"<td style='text-align: left; padding-left: 8px;'>"
								+"<a href='#' onclick=\"cpTabFunc('"+data.cpvo[i].cust_id+"');\" style='color: blue;' class='pcnClick'>"+data.cpvo[i].cust_nm+"</a></td>"
								+"	<td>"+data.cpvo[i].birth+"</td>" 
								+"<td style='text-align: left; padding-left: 8px;'>"+data.cpvo[i].email1+"@"+data.cpvo[i].email2+"</td>"
								+"<td>"+data.cpvo[i].cell_ph1+"-"+data.cpvo[i].cell_ph2+"-"+data.cpvo[i].cell_ph3+"</td>"
								+"<td>"+data.cpvo[i].ph1+"-"+data.cpvo[i].ph2+"-"+data.cpvo[i].ph3+"</td>"
								+"<td>"+data.cpvo[i].cust_info_yn+"</td>"
								+"<td>"+data.cpvo[i].mkt_app_yn+"</td>"
								+"<td>"+data.cpvo[i].iuser_nm+"</td>"
								+"<td>"+data.cpvo[i].fst_reg_dt+"</td></tr>";
							tbody.append(tbodyContent);
							$("#ccListCheck").prop("checked", false);
						}
						
						if(data.cpvo.length < 5){
							for(var j = 0; j < 5-data.cpvo.length; j++){
								tbodyContent ="<tr style='height:30px;'>"
									+"<th></th>"
									+"<td></td><td></td><td></td><td></td>"
									+"<td></td><td></td><td></td><td></td>"
									+"<td></td></tr>";
								tbody.append(tbodyContent);
							}
						}
						var pageContent = "";
						// 페이징 다시그리기
						$("#pagingDiv").children().remove();
						
						if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a> ◀ </a><input type='text' id='cpPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
							+"<a> / "+data.page.endPageNum+"</a><a>▶ </a>";
						} else if(data.cpPageNum == data.page.startPageNum){
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a> ◀ </a><input type='text' id='cpPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
							+"<a href='#' style='text-decoration: none;' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
							+"<a href='#' style='text-decoration: none;' onclick=schPaging("+(data.cpPageNum+1)+") id='pNum'> ▶ </a>";
						} else if(data.cpPageNum == data.page.endPageNum){
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a href='#' style='text-decoration: none;' onclick=schPaging("+(data.cpPageNum-1)+") id='pNum'> ◀ </a>"
							+"<input type='text' id='cpPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
							+"<a> / "+data.page.endPageNum+"</a>"
							+"<a> ▶ </a>";
						} else {
							pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
							+"<a href='#' style='text-decoration: none;' onclick=schPaging("+(data.cpPageNum-1)+") id='pNum'> ◀ </a>"
							+"<input type='text' id='cpPageInput' value='"+data.cpPageNum+"' onkeypress=\"pageInput(event);\"/>"
							+"<a href='#' style='text-decoration: none;' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
							+"<a href='#' style='text-decoration: none;' onclick=schPaging("+(data.cpPageNum+1)+") id='pNum'> ▶ </a>";
						}
						$("#pagingDiv").append(pageContent);
					}
				},
				error : function() {
					alert("전송중 오류가 발생했습니다.");
				}
			});
		}
	});
}