$(function(){
	var ctx = $('#ctx').val();	
	$("#prodSaveBtn").hide();
	$('.act_tab_bt_div').append('<input type="button" id="prodUpdateBtn" style="display: none;" class="act_bt" value="저장"/>');
	$("#prod_div_cd").hide();
	prodListAllCheck();
	prodFormblock();
	prodFormClr();
	prodAddBtn(ctx);
	prodCancelBtn(ctx);
	prodUpdateBtn(ctx);
	prodSaveBtn(ctx);
	prodChange(ctx);
	prodModifyBtn(ctx);
	prodIdClick(ctx);
	listColor();
});

/* 샘플 
function actAddBtn(ctx){
	$("#addsavebtn").click(function() {	
	 	$("#act_tab_tbody input[type='text']").val('').attr("disabled", false);
		$("#sales_actvy_type_nm").attr("disabled", false);
		$('#actdiv_1').prop("checked", false);
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "none");
	}); 
}*/

function listColor(){
	$('#prod_list tr').click(function(){
		$('tr').removeClass('on');
		$(this).addClass('on');
	});	
}

function prodListAllCheck(){
/*	$("#prodListAllCheck").click( function(){*/
	$("#act_list_table").delegate("#prodListAllCheck","click", function() {	
	
		var chk = $(this).is(":checked"); //checked 된 경우 true, 아닌 경우 false
		if(chk){
			$("#prod_list input[type=checkbox]").prop("checked",true);			
		}else{
			$("#prod_list input[type=checkbox]").prop("checked",false);
		}
	});
}
function opptDelete(){
	var ctx = $("#ctx").val();
	if($("input[name=list_prod_id]:checked").length == 0){
		alert("삭제할 상품을 선택해 주세요.");
		return false;
	}
	if(confirm("삭제 하시겠습니까?")){
		var prodidList = [];
		var pageNum = $("prodPageNum").val();
		$("input[name=list_prod_id]:checked").each(function(){
			prodidList.push($(this).val());
		});
		
	$.ajax({
		type : 'get',
		url  : 'prodDelete',
		data : {
			prodidList : prodidList,
			pageNum : pageNum
		},
		dataType : 'json',
		success : function(result){
			alert("영업기회가 삭제되었습니다.");
			location.href = ctx + "/prod";
		},
		error : function(request){
			alert("error : " + request);
		}		
	});		
	}
}
//숫자인지 검사
function isValidNumber(obj){
	if(obj.value.length > 0){
		if(isNaN(obj.value)){
			alert('숫자만 입력 가능합니다.');
			obj.value = "";
			return;
		}		
	}
}

function chkCancel(){
	$("#prodListAllCheck").prop("checked", false);
}

function prodCancelBtn(ctx){
	$("#prodCancelBtn").click(function() {
	
		var con = confirm("취소하시겠습니까?");
		
		if(con){
			prodFormClr();
			prodFormblock();
			$("#prodUpdateBtn").hide();
			$("#prodSaveBtn").hide();
			$("#prodModifyBtn").show();
			$("#prodAddBtn").show();
			$("#prod_div_cd").hide();	
			alert("취소 되었습니다.");	
		}		
	});	
}

//페이지 입력 이동
function pageInput(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			var prodPageNum = $("#prodPageInput").val();
			var endPageNum = $("#endPageNum").val();
			var prod_nm = $("#sprod_nm").val();
			var code = $("#scode").val();
			if (parseInt(prodPageNum) > parseInt(endPageNum) || parseInt(prodPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#prodPageInput").val("1");
			} else {
				if(prod_nm == '' && code == '0'){
					prodPaging(prodPageNum);
				} else {
					prodPaging(prodPageNum);
				}
				
			}
		}
	event.stopPropagation();
}





