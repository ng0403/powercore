<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>CorePlus</title>
<style type="text/css">
html,body{
	width: 100%;
	height: 100%;
	margin: 0 auto;
	min-width: 800px;
	min-height: 720px;
}
</style>
</head>
<body>

	<div class="headFrame" style="width:100%; height: 15%; /* solid black; */float:left;">
		<div class="header" style="width:100%;height: 40%; /* solid black; */float:left; background:#29334b;">
				<tiles:insertAttribute name="header"></tiles:insertAttribute></div>
		<div class="navi" style="width:100%;height: 60%; /* solid black; */float:left;">
				<tiles:insertAttribute name="navi"></tiles:insertAttribute></div>
	</div>
	
	<div class="bodyFrame" style="width:100%; height:80%; overflow: hidden;">
		<div class="left" style="width:25%;min-height: 100%; /* border:1px solid black; */float:left; padding-left: 20px; padding-right: 10px;">
			<tiles:insertAttribute name="left"></tiles:insertAttribute></div>
		<div class="right" style="width:70%;min-height: 100%; float: left;  padding-right: 10px;">
			<tiles:insertAttribute name="right"></tiles:insertAttribute></div>
	</div>
	<div class="footer" style="width:100%;height: 5%; clear:both;">
			<tiles:insertAttribute name="footer"></tiles:insertAttribute>
	</div>

</body>
</html>