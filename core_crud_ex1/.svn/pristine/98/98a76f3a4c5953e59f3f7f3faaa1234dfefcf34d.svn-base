$(function(){
	var ctx = $('#ctx').val();
	var today = new Date();
	$("#bm").text(today.getFullYear()+"년 "+today.getMonth()+"월");
	$("#am").text(today.getFullYear()+"년 "+(today.getMonth()+1)+"월");
	$("#dboard_work_btn").css("background-color", "#8C8C8C");
	HomeDetailPop(ctx);
	contrResult(ctx);
	pipeLine(ctx);
});

$(document).ready(function() {
	// 업무 게시판 보기
	$("#dboard_work_btn").click(function() {
		$(".dboard_work").css("display", "block");
		$(".dboard_free").css("display", "none");
		$(".dboard_orgin").css("display", "none");
		
		$("#dboard_work_btn").css("background-color", "#8C8C8C");
		$("#dboard_free_btn").css("background-color", "#eaeaea");
		$("#dboard_orgin_btn").css("background-color", "#eaeaea");
		
		$("#dboard_div").val("0001");
	});
	// 자유 게시판 보기
	$("#dboard_free_btn").click(function() {
		$(".dboard_work").css("display", "none");
		$(".dboard_free").css("display", "block");
		$(".dboard_orgin").css("display", "none");
		
		$("#dboard_work_btn").css("background-color", "#eaeaea");
		$("#dboard_free_btn").css("background-color", "#8C8C8C");
		$("#dboard_orgin_btn").css("background-color", "#eaeaea");
		
		$("#dboard_div").val("0002");
	});
	// 자료실 보기
	$("#dboard_orgin_btn").click(function() {
		$(".dboard_work").css("display", "none");
		$(".dboard_free").css("display", "none");
		$(".dboard_orgin").css("display", "block");
		
		$("#dboard_work_btn").css("background-color", "#eaeaea");
		$("#dboard_free_btn").css("background-color", "#eaeaea");
		$("#dboard_orgin_btn").css("background-color", "#8C8C8C");
		
		$("#dboard_div").val("0003");
	});
	
});

function HomeDetailPop(ctx){
	// 일정 상세보기
	$('#schedule_detail').click(function(event){
		location.href = ctx + '/sch';
	});
	
	// 공지사항 상세보기
	$('#notice_detail').click(function(event){
		location.href = ctx + '/notice';
	});
	 
	// 자료실 상세보기
	$('#dboard_detail').click(function(event){
		location.href = ctx + '/dboard?code='+$("#dboard_div").val();
	});
	
	// 영업기회 상세보기
	$('#oppt_detail').click(function(event){
		location.href = ctx + '/oppt';
	});
}

// 계약실적 팝업
function contrResult(ctx){
	$('#estimResultBtn').click(function(event){
		event.preventDefault();
		window.open(ctx+"/contrResultpop",'newwindow','location=no, width=600, height=350, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});
}

// 영업 pipeline 팝업
function pipeLine(ctx){
	$('#pipeLineBtn').click(function(event){
		event.preventDefault();
		window.open(ctx+"/pipeLinePop",'newwindow','location=no, width=600, height=370, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});
}

// 스케줄 팝업
function schedulePopup(ctx, schedule_id, schedule_dt){
	window.open(ctx+"/homeSchedulePopup?schedule_id="+schedule_id+'&schedule_dt='+schedule_dt,'newwindow','location=no, width=600, height=370, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
}

// 홈에서 계약상세보기로 이동
function goContPage(contr_id) {
	var ctx = $("#ctx").val();
	var $form = $('<form></form>');
    $form.attr('action', ctx+'/cont');
    $form.attr('method', 'post');
    $form.appendTo($("#tableline"));
    
    var contr_id = $('<input type="hidden" value="'+contr_id+'" name="contr_id">');

    $form.append(contr_id);
    $form.submit();
}
// 계약 페이지 이동
function goCont(contr_id) {
	window.opener.goContPage(contr_id);
	self.close();
}

// 홈에서 계약상세보기로 이동
function goOpptPage(sales_oppt_id) {
	var ctx = $("#ctx").val();
	var $form = $('<form></form>');
	$form.attr('action', ctx+'/oppt');
	$form.attr('method', 'post');
	$form.appendTo($("#tableline"));
	
	var sales_oppt_id = $('<input type="hidden" value="'+sales_oppt_id+'" name="sales_oppt_id">');
	
	$form.append(sales_oppt_id);
	$form.submit();
}
// 계약 페이지 이동
function goOppt(sales_oppt_id) {
	window.opener.goOpptPage(sales_oppt_id);
	self.close();
}
/*// 공지사항 페이지로 이동
function noticelistenToGoPage(ctx, noticeid){
	
	location.href=ctx+"/noticedetail?noticeId="+noticeid;
	
}

// 자료실 페이지로 이동
function dboardlistenToGoPage(ctx, dboardid){
	
	location.href=ctx+"/dboarddetail?dboardId="+dboardid;
	
}*/

/*// 해당 게시글 보기
function atagfunc(ctx){
	
	// 공지사항 게시글 보기
	$('.noticetable').delegate('a', 'click', function(event){
		
		event.preventDefault();
		var hrefdata = $(this).attr("href");
		var notice =hrefdata.split("=");
		var noticeid = notice[1];
		
		$.ajax({
			
			url : ctx+'/noticeclickNum',				//보낼 URL
			dataType : 'text',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  noticeid,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'text/html; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				location.href=ctx+"/noticedetail?noticeId="+noticeid;
				
			}, error : function(){
				alert("실패");
			}
			
		});
		
	});
	
	// 자료실 게시글 보기
	$('.dboardtable').delegate('a', 'click', function(event){
		
		event.preventDefault();
		var hrefdata = $(this).attr("href");
		var dboard =hrefdata.split("=");
		var dboardid = dboard[1];
		
		$.ajax({
			
			url : ctx+'/dboardclickNum',				//보낼 URL
			dataType : 'text',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  dboardid,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'text/html; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				location.href=ctx+"/dboarddetail?dboardId="+dboardid;
				
			}, error : function(){
				alert("실패");
			}
			
		});
		
	});
	
}*/