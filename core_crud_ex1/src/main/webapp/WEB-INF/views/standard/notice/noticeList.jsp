<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/notice/noticeList.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/notice/noticeList.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/notice/employee_js.js"></script>
<title>공지사항</title>
<script type="text/javascript">
$("#navisub9").show();
$("#navinotice").css("font-weight", "bold");
</script>
</head>
<body>
<!-- 검색값 유지하기 위해 hidden으로 넘김  -->
	<input type="hidden" id="dataselectbox1" value="${titlecont}">
	<input type="hidden" id="search" value="${search}">
	<input type="hidden" id="orgCode" value="${orgCode}">
		
	<input type="hidden" id="ctx" value="${ctx}">
	<c:if test="${not empty searchnotice||searchnotice==''}">
	<input type="hidden" id="searchnotice" value="${searchnotice}">
	</c:if>
	<c:if test="${not empty selectcode}">
	<input type="hidden" id="selectcode" value="${selectcode}">
	</c:if>
	
	<div id="title">
		<div class="caption">■ 영업정보 > 공지사항</div>
	</div>
	
	<div>
	<form name="SearchForm" method="get" action="">
	<table id="notice_searchTable">
		<!-- <tr>
			<th>구분</th>
			<td>
				<select name="noticeselectbox" id="noticeselectbox" class="noticeselectbox">
			
					<option>공지</option>
					<option value="empty">전체 공지</option>
					<option value="0001">부서 공지</option>
					<option value="0002">실 공지</option>
					<option value="0003">팀 공지</option>
				</select>
			</td>
		</tr> -->
		<tr>
			<th>검색어</th>
			<td id="dataSearch">
				<select name="titlecont" id="dataselectbox1" class="dataselectbox1">
					<option value="title">제목</option>
					<option value="cont"> 내용</option> 
				</select>
					<input type="text" name="search" id="ssearch" class="inttop2">
			</td>
			<th>부서</th>
			<td id="dataDepartment">
			<select name="orgCode" id="dataselectbox2" class="dataselectbox2">
				<option value="" selected="selected">-- 담당부서 --</option>
					<c:choose>
						<c:when test="${orgList.size() > 0 }">
							<c:forEach var="i" begin="0" end="${orgList.size()}" step="1">
								<option value="${orgList[i].org_id}">${orgList[i].org_nm}</option>
							</c:forEach>
						</c:when>
					</c:choose>
			</select>
			</td>
			<th>직원</th>
			<td id="dataPeople">
				<input type="hidden" name="iuser_id_nm" id="iuser_id_nm"/> 
				<input type="text"   name="iuser_nm" id="iuser_nm" class="int_ad" value="${iuser_nm}" readonly="readonly"/>
				<input type="button" name="iuser_search" id="iuser_search" value="직원검색" class="people_btn"/>
			</td>
			<td>
				<input type="submit" id="searchnoticebtn" class="searchbtn btn-default" value="검색">
			</td>
		</tr>
	</table>
	</form>
	</div>
	
	<table id="noticetable">
		<thead>
			<tr>
				<td style="width:5%;">순번</td>
				<td style="width:50%;">제목</td>
				<!-- <td style="width:10%;">시작일자</td> -->
				<!-- <td style="width:10%;">종료일자</td> -->
				<td style="width:15%;">작성일자</td>
				<td style="width:15%;">담당부서</td>
				<td style="width:10%;">작성자</td>
				<td style="width:5%; text-align:center;">조회수</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="notice" items="${notice}">
				<tr>
					<td>${notice.RNUM}</td>
					<td style="text-align: left;"><input type="hidden" value='${notice.NOTICE_ID}'>
						<a href="#" onclick="window.open('${ctx}/noticedetail?noticeId=${notice.NOTICE_ID}','newwindow','width=580, height=460');" class="a_notice">${notice.TITLE}</a>
					</td>
					<td><fmt:formatDate value="${notice.FST_REG_DT}" pattern="yyyy-MM-dd" /></td>
					<td>${notice.ORG_NM}</td>
					<td>${notice.LIUSER_NM}</td>
					<td style="text-align: center;">${notice.CHK_NUM}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table> 
	
	<div id="directbtndiv">
	<input type="hidden" value="${pagerVO.startPageNum}" id="hcurrentPageNum">
	<input type="hidden" value="${pagerVO.pageBlockSize}" id="hpageBlockSize">
	<input type="hidden" value="${pagerVO.totalPageCount}" id="htotalpagecount">
	<div id="numbtndiv">
	<a href="#" id="leftnumbtn"><img src="${ctx}/resources/image/treebtn1.png" style="transform:rotate(180deg);"></a>
	<c:set var="page" value="${pagerVO.startPageNum}"/>
	
	<c:forEach begin="${pagerVO.startPageNum}" end="${pagerVO.endPageNum}">
	<c:if test="${page-1<=pagerVO.endPageNum}">
	<a href="${ctx}/notice?currentPageNum=${page}" class="numbtn"><c:out value="${page}"/></a>
	<c:set var="page" value="${page+1}"/>
	</c:if>
	</c:forEach>
	<a href="#" id="rightnumbtn"><img src="${ctx}/resources/image/treebtn1.png"></a>
	</div>
	</div>
	<div id="btndiv">
	<input type="button" class="btn btn-default" value="공지사항 등록" id="notice_add" />
	</div>
	
</body>
</html>