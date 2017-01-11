<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="${ctx}/resources/common/js/standard/common/navi.js"></script>
<script type="text/javascript">
function logout(){
	var chk = confirm('로그아웃 하시겠습니까?');
	if(chk){
		location.href = '${ctx}/logout';
	}else{
		return;
	}
}
</script>
</head>
<body>
<div class="headerT">

<div class="hbtn">
<input type="button" onclick="logout();" id="logout" value="로그아웃"/>
</div></div>

</body>
</html>