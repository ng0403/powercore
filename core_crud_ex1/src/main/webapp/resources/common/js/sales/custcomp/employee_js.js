/**
 * 직원 검색 관련 js파일
 */
$(document).ready(function() {
	$("#emp_search").keypress(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				if ($("#emp_search").val() == '' || $("#emp_search").val() == null) {
					alert("이름을 다시 입력하세요.")
					$("#emp_search").val('');
					$("#emp_search").focus();
				} else {
					$("#schEmpTblTbody").children().remove();
					$("#empPaging").children().remove();
					$("#schEmpNum").children().remove();
					empSearch(1);
				}
			}
			event.stopPropagation();
	});
	
});

function empTrClick(iuser_id_nm, iuser_nm) {
	window.opener.inputEmpNm(iuser_id_nm, iuser_nm);
	self.close();
}

function inputEmpNm(iuser_id_nm, iuser_nm){
	$('#iuser_id_nm').val(iuser_id_nm);
	$('#iuser_nm').val(iuser_nm);
	$('#stat').focus();
}

function empSearch(empPageNum) {
	if ($("#emp_search").val() == '' || $("#emp_search").val() == null) {
		alert("이름을 다시 입력하세요.")
		$("#emp_search").val('');
		$("#emp_search").focus();
		return false;
	}
	var ctx = $("#ctx").val();
	var iuser_nm = $("#emp_search").val();
	var tbody = $("#schEmpTblTbody");
	var tbodyContent = "";
	var empPagingDiv = $("#empPaging");
	var divContent = "";
	tbody.children().remove();
	empPagingDiv.children().remove();
	$("#schEmpNum").children().remove();
		
	$(document).ready(function() {
		$.ajax({
			url : ctx+'/iuserSearch.do',
			data : "iuser_nm="+iuser_nm+"&empPageNum="+empPageNum,
			type : 'POST',
			dataType : "json",
			success : function(data){
				$("#searchEmp").css("display", "block");
				if(data.empList.length > 0){
					$("#schEmpNum").append("<span style='color: #FF0000;'>'"+iuser_nm+"'</span><span>의 </span>" +
													"<span>검색결과는 </span>" +
													"<span style='color: #FF0000;'>'"+data.page.totalCount+"건'</span>" +
													"<span> 입니다.</span>");
					tbodyContent = "<tr>"
					  + "<th>부서</th>"
					  + "<th>직급</th>"
					  + "<th>이름</th>"
					  + "<th>근무상태</th>"
					  + "<th>사내번호</th>"
					  + "</tr>";
					tbody.append(tbodyContent);
					for (var i = 0; i < data.empList.length; i++) {
						var comp_ph1 = data.empList[i].comp_ph1;
						var comp_ph2 = data.empList[i].comp_ph2;
						var comp_ph3 = data.empList[i].comp_ph3;
						var comp_ph = '';
						if(comp_ph1 != null){
							comp_ph = comp_ph1 +"-"+ comp_ph2 +"-"+ comp_ph3;
						}
						tbodyContent = "<tr class='schRstTblTr' onclick=\"empTrClick('"+data.empList[i].iuser_id_nm+"', '"+data.empList[i].iuser_nm+"');\">"
										  + "<td>" + data.empList[i].org_nm+"</td>"
										  + "<td>" + data.empList[i].emp_cd_nm+"</td>"
										  + "<td>" + data.empList[i].iuser_nm+"</td>"
										  + "<td>" + data.empList[i].work_stat_cd_nm+"</td>"
										  + "<td>"+comp_ph+"</td>"
										  + "</tr>";
						tbody.append(tbodyContent);
					}
					
					for (var i = data.page.startPageNum; i <= data.page.endPageNum; i++) {
						divContent = "<a href='#' style='text-decoration:none;' onclick='empCodeSearch("+i+")'>"+i+"&nbsp;</a>";
						empPagingDiv.append(divContent);
					}
				} else {
					$("#schRstNum").val("<span style='color: #FF0000;'>'"+iuser_nm+"'</span>에 대한 검색결과가 없습니다.");
					tbody.append("<tr><td>"+"<span style='color: #FF0000;'>'"+iuser_nm+"'</span>에 대한 검색결과가 없습니다."+"</td></tr>");
				}
			},
			error : function(data){
				alert(data);
			}
		});
	});
}