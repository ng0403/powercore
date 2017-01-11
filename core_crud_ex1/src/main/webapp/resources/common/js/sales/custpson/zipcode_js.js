/**
 * 우편번호 검색 관련 js파일
 */
$(document).ready(function() {
	
	$("#zip_search").keypress(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				if ($("#zip_search").val() == '' || $("#zip_search").val() == null) {
					alert("주소를 다시 입력하세요.")
					$("#zip_search").val('');
					$("#zip_search").focus();
				} else {
					$("#schRstTblTbody").children().remove();
					$("#zipPaging").children().remove();
					$("#schRstNum").children().remove();
					zipCodeSearch(1);
				}
			}
			event.stopPropagation();
	});
	
});

function inputZipNm(addr_dtl_cont, zipCd, cust_zip_num){
	$('#cust_zip_cd1').val(zipCd.substring(0, 3));
	$('#cust_zip_cd2').val(zipCd.substring(3, 6));
	$('#addr_dtl_cont').val(addr_dtl_cont);
	$('#cust_zip_num').val(cust_zip_num);
	$('#cust_addr').focus();
}

function zipTrClick(addr_dtl_cont, zipCd, cust_zip_num) {
	window.opener.inputZipNm(addr_dtl_cont, zipCd, cust_zip_num);
	self.close();
}

function zipCodeSearch(zipPageNum) {
		if ($("#zip_search").val() == '' || $("#zip_search").val() == null) {
			alert("주소를 다시 입력하세요.")
			$("#zip_search").val('');
			$("#zip_search").focus();
			return false;
		}
		var ctx = $("#ctx").val();
		var dong_nm = $("#zip_search").val();
		var tbody = $("#schRstTblTbody");
		var tbodyContent = "";
		var zipPagingDiv = $("#zipPaging");
		var divContent = "";
		tbody.children().remove();
		zipPagingDiv.children().remove();
		$("#schRstNum").children().remove();
		
	$(document).ready(function() {
		$.ajax({
			url : ctx+'/zipCode',
			data : "dong_nm="+dong_nm+"&zipPageNum="+zipPageNum,
			type : 'POST',
			dataType : "json",
			success : function(data){
				$("#searchAddr").css("display", "block");
				if(data.ppVOList.length > 0){
					$("#schRstNum").append("<span style='color: #FF0000;'>'"+dong_nm+"'</span>" +
													"<span>검색결과는 </span>" +
													"<span style='color: #FF0000;'>'"+data.page.totalCount+"건'</span>" +
													"<span> 입니다.</span>");
					for (var i = 0; i < data.ppVOList.length; i++) {
						tbodyContent = "<tr class='schRstTblTr' onclick=\"zipTrClick('"+data.ppVOList[i].addr_dtl_cont+"', '"+data.ppVOList[i].zip_cd+"', '"+data.ppVOList[i].zip_cd_sri_num+"');\">"
										  + "<td id='zipPopAddr'>"+data.ppVOList[i].addr_dtl_cont+"</td>"
										  + "<td><input type='hidden' id='zipCd1' value='"+data.ppVOList[i].zip_cd+"'/>"
										  + data.ppVOList[i].zip_cd.substring(0, 3) + "-"+data.ppVOList[i].zip_cd.substring(3, 6)+"</td>"
										  + "</tr>";
						tbody.append(tbodyContent);
					}
					
					for (var i = data.page.startPageNum; i <= data.page.endPageNum; i++) {
						divContent = "<a href='#' style='text-decoration:none;' onclick='zipCodeSearch("+i+")'>"+i+"&nbsp;</a>";
						zipPagingDiv.append(divContent);
					}
				} else {
					$("#schRstNum").val("<span style='color: #FF0000;'>'"+dong_nm+"'</span>에 대한 검색결과가 없습니다.");
					tbody.append("<tr><td>"+"<span style='color: #FF0000;'>'"+dong_nm+"'</span>에 대한 검색결과가 없습니다."+"</td></tr>");
				}
			}, error : function(data){
				alert(data);
			}
		});
	});
}