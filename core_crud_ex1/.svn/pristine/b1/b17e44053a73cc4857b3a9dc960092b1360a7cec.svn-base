<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/tab_example.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/prod/prod.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/prod/prod_pop.js"></script>	
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/prod/prod_detail.js"></script> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	
<title>Insert title here</title>
<style type="text/css">
.ui-datepicker{ font-size: 13px; width: 300px;}
.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<script type="text/javascript">
function prodInserts(){
	var f = document.prodForm;
	f.method = 'post';
	f.action = "${ctx}/prodInsert";
	f.submit;
}
</script>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> <input
			id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">상세정보</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
		
		<form method="post" name="prodForm" id="prodForm" onsubmit="prodInsert()" enctype="multipart/form-data">
		<div class="act_tab_bt_div">
					<input type="button" id="prodCancelBtn" class="act_bt" value="취소"/>
					<input type="button" id="prodModifyBtn" class="act_bt" value="편집"/>
					<input type="button" id="prodAddBtn" class="act_bt" value="추가"/>
					<input type="button" id="prodSaveBtn" class="act_bt" value="저장"/>
		</div>
				<table id="act_tab_table">
					<tbody id="act_tab_tbody">
						<tr>
							<!-- 텍스트 박스 -->
							<th>상품(서비스)명</th>
							<td>
								<input type="text" name="prod_id" id="prod_id" style="display:none;">			
							<input type="text" name="prod_nm" id="prod_nm"
								class="act_nm" style="ms-ime-mode: disabled;" value="${prodDto.prod_nm}" disabled>
							</td>							
							<!-- 셀렉트 박스 -->
							<th>구분</th>
							<td>
								<input type="text" name="prod_div_cd_view" id="prod_div_cd_view" class="end_text" value="${prodDto.cd_nm}" disabled>
								
								<select name="prod_div_cd" id="prod_div_cd" class="code" style="display:none">
									<c:forEach var="pscl" items="${prodServicecCodeList}">
										<option value="${pscl.code}">${pscl.cd_nm}</option>
									</c:forEach>
								</select>
								
							</td>							
			     		</tr>
						<tr>
							<th>카테고리</th>
							<td><input type="hidden" name="cate_id" id="cate_id" class="oppt_txt_nm">
							    <input type="text" name="cate_nm" id="cate_nm" class="oppt_txt_nm" value="${prodDto.cate_nm}" disabled>							     
							    <input type="button" name="prod_cate" value="카테고리" class="prod_cate" id="prod_cate" disabled>
							</td>
							<th>판매가</th>
							<td><input type="text" name="prod_sales_amt" id="prod_sales_amt" class="customer_txt" value="${prodDto.prod_sales_amt}" disabled> 
							</td>							
						</tr>				
						<tr>
							<th>설명</th>
							<td>
								<textarea style="width: 76%;height: 100px;" name="prod_dtl_cont"
								 	id="prod_dtl_cont" class="prodTarea" disabled>
								 	${prodDto.prod_dtl_cont}								 	
								</textarea>
							</td>
		
		
		
		
							<th>url</th>
							<td>
							<input type="text" id="prod_url" name="prod_url" class="end_text" 
								style="padding:0px;" value="${prodDto.prod_url}" disabled>
							</td>
						</tr>
						<tr>	
							<th>이미지</th>
							<td id="image">
<%-- 								<a class="filedown" style="display : none;" href="${ctx}/prodDownload?prod_id=${data.prod_id}&mode=img">${prodDto.prod_img_nm}<img src="'+ctx+'/resources/image/disk.gif"></a> --%>
								<input type="button" id="image_change" class="act_bt" value="이미지 변경" style="display: none;"/>
								
								<input type="file" name="prod_img" id="prod_img" class="prod_file" disabled>
							</td>
							<th>카달로그</th>
							<td id="catal">		
								<%-- <a class="filedown" style="display : none;" href="${ctx}/prodDownload?prod_id=${data.prod_id}&mode=catal">${prodDto.prod_catal_nm}<img src="'+ctx+'/resources/image/disk.gif"></a>		 --%>
								<input type="button" id="catal_change" class="act_bt" value="카탈로그 변경" style="display: none;"/>
					        
								<input type="file" name="prod_catal" id="prod_catal" class="prod_file" disabled>
					        </td>						
						</tr>
									
					</tbody>
				</table>
		</form>
	</div>
</div>
</body>
</html>


