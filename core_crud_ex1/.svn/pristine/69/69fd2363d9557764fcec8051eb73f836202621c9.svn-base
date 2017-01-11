<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/schedule/schedule_pop.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/schedule/schedule_pop.js"></script>
<title>일정/약속</title>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">
	<div class="scheduleview">
		<div id="title">
			<br>
			<div class="caption">■ 일정/약속 정보</div>
			<div class="bt_position_popup">
				<div class="bs-example1">
					<table class="table">
						<thead>
							<tr>
								<td style="width:10%;"><input type="checkbox" id="schedulechkm"></td>
								<td style="width:10%;">유형</td>
								<td style="width:20%;">약속명</td>
								<td style="width:20%;">약속내용</td>
								<td style="width:20%;">일자</td>
								<td style="width:10%;">부서</td>
								<td style="width:10%;">담당</td>
							</tr>
						</thead>
						</table>
						</div>
						<div class="bs-example2">
						<table class="tablebody">
						<tbody>
							<c:forEach var="schedule" items="${schedule}">
							<c:if test="${schedule.ACT_YN=='Y'}">
								<tr>
									<td style="width:10%;"><input type="hidden" id="scheduleId" value="${schedule.SCHEDULE_ID}"><input type="checkbox" class="schedulechk"></td>
									<td style="width:10%;"><input type='hidden' value='${schedule.SCHEDULE_TYPE_CD}'>${schedule.CD_NM}</td>
									<td style="width:21.8%;">${schedule.SCHEDULE_NM}</td>
									<td style="width:22%;">${schedule.SCHEDULE_CONT}</td>
									<td style="width:20%;"><input type="hidden" value="<fmt:formatDate value="${schedule.SCHEDULE_DT}" pattern="yyyy-MM-dd HH:mm"/>"><fmt:formatDate value="${schedule.SCHEDULE_DT}" pattern="yyyy-MM-dd HH:mm"/></td>
									<td style="width:10%;">${schedule.ORG_NM}</td>
									<td style="width:10%;">${schedule.FST_REG_ID_NM}</td>
								</tr>
								</c:if>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
			<div class="schedule_bt_position">
				<input type="button" class="btn btn-success" value="저장" id="schedule_confirm" disabled="disabled" /> 
				<input type="button" class="btn btn-success" value="저장" id="schedule_modiconfirm" disabled="disabled"/>
				<input type="button" class="btn btn-default" value="추가" id="schedule_add" />
				<input type="button" class="btn btn-default" value="편집" id="schedule_modify" />
				<input type="button" class="btn btn-default" value="삭제" id="schedule_delete" />
				<input type="button" class="btn btn-default" value="취소" id="schedule_cancel" />
			</div>
		</div>
	</div>
	
	<article id="calendardiv" class="calendardiv">
	<div id="calcontrol">
	<a href="#" id="leftgo"><img id="leftcalbtn" src="${ctx}/resources/image/treebtn1.png"></a>
	<span class="caltext"></span>
	<a href="#" id="rightgo"><img src="${ctx}/resources/image/treebtn1.png"></a>
	</div>
	<table class="caltable">
	<thead>
	<tr>
	<td class="sundaytd">일</td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td class="saturdaytd">토</td>
	</tr>
	</thead>
	<tbody>
	</tbody>
	</table>
	
	<div class="select_div">
	<select id='calampm' name='calampm' class="apclass">
	<option value='AM'>AM</option>
	<option value='PM'>PM</option>
	</select>
	<select id='caltime' name='caltime' class="timeclass">

	<option value="1">1시</option>
	<option value="2">2시</option>
	<option value="3">3시</option>
	<option value="4">4시</option>
	<option value="5">5시</option>
	<option value="6">6시</option>
	<option value="7">7시</option>
	<option value="8">8시</option>
	<option value="9">9시</option>
	<option value="10">10시</option>
	<option value="11">11시</option>
	<option value="12">12시</option>
	
	</select>
	<select id='calmin' name='calmin' class="minclass">
	<option value="00">00분</option>
	<option value="10">10분</option>
	<option value="20">20분</option>
	<option value="30">30분</option>
	<option value="40">40분</option>
	<option value="50">50분</option>
	</select>
	</div>
	
	<div id="btndiv">
	<input type="button" class="btn btn-success" id="calsubmit" value="결정">
	</div>
	</article>

</body>
</html>