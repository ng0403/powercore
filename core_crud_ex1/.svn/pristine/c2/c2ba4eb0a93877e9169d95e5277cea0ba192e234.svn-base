<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/lead/lead_tab.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_tab.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_btn.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_popup.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/addr/zipcode_js.js"></script>

<title>가망고객</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowCust_id" />
	
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" />
		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">상세정보</label>
		
	<form id="leadTabForm">
		<div id="tabDiv1" class="tab1_content">
			<div id="lead_button_position">
				<input type="button" class="btn-success-tel" id="lead_cancel" value="취소" style="display: none;" onclick="leadCancel('${ctx}');">
			</div>
			<div class="bt_position_authuser">
				<input type="button" class="btn-success-tel" id="lead_insert" value="등록완료" style="display: none;" onclick="leadAdd('${ctx}');">
				<input type="button" class="btn-success-tel" id="lead_update" value="수정완료" style="display: none;" onclick="leadUp('${ctx}');">
			</div> 
			<br><br><br>
			<div id="pcustomerdiv">
				<table id="pcustomertable">
					<tbody id="leadTabtbody" >
						<tr>
							<th>고객명</th>
							<td>
							   <input type="hidden" id="cust_id" name="cust_id"/>
							   <input type="hidden" id="lead_id" name="lead_id"/>
							   <input type="hidden" id="hcust_nm" />
							   <input type="text" id="cust_nm" name="cust_nm" class="int" readonly="readonly"/>
							</td>
							<th>이메일</th>
							<td>
								<input type="hidden" id="hemail1" />
								<input type="hidden" id="hemail2" />
							    <input type="text" id="email1" name="email1" class="int_email" readonly="readonly"/> @  
							    <input type="text" id="email2" name="email2" class="int_email" readonly="readonly"/>
							</td>
							<th>전화번호</th>
							<td>
								<input type="hidden" id="hrep_ph1" />
								<input type="hidden" id="hrep_ph2" />
								<input type="hidden" id="hrep_ph3" />
							    <input type="text" id="rep_ph1" name="rep_ph1" class="int_tel" readonly="readonly" onkeyup='removeChar(event);' maxlength="3"/> -  
							    <input type="text" id="rep_ph2" name="rep_ph2" class="int_tel" readonly="readonly" onkeyup='removeChar(event);' maxlength="4"/> - 
							    <input type="text" id="rep_ph3" name="rep_ph3" class="int_tel" readonly="readonly" onkeyup='removeChar(event);' maxlength="4"/> 
						    </td>
							<th>이동전화번호</th>
							<td>
								<input type="hidden" id="hcell_ph1" />
								<input type="hidden" id="hcell_ph2" />
								<input type="hidden" id="hcell_ph3" />
							    <input type="text" id="cell_ph1" name="cell_ph1" class="int_tel" readonly="readonly" onkeyup='removeChar(event);' maxlength="3"/> - 
							    <input type="text" id="cell_ph2" name="cell_ph2" class="int_tel" readonly="readonly" onkeyup='removeChar(event);' maxlength="4"/> -
							    <input type="text" id="cell_ph3" name="cell_ph3" class="int_tel" readonly="readonly" onkeyup='removeChar(event);' maxlength="4"/>
							</td>
						</tr> 
						<tr><td>&nbsp;&nbsp;</td></tr>
						<tr>
							<th>사업자번호</th>
							<td>
								<input type="hidden" id="hcomp_num" />
							    <input type="text" id="comp_num" name="comp_num" class="int" readonly="readonly" maxlength="9" onkeyup='removeChar(event);'/> 
							</td>
							<th>법인번호</th>
							<td>
								<input type="hidden" id="hcorp_num" />
							    <input type="text" id="corp_num" name="corp_num" class="int" readonly="readonly" maxlength="9" onkeyup='removeChar(event);'/> 
							</td>
							<th>리드소스</th>
							<td id="lead_src_cd_location">
								<input type="hidden" id="d_lead_src_cd">
							     <select name="lead_src_cd" id="lead_src_cd" class="int_select" >		
										<option value="0">--리드소스--</option>
										<c:forEach var="LRC" items="${LRCCodeList}">
											<option value="${LRC.lead_src_cd}" >${LRC.lead_src_cd_nm}</option>
										</c:forEach>
							     </select>
							</td>
							<th>리드상태</th>
							<td>
								<input type="hidden" id="d_lead_stat_cd"> 
							     <select name="lead_stat_cd" id="lead_stat_cd" class="int_select" >	
										<option value="0">--리드상태--</option>
										<c:forEach var="LSC" items="${LSCCodeList}">
											<option value="${LSC.lead_stat_cd}" >${LSC.lead_stat_cd_nm}</option>
										</c:forEach>
							     </select>
							</td>
						</tr>
						<tr><td>&nbsp;&nbsp;</td></tr>
						<tr>
							<th>주소지</th>
							<td colspan="8">
								<input type="hidden" id="zip_cd_sri_num" name="zip_cd_sri_num" />
								<input type="hidden" id="hcust_zip_cd" /> 
								<input type="hidden" id="hcust_zip_addr" /> 
								<input type="hidden" id="hcust_addr" /> 
								
								<input type="text" id="cust_zip_cd1"  name="cust_zip_cd1"  class="int_detail"     readonly="readonly">-
								<input type="text" id="cust_zip_cd2"  name="cust_zip_cd2"  class="int_detail"     readonly="readonly">
								<input type="button" id="leadAddr" name="leadAddr" class="btnsearch" value="우편번호" disabled="disabled"/>
								<input type="text" id="cust_zip_addr" name="cust_zip_addr" class="int_detail_ad"  readonly="readonly">
								<input type="text" id="cust_addr"     name="cust_addr"     class="int_detail_ad"  readonly="readonly"> 
								
							</td>
						</tr>
					</tbody>
				</table>
	    	</div>
		</div>	
	</form>
</div>
</body>
</html>