function prodSearch(prodPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var prod_nm = $("#sprod_nm").val();
		var code = $("#scode").val();
		var prodListContent = "";
				
		if(prod_nm == ''){
			alert("검색어를 입력하세요.");
			return;
		}else{
			var data = {"prodPageNum" : prodPageNum, "prod_nm" : prod_nm, "code" : code};
			var tbody = $('#prod_list');
			var tbodyContent = "";
						
		$.ajax({
			url: ctx+'/prodListSearch',
			data : data,
			type:'POST',
			dataType : "json",
			success: function(data) {
				var fst_reg_dt = null;				
				
				if(data.prodList.length == 0){
					alert("검색된 데이터가 없습니다.")
					location.href = ctx + "/prod";
				}else{
					tbody.children().remove();

					$('#sprod_nm').val(data.prod_nm);
					$('#scode').val(data.code);
					
					for(var i = 0 ; i < data.prodList.length; i++){
						fst_reg_dt = dateFormat(Number(data.prodList[i].fst_reg_dt));
						
						/*tbodyContent = "<tr>"
							+"<th><input type='checkbox'></th>"
							+"<td id='list_prod_id'><a class='list_prod_id'>"+data.prodList[i].prod_nm
							+"<input type='hidden' class='list_prod_idh' name='"+data.prodList[i].prod_id+"' value='"+data.prodList[i].prod_id+"'/></a>"
							+"</td>"
							+"<td>"+data.prodList[i].cd_nm+"</td>"
							+"<td>"+data.prodList[i].prod_sales_amt+"</td>"
							+"<td>"+data.prodList[i].cate+"</td>"
							+"<td>"+data.prodList[i].fst_reg_id_nm+"</td>"
							+"<td>"+fst_reg_dt+"</td></tr>";*/
							/*+"<fmt:formatDate value='"+data.prodList[i].fst_reg_dt"' type='time' pattern='yyyy-MM-dd HH:mm:ss'/></td></tr>";*/
						tbodyContent = "<tr>"
							+"<th><input type='checkbox'></th>"
							+"<td style='text-align:left;' id='list_prod_id'><a class='list_prod_id'>"+data.prodList[i].prod_nm
							+"<input type='hidden' class='list_prod_idh' name='"+data.prodList[i].prod_id+"' value='"+data.prodList[i].prod_id+"'/></a>"
							+"</td>"
							+"<td style='text-align:left;'>"+data.prodList[i].cd_nm+"</td>"
							+"<td style='text-align:right;'>"+data.prodList[i].prod_sales_amt+"</td>"
							+"<td style='text-align:left;'>"+data.prodList[i].cate+"</td>"
							+"<td style='text-align:left;'>"+data.prodList[i].fst_reg_id_nm+"</td>"
							+"<td style='text-align:center;'>"+fst_reg_dt+"</td></tr>";						
						tbody.append(tbodyContent);
						$('#prodListCheck').prop("checked",false);						
					}
					
					if(data.prodList.length < 10){
						for(var j = 0; j < 10-data.prodList.length; j++){
							tbodyContent ="<tr style='height:25px;'>"
								+"<th></th>"
								+"<td></td><td></td><td></td><td></td>"
								+"<td></td><td></td><td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
					
					var pageContent = "";
					// 페이징 다시그리기
					$("#prod_page_div").children().remove();
					
					if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
						pageContent = "<input type='hidden' id='endPageNum' value='"+(data.page.endPageNum-1)+"'/>"
						+"<a> ◀ </a><input type='text' id='prodPageInput' readonly='readonly' value='"+data.page.startPageNum+"' class='prod_page_txt' onkeypress=\"pageInput(event);\"/>" 
						+"<a> / "+(data.page.endPageNum-1)+"</a><a> ▶ </a>";
					} else if(data.prodPageNum == data.page.startPageNum){
						pageContent = "<input type='hidden' id='endPageNum' value='"+(data.page.endPageNum-1)+"'/>"
						+"<a> ◀ </a><input type='text' id='prodPageInput' value='"+data.page.startPageNum+"' class='prod_page_txt'  onkeypress=\"pageInput(event);\"/>" 
						+"<a href='#' onclick=prodSearch("+(data.page.endPageNum-1)+") id='pNum'> / "+(data.page.endPageNum-1)+"</a>"
						+"<a href='#' onclick=prodSearch("+(data.prodPageNum+1)+") id='pNum'> ▶ </a>";
					} else if(data.prodPageNum == (data.page.endPageNum-1)){
						pageContent = "<input type='hidden' id='endPageNum' value='"+(data.page.endPageNum-1)+"'/>"
						+"<a href='#' onclick=prodSearch("+(data.prodPageNum-1)+") id='pNum'> ◀ </a>"
						+"<input type='text' id='prodPageInput' value='"+(data.page.endPageNum-1)+"' class='prod_page_txt' onkeypress=\"pageInput(event);\"/>"
						+"<a> / "+(data.page.endPageNum-1)+"</a>"
						+"<a> ▶ </a>";
					} else {
						pageContent = "<input type='hidden' id='endPageNum' value='"+(data.page.endPageNum-1)+"'/>"
						+"<a href='#' onclick=prodSearch("+(data.prodPageNum-1)+") id='pNum'> ◀ </a>"
						+"<input type='text' id='prodPageInput' value='"+data.prodPageNum+"' class='prod_page_txt' onkeypress=\"pageInput(event);\"/>"
						+"<a href='#' onclick=prodSearch("+(data.page.endPageNum-1)+") id='pNum'> / "+(data.page.endPageNum-1)+"</a>"
						+"<a href='#' onclick=prodSearch("+(data.prodPageNum+1)+") id='pNum'> ▶ </a>";
					}
					$("#prod_page_div").append(pageContent);					
				}		
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}	
		});
		}	
	});
}
function prodPaging(prodPageNum) {	
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var data = {"prodPageNum":prodPageNum};
		var tbody = $('#prod_list');
		var tbodyContent = "";	
	
		$.ajax({
			url: ctx+'/prodListSearch',
			data : data,
			dataType : "json",
			type:'POST',
			success: function(data) {
				var fst_reg_dt = null;
				
				tbody.children().remove();
				
				for (var i = 0; i < data.prodList.length; i++) {
					fst_reg_dt = dateFormat(Number(data.prodList[i].fst_reg_dt));
					
					
					tbodyContent = "<tr>"
						+"<th><input type='checkbox'></th>"
						+"<td style='text-align:left;' id='list_prod_id'><a class='list_prod_id'>"+data.prodList[i].prod_nm
						+"<input type='hidden' class='list_prod_idh' name='"+data.prodList[i].prod_id+"' value='"+data.prodList[i].prod_id+"'/></a>"
						+"</td>"
						+"<td style='text-align:left;'>"+data.prodList[i].cd_nm+"</td>"
						+"<td style='text-align:right;'>"+data.prodList[i].prod_sales_amt+"</td>"
						+"<td style='text-align:left;'>"+data.prodList[i].cate+"</td>"
						+"<td style='text-align:left;'>"+data.prodList[i].fst_reg_id_nm+"</td>"
						+"<td style='text-align:center;'>"+fst_reg_dt+"</td></tr>";
						tbody.append(tbodyContent);
					$('#prodListCheck').prop("checked",false);						
				}
				

				if(data.prodList.length < 10){
					for(var j = 0; j < 10-data.prodList.length; j++){
						tbodyContent ="<tr style='height:25px;'>"
							+"<th></th>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td><td></td><td></td></tr>";
						tbody.append(tbodyContent);
					}
				}
				
				var pageContent = "";
				// 페이징 다시그리기
				$("#prod_page_div").children().remove();
				
				if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a> ◀ </a><input type='text' id='prodPageInput' readonly='readonly' value='"+data.page.startPageNum+"' class='prod_page_txt' onkeypress=\"pageInput(event);\"/>" 
					+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
				} else if(data.prodPageNum == data.page.startPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a> ◀ </a><input type='text' id='prodPageInput' value='"+data.page.startPageNum+"' class='prod_page_txt' onkeypress=\"pageInput(event);\"/>" 
					+"<a href='#' onclick=prodPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=prodPaging("+(data.prodPageNum+1)+") id='pNum'> ▶ </a>";
				} else if(data.prodPageNum == data.page.endPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a href='#' onclick=prodPaging("+(data.prodPageNum-1)+") id='pNum'> ◀ </a>"
					+"<input type='text' id='prodPageInput' value='"+data.page.endPageNum+"' class='prod_page_txt' onkeypress=\"pageInput(event);\"/>"
					+"<a> / "+data.page.endPageNum+"</a>"
					+"<a> ▶ </a>";
				} else {
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a href='#' onclick=prodPaging("+(data.prodPageNum-1)+") id='pNum'> ◀ </a>"
					+"<input type='text' id='prodPageInput' value='"+data.prodPageNum+"' class='prod_page_txt' onkeypress=\"pageInput(event);\"/>"
					+"<a href='#' onclick=prodPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=prodPaging("+(data.prodPageNum+1)+") id='pNum'> ▶ </a>";
				}
					$("#prod_page_div").append(pageContent);							
				},error: function(data){
					alert("전송중 오류가 발생했습니다.");                                                                                                                                                                                                                                                                                                                                                                              
				}
		});
	});
}

