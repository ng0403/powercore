<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet"
	href="${ctx}/resources/common/css/sales/oppt/custcomp_actpop_css.css"
	type="text/css" />
<!-- <link rel="stylesheet" -->
<%-- 	href="${ctx}/resources/common/css/sales/oppt/operating_activity_popup.css" --%>
<!-- 	type="text/css" /> -->
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptAct_pop.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>영업활동 등록</title>
</head>
<body onload='javscript:if(${flg eq detail}) opptActiveDetail();'>

<div class="keymanview">
<input type="hidden" id="ctx" value="${ctx}">
<input type="hidden" id="custType" value="${custType}"/>
<input type="hidden" id="sales_oppt_id" value="${sales_oppt_id}">
<input type="hidden" id="flg" value="${flg}">
<input type="hidden" id="sales_actvy_id" value="${sales_actvy_id}">

<div id="title">
<div class="caption">● 영업활동 등록</div>
</div>
<div class="bt_position_popup">
   <div class="bs-example" data-example-id="simple-table">
  
	 <table id="operatingapopuptable">  			
							<tbody id="tbody1">
									<tr>
							<th>영업활동명</th>																	
							<td><input type="text" name="sales_actvy_nm" id="sales_actvy_nm" class="int" value="" ></td>
						</tr>
						<tr>  
							<th>고객사</th>
							<td><input type="text" name="cust_nm" id="cust_nm" class="int" value="${cust_nm}" readonly="readonly">
								<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}">
<!-- 								<input type="button" id="customer" value="고객"></td> -->
						</tr>
						<tr>
							<th>영업활동구분</th>
							<td>
							<c:forEach items="${actDivCd}" var="list">
							<input type="radio" id = "" name="sales_actvy_div_cd" class="sales_actvy_div_cd" value="${list.sales_actvy_div_cd}"/>${list.sales_actvy_div_nm}&nbsp; 
							</c:forEach> 
<!-- 								<input type="radio" id = "" name="" class="sales_actvy_div_cd" value="" />영업기회</td> -->
						</tr>
						<tr>
							<th>시작일자</th>
							<td>
							<input type="text" id="strt_d" name="dstrt_d" class="int_act" value="" readonly="readonly"></td>
						</tr>
						 <tr>
						 	<th>시작시간</th>
						 	<td>
							<select name="strt_t" id="strt_t_h" class="start_hour">
							 <option value="0" style="text-align: center;">==선택==</option>
										<option value="01">1</option>
										<option value="02">2</option>
										<option value="03">3</option>
										<option value="04">4</option>
										<option value="05">5</option>
										<option value="06">6</option>
										<option value="07">7</option>
										<option value="08">8</option>
										<option value="09">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>									
							</select>
							시
							<input type="hidden" id="hstrt_t_m">
							<select name="strt_t" id="strt_t_m" class="start_minute">
							 <option value="0" style="text-align: center;">==선택==</option>
										<option value="00">00</option>
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="30">30</option>
										<option value="40">40</option>
										<option value="50">50</option>						
							</select>
							분
							</td>
						</tr>
						<tr>
							<th>종료일자</th>
							<td>
							<input type="text" id="end_d" name="dend_d" class="int_act"  value="" readonly="readonly"></td>
						</tr>
						<tr>
							<th>종료시간</th>
							<td>
							<select name="ent_t" id="end_t_h" class="end_hour">
							<option value="0" style="text-align: center;">==선택==</option>
										<option value="01">1</option>
										<option value="02">2</option>
										<option value="03">3</option>
										<option value="04">4</option>
										<option value="05">5</option>
										<option value="06">6</option>
										<option value="07">7</option>
										<option value="08">8</option>
										<option value="09">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>									
							</select>
							시
							<input type="hidden" id="hend_t_m">
							<select name="end_t" id="end_t_m" class="end_minute">
							<option value="0" style="text-align: center;">==선택==</option>
										<option value="00">00</option>
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="30">30</option>
										<option value="40">40</option>
										<option value="50">50</option>	
							</select>
							분
							</td>
						</tr>
						<tr>
							<th>활동유형</th>
							<td>
							<select name="sales_actvy_type_cd" id="sales_actvy_type_cd" class="time">
							<option value="0" style="text-align: center;">==선택==</option>
							<c:forEach items="${actTypeCd}" var="list">
										<option value="${list.sales_actvy_type_cd}">${list.sales_actvy_type_nm}</option>							
							</c:forEach>
							</select>
							</td>
						</tr>
<!-- 						<tr> -->
<!-- 							<th>영업기회</th> -->
<!-- 							<td> -->

<!-- 							<input type="text" id="sales_oppt_nm" name="sales_oppt_nm" class="int"/> -->
<!-- 							<input type="button" id="opptSelect" value="영업기회" class="ebtn btn-chance"/>  -->
<!-- 							</td> -->
<!-- 						</tr>     -->
						<tr>
							<th>상태</th>
							<td>
							<select name="sales_actvy_stat_cd" id="sales_actvy_stat_cd" class="time">
							<option value="0" style="text-align: center;">==선택==</option>
							<c:forEach items="${actStatCd}" var="list">
										<option value="${list.sales_actvy_stat_cd}">${list.sales_actvy_stat_nm}</option>
							</c:forEach>
							</select>
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td>
							<textarea class="memo" id="memo" name="memo" rows="5" cols="35" style="resize: none;">${detail.memo}</textarea>
							</td>
						</tr>
					</tbody>
						</table>
	</div>
	<div class="act_bt_position">
		<input type="button" class="cust_oppt_btn" value="저장" id="activeButton"/>
		<input type="button" class="cust_oppt_btn" value="취소" id="activeAdd_cancel"/>
	</div>
	</div>
	
</div>
</body>
</html>