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

<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_tab.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_popup.js"></script>
<title>개인 편집 또는 기업 추가</title>
 
</head>
<body>
<div class="leadChangeview">
<input type="hidden" id="ctx" value="${ctx}">
<div id="title">
<div class="caption">● 리드편집 <br><br></div>
</div>

<form action="${ctx}/">
<div class="bt_position_popup">
	 <table id="leadChangetable">  			
		<tbody id="tbody1">
			<tr>
				<td><input type="radio" name="lead_radio" class="int" value="person"></td>
				<th>개인고객 </th>
				<td><input type="radio" name="lead_radio" class="int" value="company"></td>
				<th>기업고객</th>
			</tr>
			<tr>
				
			</tr>
		</tbody>
	 </table>
	 </div>
	<div class="leadChange_bt_position"> <br><br>
		<input type="button" class="btn btn-success" value="확인" id="leadCandPup_confirm" 
		                   onclick="javascript:lead_Update();"/>
		<input type="button" class="btn btn-default" value="취소" id="leadCandPup_cancel"/>
	</div>
</form>
</div>
</body>
</html>