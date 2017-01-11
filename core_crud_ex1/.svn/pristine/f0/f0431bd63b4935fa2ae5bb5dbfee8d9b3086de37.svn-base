<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/notice/noticeInsert.css" type="text/css" />
	<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/notice/noticeInsert.js"></script>
<title>공지사항 등록</title>
<script type="text/javascript">
$("#navisub9").show();
$("#navinotice").css("font-weight", "bold");
</script>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">

	<div id="title">
		<div class="caption">■ 영업정보 > 공지사항 > 글작성</div>
	</div>
	
	<div id="noticebody">
	<form action="${ctx}/noticewriteconfirm" method="post" id="noticewriteconfirm">
	<div id="wirteTableDiv">
		<table id="writeTable">
			<tr><td></td></tr>
			<tr>
				<th>제목</th>
				<td>
					<input type="text" id="title" name="title" class="titleinput">
				</td>
			</tr>
			<tr><td></td></tr>
			<tr>
				<th>내용</th>
				<td>
					<textarea id="cont" name="cont" style="resize: none; overflow: auto;"></textarea>
				</td>
			</tr>
		</table>
	</div>
	<!-- <div id="datediv">
	<div class="datecal">게시일자</div>
	<div class="datecont2"><input type="text" id="start_date" name="start_date" ></div>
	<div class="datecal">종료일자</div>
	<div class="datecont"><input type="text" id="end_date" name="end_date"></div>
	</div> -->
	</form>
	<div id="btndiv">
	<input type="button" id="submitnoticebtn" value="등록" class="btn btn-default">
	<input type="button" id="listnoticebtn" value="목록" class="btn btn-default">
	</div>
</div>


</body>
</html>