function prodIdClick(ctx) {
	$("#prod_list").delegate(".list","click", function() {		
		/*$(this).*/
		$(".list_prod_idh").prop("hidden",false);
		var prod_id = $(this).find('.list_prod_idh').val();
		$(".list_prod_idh").prop("hidden",true);		
		var data = new FormData();
		data.append("prod_id",prod_id);
		
		$.ajax({
			url: ctx+'/prodRead',
			data:data,
			dataType : "json",
			type:'POST',
			mimeType:"multipart/form-data",
			processData:false,
			contentType:false,
			success: function(data){
				var prod_id = data.prod_id;
				$("#prod_id").val(data.prod_id);
				$("#prod_nm").val(data.prod_nm);
				$("#prod_div_cd_view").val(data.cd_nm);
				$("#prod_div_cd").val(data.prod_div_cd);
				$("#cate_id").val(data.cate_id);
				$("#cate_nm").val(data.cate_nm);
				$("#prod_sales_amtt").val(data.prod_sales_amt);
				$("#prod_dtl_cont").val(data.prod_dtl_cont);
				$("#prod_url").val(data.prod_url);
				$("#prod_nm").prop("disabled",true);
				
				$("#cate_id").prop("disabled",true);
				$("#cate_nm").prop("disabled",true);
				$("#prod_cate").prop("disabled",true);
				$("#prod_sales_amtt").prop("disabled",true);
				$("#prod_dtl_cont").prop("disabled",true);
				$("#prod_url").prop("disabled",true);				
				$("#prod_img").prop("disabled",true);
				$("#prod_catal").prop("disabled",true);
				
				$("#prod_div_cd").hide();
				/*$("#prod_div_cd").css("visibility",'hidden');*/
				/*$("#prod_div_cd_view").hide();*/
				
				$('.prod_file').css("display","none");
				$('.filedown').remove();				
				
				$("#image_change").css('display','none');
				$("#catal_change").css('display','none');
				
				if(data.prod_img_nm != null){
				$('#image').prepend('<a class="filedown" href="'+ctx+'/prodDownload?prod_id='+data.prod_id+'&mode=img">'+data.prod_img_nm+'<img src="'+ctx+'/resources/image/disk.gif"></a>');
				}
				
				if(data.prod_catal_nm != null){
				$('#catal').prepend('<a class="filedown" href="'+ctx+'/prodDownload?prod_id='+data.prod_id+'&mode=catal">'+data.prod_catal_nm +'<img src="'+ctx+'/resources/image/disk.gif"></a>');
				}
			} 
			
			,error: function(request,status,error) {
				alert("오류");
				alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			} 
	 	}); 		
		
		

		$("#prod_div_cd_view").show();
		$("#prod_img").prop("hidden",true);
		$("#prod_catal").prop("hidden",true);
	});
}



