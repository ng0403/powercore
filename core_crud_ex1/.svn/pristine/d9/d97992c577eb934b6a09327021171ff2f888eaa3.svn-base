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
 <form action="${ctx}/authMenuInsert" method="post">
  
	<div id="detail_caption">● 메뉴권한관리 > 메뉴권한 상세정보</div>
	<br>
	
	<div style="width: 100%; height: 220px; overflow-y: auto;"> 	    
	   <table class=table>
	    	<tbody id="tbody1"> 
	    	<tr>
	    		<th>메뉴명</th>
	    		<td>
	    		<select name="auth_id">
	    			<c:forEach var="authName" items="${authNameList}"> 
	    				<option value="${authName.auth_id}">${authName.auth_name}</option>
	    			</c:forEach>
	    		</select>
	    		<th>권한명</th>	    		
	    		<td>
				<select name="menu_id">
	    			<c:forEach var="menuName" items="${menuNameList}"> 
	    				<option value="${menuName.menu_id}">${menuName.menu_name}</option>
	    			</c:forEach>
	    		</select>
				</td>
				<th>활성화여부</th>
	    		<td>
	    			Y&nbsp;<input type="radio" name="active_flg" value="Y" checked="checked"/>&nbsp;
	    			N&nbsp;<input type="radio" name="active_flg" value="N"/>
	    		</td>
			</tr>
			<tr>
	    		<th>조회여부</th>	    		
	    		<td>
	    			Y&nbsp;<input type="radio" name="retrieve_flg" value="Y" checked="checked"/>&nbsp;
	    			N&nbsp;<input type="radio" name="retrieve_flg" value="N"/>
	    		</td>
	    		<th>등록여부</th>
	    		<td>Y&nbsp;<input type="radio" name="create_flg" value="Y" checked="checked"/>&nbsp;
	    			N&nbsp;<input type="radio" name="create_flg" value="N"/>
	    		</td>
	    		<th>수정여부</th>
	    		<td>Y&nbsp;<input type="radio" name="update_flg" value="Y" checked="checked"/>&nbsp;
	    			N&nbsp;<input type="radio" name="update_flg" value="N"/>
	    		</td>
	    		<th>삭제여부</th>
	    		<td>Y&nbsp;<input type="radio" name="delete_flg" value="Y" checked="checked"/>&nbsp;
	    			N&nbsp;<input type="radio" name="delete_flg" value="N"/>
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