<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/category/categoryPopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/category/categoryPopup.css" type="text/css" />
<title>상위메뉴 팝업창</title>
</head>
<body>
<input id="ctx" type="hidden" value="${ctx}"/>
<div id="title">
<br>
<div class="caption">● 카테고리 검색창</div>
<div class="bt_position_popup">
		<form name="searchForm" method="post" action="${ctx}/upCateSearch">
			<select name="keyfield">
				<option value="up_cate_nm">카테고리명</option>
				<option value="up_cate_id">카테고리ID</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="submit" class="btn btn-default">검색</button>
			</form>
		</div>
	</div>	
   
   <div class="bs-example" data-example-id="simple-table">
	<form name="delAllForm" id="delAllForm" method="post" action="" >	
		<table id="mastertable">
			<thead>
				<tr>
					<th><input id="allCheck" type="checkbox"/></th>
					<td style="width:22%;">카테고리ID</td>
					<td style="width:22%;">카테고리명</td>
					<td style="width:14%;">최초등록자</td>
					<td style="width:15%;">최초등록일</td>
					<td style="width:14%;">최종변경자</td>
					<td style="width:15%;">최종변경일</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="cateList" items="${cateList}">
				<tr onMouseOver="this.style.backgroundColor='#ebe7e7'" onMouseOut="this.style.backgroundColor=''">
					<th scope="row"><input type="checkbox" class="cateCheck" id="ak" name="cateCheck" value="${cateList.cate_id}"></th>
					<td style="width:22%;" id="cate_id">${cateList.cate_id}</td>
					<td style="width:22%;" id="cate_nm">${cateList.cate_nm}</td>
					<td style="width:14%;">${cateList.fst_reg_id_nm}</td>
					<td style="width:15%;">
						<fmt:formatDate value="${cateList.fst_reg_dt}" pattern="yyyy-MM-dd"/>
					</td>
					<td style="width:14%;">${cateList.fin_mdfy_id_nm}</td>
					<td style="width:15%;">
						<fmt:formatDate value="${cateList.fin_mdfy_dt}" pattern="yyyy-MM-dd"/>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
	<br>
	<div class="bt_position">
		<input type="button" class="btn btn-default" value="선택" id="choiceCate"/>
		<input type="button" class="btn btn-default" value="취소" id="restCate"/>
	</div>
</body>
</html>