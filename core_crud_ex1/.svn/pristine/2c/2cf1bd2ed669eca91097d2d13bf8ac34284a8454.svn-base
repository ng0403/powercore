<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/menuView.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/bootstrap.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/authPopup.js"></script>
<title>리스트</title>
</head>
<body>
<div class="authmenuview">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
	<br>
		<div class="caption">● 메뉴 ID 검색</div>
		<div class="bt_position">
			<select id="keyfield">
				<option value="m_id">메뉴ID</option>
				<option value="m_name">메뉴명</option>
			</select>
			<input id="search_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="button" class="btn btn-default">검색</button>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
		<table id="menupopuptable">
			<thead>
				<tr>
					<td style="width:28%;">메뉴 ID</td>
					<td style="width:26%;">메뉴명</td>
					<td style="width:26%;">메뉴 URL</td>
					<td>메뉴 레벨</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="menu" items="${menu}"> 
				<tr>
					<td style="width:25%;" id="maauth_id">${menu.MENU_ID}</td>
					<td style="width:25%;" id="maauth_name">${menu.MENU_NAME}</td>
					<td style="width:25%;">${menu.MENU_URL}</td>
					<td style="width:25%; text-align: center;">${menu.MENU_LEVEL}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>