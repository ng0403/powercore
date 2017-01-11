<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet"
	href="${ctx}/resources/common/css/sales/est/estList.css"
	type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css"> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estList.css" type="text/css" />
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	 --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estList.js"></script>


<style type="text/css">
	.ui-datepicker{ font-size: 13px; width: 300px;}
	.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
	.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>

<title>견적</title>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">
<%-- <form action="${ctx}/est" method="get" id="listForm"> --%>
	<div id="title">
		<div class="caption">■ 견적</div></div>
		   <div class="search_div" >
			    <label for="scompNam" class="tel_label_list">견적명</label>
			      <input type="text" class="tel_search" name="estim_nm" id="sestim_nm" value="${estim_nm}" autofocus="autofocus" onkeypress="estSearchInput(event);"> 
			    <label for="inputPassword1" class="tel_label_list">견적단계</label>
			      <select class="tel_search" name="estim_lev_cd" id="sestim_lev_cd">
										<option value="">선택</option>
										<c:forEach items="${elclist}" var="elclist">
										<option value="${elclist.code}">${elclist.cd_nm}</option>
										</c:forEach>
								</select>
			    <label for="inputPassword1" class="tel_label_list">견적금액</label>
			    
			      <input type="text" class="tel_search" name="sales_price_1" id="ssales_price_1" value="${sales_price_1}" onkeypress="estSearchInput(event);">
			       <select class="tel_search" name="sales_price_2" id="ssales_price_2">
										<option value="">선택</option>
										<option value="1">원</option>
										<option value="10000">만원</option>
								</select>
			    <label for="start_day" class="tel_label_list">견적유효일자</label>
			   <input type="text" name="estim_valid_d" id="sestim_valid_d" class="tel_search" readonly="readonly"/>
			   <%-- value = "<fmt: parseDate  value="${estim_valid_d}" pattern="yy/MM/dd"/>"  --%>
			    <button type="submit" class="btn-success-tel" id="searchlist" onclick="searchBtn(1);">조회</button> 
		    </div>
<!-- </form> -->
		    
		    <div id="tableline">
<table id="goaltable" class="tabtable">
<thead>
	<tr>
		<th style="width: 3%;"><input type="checkbox" id="estimAllSelect" ></th>
		<td style="width: 26%;">견적명</td>
		<td style="width: 10%;">견적단계</td>
		<td style="width: 10%;">견적수량</td>
		<td style="width: 14%;">견적금액</td>
		<td style="width: 14%;">견적유효일자</td>
		<td style="width: 9%;">등록자</td>
		<td style="width: 14%;">등록일시</td>
	</tr>
</thead>
<tbody id="estList">
	<c:forEach var="result" items="${list}" >
		<tr>
			<th><input type="checkbox" value="${result.estim_id}" onclick="javascript:chkCancel();"></th>
			<td style='text-align: left; padding-left:5px;'>
				<a style='text-decoration: none;' href="javascript:estDetail('${result.estim_id}');">
				<c:out value="${result.estim_nm}" /></a></td>
			<td><c:out value="${result.estim_lev_cd_nm}" /></td>
			<td><c:out value="${result.estim_qty}" /></td>
			<td style='text-align: right; padding-right:5px;'><fmt:formatNumber value="${result.sales_price}" /></td>
			<td><c:out value="${result.estim_valid_d}" /></td>
			<td><c:out value="${result.fst_reg_id_nm}" /></td>
			<td><c:out value="${result.fst_reg_dt}" /></td>
		</tr>
	</c:forEach>
</tbody>
</table>
</div>

<!-- 페이징 처리 -->
<div id="pageSpace">
	<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
	<input type="hidden" id="ccPageNum" value="${ccPageNum}">
	<c:choose>
	<c:when test="${ccPageNum == page.startPageNum && ccPageNum != page.endPageNum}">
<%-- 	<c:when test="${ccPageNum == page.startPageNum}"> --%>
		<a id="pNum"> ◀ </a>
		<input type="text" id="ccPageInput" value="${page.startPageNum}" onkeypress="estPageInput(event);" /><a> / </a> 
		<a  href="javascript:list('${page.endPageNum}');" id="pNum" >${page.endPageNum}</a>
		<a href="javascript:list('${ccPageNum+1}');" id="pNum"> ▶ </a>
	</c:when>
	<c:when test="${ccPageNum == page.endPageNum}">
		<a href="javascript:list('${ccPageNum-1}');" id="pNum"> ◀ </a>
		<input type="text" id="ccPageInput" value="${page.endPageNum}" onkeypress="estPageInput(event);"/><a> / </a> 
		<a href="javascript:list('${page.endPageNum}');" id="pNum">${page.endPageNum}</a>
		<a id="pNum"> ▶ </a>
	</c:when>
	<c:otherwise>
		<a href="javascript:list('${ccPageNum-1}');" id="pNum" > ◀ </a>
		<input type="text" id="ccPageInput" value="${ccPageNum}" onkeypress="estPageInput(event);"/><a> / </a> 
		<a href="javascript:list('${page.endPageNum}');" id="pNum">${page.endPageNum}</a>
		<a href="javascript:list('${ccPageNum+1}');" id="pNum"> ▶ </a>
	</c:otherwise>
	</c:choose>
</div>
	<!-- 페이징 처리 -->
				<div id="baseBtnDiv" class="bt_position_authuser">
					<input type="button" id="addBtn" value="추가" class="custcomp_btn" onclick="estAddBtn();"/>
					<input type="button" id="mdfBtn" value="편집" class="custcomp_btn" disabled="disabled" onclick="estMdfyBtn();"/>
				</div>
				<div id="addBtnDiv" style="display: none;" class="bt_position_authuser">
					<input type="button" id="addSaveBtn" value="저장" onclick="save_Click('${ctx}');" class="custcomp_btn"/>
					<input type="button" id="addCancelBtn" value="취소" class="custcomp_btn" onclick="cancel_Click();"/>
				</div>
				<div id="mdfBtnDiv" style="display: none;" class="bt_position_authuser">
					<input type="button" id="mdfSaveBtn" value="저장" onclick="save_Click('${ctx}');" class="custcomp_btn"/>
					<input type="button" id="mdfCancelBtn" value="취소" class="custcomp_btn" onclick="cancel_Click();"/>
				</div>	
				<div class="bt_position_authuser">
					<input type="button" id="estimDeleteBtn" class="custcomp_btn" value="삭제">	
				</div>
</body>
</html>