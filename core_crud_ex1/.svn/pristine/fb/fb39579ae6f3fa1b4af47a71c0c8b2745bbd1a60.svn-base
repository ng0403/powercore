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
 <form action="${ctx}/menuUpdate" method="post">
  
	<div id="detail_caption">● 메뉴권한관리 > 메뉴권한 상세정보</div>
	<br>
	
	<div style="width: 100%; height: 220px; overflow-y: auto;"> 	    
	   <table class=table>
	    	<tbody id="tbody1"> 
	    	<tr>
	    		<th>권한ID</th>
	    		<td><input type="text" name="menu_id" value="${authDetail.auth_id}"/></td>
	    		<th>메뉴ID</th>	    		
	    		<td><input type="text" name="menu_name" value="${authDetail.menu_id}"/></td>
	    		<th>권한명</th>
	    		<td><input type="text" name="p_menu_name" value="${authDetail.auth_name}"/></td>
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