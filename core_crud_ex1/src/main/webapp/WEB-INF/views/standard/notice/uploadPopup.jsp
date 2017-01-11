<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/data_board/upload_pop.css" type="text/css" />
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
	<script type="text/javascript" src="${ctx}/resources/common/js/standard/notice/uploadPopup.js"></script>
<title>업로드</title>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">
<div class="dboardview">
		<div id="title">
			<div class="caption">● 업로드</div>
			<div contenteditable="false" id="filelist">
			</div>
			<div class="bt_position_popup">
			<div hidden="hidden">
			<input type="file" id="ofilesearch">
			</div>
			<input type="button" value="파일찾기" id="filesearch">
			<input type="button" value="닫기"  class="btnposition" id="closePopup">
			<input type="button" value="보내기" class="btnposition" id="submitlist">
			</div>
			</div>
			</div>
</body>
</html>