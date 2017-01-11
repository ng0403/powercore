<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet"
	href="${ctx}/resources/common/css/sales/est/estimResult_list_popup.css" type="text/css" />
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}" />
<div id="tableline">
			<table id="goaltable">
				<thead>
					<tr>
						<td rowspan="2">부서</td>
						<td rowspan="2">담당자</td>
						<td colspan="2">전월</td>
						<td colspan="2">당월</td>
					</tr>
					<tr>
						<td>실적</td>
						<td>이익</td>
						<td>실적</td>
						<td>이익</td>
					</tr>
				</thead>
				<tbody>
					
						<c:forEach var="list" items="${estimResultList}">
							<c:choose>
								<c:when test="${list.org_id ne null && list.iuser_nm ne null && list.org_nm ne null}">
								<tr class="normal">
									<td></td>
									<td>${list.iuser_nm}</td>
									<td><fmt:formatNumber value="${list.lastMonthSum}" groupingUsed="true"/></td>
									<td><fmt:formatNumber value="${list.lastMonthProfit}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.thatMonthSum}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.thatMonthProfit}" groupingUsed="true" /></td>									
								</tr>
								</c:when>
								<c:when test="${list.org_id eq null && list.iuser_nm eq null && list.org_nm ne null}">
								<tr class="teamSum">	
									<td>${list.org_nm}</td>
									<td>팀 계</td>
									<td><fmt:formatNumber value="${list.lastMonthSum}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.lastMonthProfit}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.thatMonthSum}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.thatMonthProfit}" groupingUsed="true" /></td>	
								</tr>
								</c:when>
								<c:when test="${list.org_id eq null && list.iuser_nm eq null && list.org_nm eq null}">
								<tr class="allSum">	
									<td colspan="2">계</td>
									<td><fmt:formatNumber value="${list.lastMonthSum}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.lastMonthProfit}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.thatMonthSum}" groupingUsed="true" /></td>
									<td><fmt:formatNumber value="${list.thatMonthProfit}" groupingUsed="true" /></td>	
								</tr>
								</c:when>
								</c:choose>
								</c:forEach>
								
				</tbody>
			</table>
		 </div>
	
	  



</body>
</html>