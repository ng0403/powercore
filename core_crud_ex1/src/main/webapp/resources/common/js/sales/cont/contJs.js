// jsp파일에서 설정한 input의 아이디의 value값을 가져오는 역할.
$(function() {
	var ctx = $('#ctx').val();
	startCalendar(ctx);
	EndCalendar(ctx);
});

// 버튼 클릭 시 input form의 readonly 상태를 변경하는 함수.
$(document).ready(function() {
	$('#selectbox').change(function() {
		var selectVal = $(this).find("option:selected").val();
		$("#contr_amt1").val(selectVal);
		var selectText = $(this).find("option:selected").text();
		$("#contr_amt2").val(selectText);

	});

	// 계약 리스트 체크박스 선택, 해제
	$("#contListCheck").click(function() {
		if ($("#contListCheck").prop("checked")) {
			$("input[type=checkbox]").prop("checked", true);
		} else {
			$("input[type=checkbox]").prop("checked", false);
		}
	});
	
	// 홈화면에서 넘어왔을때 편집버튼 활성화 처리
	var homechk = $("#homechk").val();
	if(homechk == 'true'){
		$("#contMdfyBtn").attr("disabled", false);
		$("#contBaseBtnDiv").css("display", "block");
		$("#contAddBtnDiv").css("display", "none");
		$("#contMdfyBtnDiv").css("display", "none");
	}
});

// 검색 input에서 엔터로 검색 조회 가능하게 하는 함수
function pageInput(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		event.preventDefault();
		var ccPageNum = $("#contPageInput").val();
		var endPageNum = $("#endPageNum").val();
		if (parseInt(ccPageNum) > parseInt(endPageNum)
				|| parseInt(ccPageNum) < 1) {
			alert("페이지 정보를 다시 입력하세요.")
			$("#contPageInput").val("1");
		} else {
			contPaging(ccPageNum);
		}
	}
}

// 숫자만 입력
function onlyNumber(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105)
			|| keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39
			|| keyID == 188) {
		// alert("keyID : " + keyID);
		// event.target.value = comma(event.target.value);
		return;
	} else {
		return false;
	}
}
// 숫자 아닌값 replace
function removeChar(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) {
		return;
	} else {
		event.target.value = event.target.value.replace(/[^0-9]/g, "");
	}
}

// 검색 input에서 엔터로 검색 조회 가능하게 하는 함수
function contrSearchInput(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		schContPaging(1);
	}
	event.stopPropagation();
}

// 전체 체크 해제
function contChkCancel() {
	$(document).ready(function() {
		$("#contListCheck").prop("checked", false);
	});
}

// 달력띄우기 계약 시작
function startCalendar(ctx) {
	$("#contr_d_listS").datepicker({
		changeMonth : true, // 콤보 박스에 월 보이기
		changeYear : true, // 콤보 박스에 년도 보이기
		showOn : 'button', // 우측에 달력 icon 을 보인다.
		buttonImage : ctx + '/resources/image/calendar.jpg', // 우측 달력 icon 의
																// 이미지 경로
		buttonImageOnly : true
	// 달력에 icon 사용하기
	});

	$('img.ui-datepicker-trigger').css({
		'cursor' : 'pointer',
		'margin-left' : '5px',
		'margin-bottom' : '-6px'
	});
	$.datepicker.setDefaults({
		dateFormat : 'yy-mm-dd'
	});

	$("#contr_d_detail").datepicker({
		changeMonth : true, // 콤보 박스에 월 보이기
		changeYear : true, // 콤보 박스에 년도 보이기
		showOn : 'button', // 우측에 달력 icon 을 보인다.
		buttonImage : ctx + '/resources/image/calendar.jpg', // 우측 달력 icon 의
																// 이미지 경로
		buttonImageOnly : true
	// 달력에 icon 사용하기
	});
	$('img.ui-datepicker-trigger').css({
		'cursor' : 'pointer',
		'margin-left' : '5px',
		'margin-bottom' : '-6px'
	});
	$.datepicker.setDefaults({
		dateFormat : 'yy-mm-dd'
	});
}
// 달력띄우기 계약 종료
function EndCalendar(ctx) {
	$("#contr_d_listE").datepicker({
		changeMonth : true, // 콤보 박스에 월 보이기
		changeYear : true, // 콤보 박스에 년도 보이기
		showOn : 'button', // 우측에 달력 icon 을 보인다.
		buttonImage : ctx + '/resources/image/calendar.jpg', // 우측 달력 icon 의
		// 이미지 경로
		buttonImageOnly : true
		// 달력에 icon 사용하기
	});
	
	$('img.ui-datepicker-trigger').css({
		'cursor' : 'pointer',
		'margin-left' : '5px',
		'margin-bottom' : '-6px'
	});
	$.datepicker.setDefaults({
		dateFormat : 'yy-mm-dd'
	});
	
	$("#contr_d_detail").datepicker({
		changeMonth : true, // 콤보 박스에 월 보이기
		changeYear : true, // 콤보 박스에 년도 보이기
		showOn : 'button', // 우측에 달력 icon 을 보인다.
		buttonImage : ctx + '/resources/image/calendar.jpg', // 우측 달력 icon 의
		// 이미지 경로
		buttonImageOnly : true
		// 달력에 icon 사용하기
	});
	$('img.ui-datepicker-trigger').css({
		'cursor' : 'pointer',
		'margin-left' : '5px',
		'margin-bottom' : '-6px'
	});
	$.datepicker.setDefaults({
		dateFormat : 'yy-mm-dd'
	});
}

