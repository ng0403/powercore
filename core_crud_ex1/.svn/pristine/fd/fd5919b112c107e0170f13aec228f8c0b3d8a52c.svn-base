<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>우편번호</title>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custpson/zipcode_js.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/zipcode_css.css" type="text/css" />
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}"/>
	<div class="layer_wrap win_pop">
		<div class="tit">
			<h1>우편번호 찾기</h1>
			<span onclick="close_zipcode();" class="pop_btn btn_close"><span class="blind"></span></span>
		</div>
		<div class="content">
			<div class="content_inner">
				<div id="tab_content01" class="tab_content_wrap">
					<!--search -->
					<div class="search_wrap_v2">
						<span class="title">동(읍/면/리/가)을 입력해 주세요. (예: 삼성동, 을지로3가)</span>
						<div class="srchbar">
							<div class="srch_inner">
								<fieldset>
									<legend>검색 영역</legend>
									<input type="text" name="zip_search" id="zip_search" style="outline:none" 
									maxlength="30" autocomplete="off" title="검색어 입력" autofocus="autofocus"/>
									<button class="searchBtn" onClick="zipCodeSearch(1);">검색</button>
								</fieldset>
							</div>
						</div>
					</div>
					
					<div id="searchAddr" class="bx_scroll lot_num" style="display:none">
						<div id="schRstNum"></div>
						<table id="schRstTbl" class="schRstTbl">
							<tbody id="schRstTblTbody">
								
							</tbody>
						</table>
						<br>
						<div id="zipPaging" style="text-align: center;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>