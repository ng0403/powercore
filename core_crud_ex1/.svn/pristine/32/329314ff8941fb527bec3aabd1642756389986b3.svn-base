<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet"
	href="${ctx}/resources/common/css/standard/notice/noticeDetail.css" type="text/css" />
	<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
	<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript"
	src="${ctx}/resources/common/js/standard/notice/noticeDetail.js"></script>
	<script type="text/javascript" src="${ctx}/resources/common/js/standard/notice/employee_js.js"></script>
<title>
${notice.TITLE}
</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" value="${notice.NOTICE_ID}" id="hiddenId">
	<input type="hidden" id="auth" value="${auth}">

	<div id="title">
		<div class="caption">■ 영업정보 > 공지사항</div>
	</div>
	<div id="noticebody">
		<div id="titlediv">
			<div class="titlecal">제목</div>
			<div contenteditable="false" class="notice_title" id="notice_title">${notice.TITLE}</div>
		</div>

		<div id="titlediv2">
			<div class="titlecal2">담당부서<input type="hidden" value="${notice.ORG_ID}"></div>
			<div class="notice_title2" id="org_nm">${notice.ORG_NM}</div>
			<div class="titlecal2">작성자</div>
			<div class="notice_title2">${notice.FST_REG_ID_NM}</div>
			<div class="titlecal2">작성일</div>
			<div class="notice_title4">
				<fmt:formatDate value="${notice.FST_REG_DT}" pattern="yyyy-MM-dd" />
			</div>
		</div>
		<%-- <div id="titlediv2">
			<div class="titlecal2">시작일자</div>
			<c:if test="${not empty notice.STRD_D}">
			<div class="notice_title3" id="strd_div"><input type='text' class='dateinput' name='strd_d' id='strd_d' readonly="readonly" value='<fmt:formatDate value="${notice.STRD_D}" pattern="yyyy-MM-dd"/>'></div>
			</c:if>
			<c:if test="${empty notice.STRD_D}">
			<div class="notice_title3"><input type='text' class='dateinput' name='strd_d' id='strd_d' readonly="readonly">&nbsp;</div>
			</c:if>
			<div class="titlecal2">종료일자</div>
			<c:if test="${not empty notice.END_D}">
			<div class="notice_title3" id="end_div"><input type='text' class='dateinput' name='end_d' id='end_d' readonly="readonly" value='<fmt:formatDate value="${notice.END_D}" pattern="yyyy-MM-dd" />'></div>
			</c:if>
			<c:if test="${empty notice.END_D}">
			<div class="notice_title3"><input type='text' class='dateinput' name='end_d' id='end_d' readonly="readonly">&nbsp;</div>
			</c:if>
			<div class="titlecal2">조회수</div>
			<div class="notice_title4">${notice.CHK_NUM}</div>
		</div> --%>

		<div id="titlediv3">
			<div class="titlecal3" id="cont">내용</div>
			<div contenteditable="false" id="notice_cont">${notice.CONT}</div>
		</div>
		
		<div id="btndiv">
			<input type="button" id="listnoticebtn" value="닫기" class="btn btn-default">
			<input type="button" id="deletenoticebtn" value="삭제" class="btn btn-default">
			<input type="button" id="modifynoticebtn" value="수정" class="btn btn-default"> 
			<input type="button" id="addnoticebtn" value="저장" disabled="disabled" class="wbtn">
		</div>
	</div>
</body>
</html>