function contNameSend(contr_id) {
	$(document).ready(
			function() {
				$("#contMdfyBtn").attr("disabled", false);
				$("#contBaseBtnDiv").css("display", "block");
				$("#contAddBtnDiv").css("display", "none");
				$("#contMdfyBtnDiv").css("display", "none");
				var ctx = $("#ctx").val();

				$
						.ajax({
							url : ctx + '/contDetail', // 보낼URL= 컨트롤러에 있는 주소(내가
														// 쓰고싶은 기능)
							dataType : 'json', // 응답 받을 데이터 형식
							type : 'POST', // 서버 요청 방식
							data : "contr_id=" + contr_id,// href 할때 주소 뒤에 ?
															// 쓰는것과 같은 효과
							success : function(data) {
								$("#contr_nm").val(data.contr_nm);
								$("#cust_id").val(data.cust_id);
								$("#contr_id").val(data.contr_id);
								$("#cust_nm").val(data.cust_nm);
								$("#estim_lev_cd").val(data.estim_lev_cd);
								$("#sales_oppt_nm").val(data.sales_oppt_nm);
								$("#sales_oppt_id").val(data.sales_oppt_id);
								$("#estim_id").val(data.estim_id);
								$("#contr_qty").val(data.contr_qty);
								$("#contr_amt").val(data.contr_amt);
								$("#contr_d_detail").val(data.contr_d.substring(0, 10));
								$("#memo").val(data.memo);

								$("#hcontr_nm").val(data.contr_nm);
								$("#hcust_id").val(data.cust_id);
								$("#hcontr_id").val(data.contr_id);
								$("#hcust_nm").val(data.cust_nm);
								$("#hestim_lev_cd").val(data.estim_lev_cd);
								$("#hsales_oppt_nm").val(data.sales_oppt_nm);
								$("#hsales_oppt_id").val(data.sales_oppt_id);
								$("#hestim_id").val(data.estim_id);
								$("#hcontr_qty").val(data.contr_qty);
								$("#hcontr_amt").val(data.contr_amt);
								$("#hcontr_d_detail").val(data.contr_d.substring(0, 10));
								$("#hmemo").val(data.memo);

								$("#contTable input[type=text]").css("background-color", "#EAEAEA");
								$("#contTable textarea").css("background-color", "#EAEAEA");
								$('#contr_nm').val($('#hcontr_nm').val()).attr('readonly', true);
								$('#cust_nm').val($('#hcust_nm').val()).attr('readonly', true);
								$('#cust_id').val($('#hcust_id').val());
								$('#customer').attr('disabled', true);
								$('#sales_oppt_nm').val($('#hsales_oppt_nm').val()).attr('readonly', true);
								$('#sales_oppt_id').val($('#hsales_oppt_id').val());
								$('#estim_id').val($('#hestim_id').val());
								$('#act_oppt_nm').attr('disabled', true);
								$('#contr_qty').val($('#hcontr_qty').val()).attr('readonly', true);
								$('#contr_amt').val($('#hcontr_amt').val()).attr('readonly', true);
								$('#contr_d_detail').val($('#hcontr_d_detail').val()).attr('readonly', true);
								$('#memo').val($('#hmemo').val()).attr('readonly', true);
							},
							error : function() {
								alert("데이터 가져오기 실패");
							}
						});
			});
}

