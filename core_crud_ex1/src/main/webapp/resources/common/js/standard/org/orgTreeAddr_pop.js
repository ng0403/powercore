/**
 * 우편번호 검색 관련 js파일
 */
$(document).ready(function() {
	
	$("#addr_search").keypress(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				if ($("#addr_search").val() == '' || $("#addr_search").val() == null) {
					alert("주소를 다시 입력하세요.")
					$("#addr_search").val('');
					$("#addr_search").focus();
				} else {
					$("#schRstTblTbody").children().remove();
					$("#addrPaging").children().remove();
					$("#schRstNum").children().remove();
					addrCodeSearch(1);
				}
			}
			event.stopPropagation();
	});
	
});

function zipTrClick(addr_dtl_cont, zipCd, zip_cd_sri_num) {
	window.opener.inputZipNm(addr_dtl_cont, zipCd, zip_cd_sri_num);
	self.close();
}

function addrCodeSearch(addrPageNum) {
		if ($("#addr_search").val() == '' || $("#addr_search").val() == null) {
			alert("주소를 다시 입력하세요.")
			$("#addr_search").val('');
			$("#addr_search").focus();
			return false;
		}
		var ctx = $("#ctx").val();
		var dong_nm = $("#addr_search").val();
		var tbody = $("#schRstTblTbody");
		var tbodyContent = "";
		var addrPagingDiv = $("#addrPaging");
		var divContent = "";
		tbody.children().remove();
		addrPagingDiv.children().remove();
		$("#schRstNum").children().remove();
		
	$(document).ready(function() {
		$.ajax({
			url : ctx+'/addrList.do',
			data : "dong_nm="+dong_nm+"&addrPageNum="+addrPageNum,
			type : 'POST',
			dataType : "json",
			success : function(data){
				$("#searchAddr").css("display", "block");
				if(data.addrList.length > 0){
					$("#schRstNum").append("<span style='color: #FF0000;'>'"+dong_nm+"'</span>" +
													"<span>검색결과는 </span>" +
													"<span style='color: #FF0000;'>'"+data.page.totalCount+"건'</span>" +
													"<span> 입니다.</span>");
					for (var i = 0; i < data.addrList.length; i++) {
						tbodyContent = "<tr class='schRstTblTr' onclick=\"zipTrClick('"+data.addrList[i].addr_dtl_cont+"', '"+data.addrList[i].zip_cd+"', '"+data.addrList[i].zip_cd_sri_num+"');\">"
										  + "<td id='zipPopAddr'>"+data.addrList[i].addr_dtl_cont+"</td>"
										  + "<td><input type='hidden' id='zipCd1' value='"+data.addrList[i].zip_cd+"'/>"
										  + data.addrList[i].zip_cd.substring(0, 3) + "-"+data.addrList[i].zip_cd.substring(3, 6)+"</td>"
										  + "</tr>";
						tbody.append(tbodyContent);
					}
					
					for (var i = data.page.startPageNum; i <= data.page.endPageNum; i++) {
						divContent = "<a href='#' style='text-decoration:none;' onclick='addrCodeSearch("+i+")'>"+i+"&nbsp;</a>";
						addrPagingDiv.append(divContent);
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