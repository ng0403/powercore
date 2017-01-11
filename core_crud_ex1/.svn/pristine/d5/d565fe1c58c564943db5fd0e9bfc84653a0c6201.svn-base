<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authViewPopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authViewPopup.css" type="text/css" />
<title>권한 상세정보</title>
</head>
<body>
<div class="authmenuview">
<input type="hidden" id="ctx" value="${ctx}">
<div id="title">
<br>
<div class="caption">■ 권한 상세정보</div>
<div class="bt_position_popup">
   <div class="bs-example" data-example-id="simple-table">
	 <table class=table>  			
							<tbody id="tbody1">
								<tr>
									<th>권한 ID</th>
									<td><input type="text" name="dauth_id" id="dauth_id" class="int" value="${auth.auth_id}" disabled="disabled"/></td>
								</tr>
								<tr>
									<th>권한명</th>
									<td><input type="text" name="dauth_name" id="dauth_name" class="int" value="${auth.auth_nm}" disabled="disabled"/></td>
								</tr>
								<tr>
									<th>활성화 여부</th>
									<td>
									<c:if test="${auth.act_yn=='Y'}">
									<input type="radio" checked="checked" disabled="disabled" id="dauth_flg_Y" value='Y'/>활성화&nbsp;
									<input type="radio" disabled="disabled" id="dauth_flg_N" value='N'/>비활성화
									</c:if>
									
									<c:if test="${auth.act_yn=='N'}">
									<input type="radio" disabled="disabled" id="dauth_flg_Y" value='Y'/>활성화&nbsp;
									<input type="radio"  checked="checked" disabled="disabled" id="dauth_flg_N" value='N'/>비활성화
									</c:if>
									</td>
								</tr>
								<tr>
									<th>생성자</th>
									<td><input type="text" name="dc_user_id" id="dc_user_id" class="int" value="${auth.fst_reg_id_nm}" disabled="disabled"/></td>
								</tr>
								<tr>
									<th>생성일</th>
									<td><input type="text" name="dcdate" id="dcdate" class="int" value="${auth.fst_reg_dt}" disabled="disabled"/></td>
								</tr>
								<tr>
									<th>수정자</th>
									<td><input type="text" name="du_user_id" id="du_user_id" class="int" value="${auth.fin_mdfy_id_nm}" disabled="disabled"/></td>
								</tr>
								<tr>
									<th>수정일</th>
									<td><input type="text" name="dudate" id="dudate" class="int" value="${auth.fin_mdfy_dt}" disabled="disabled"/></td>
								</tr>
							</tbody>
						</table>
	</div>
</div>
	<div class="auth_bt_position">
		
		<input type="button" class="auth_btn" value="저장" id="dauth_confirm" disabled="disabled"/>
		<input type="button" class="auth_btn" value="편집" id="dauth_modify"/>
		<input type="button" class="auth_btn" value="취소" id="dauth_cancel"/>
	</div>
</div>
</div>
</body>
</html>