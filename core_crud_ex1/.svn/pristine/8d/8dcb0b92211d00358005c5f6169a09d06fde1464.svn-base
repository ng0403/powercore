<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authUserWritePopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authUserWritePopup.css" type="text/css" />
<title>사용자권한 등록</title>
</head>
<body>
<div class="authmenuview">
<input type="hidden" id="ctx" value="${ctx}">
<div id="title">
<br>
<div class="caption">■ 사용자권한 등록</div>
<div class="bt_position_popup">
   <div class="bs-example" data-example-id="simple-table">
	 <table class="table">  			
		<tbody>
			<tr>
				<th>권한 ID</th>
				<td>
					<input type="text" name="uauth_id" id="uauth_id" class="int"  readonly="readonly"/>
					<input type="button" id="searchAuthIuser_authId" class="auth_btn" value="검색"/>	
				</td>
			</tr>
			<tr>
				<th>사용자ID</th>
				<td>
					<input type="hidden" name="iuser_id" id="iuser_id"/>
					<input type="text" name="id_nm" id="uu_user_id" class="int"  readonly="readonly" />
					<input type="button" id="searchAuthIuser_iuserId" class="auth_btn" value="검색"/>
				</td>
			</tr>
		</tbody>
		</table>
	</div>
	<div class="bt_position">
		<input type="button" class="auth_btn" value="등록" id="authUserInsert"/>
		<input type="button" class="auth_btn" value="취소" id="authUserCancel"/>
	</div>
</div>
</div>
</div>
</body>
</html>