// 계약 삭제
function contListDel(ctx) {
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_cont_id']:checked").each(function(index, item) {// 체크박스
																				// 아이디
			chked_val[index] = item.value;
		});
		if (chked_val.length == 0) {
			alert("삭제할 항목을 선택해 주세요");
		} else {
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if (delChk) {
				$.ajax({
					url : ctx + '/contListDelete',
					type : 'POST',
					data : JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data) {
						alert(data.deleteResult);
						location.href = ctx + "/cont";
					},
					error : function(data) {
						alert(data.deleteResult);
						location.href = ctx + "/cont";
					}
				});
			} else {
				location.href = ctx + "/cont";
				return;
			}
		}
	});
}

// 에러메세지 출력하기
$().ready(function() {
	$.ajaxSetup({
		error : function(x, e) {
			if (x.status == 0) {
				alert('You are offline!!n Please Check Your Network.');
			} else if (x.status == 404) {
				alert('Requested URL not found.');
			} else if (x.status == 500) {
				alert('Internel Server Error.');
			} else if (e == 'parsererror') {
				alert('Error.nParsing JSON Request failed.');
			} else if (e == 'timeout') {
				alert('Request Time out.');
			} else {
				alert('Unknow Error.n' + x.responseText);
			}
		}
	});
});

// 계약입력
function insertCont(ctx) {
	$(document).ready(function() {
		$.ajax({
			url : ctx + '/contInsert', // 보낼 URL=컨트롤러에 있는 주소(내가 쓰고싶은 기능)
			dataType : 'json', // 응답 받을 데이터 형식
			type : 'POST', // 서버 요청 방식
			data : $("#contForm").serialize(),// .serialize()직렬화하여 데이터를 싹다 가져옴
			success : function(data) {
				alert(data.insertResult);
				location.href = ctx + "/cont";// 등록 후 다시 페이지 불러온다.
			},
			error : function(e) {
				// 에러내용확인
				checkErr();
				alert("데이터 입력 실패");
			}
		});
	});
}

// 계약정보 수정
function updateCont(ctx) {
	$(document).ready(function() {
		$.ajax({
			url : ctx + '/contUpdate', // 보낼 URL=컨트롤러에 있는 주소(내가 쓰고싶은 기능)
			dataType : 'text', // 응답 받을 데이터 형식
			type : 'POST', // 서버 요청 방식
			data : $("#contForm").serialize(),// .serialize()직렬화하여 데이터를 싹다 가져옴
			success : function(data) {
//				alert(data);
				alert("계약수정에 성공했습니다.")
				location.href = ctx + "/cont";// 등록 후 다시 페이지 불러온다.
			},
			error : function() {
				alert("데이터 수정 실패");
			}
		});
	});
}

function comma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

