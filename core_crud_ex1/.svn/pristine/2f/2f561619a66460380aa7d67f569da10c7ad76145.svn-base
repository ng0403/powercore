<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/call/comp_list_pop.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/call/call_pop.js"></script>
<title>회사 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 회사 리스트</div>
		
		<div class="comp_list_search">
			<form name="searchForm" method="post" action="${ctx}/actOpptList">
				<select name="keyfield">
				    <option value="oppt_id">고객ID</option>
					<option value="oppt_nm">회사명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="comp_list_txt"> &nbsp;
				<button id="search_btn" type="submit" class="comp_list_bt">검색</button>
			</form>
		</div>
	
	<div class="comp_list_div">
		<table id="comp_list_table">
			<thead>
				<tr>
					<td style="width:15%;">고객ID</td>
					<td style="width:17%;">회사명</td>
					<td style="width:17%;">매출규모</td>
					<td style="width:20.5%;">산업군</td>
					<td style="width:20%;">등록일시</td>
					<td style="width:20%;">영업등록자</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="compList" items="${compList}"> 
				<tr>
					<td style="width:15%;" id="comp_id">${compList.cust_id}</td>
					<td style="width:17%;" id="comp_nm">${compList.cust_nm}</td>
					<td style="width:17%;">${compList.sales_scale}</td>
					<td style="width:20.5%;">${compList.indst}</td>
					<td style="width:20%;">${compList.fst_reg_dt}</td>
					<td style="width:20%;">${compList.iuser_nm}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>