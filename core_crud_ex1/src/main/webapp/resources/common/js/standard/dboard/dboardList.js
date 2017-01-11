$(function(){
	
	var ctx = $('#ctx').val();
	dboardListbtnfunc(ctx);
	clickdboardtitle(ctx);
	employeePop(ctx);
	SearchForm(ctx);
	
	var selectcode = $('#selectcode').val();  //자료구분 값 유지
	$('#dataselectbox').val(selectcode);
	
	var titlecont = $('#titlecont').val();   //자료/제목 유지
	$('#dataselectbox1').val(titlecont);
	
	var search = $('#search').val();   //자료/제목 검색 값 유지
	$('#ssearch').val(search);
	
	var orgCode = $('#orgCode').val(); //부서 검색 콤보박스 값 유지
	$('#dataselectbox2').val(orgCode);
	
	var iuser_nm = $('#iuser_nm').val(); //직원검색 값 유지
	$('#iuser_nm').val(iuser_nm);
	
});

function employeePop(ctx){
	// 직원검색 팝업
	$('#iuser_search').click(function(){
		window.open(ctx+'/iuserSearchPop.do','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function clickdboardtitle(ctx){
	
	$('.a_dboard').click(function(event){
		
		event.preventDefault();
		
		var dboard_id = $(this).parent().find("input[type='hidden']").val();
		var href = $(this).attr("href");
		
		$.ajax({
			
			url : ctx+'/dboardclickNum',				//보낼 URL
			dataType : 'text',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  dboard_id,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'text/html; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				location.href=href;
				
			}, error : function(){
				alert("조회수 가져오기 실패");
			}
			
		});
		
	});
}

function dboardListbtnfunc(ctx){
	
	/*$('#searchboardbtn1').click(function(){
		
		var searchdboardinput = $('#searchdboardinput').val();
		location.href=ctx+"/dboard?currentPageNum=1&searchDboard="+searchdboardinput;
		
	});*/
	
	$('#directbtndiv').delegate('.numbtn', 'click', function(event){
		
		event.preventDefault();
		
		var num=$(this).text();
		var searchDboard = $('#searchDboard').val();
		var selectcode = $('#selectcode').val();
		
		location.href=ctx+"/dboard?currentPageNum="+num+"&searchDboard="+searchDboard+"&code="+selectcode;
		
	});
	
	$('#dboard_add').click(function(){
		
		location.href=ctx+"/dboardwrite";
		
	});
		
	$('#directbtndiv').delegate("#leftnumbtn", "click",function(event){
		event.preventDefault();
		var currentPageNum = $('#hcurrentPageNum').val();
		var pageBlockSize = $('#hpageBlockSize').val();
		var searchDboard = $('#searchDboard').val();
		
		if(currentPageNum-pageBlockSize<1){
			alert("첫 페이지 입니다.");
			return false;
		}
		location.href=ctx+"/dboard?currentPageNum="+(Number(currentPageNum)-Number(pageBlockSize)+"&searchDboard="+searchDboard);
	});
	
	$('#directbtndiv').delegate("#rightnumbtn", "click",function(event){
		event.preventDefault();
		var currentPageNum = $('#hcurrentPageNum').val();
		var pageBlockSize = $('#hpageBlockSize').val();
		var totalcount = $('#htotalpagecount').val();
		var searchDboard = $('#searchDboard').val();

		if(Number(currentPageNum)+Number(pageBlockSize)>Number(totalcount)){
			alert("마지막 페이지 입니다.");
			return false;
		}
		location.href=ctx+"/dboard?currentPageNum="+(Number(currentPageNum)+Number(pageBlockSize))+"&searchDboard="+searchDboard;
	});
}

//검색눌렀을 때 action 실행
function SearchForm(ctx){
	$('#searchboardbtn').click(function(){
		if(form == 'SearchForm'){
			$('#SearchForm').attr("action","dboard");
		}
	});
}