function prodModifyBtn(ctx){
		$(".act_tab_bt_div").delegate('#prodModifyBtn','click', function() {
/*		$('#prodModifyBtn').click(function() {*/
		if($("#prod_nm").val( )!= ''){
			
			$("#prod_nm").prop("disabled",false);
			$("#cate_id").prop("disabled",false);
			/*$("#cate_nm").prop("disabled",false);*/
			$("#prod_cate").prop("disabled",false);
			$("#prod_sales_amtt").prop("disabled",false);
			$("#prod_dtl_cont").prop("disabled",false);
			$("#prod_url").prop("disabled",false);
			
			$("#prod_img").prop("disabled",false);
			/*$("#prod_catal").prop("disabled",false);*/

			$("#prodModifyBtn").hide();
			$('#prod_nm').css('background','white');
			$('#prod_url').css('background','white');	
			/*$('#cate_nm').css('background','white');	*/
			$('#prod_sales_amtt').css('background','white');
			$("#prod_dtl_cont").css("background",'white');
			
			$("#prodUpdateBtn").show();
			$("#prodSaveBtn").hide();
			$("#prodAddBtn").hide();
	
			$("#prod_div_cd").show();
			$("#prod_div_cd_view").hide();
/*			$("input").css("background-color",white);			*/

			$('#image_change').css('display','inline');
			$('#catal_change').css('display','inline');	
			
		}else{
			alert('상품을 선택해주세요.');
		}
		
	});
}

