<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/lead/lead.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_popup.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_btn.js"></script>
<!-- 페이지를 위한 자바스크립트 -->
	<script type="text/javascript" src="${ctx}/resources/common/js/sales/lead/lead_list.js"></script> 

<title>가망고객</title>
</head>
<body>
	<div id="title">
		<div class="caption">■ 가망고객</div>
	</div>
		   <div class="search_div">
				<table id="leadtable">
					<tbody id="leadbody">
						<tr>  
							<th>고객명</th>
							<td id = "cust_nm1">
								<input type="text" name="cust_nm" id="scust_nm" class="inttop2" value="${map.cust_nm}" onkeydown="schLead(event);">
							</td>
							<th>이메일</th>
							<td id = "email">
								<input type="text" name="semail1" id="semail1" class="inttop1" value="${map.email1}" onkeydown="schLead(event);"> @ 
								<input type="text" name="semail2" id="semail2" class="inttop1" value="${map.email2}" onkeydown="schLead(event);"> 
							</td>
							<th>이동전화번호</th>
							<td id = "cell_ph">
								<input type="text" name="scell_ph1" id="scell_ph1" class="inttop0" value="${map.cell_ph1}" onkeydown="schLead(event);" onkeyup='removeChar(event);' maxlength="3"> - 
								<input type="text" name="scell_ph2" id="scell_ph2" class="inttop0" value="${map.cell_ph2}" onkeydown="schLead(event);" onkeyup='removeChar(event);' maxlength="4"> - 
								<input type="text" name="scell_ph3" id="scell_ph3" class="inttop0" value="${map.cell_ph3}" onkeydown="schLead(event);" onkeyup='removeChar(event);' maxlength="4">  
							</td>
							<th>전화번호</th>
							<td id = "cell_ph">
							    <input type="text" name="srep_ph1" id="srep_ph1" class="inttop0" value="${map.rep_ph1}" onkeydown="schLead(event);" onkeyup='removeChar(event);' maxlength="3"> - 
							    <input type="text" name="srep_ph2" id="srep_ph2" class="inttop0" value="${map.rep_ph2}" onkeydown="schLead(event);" onkeyup='removeChar(event);' maxlength="4"> - 
							    <input type="text" name="srep_ph3" id="srep_ph3" class="inttop0" value="${map.rep_ph3}" onkeydown="schLead(event);" onkeyup='removeChar(event);' maxlength="4"> 
							</td>
							<th>리드소스</th>
							<td id="lead_select">
							     <select name="lead_src_cd" id="slead_src_cd" class="int_select" onkeydown="schLead(event);">		
										<option value="0">--리드소스--</option>
										<c:forEach var="LRC" items="${LRCCodeList}">
											<option value="${LRC.lead_src_cd}" >${LRC.lead_src_cd_nm}</option>
										</c:forEach>
							     </select>
						    </td>
							<th>리드상태</th>
							<td id="lead_select">
							     <select name="lead_stat_cd" id="slead_stat_cd" class="int_select" onkeydown="schLead(event);">	
										<option value="0">--리드상태--</option>
										<c:forEach var="LSC" items="${LSCCodeList}">
											<option value="${LSC.lead_stat_cd}" >${LSC.lead_stat_cd_nm}</option>
										</c:forEach>
							     </select>
							</td>
							<td>
							    <input type="button" id="search" class="btnsearch" onclick="schPaging(1);" value="조회"/>
							</td>
					</tbody>
				</table>
	    	</div>
	
<div id="tableline">
<table id="leadList">
	<thead>
		<tr>
		<th style="width:2%"><input type="checkbox" id='leadListCheck'/></th>
		<td style="width:12%;">고객명</td>
		<td style="width:13%;">이메일</td>
		<td style="width:11%;">이동전화번호</td>
		<td style="width:11%;">전화번호</td>
		<td style="width:10%;">리드소스</td>
		<td style="width:10%;">리드상태</td>
		<td style="width:8%;">등록자</td>
		<td style="width:17%;">등록일시</td>
		</tr>
	</thead>
	<tbody id="leadListBody">
		<c:forEach var="result" items="${leadList}">
		<tr>
			<th><input type="checkbox" id="chk_lead_id" value="${result.cust_id}" onclick="chkCancel();"></th>
			<td id ="leadListBody1">
				<a href="javascript:leadDetail('${result.cust_id}')" class="lnClick" style="color: blue;">${result.cust_nm}</a></td>
			<td id ="leadListBody1">${result.email}</td>
			<td id ="leadListBody3">${result.cell_ph}</td>
			<td id ="leadListBody3">${result.rep_ph}</td>
			<td id ="leadListBody3">${result.lead_src_cd}</td>
			<td id ="leadListBody3">${result.lead_stat_cd}</td>
			<td id ="leadListBody3">${result.fst_reg_id_nm}</td>
			<td id ="leadListBody3">${result.fst_reg_dt}</td>
		</tr>
		</c:forEach>
	</tbody>
</table>
</div>

<!-- 페이징 처리 -->
<div id="pagingDiv">
	<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
	<input type="hidden" id="startPageNum" value="${page.startPageNum}"/>
	<input type="hidden" id="leadListPageNum" value="${leadListPageNum}"/>
	
	<c:choose>
	<c:when test="${leadListPageNum == page.startPageNum}">
		<a>◀</a>
		<input type="text" id="leadListPageInput" value="${page.startPageNum}" onkeypress="pageInput(event);"/> 
		<a href="#" onclick="paging('${page.endPageNum}');" id="pNum" > / ${page.endPageNum}</a>
		<a href="#" onclick="paging('${leadListPageNum+1}');" id="pNum">▶</a>
	</c:when>

	<c:when test="${leadListPageNum == page.endPageNum}">
		<a href="#" onclick="paging('${leadListPageNum-1}');" id="pNum">◀</a> 
		<input type="text" id="leadListPageInput" value="${page.endPageNum}" onkeypress="pageInput(event);" /> 
		<a href="#" onclick="paging('${page.endPageNum}');" id="pNum"> / ${page.endPageNum}</a>
		<a>▶</a>
	</c:when>
	
	<c:otherwise>
		<a href="#" onclick="paging('${leadListPageNum-1}');" id="pNum" >◀</a>
		<input type="text" id="leadListPageInput" value="${leadListPageNum}" onkeypress="pageInput(event);" /> 
		<a href="#" onclick="paging('${page.endPageNum}');" id="pNum"> / ${page.endPageNum}</a>
		<a href="#" onclick="paging('${leadListPageNum+1}');" id="pNum">▶</a>
	</c:otherwise>
	</c:choose>
</div>
				
<div id="lead_stat_cd_btn">
	<input type="button" id="leadChangebtn" class="btnsearch" value="리드변환"  disabled="disabled">
	<input type="button" id="leadSuit"      class="btnsearch" value="심사적합"  disabled="disabled">
	<input type="button" id="leadUnsuit"    class="btnsearch" value="심사부적합" disabled="disabled">
</div>   
				
<div id="lead_button_position">
	<input type="button" id="CandP"  class="btnsearch" value="추가" onclick="leadSelect('${ctx}');">
	<input type="button" id="CupP"   class="btnsearch" value="편집" disabled="disabled" onclick="leadCupP('${ctx}');">
	<input type="button" id="delete" class="btnsearch" value="삭제" onclick="leadDel('${ctx}');">
</div>

</body>
</html>