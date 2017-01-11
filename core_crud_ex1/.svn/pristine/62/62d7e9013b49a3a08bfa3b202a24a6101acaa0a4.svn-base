<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/custcomp_list_pop.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>
<title>고객사 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 고객사 리스트</div>
		
		<div class="custcomp_list_search">
			<form name="searchForm" method="post" action="${ctx}/custcompList">
				<select name="keyfield">
					<option value="ct_id">고객ID</option>
					<option value="ct_nm">고객명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="custcomp_list_txt"> &nbsp;
				<button id="search_btn" type="submit" class="custcomp_list_bt">검색</button>
			</form>
		</div>
	
	<div class="custcomp_list_div">
		<table id="custcomp_list_table">
			<thead>
				<tr>
					<td style="width:30%;">고객ID</td>
					<td style="width:30%;">고객명</td>
					<td style="width:25%;">고객구분</td>
					<td style="width:25%;">기업상태</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="custcompList" items="${custcompList}"> 
				<tr>
					<td style="width:25%;" id="cust_id">${custcompList.cust_id}</td>
					<td style="width:25%;" id="cust_nm">${custcompList.cust_nm}</td>
					<td style="width:25%;">${custcompList.cust_div_cd}</td>
					<td style="width:25%;">${custcompList.stat_cd}</td>		
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>