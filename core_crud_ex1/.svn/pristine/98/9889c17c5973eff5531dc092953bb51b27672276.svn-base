<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/act_oppt_list_pop.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/contJs.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/cont_pop.js"></script>
<script type="text/javascript">
if('${ccOpptPopList.size()}' == 0){
	alert("해당 고객의 진행 중인 영업기회가 없습니다.");
	self.close();
}
</script>
<title>영업기회 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 영업기회 리스트</div>
		
		<div class="act_oppt_list_div">
			<table id="act_oppt_list_table">
				<thead>
					<tr style="text-align: center;">
						<td style="width:26%;">영업기회명</td>
						<td style="width:12%;">영업단계</td>
						<td style="width:15%;">견적금액</td>
						<td style="width:15%;">예상마감일자</td>
						<td style="width:12%;">가능성(%)</td>
						<td style="width:10%;">상태</td>
						<td style="width:10%;">등록자</td>
					</tr>
				</thead>
				</table>
				<table id="act_oppt_list_table">
				<tbody>
					<c:forEach var="ccOppt" items="${ccOpptPopList}">
						<tr onclick="actOpptNmSelect('${ccOppt.sales_oppt_id}','${ccOppt.sales_oppt_nm}');">
							<td style="width:26%;">${ccOppt.sales_oppt_nm}</td>
							<td style="width:12%;">${ccOppt.sales_lev_cd}</td>
							<td style="width:15%;">${ccOppt.sales_price}</td>
							<td style="width:15%;">${ccOppt.expt_fin_d}</td>
							<td style="width:12%;">${ccOppt.psblty_rate}</td>
							<td style="width:10%;">${ccOppt.sales_oppt_stat_cd}</td>
							<td style="width:10%;">${ccOppt.fst_reg_id_nm}</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>