// 페이징
function contPaging(pageNum) {
	$(document)
			.ready(
					function() {
						var ctx = $("#ctx").val();
						var allData = {
							"pageNum" : pageNum
						};
						var tbody = $('#contListTbody');
						var tbodyContent = "";

						$
								.ajax({
									url : ctx + '/contPaging',
									type : 'POST',
									data : allData,
									dataType : "json",
									success : function(data) {
										tbody.children().remove();

										for (var i = 0; i < data.contList.length; i++) {
											var contr_amt = comma(data.contList[i].contr_amt);
											tbodyContent = "<tr id='tabletoptr'>"
													+ "<th><input type='checkbox' id='chk_cont_id' value='"
													+ data.contList[i].contr_id
													+ "' onclick='chkCancel();'></th>"
													+ "<td style='text-align: left; padding-left: 8px'>"
													+ "<a href='#' onclick=\"contNameSend('"
													+ data.contList[i].contr_id
													+ "');\" style='color: blue;' class='cntClick'>"
													+ data.contList[i].contr_nm
													+ "</a></td>"
													+ "<td>"
													+ data.contList[i].contr_num
													+ "</td>"
													+ "<td style='text-align: right; padding-right: 8px'>"
													+ data.contList[i].contr_qty
													+ "</td>"
													+ "<td style='text-align: right; padding-right: 8px'>"
													+ contr_amt
													+ "</td>"
													+ "<td>"
													+ data.contList[i].contr_d
													+ "</td>"
													+ "<td>"
													+ data.contList[i].org_nm
													+ "</td>"
													+ "<td>"
													+ data.contList[i].iuser_nm
													+ "</td>"
													+ "<td>"
													+ data.contList[i].fst_reg_dt
													+ "</td></tr>";
											tbody.append(tbodyContent);
											$("#ccListCheck").prop("checked",
													false);
										}

										if (data.contList.length < 5) {
											for (var j = 0; j < 5 - data.contList.length; j++) {
												tbodyContent = "<tr style='height:23px;'>"
														+ "<th></th>"
														+ "<td></td><td></td><td></td><td></td>"
														+ "<td></td><td></td><td></td><td></td></tr>";
												tbody.append(tbodyContent);
											}
										}
										var pageContent = "";
										// 페이징 다시그리기
										$("#pagingDiv").children().remove();

										if (data.page.startPageNum == 1
												&& data.page.endPageNum == 1) {
											pageContent = "<input type='hidden' id='endPageNum' value='"
													+ data.page.endPageNum
													+ "'/>"
													+ "<a> ◀ </a><input type='text' id='contPageInput' readonly='readonly' value='"
													+ data.page.startPageNum
													+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
													+ "<a> / "
													+ data.page.endPageNum
													+ "</a><a> ▶ </a>";
										} else if (data.pageNum == data.page.startPageNum) {
											pageContent = "<input type='hidden' id='endPageNum' value='"
													+ data.page.endPageNum
													+ "'/>"
													+ "<a> ◀ </a><input type='text' id='contPageInput' value='"
													+ data.page.startPageNum
													+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
													+ "<a href='#' onclick=contPaging("
													+ data.page.endPageNum
													+ ") id='pNum' style='text-decoration: none; color: blue;'> / "
													+ data.page.endPageNum
													+ "</a>"
													+ "<a href='#' onclick=contPaging("
													+ (data.pageNum + 1)
													+ ") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
										} else if (data.pageNum == data.page.endPageNum) {
											pageContent = "<input type='hidden' id='endPageNum' value='"
													+ data.page.endPageNum
													+ "'/>"
													+ "<a href='#' onclick=contPaging("
													+ (data.pageNum - 1)
													+ ") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
													+ "<input type='text' id='contPageInput' value='"
													+ data.page.endPageNum
													+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
													+ "<a> / "
													+ data.page.endPageNum
													+ "</a>" + "<a> ▶ </a>";
										} else {
											pageContent = "<input type='hidden' id='endPageNum' value='"
													+ data.page.endPageNum
													+ "'/>"
													+ "<a href='#' onclick=contPaging("
													+ (data.pageNum - 1)
													+ ") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
													+ "<input type='text' id='contPageInput' value='"
													+ data.ccPageNum
													+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
													+ "<a href='#' onclick=contPaging("
													+ data.page.endPageNum
													+ ") id='pNum' style='text-decoration: none;'> / "
													+ data.page.endPageNum
													+ "</a>"
													+ "<a href='#' onclick=contPaging("
													+ (data.pageNum + 1)
													+ ") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
										}
										$("#pagingDiv").append(pageContent);
									},
									error : function() {
										alert("전송중 오류가 발생했습니다.");
									}
								});
					});
}

