<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authMenuViewPopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authMenuViewPopup.css" type="text/css" />
<title>권한 상세정보</title>
</head>
<body>
<div class="authmenuview">
	<input type="hidden" id="ctx" value="${ctx}">
	<div id="title">
		<br>
		<div class="caption">■ 권한메뉴 상세정보</div>
		<div class="bt_position_popup">
			<div class="bs-example" data-example-id="simple-table">
				<table class=table>
 					<tbody id="tbody1">
						<tr>
							<th>권한 ID</th>
							<td>
								<input type="text" name="dauth_id" id="uauth_id" class="int" value="${auth.auth_id}" disabled="disabled" />
								<input type="button" id="searchAuthIuser_authId" class="btn btn-default" value="검색"/>
							</td>
						</tr>
						<tr>
							<th>메뉴명</th>
							<td>
								<input type="hidden" name="menu_id" id="menu_id" value="${auth.menu_id}"/>
								<input type="text" name="menu_name" id="menu_nm" class="int" value="${auth.menu_nm}" disabled="disabled" />
								<input type="button" id="searchAuthIuser_iuserId" class="btn btn-default" value="검색"/>
							</td>
						</tr>
						<tr>
							<th>검색 기능</th>
							<c:if test="${auth.retrv_yn=='Y'}">
								<td>
								<input type="radio" checked="checked" disabled="disabled" id="dretrieve_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" disabled="disabled" id="dretrieve_flg_N" value='N'/>비활성화
								</td>
							</c:if>

							<c:if test="${auth.retrv_yn=='N'}">
								<td>
								<input type="radio"  disabled="disabled" id="dretrieve_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" checked="checked" disabled="disabled" id="dretrieve_flg_N" value='N'/>비활성화
								</td>
							</c:if>

						</tr>
						<tr>
							<th>생성 기능</th>
							<c:if test="${auth.creat_yn=='Y'}">
								<td>
								<input type="radio" checked="checked" disabled="disabled" id="dcreate_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" disabled="disabled" id="dcreate_flg_N" value='N'/>비활성화
								</td>
							</c:if>

							<c:if test="${auth.creat_yn=='N'}">
								<td>
								<input type="radio"  disabled="disabled" id="dcreate_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" checked="checked" disabled="disabled" id="dcreate_flg_N" value='N'/>비활성화
								</td>
							</c:if>
						</tr>
						<tr>
							<th>수정 기능</th>
							<c:if test="${auth.mdfy_yn=='Y'}">
								<td>
								<input type="radio" checked="checked" disabled="disabled" id="dupdate_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" disabled="disabled" id="dupdate_flg_N" value='N'/>비활성화
								</td>
							</c:if>

							<c:if test="${auth.mdfy_yn=='N'}">
								<td>
								<input type="radio" disabled="disabled" id="dupdate_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" checked="checked" disabled="disabled" id="dupdate_flg_N" value='N'/>비활성화
								</td>
							</c:if>
						</tr>
						<tr>
							<th>삭제 기능</th>
							<c:if test="${auth.del_yn=='Y'}">
								<td>
								<input type="radio" checked="checked" disabled="disabled" id="ddelete_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" disabled="disabled" id="ddelete_flg_N" value='N'/>비활성화
								</td>
							</c:if>

							<c:if test="${auth.del_yn=='N'}">
								<td>
								<input type="radio" disabled="disabled" id="ddelete_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" checked="checked" disabled="disabled" id="ddelete_flg_N" value='N'/>비활성화
								</td>
							</c:if>
						</tr>
						<tr>
							<th>디폴트 기능</th>
							<c:if test="${auth.deflt_yn=='Y'}">
								<td>
								<input type="radio" checked="checked" disabled="disabled" id="ddeflt_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" disabled="disabled" id="ddeflt_flg_N" value='N'/>비활성화
								</td>
							</c:if>

							<c:if test="${auth.deflt_yn=='N'}">
								<td>
								<input type="radio" disabled="disabled" id="ddeflt_flg_Y" value='Y'/>활성화&nbsp;
								<input type="radio" checked="checked" disabled="disabled" id="ddeflt_flg_N" value='N'/>비활성화
								</td>
							</c:if>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="auth_bt_position">
			<input type="button" class="auth_btn" value="저장" id="dmenu_confirm" disabled="disabled" />
			<input type="button" class="auth_btn" value="편집" id="dmenu_modify"/>
			<input type="button" class="auth_btn" value="취소" id="dmenu_cancel" />
		</div>
	</div>
	</div>
</body>
</html>