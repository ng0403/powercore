<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
  <form action="">

	    	<div id="table_tr_th1">상세정보</div>	    
	    <table class=table>
	    	<tbody id="tbody1" style="overflow=scroll"> 
	    	<tr>
	    		<th>First Name</th>
	    		<td><input type="text" value="Mark"></input></td>
	    		<th>Last Name</th>	    		
	    		<td><input type="text" value="Otto"></input></td>
	    	</tr>	    	
	    	<tr>
	    		<th>Username</th>
	    		<td><input type="text" value="@mdo"></input></td>
	    		<th>Tel</th>
	    		<td><input type="tel" value="010-4564-4565"></input></td>	    		
	    	</tr>
	    	<tr>
	    		<th>Barth</th>
	    		<td><input type="date" value="2014-12-24"></input></td>
	    		<th>Addr</th>
	    		<td><input type="text" value="서울 구로"></input></td>
	    	</tr>
	    	<tr>
	    		<th>내용1</th>
	    		<td><input type="text" value="라면"></input></td>
	    		<th>내용2</th>
	    		<td><input type="text" value="냉모밀"></input></td>
	    	</tr>
	    	</tbody>    	   
	    </table>
		<div class="bt_position">
					<input type="submit" value="저장" class="btn btn-default"/>
					<input type="reset" value="취소" class="btn btn-default"/>
					</div>
			
 </form>
</body>
</html>