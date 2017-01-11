<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authMenuWritePopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authMenuWritePopup.css" type="text/css" />
<title>권한 등록</title>
</head>
<body>
<div class="authmenuview">
<input type="hidden" id="ctx" value="${ctx}">
<div id="title">
<br>
<div class="caption">■ 권한메뉴 등록</div>
<div class="bt_position_popup">
   <div class="bs-example" data-example-id="simple-table">
	 <table class="table">  			
					<tbody id="tbody1">
						<tr>
							<th>메뉴ID</th>
							<td>
								<input type="text" name="menu_id" id="menu_id" class="auth_menu_txt" readonly="readonly"/>
								<input type="button" id="searchAuthIuser_MenuId" class="auth_btn" value="검색"/>
							</td>
						</tr>
						<tr>
							<th>메뉴명</th>
							<td><input type="text" name="menu_nm" id="menu_nm" class="auth_menu_txt" disabled="disabled"/></td>
						</tr>
						<tr>
							<th>권한ID</th>
							<td>
								<input type="text" name="auth_id" id="uauth_id" class="auth_menu_txt" readonly="readonly"/>
								<input type="button" id="searchAuthMenu_authId" class="auth_btn" value="검색"/>
							</td>
						</tr>
						<tr>
							<th>검색 여부</th>
							<td>
							<input type="radio" checked="checked" id="retrieve_flg_Y" value='Y'/>활성화&nbsp;
							<input type="radio" id="retrieve_flg_N" value='N'/>비활성화
							</td>
						</tr>
						<tr>
							<th>생성 여부</th>
							<td>
							<input type="radio" checked="checked" id="create_flg_Y" value='Y'/>활성화&nbsp;
							<input type="radio" id="create_flg_N" value='N'/>비활성화
							</td>
						</tr>
						<tr>
							<th>수정 여부</th>
							<td>
							<input type="radio" checked="checked" id="update_flg_Y" value='Y'/>활성화&nbsp;
							<input type="radio" id="update_flg_N" value='N'/>비활성화
							</td>
						</tr>
						<tr>
							<th>삭제 여부</th>
							<td>
							<input type="radio" checked="checked" id="delete_flg_Y" value='Y'/>활성화&nbsp;
							<input type="radio" id="delete_flg_N" value='N'/>비활성화
							</td>
						</tr>
						<tr>
							<th>디폴트 여부</th>
							<td>
							<input type="radio" id="default_flg_Y" value='Y' />활성화&nbsp;
							<input type="radio" id="default_flg_N" value='N' checked="checked"/>비활성화
							</td>
						</tr>
					</tbody>
						</table>
	</div>
	<br>
	<div class="bt_position">
		<input type="button" class="auth_btn" value="등록" id="authMenu_confirm"/>
		<input type="button" class="auth_btn" value="취소" id="authMenu_cancel"/>
	</div>
</div>
</div>
</div>
</body>
</html>