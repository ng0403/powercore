<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/body.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/bootstrap.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/authMenuCheckbox.js"></script>
<title>리스트</title>
</head>
<body>
	<form id="AllForm" method="post" action="">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">● 메뉴권한관리 > 메뉴권한리스트</div>
		<div class="bt_position">
			<select id="keyfield">
				<option value="id">아이디</option>
				<option value="user">고객관리</option>
				<option value="org">조직관리</option>
				<option value="auth">권한관리</option>
				<option value="payment">결제관리</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="button" class="btn btn-default">검색</button>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
		<table id="mastertable">
			<thead>
				<tr>
					<th><input type="checkbox" name="allCheck" id="allCheck"></th>
					<td style="width:10%;">권한ID</td>
					<td style="width:20%;">권한명</td>
					<td style="width:10%;">권한 메뉴명</td>
					<td style="width:15%;">조회여부</td>
					<td style="width:15%;">입력여부</td>
					<td style="width:15%;">수정여부</td>
					<td style="width:15%;">삭제여부</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="auth" items="${authMenuList}"> 
				<tr>
					<th scope="row">
						<input type="checkbox" name="check_id" class="authCheck" value="${auth.auth_id}/${auth.menu_id}">
					</th>
					<td style="width:10%;"><a href="${ctx}/authMenuDetail?auth_id=${auth.auth_id}&menu_id=${auth.menu_id}">${auth.auth_id}</a></td>
					<td style="width:20%;">${auth.auth_name}</td>
					<td style="width:10%;">${auth.menu_name}</td>
					<td style="width:15%;">${auth.retrieve_flg}</td>
					<td style="width:15%;">${auth.create_flg}</td>
					<td style="width:15%;">${auth.update_flg}</td>
					<td style="width:15%;">${auth.delete_flg}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
</form>
		<!-- 기본 버튼 -->
	<div class="bt_position">
		<button type="button" class="btn btn-default" onclick="location.href='${ctx}/authMenuInsertForm'">등록</button>
		<input type="button" id="authUpdate_btn" class="btn btn-default" value="수정">
		<input type="button" id="authDelete_btn" class="btn btn-default" value="삭제">
	</div>
</body>
</html>