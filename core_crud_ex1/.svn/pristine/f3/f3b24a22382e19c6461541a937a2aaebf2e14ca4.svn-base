<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>권한 수정</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/body.css" type="text/css" />
</head>
<body>
 <form action="${ctx}/authMenuUpdate" method="post">
  
	<div id="detail_caption">● 메뉴권한관리 > 메뉴권한 수정</div>
	<br>
	
	<div style="width: 100%; height: 220px; overflow-y: auto;"> 	    
	   <table class=table>
	    	<tbody id="tbody1"> 
	    	<tr>
	    		<th>권한명</th>
	    		<td>
	    			${authMenuUpdate.auth_name}
	    			<input type="hidden" name="auth_id" value="${authMenuUpdate.auth_id}"/>
	    		</td>
	    		<th>메뉴명</th>
	    		<td>
	    			${authMenuUpdate.menu_name}
	    			<input type="hidden" name="menu_id" value="${authMenuUpdate.menu_id}"/>
	    		</td>
	    	</tr>
	    	<tr>
	    		<th>조회여부</th>
	    		<td>
	    		<c:if test="${authMenuUpdate.retrieve_flg eq 'Y'}">
						<input type="radio" name="retrieve_flg" value="Y" checked="checked"/>Y&nbsp;
	    				<input type="radio" name="retrieve_flg" value="N"/>N
				</c:if>
	    		<c:if test="${authMenuUpdate.retrieve_flg eq 'N'}">
						<input type="radio" name="retrieve_flg" value="Y"/>Y&nbsp;
	    				<input type="radio" name="retrieve_flg" value="N" checked="checked"/>N
				</c:if>
	    		</td>
	    		<th>등록여부</th>
				<td>
	    		<c:if test="${authMenuUpdate.create_flg eq 'Y'}">
						<input type="radio" name="create_flg" value="Y" checked="checked"/>Y&nbsp;
	    				<input type="radio" name="create_flg" value="N"/>N
				</c:if>
	    		<c:if test="${authMenuUpdate.create_flg eq 'N'}">
						<input type="radio" name="create_flg" value="Y"/>Y&nbsp;
	    				<input type="radio" name="create_flg" value="N" checked="checked"/>N
				</c:if>
	    		</td>
	    		<th>수정여부</th>
				<td>
	    		<c:if test="${authMenuUpdate.update_flg eq 'Y'}">
						<input type="radio" name="update_flg" value="Y" checked="checked"/>Y&nbsp;
	    				<input type="radio" name="update_flg" value="N"/>N
				</c:if>
	    		<c:if test="${authMenuUpdate.update_flg eq 'N'}">
						<input type="radio" name="update_flg" value="Y"/>Y&nbsp;
	    				<input type="radio" name="update_flg" value="N" checked="checked"/>N
				</c:if>
	    		</td>
	    		<th>삭제여부</th>
	    		<td>
	    		<c:if test="${authMenuUpdate.delete_flg eq 'Y'}">
						<input type="radio" name="delete_flg" value="Y" checked="checked"/>Y&nbsp;
	    				<input type="radio" name="delete_flg" value="N"/>N
				</c:if>
	    		<c:if test="${authMenuUpdate.delete_flg eq 'N'}">
						<input type="radio" name="delete_flg" value="Y"/>Y&nbsp;
	    				<input type="radio" name="delete_flg" value="N" checked="checked"/>N
				</c:if>
	    		</td>
			</tr>
	    	</tbody>    	   
	    </table>	
	    
  	</div>
  	<div class="bt_position_detail">
		<input type="submit" class="btn btn-default" value="등록"/>
		<input type="reset" class="btn btn-default" value="취소"/>
	</div>	
  	
 </form>

</body>
</html>