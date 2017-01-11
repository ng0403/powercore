<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/lead/lead.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/lead/lead_change.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_btn.js"></script>
<title>심사적합</title>
 
</head>
<body>
<div class="leadChangeview">
<input type="hidden" id="ctx" value="${ctx}">
<div id="title">
<div class="caption">● 심사적합으로 처리하시겠습니다? <br><br></div>
</div>

<form method="get" id="leadSuitState"><br>
<input type="hidden" id="cust_id" name="cust_id" value="${cust_id}"/>
	<div class="leadChange_bt_position"> 
			<input type="button" class="btn btn-success" value="확인" id="suit_confirm"/>
			<input type="button" class="btn btn-default" value="취소" id="suit_cancel"/>
	</div>
</form>
</div>
</body>
</html>