<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>담당자별 목표</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/goal/staff_goal.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/goal/goal.js"></script>
<script type="text/javascript">
$("#navisub2").show();
$("#navistaffgoal").css("font-weight", "bold");

if('${staffGoalList.size()}' == 0){
	alert('로그인된 ID의 담당자별 목표가 존재하지 않습니다.');
	location.href='${ctx}/staffgoalsch';
}
</script>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}" />
	<div id="title">
		<div class="caption" id="titleline">■ 영업목표 > <a href="${ctx}/staffgoal" class="goalClick" style="color: blue;" id="teamgoalA">담당자별 목표</a></div></div>
	<div id="topcontent">
	<div id="leftcombobox">
	<form id="searchform" name="searchform" method="GET">
				<input type="hidden" id="year" name="year" value="${year}">
				<input type="hidden" id="param_org_id" name="param_org_id" value="${org_id}">
				<input type="hidden" id="index" name="index" >
					기준년 <select id="queryteam">
						<option value="" selected="selected">년</option>
						<option value="2015">2015</option>
						<option value="2016">2016</option>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
					</select>
					부서 <select id="queryorg">
					<option value="" selected="selected">부서</option>
					<c:choose>
						<c:when test="${orgList.size() > 0 }">
							<c:forEach var="i" begin="0" end="${orgList.size()}" step="1">
								<option value="${orgList[i].org_id}">${orgList[i].org_nm}</option>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<option value="">부서목록 가져오기 실패</option>
						</c:otherwise>
					</c:choose>
					</select>
					
					<input type="button" id="rightbutton" style="cursor: pointer;" value="조회"/>
					<input type="button" id="exceldown" class="goal_excel_down" style="cursor: pointer;" value="목표 엑셀 Down">
					<input type="button" id="excelup" class="goal_excel_upload" style="cursor: pointer;" value="목표 Upload">
					<input type="hidden" id="checkidx" name="checkidx" value="">
			</form>
		</div>
	</div>
	<div id="lefttable">
	<div id="articleline">
		<table id="articletable">
				<tbody>
					<tr>
						<td></td>
						<td>부서</td>
						<td>영업담당자</td>
						<td>목표실적</td>
					</tr>
				</tbody>
			</table>
	</div>
	<div id="tableline">
	<table id="goaltable">
	<tbody>
	<c:forEach var="goalamt" items="${staffGoalList}">
	<c:choose>
		<c:when test="${goalamt.up_org ne null &&  goalamt.org_id eq null && goalamt.iuser_nm eq null && goalamt.reg_id eq null }">
			<tr class="goalparenttr">
				<td><input type="checkbox" class="tr_goalchk" id="goalchk" name="amt_chkname" value="${goalamt.org_id}" hidden="true"></td>
				<td>${goalamt.up_org}</td><td>실 계</td><td style="text-align: right; padding-right: 10px;">${goalamt.goal_amt}</td>
			</tr>
		</c:when>
		<c:when test="${goalamt.up_org ne null && goalamt.org ne null && goalamt.org_id ne null && goalamt.iuser_nm eq null && goalamt.reg_id eq null}">
			<tr class="goalparenttr">
				<td><input type="checkbox" class="tr_goalchk" id="goalchk" name="amt_chkname" value="${goalamt.org_id}" hidden="true"></td>
				<td>${goalamt.org}</td><td>팀 계</td><td style="text-align: right; padding-right: 10px;">${goalamt.goal_amt}</td>
			</tr>
		</c:when>
		<c:when test="${goalamt.up_org eq null && goalamt.up_org eq null && goalamt.org eq null && goalamt.org_id eq null && goalamt.iuser_nm eq null && goalamt.reg_id eq null}">
				<tr class="sumdata">
					<td></td><td colspan="2" style="text-align: center;">계</td><td style="text-align: right; padding-right: 10px;">${goalamt.goal_amt}</td>
				</tr>
			
		</c:when>
		<c:otherwise>
			<c:if test="${goalamt.up_org ne null && goalamt.org ne null && goalamt.org_id ne null && goalamt.iuser_nm ne null && goalamt.reg_id ne null}">
				<tr>
				<td><input type="checkbox" class="tr_goalchk" id="goalchk" name="amt_chkname" value="${goalamt.reg_id}/${goalamt.org_id}"></td>
				<td></td><td>${goalamt.iuser_nm}</td><td style="text-align: right; padding-right: 10px;">${goalamt.goal_amt}</td>
			</tr>	
			</c:if>
		</c:otherwise>
	</c:choose>
	</c:forEach>
	</tbody>
	</table>
	</div>
	</div>
	<div id="righttable">
		<div id="articleline2">
			<table id="articletable2">
				<tbody>
					<tr>
						<td>1월</td>
						<td>2월</td>
						<td>3월</td>
						<td>4월</td>
						<td>5월</td>
						<td>6월</td>
						<td>7월</td>
						<td>8월</td>
						<td>9월</td>
						<td>10월</td>
						<td>11월</td>
						<td>12월</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="tableline2" onscroll="whileScroll();">
			<table id="secondtable" >
				<tbody>
					<c:forEach var="goalamt" items="${staffGoalList}">
					<c:choose>
						<c:when test="${goalamt.up_org ne null &&  goalamt.org_id eq null && goalamt.iuser_nm eq null && goalamt.reg_id eq null }">
								<tr class="goalparenttr">
									<td class="goalcol" id="team_month_jan"><a id="jan_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jan}" groupingUsed="true" /></a><input type="hidden" id="inp_jan" class="inp_class"></td>
									<td class="goalcol" id="team_month_feb"><a id="feb_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_feb}" groupingUsed="true" /></a><input type="hidden" id="inp_feb" class="inp_class"></td>
									<td class="goalcol" id="team_month_mar"><a id="mar_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_mar}" groupingUsed="true" /></a><input type="hidden" id="inp_mar" class="inp_class"></td>
									<td class="goalcol" id="team_month_apr"><a id="apr_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_apr}" groupingUsed="true" /></a><input type="hidden" id="inp_apr" class="inp_class"></td>
									<td class="goalcol" id="team_month_may"><a id="may_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_may}" groupingUsed="true" /></a><input type="hidden" id="inp_may" class="inp_class"></td>
									<td class="goalcol" id="team_month_jun"><a id="jun_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jun}" groupingUsed="true" /></a><input type="hidden" id="inp_jun" class="inp_class"></td>
									<td class="goalcol" id="team_month_jul"><a id="jly_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jly}" groupingUsed="true" /></a><input type="hidden" id="inp_jly" class="inp_class"></td>
									<td class="goalcol" id="team_month_aug"><a id="agt_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_agt}" groupingUsed="true" /></a><input type="hidden" id="inp_agt" class="inp_class"></td>
									<td class="goalcol" id="team_month_sep"><a id="sep_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_sep}" groupingUsed="true" /></a><input type="hidden" id="inp_sep" class="inp_class"></td>
									<td class="goalcol" id="team_month_oct"><a id="oct_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_oct}" groupingUsed="true" /></a><input type="hidden" id="inp_oct" class="inp_class"></td>
									<td class="goalcol" id="team_month_nov"><a id="nov_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_nov}" groupingUsed="true" /></a><input type="hidden" id="inp_nov" class="inp_class"></td>
									<td class="goalcol" id="team_month_dec"><a id="dec_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_dec}" groupingUsed="true" /></a><input type="hidden" id="inp_dec" class="inp_class"></td>
								</tr>
							</c:when>
							<c:when test="${goalamt.up_org ne null &&  goalamt.org ne null && goalamt.org_id ne null && goalamt.iuser_nm eq null && goalamt.reg_id eq null}">
								<tr class="goalparenttr">
									<td class="goalcol" id="team_month_jan"><a id="jan_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jan}" groupingUsed="true" /></a><input type="hidden" id="inp_jan" class="inp_class"></td>
									<td class="goalcol" id="team_month_feb"><a id="feb_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_feb}" groupingUsed="true" /></a><input type="hidden" id="inp_feb" class="inp_class"></td>
									<td class="goalcol" id="team_month_mar"><a id="mar_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_mar}" groupingUsed="true" /></a><input type="hidden" id="inp_mar" class="inp_class"></td>
									<td class="goalcol" id="team_month_apr"><a id="apr_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_apr}" groupingUsed="true" /></a><input type="hidden" id="inp_apr" class="inp_class"></td>
									<td class="goalcol" id="team_month_may"><a id="may_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_may}" groupingUsed="true" /></a><input type="hidden" id="inp_may" class="inp_class"></td>
									<td class="goalcol" id="team_month_jun"><a id="jun_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jun}" groupingUsed="true" /></a><input type="hidden" id="inp_jun" class="inp_class"></td>
									<td class="goalcol" id="team_month_jul"><a id="jly_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jly}" groupingUsed="true" /></a><input type="hidden" id="inp_jly" class="inp_class"></td>
									<td class="goalcol" id="team_month_aug"><a id="agt_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_agt}" groupingUsed="true" /></a><input type="hidden" id="inp_agt" class="inp_class"></td>
									<td class="goalcol" id="team_month_sep"><a id="sep_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_sep}" groupingUsed="true" /></a><input type="hidden" id="inp_sep" class="inp_class"></td>
									<td class="goalcol" id="team_month_oct"><a id="oct_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_oct}" groupingUsed="true" /></a><input type="hidden" id="inp_oct" class="inp_class"></td>
									<td class="goalcol" id="team_month_nov"><a id="nov_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_nov}" groupingUsed="true" /></a><input type="hidden" id="inp_nov" class="inp_class"></td>
									<td class="goalcol" id="team_month_dec"><a id="dec_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_dec}" groupingUsed="true" /></a><input type="hidden" id="inp_dec" class="inp_class"></td>
								</tr>
							</c:when>
							<c:when test="${goalamt.up_org eq null && goalamt.up_org eq null && goalamt.org eq null && goalamt.org_id eq null && goalamt.iuser_nm eq null && goalamt.reg_id eq null }">
								<tr class="sumdata">
										<td class="goalcol" id="team_month_jan"><a id="jan_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jan}" groupingUsed="true" /></a><input type="hidden" id="inp_jan" class="inp_class"></td>
										<td class="goalcol" id="team_month_feb"><a id="feb_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_feb}" groupingUsed="true" /></a><input type="hidden" id="inp_feb" class="inp_class"></td>
										<td class="goalcol" id="team_month_mar"><a id="mar_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_mar}" groupingUsed="true" /></a><input type="hidden" id="inp_mar" class="inp_class"></td>
										<td class="goalcol" id="team_month_apr"><a id="apr_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_apr}" groupingUsed="true" /></a><input type="hidden" id="inp_apr" class="inp_class"></td>
										<td class="goalcol" id="team_month_may"><a id="may_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_may}" groupingUsed="true" /></a><input type="hidden" id="inp_may" class="inp_class"></td>
										<td class="goalcol" id="team_month_jun"><a id="jun_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jun}" groupingUsed="true" /></a><input type="hidden" id="inp_jun" class="inp_class"></td>
										<td class="goalcol" id="team_month_jul"><a id="jly_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jly}" groupingUsed="true" /></a><input type="hidden" id="inp_jly" class="inp_class"></td>
										<td class="goalcol" id="team_month_aug"><a id="agt_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_agt}" groupingUsed="true" /></a><input type="hidden" id="inp_agt" class="inp_class"></td>
										<td class="goalcol" id="team_month_sep"><a id="sep_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_sep}" groupingUsed="true" /></a><input type="hidden" id="inp_sep" class="inp_class"></td>
										<td class="goalcol" id="team_month_oct"><a id="oct_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_oct}" groupingUsed="true" /></a><input type="hidden" id="inp_oct" class="inp_class"></td>
										<td class="goalcol" id="team_month_nov"><a id="nov_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_nov}" groupingUsed="true" /></a><input type="hidden" id="inp_nov" class="inp_class"></td>
										<td class="goalcol" id="team_month_dec"><a id="dec_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_dec}" groupingUsed="true" /></a><input type="hidden" id="inp_dec" class="inp_class"></td>
									</tr>
							</c:when>
							<c:otherwise>
								<c:if test="${goalamt.org ne null && goalamt.org_id ne null && goalamt.iuser_nm ne null && goalamt.reg_id ne null}">
									<tr>
								<td class="goalcol" id="team_month_jan"><a id="jan_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jan}" groupingUsed="true" /></a><input type="hidden" id="inp_jan" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_feb"><a id="feb_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_feb}" groupingUsed="true" /></a><input type="hidden" id="inp_feb" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_mar"><a id="mar_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_mar}" groupingUsed="true" /></a><input type="hidden" id="inp_mar" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_apr"><a id="apr_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_apr}" groupingUsed="true" /></a><input type="hidden" id="inp_apr" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_may"><a id="may_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_may}" groupingUsed="true" /></a><input type="hidden" id="inp_may" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_jun"><a id="jun_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jun}" groupingUsed="true" /></a><input type="hidden" id="inp_jun" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_jul"><a id="jly_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_jly}" groupingUsed="true" /></a><input type="hidden" id="inp_jly" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_aug"><a id="agt_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_agt}" groupingUsed="true" /></a><input type="hidden" id="inp_agt" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_sep"><a id="sep_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_sep}" groupingUsed="true" /></a><input type="hidden" id="inp_sep" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_oct"><a id="oct_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_oct}" groupingUsed="true" /></a><input type="hidden" id="inp_oct" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_nov"><a id="nov_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_nov}" groupingUsed="true" /></a><input type="hidden" id="inp_nov" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								<td class="goalcol" id="team_month_dec"><a id="dec_amt" class="amt_class"><fmt:formatNumber value="${goalamt.sum_dec}" groupingUsed="true" /></a><input type="hidden" id="inp_dec" name="amt_inp[]" class="inp_class" onkeyup='number_chk(this);' onkeypress="fnkeypress(event);" readonly="readonly" disabled="disabled"></td>
								</tr>	
								</c:if>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</tbody>
			</table>
		</div>
	<div id="chkFuncBtn" style="display: none; float: right;">
		<button id="goal_button_cancel" class="goal_cancel" disabled="disabled" style="cursor: pointer;">취소</button>
		<button id="goal_button" class="goal_confirm" disabled="disabled" style="cursor: pointer;">저장</button>
		<button id="goal_button_modify" class="goal_modify" disabled="disabled" style="cursor: pointer;">편집</button>
	</div>
	</div>

</body>
</html>