// 검색 페이징
function schContPaging(pageNum) {
	$(document)
			.ready(
					function() {
						var ctx = $("#ctx").val();
						var sch_cont_nm = $("#sch_cont_nm").val();
						var sch_cont_num = $("#sch_cont_num").val();
						var sch_cont_amt = $("#sch_cont_amt").val();
						var sch_contr_dS = $("#contr_d_listS").val();
						var sch_contr_dE = $("#contr_d_listE").val();

						if (sch_cont_nm == '' && sch_cont_num == ''
								&& sch_cont_amt == 0 && sch_contr_dS == ''&& sch_contr_dE == '') {
							alert("검색어를 입력하세요.");
							return;
						} else {
							var allData = {
								"pageNum" : pageNum,
								"sch_cont_nm" : sch_cont_nm,
								"sch_cont_num" : sch_cont_num,
								"sch_cont_amt" : sch_cont_amt,
								"sch_contr_dS" : sch_contr_dS,
								"sch_contr_dE" : sch_contr_dE
							};
							var tbody = $('#contListTbody');
							var tbodyContent = "";

							$
									.ajax({
										url : ctx + '/contPaging',
										type : 'POST',
										data : allData,
										dataType : "json",
										success : function(data) {
											if (data.contList.length == 0) {
												alert("검색된 데이터가 없습니다.");
												location.href = ctx + "/cont";
											} else {
												tbody.children().remove();

												$("#sch_cont_nm").val(
														data.sch_cont_nm);
												$("#sch_cont_num").val(
														data.sch_cont_num);
												$("#sch_cont_amt").val(
														data.sch_cont_amt);
												$("#sch_contr_dS").val(
														data.sch_contr_dS);
												$("#sch_contr_dE").val(
														data.sch_contr_dE);

												for (var i = 0; i < data.contList.length; i++) {
													var contr_amt = comma(data.contList[i].contr_amt);
													tbodyContent = "<tr id='tabletoptr'>"
															+ "<th><input type='checkbox' id='chk_cont_id' value='"
															+ data.contList[i].contr_id
															+ "' onclick='chkCancel();'></th>"
															+ "<td style='text-align: left; padding-left: 8px'>"
															+ "<a href='#' onclick=\"contNameSend('"
															+ data.contList[i].contr_id
															+ "');\" style='color: blue;' class='cntClick'>"
															+ data.contList[i].contr_nm
															+ "</a></td>"
															+ "<td>"
															+ data.contList[i].contr_num
															+ "</td>"
															+ "<td style='text-align: right; padding-right: 8px'>"
															+ data.contList[i].contr_qty
															+ "</td>"
															+ "<td style='text-align: right; padding-right: 8px'>"
															+ contr_amt
															+ "</td>"
															+ "<td>"
															+ data.contList[i].contr_d
															+ "</td>"
															+ "<td>"
															+ data.contList[i].org_nm
															+ "</td>"
															+ "<td>"
															+ data.contList[i].iuser_nm
															+ "</td>"
															+ "<td>"
															+ data.contList[i].fst_reg_dt
															+ "</td></tr>";
													tbody.append(tbodyContent);
													$("#ccListCheck").prop(
															"checked", false);
												}

												if (data.contList.length < 5) {
													for (var j = 0; j < 5 - data.contList.length; j++) {
														tbodyContent = "<tr style='height:23px;'>"
																+ "<th></th>"
																+ "<td></td><td></td><td></td><td></td>"
																+ "<td></td><td></td><td></td><td></td></tr>";
														tbody
																.append(tbodyContent);
													}
												}
												var pageContent = "";
												// 페이징 다시그리기
												$("#pagingDiv").children()
														.remove();

												if (data.page.startPageNum == 1
														&& data.page.endPageNum == 1) {
													pageContent = "<input type='hidden' id='endPageNum' value='"
															+ data.page.endPageNum
															+ "'/>"
															+ "<a> ◀ </a><input type='text' id='contPageInput' readonly='readonly' value='"
															+ data.page.startPageNum
															+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
															+ "<a> / "
															+ data.page.endPageNum
															+ "</a><a> ▶ </a>";
												} else if (data.pageNum == data.page.startPageNum) {
													pageContent = "<input type='hidden' id='endPageNum' value='"
															+ data.page.endPageNum
															+ "'/>"
															+ "<a> ◀ </a><input type='text' id='contPageInput' value='"
															+ data.page.startPageNum
															+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
															+ "<a href='#' onclick=contPaging("
															+ data.page.endPageNum
															+ ") id='pNum' style='text-decoration: none;'> / "
															+ data.page.endPageNum
															+ "</a>"
															+ "<a href='#' onclick=contPaging("
															+ (data.pageNum + 1)
															+ ") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
												} else if (data.pageNum == data.page.endPageNum) {
													pageContent = "<input type='hidden' id='endPageNum' value='"
															+ data.page.endPageNum
															+ "'/>"
															+ "<a href='#' onclick=contPaging("
															+ (data.pageNum - 1)
															+ ") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
															+ "<input type='text' id='contPageInput' value='"
															+ data.page.endPageNum
															+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
															+ "<a> / "
															+ data.page.endPageNum
															+ "</a>"
															+ "<a> ▶ </a>";
												} else {
													pageContent = "<input type='hidden' id='endPageNum' value='"
															+ data.page.endPageNum
															+ "'/>"
															+ "<a href='#' onclick=contPaging("
															+ (data.pageNum - 1)
															+ ") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
															+ "<input type='text' id='contPageInput' value='"
															+ data.ccPageNum
															+ "' onkeypress=\"pageInput(event);\" class='cont_page_txt'/>"
															+ "<a href='#' onclick=contPaging("
															+ data.page.endPageNum
															+ ") id='pNum' style='text-decoration: none;'> / "
															+ data.page.endPageNum
															+ "</a>"
															+ "<a href='#' onclick=contPaging("
															+ (data.pageNum + 1)
															+ ") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
												}
												$("#pagingDiv").append(
														pageContent);
											}
										},
										error : function() {
											alert("전송중 오류가 발생했습니다.");
										}
									});
						}
					});
}

