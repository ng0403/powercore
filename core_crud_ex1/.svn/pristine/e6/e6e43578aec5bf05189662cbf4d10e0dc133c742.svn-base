<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/data_board/dboard_pop.css" type="text/css" />
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
	<script type="text/javascript" src="${ctx}/resources/common/js/standard/dboard/dboardPopup.js"></script>
<title>자료실</title>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">
	<div class="dboardview">
		<div id="title">
			<br>
			<div class="caption">■ 자료실</div>
			<div class="bt_position_popup">
				<div class="bs-example1">
					<table class="table">
						<thead>
							<tr>
								<td style="width:10%;">자료분류</td>
								<td style="width:40%;">제목</td>
								<td style="width:10%;">조회수</td>
								<td style="width:20%;">게시일자</td>
								<td style="width:10%;">부서</td>
								<td style="width:10%;">게시자</td>
							</tr>
						</thead>
						</table>
						</div>
						<div class="bs-example2">
						<table class="table">
						<tbody>
							<c:forEach var="dboard" items="${dboard}">
							
								<tr>
								<td style="width:10%;">${dboard.CD_NM}</td>
									<td style="width:40%; text-align: left;">
									<input type="hidden" value='${dboard.DATA_BOARD_ID}'>
									${dboard.TITLE}
									</td>
									
									<td style="width:10%;">${dboard.CHK_NUM}</td>
									<td style="width:20%;"><fmt:formatDate value="${dboard.FST_REG_DT}" pattern="yyyy-MM-dd"/></td>
									<td style="width:10%;">${dboard.ORG_NM}</td>
									<td style="width:10%;">${dboard.FST_REG_ID_NM}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
			<div class="dboard_bt_position">

			</div>
		</div>
	</div>

</body>
</html>