function inputProdNm(cateNm,cateId){
	console.log(cateNm +","+cateId);
	$('#cate_nm').val(cateNm);
	$('#cate_id').val(cateId);
}
function prodAddBtn(ctx){
	/*	$("#prodAddBtn").click(function(){*/
	$(".act_tab_bt_div").delegate('#prodAddBtn','click', function() {
		$("#prod_nm").prop("disabled",false);
		$("#cate_id").prop("disabled",false);
		/*$("#cate_nm").prop("disabled",false);*/
		$("#prod_cate").prop("disabled",false);
		$("#prod_sales_amtt").prop("disabled",false);
		$("#prod_dtl_cont").prop("disabled",false);
		$("#prod_url").prop("disabled",false);
		$("#prod_img").prop("disabled",false);
		/*$("#prod_catal").prop("disabled",false);*/
		
		$('#prod_nm').css('background','white');
		$('#prod_url').css('background','white');	
		/*$('#cate_nm').css('background','white');*/	
		$('#prod_sales_amtt').css('background','white');
		$("#prod_dtl_cont").css("background",'white');
		
		$("#prodAddBtn").hide();
		$("#prod_div_cd_view").hide();
		$("#prodModifyBtn").hide();
		$("#prod_div_cd").show();

		$('.prod_file').remove();
		$('#image').prepend('<input type="file" name="prod_img" id="prod_img" class="prod_file">');	
		$('#catal').prepend('<input type="file" name="prod_catal" id="prod_catal" class="prod_file">');

		$("#prodUpdateBtn").hide();
		$("#prodSaveBtn").show();
	
		prodFormClr();	
	});
}
function prodChange(ctx) {
	$("#image_change").click(function() {
		$('#prod_img').remove();
		$('#image').append('<input type="file" name="prod_img" id="prod_img" class="prod_file">');		
		/*$('#image_change').css('disable','none');*/
	});
	$("#catal_change").click(function() {
		$('#prod_catal').remove();
		$('#catal').append('<input type="file" name="prod_catal" id="prod_catal" class="prod_file">');
		/*$('#catal_change').css('disable','none');*/
	});	
}
function prodUpdateBtn(ctx){
	$(".act_tab_bt_div").delegate('#prodUpdateBtn','click', function() {	
		var data = new FormData();
		$("#prod_id").prop("hidden",false);
		var prod_id = $("#prod_id").val();		
		$("#prod_id").prop("hidden",true);

/*		$("#prodSaveBtn").show();*/
		
		data.append("prod_id",$("#prod_id").val());
		data.append("cate_id",$("#cate_id").val());
		data.append("prod_nm",$("#prod_nm").val());
		data.append("prod_div_cd",$("#prod_div_cd").val());
		data.append("prod_sales_amt",$("#prod_sales_amtt").val());
		data.append("prod_url",$("#prod_url").val());
		data.append("prod_dtl_cont",$("#prod_dtl_cont").text());
		data.append("prod_img",$("#prod_img").get(0).files[0]);
		data.append("prod_catal",$("#prod_catal").get(0).files[0]);	
		
		
		if($("#prod_nm").val()==''){
			alert("상품명을 입력해 주세요.");
			$("#prod_nm").focus();
		}else if($("#cate_id").val()==''){
			alert("카테고리를 선택해 주세요.");
			$("#cate_id").focus();
		}else if($("#prod_sales_amtt").val()==''){
			alert("판매가를 입력해주세요.");
			$("#prod_sales_amtt").focus();
		}else{
			var con = confirm("수정 하시겠습니까?");
			
			if(con){
				$.ajax({
					url: ctx+'/prodUpdate',
					data:data,
					type:'POST',
					mimeType:"multipart/form-data",
					processData:false,
					contentType:false,
					success: function(data) {
						prodPaging(1);
						$("#prodUpdateBtn").hide();
						$("#prodModifyBtn").show();
						$("#prod_div_cd").hide();
						$("#prodAddBtn").show();
						alert("수정 되었습니다.");
						
					}			
					,error: function(request,status,error) {
						alert("오류");
						alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
					} 
			 	});
				prodFormblock();
				prodFormClr();
			}else{
				alert("취소 되었습니다.");				
			}
		
		
		}
	});
}
function prodSaveBtn(ctx){
	$(".act_tab_bt_div").delegate('#prodSaveBtn','click', function() {
		var data = new FormData();

		data.append("cate_id",$("#cate_id").val());
		data.append("prod_nm",$("#prod_nm").val());
		data.append("prod_div_cd",$("#prod_div_cd").val());
		data.append("prod_sales_amt",$("#prod_sales_amtt").val());
		data.append("prod_url",$("#prod_url").val());
		data.append("prod_dtl_cont",$("#prod_dtl_cont").text());
		data.append("prod_img",$("#prod_img").get(0).files[0]);
		data.append("prod_catal",$("#prod_catal").get(0).files[0]);
		
		if($("#prod_nm").val()==''){
			alert("상품명을 입력해 주세요.");
			$("#prod_nm").focus();
		}else if($("#cate_id").val()==''){
			alert("카테고리를 선택해 주세요.");
			$("#cate_id").focus();
		}else if($("#prod_sales_amtt").val()==''){
			alert("판매가를 입력해주세요.");
			$("#prod_sales_amtt").focus();
		}else{
			var con =  confirm("저장 하시겠습니까?");
			
			if(con){
				$.ajax({
					url: ctx+'/prodFileUpload',
					data:data,
					type:'POST',
					mimeType:"multipart/form-data",
					processData:false,
					contentType:false,
					success: function(data) {
						prodPaging(1);						
						$("#prod_div_cd_view").show();	
						$("#prod_div_cd").hide();
						$("#prodModifyBtn").show();
						$("#prodSaveBtn").hide();
						$("#prodAddBtn").show();
					}			
				,error: function(request,status,error) {
					alert("오류");
					alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				} 
				}); 		
				prodFormblock();
				prodFormClr();
			}else{
				alert("취소 되었습니다.");
			}
		}
		
		
		
	});	
}
function dateFormat(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day) + " "+ (hour==0 ? "00" : hour )+":"+(min==0 ? "00" : min);

	return retVal
}