//에러체크
function checkErr() {
//	var frm = document.TestFrm;
//	var szKor = frm.szKor.value;
//	// 위에껄 풀어쓰면 이렇게된다 ''szKor = document.TestFrm.szKor.value'';
//	var L_szKor = (szKor.length);
//
//	var szEng = frm.szEng.value;
//	var L_szEng = (szEng.length);

	var szNum = $('#contr_qty').val();
	var L_szNum = (szNum.length);
	var contr_amt = $('#contr_amt').val();
	var L_contr_amt = (szNum.length);

	// 자바스크립트 정규식 숫자 / 길이 체크!
	if (szNum == "") {
		alert(" 숫자를 입력해주세요")
		$('#contr_qty').val("");
		$('#contr_qty').focus();
		return false;
	} else {
		var num_check = /^[0-9]*$/;
		if (num_check.test(szNum)) {
			if (L_szNum < 1 || L_szNum > 5) {
				alert("계약 수량은 최소 1개 최대99999개 입력할 수 있습니다.");
				$('#contr_qty').val("");
				$('#contr_qty').focus();
				return false;
			}
		} else {
			alert("숫자만 입력할 수 있습니다.");
			$('#contr_qty').val("");
			$('#contr_qty').focus();
		}
		
	}
	if (contr_amt == "") {
		alert(" 숫자를 입력해주세요")
		$('#contr_amt').val("");
		$('#contr_amt').focus();
		return false;
	} else {
		var num_check = /^[0-9]*$/;
		if (num_check.test(contr_amt)) {
			if (L_contr_amt < 1 || L_contr_amt > 12) {
				alert("계약금액입력한도를 초과하였습니다.");
				$('#contr_amt').val("");
				$('#contr_amt').focus();
				return false;
			}
		} else {
			alert("숫자만 입력할 수 있습니다.");
			$('#contr_amt').val("");
			$('#contr_amt').focus();
		}
		
	}
//	// 자바스크립트 정규식 한글 / 길이 체크!
//	if (szKor == "") {
//		alert("한글을 입력해주세요")
//		frm.szKor.value = "";
//		frm.szKor.focus();
//		return false;
//	} else {
//		var kor_check = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
//		if (kor_check.test(szKor)) {
//			alert("한글만 입력할 수 있습니다.");
//			frm.szKor.value = "";
//			frm.szKor.focus();
//			return false;
//		} else {
//			if (L_szKor < 2 || L_szKor > 6) {
//				alert("2~6글자만 입력할수 있습니다.");
//				frm.szKor.value = "";
//				frm.szKor.focus();
//				return false;
//			}
//		}
//	}
//
//	// 자바스크립트 정규식 영어 / 길이 체크!
//	if (szEng == "") {
//		alert(" 영어을 입력해주세요")
//		frm.szEng.value = "";
//		frm.szEng.focus();
//		return false;
//	} else {
//		var eng_check = /^[A-za-z]/g;
//		if (eng_check.test(szEng)) {
//			if (L_szEng < 2 || L_szEng > 6) {
//				alert("2~6글자만 입력할수 있습니다.");
//				frm.szEng.value = "";
//				frm.szEng.focus();
//				return false;
//			}
//
//		} else {
//			alert("영어만 입력할 수 있습니다.");
//			frm.szEng.value = "";
//			frm.szEng.focus();
//			return false;
//		}
//	}


}