function prodFormblock(){
	$("#prod_nm").prop("disabled",true);
	$("#cate_id").prop("disabled",true);
	$("#cate_nm").prop("disabled",true);
	$("#prod_cate").prop("disabled",true);
	$("#prod_sales_amtt").prop("disabled",true);
	$("#prod_dtl_cont").prop("disabled",true);
	$("#prod_url").prop("disabled",true);
	$("#prod_img").prop("disabled",true);
	$("#prod_catal").prop("disabled",true);

	$("#prod_nm").css("background","rgba(234, 234, 234, 1)");
	$("#prod_url").css("background","rgba(234, 234, 234, 1)");
	$("#prod_sales_amtt").css("background","rgba(234, 234, 234, 1)");
	$("#cate_nm").css("background","rgba(234, 234, 234, 1)");
	$("#prod_div_cd_view").css("background","rgba(234, 234, 234, 1)");
	$("#prod_dtl_cont").css("background","rgba(234, 234, 234, 1)");
	
	
	
/*	$("#prod_div_cd").hide();*/
/*	$("#prod_div_cd").css("visibility",'hidden');*/
	
	$("#prod_div_cd_view").show();
	$('.prod_file').remove();
	$('#image').prepend('<input type="file" name="prod_img" id="prod_img" class="prod_file" disabled>');	
	$('#catal').prepend('<input type="file" name="prod_catal" id="prod_catal" class="prod_file" disabled>');
	$("#image_change").css('display','none');
	$("#catal_change").css('display','none');
}



function prodFormClr() {
	$("#prod_nm").val('');
	$("#prod_div_cd_view").val('');
/*	$("#prod_div_cd").val('');*/
	$("#cate_id").val('');
	$("#cate_nm").val('');
	$("#prod_sales_amtt").val('');
	$("#prod_dtl_cont").val('');
	$("#prod_url").val('');
	$("#prod_img").val('');
	$("#prod_catal").val('');
	$('.filedown').remove();
}

function prodDelete(){
	var prod_id  = $("#prod_Id").val();
	alert(prod_id);
	
}




