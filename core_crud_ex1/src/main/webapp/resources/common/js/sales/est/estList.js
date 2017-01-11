/**
 * 함수 목록
 * estimAllselect()					:	견적 전체 선택		
 * chkCancel()						:	견적 전체 선택 박스 해제
 * estPageInput(event)				:	페이지 input Enter 입력 처리			
 * estSearchInput(event)			:	견적 검색 input Enter 입력 처리
 * searchBtn(page)					:	조회 버튼 클릭에 대한 검색어 입력 여부 확인
 * estimDeleteBtn(ctx)				:	견적 삭제
 * list(page)						:	견적 리스트 조회
 * estDetail(estim_id)				:	견적 상세정보 출력
 * startCalendar(ctx)				:	달력 띄우기
 */

$(function(){
	var ctx = $('#ctx').val();
	estimAllselect();
	estimDeleteBtn(ctx);
	startCalendar(ctx);	
	$("#ssales_price_1").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
});

//견적 전체 선택
function estimAllselect(){
	$("#estimAllSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#estList input[type=checkbox]").prop("checked",true);			
		}else{
			$("#estList input[type=checkbox]").prop("checked",false);
		}
	});
}

//견적 전체 선택 박스 해제
function chkCancel(){
	$("#estimAllSelect").prop("checked", false);
}
//견적 리스트 조회
function list(page){
	var estim_nm = $("#sestim_nm").val();
	var estim_lev_cd = $("#sestim_lev_cd").val();
	var sales_price_1 =  $("#ssales_price_1").val();
	var sales_price_2 =  $("#ssales_price_2").val();
	var estim_valid_d = $("#sestim_valid_d").val();
	$.ajax({
		type : 'GET',
		url : 'estListAjax',
		data : {
			ccPageNum : page, 
			estim_nm : estim_nm, 
			estim_lev_cd : estim_lev_cd, 
			sales_price_1 : sales_price_1, 
			sales_price_2 : sales_price_2, 
			estim_valid_d : estim_valid_d 
		},
		datatype : 'json',
		success:function(result){
			$("#sestim_nm").val(result.searchInfo.estim_nm);
			$("#sestim_lev_cd").val(result.searchInfo.estim_lev_cd);
			$("#ssales_price_1").val(result.searchInfo.sales_price_1);
			$("#ssales_price_2").val(result.searchInfo.sales_price_2);
			$("#sestim_valid_d").val(result.searchInfo.estim_valid_d);
			
			$("#estList").children().remove();
			$.each(result.list,function(i,data){
				$("#estList").append("" +	
				 "<tr>"+
					"<th><input type='checkbox' value="+data.estim_id+"></th>"+
					"<td style='text-align: left; padding-left:5px;'>"+
					"<a style='text-decoration: none;' href=javascript:estDetail('"+data.estim_id+"');>"+
						data.estim_nm+"</a></td>"+
					"<td>"+data.estim_lev_cd_nm+"</td>"+
					"<td>"+data.estim_qty+"</td>"+
					"<td style='text-align: right; padding-right:5px;'>"+comma(data.sales_price)+"</td>"+
					"<td>"+data.estim_valid_d+"</td>"+
					"<td>"+data.fst_reg_id_nm+"</td>"+
					"<td>"+data.fst_reg_dt+"</td>"+
				"</tr>"
				);
			});
			if(result.list.length < 5){
				for(var i=0 ;  i < 5-result.list.length ; i++){
					$("#estList").append("" +
							 "<tr>"+
								"<th></th>"+
								"<td>"+
								"</td>"+
								"<td></td>"+
								"<td></td>"+
								"<td></td>"+
								"<td></td>"+
								"<td></td>"+
								"<td></td>"+
							"</tr>");
			   }
			}
			$("#pageSpace").children().remove();
			var page = '';
			page = "<input type='hidden' id='endPageNum' value="+result.page.endPageNum+">"+
				   "<input type='hidden' id='ccPageNum' value="+result.ccPageNum+">";
			if (result.ccPageNum == result.page.startPageNum  && result.ccPageNum != result.page.endPageNum) {
				page += "<a id='pNum'> ◀ </a>" +
				"<input type='text' id='ccPageInput' size='1px' value="+result.page.startPageNum+" onkeypress=\"estPageInput(event);\"> "+ "<a> / </a> " +
				"<a href=javascript:list("+result.page.endPageNum+"); id='pNum' >"+result.page.endPageNum+"</a>"+ 
				"<a href=javascript:list("+(parseInt(result.ccPageNum)+parseInt(1))+"); id='pNum'> ▶ </a>";
			}else if (result.ccPageNum == result.page.endPageNum) {
				page += "<a href=javascript:list("+(result.ccPageNum-1)+"); id='pNum' > ◀ </a>"+
				"<input type='text' id='ccPageInput' size='1px' value="+result.page.endPageNum+" onkeypress=\"estPageInput(event);\">"+ "<a> / </a> " +
				"<a  href=javascript:list("+result.page.endPageNum+"); id='pNum'>"+result.page.endPageNum+"</a>"+ 
				"<a id='pNum'> ▶ </a>";
			}else {
				page += "<a href=javascript:list("+(result.ccPageNum-1)+"); id='pNum' > ◀ </a>"+
				"<input type='text' id='ccPageInput' size='1px' value="+result.ccPageNum+" onkeypress=\"estPageInput(event);\"> "+ "<a> / </a> " +
				"<a href=javascript:list("+result.page.endPageNum+"); id='pNum'>"+result.page.endPageNum+"</a>"+ 
				"<a href=javascript:list("+(parseInt(result.ccPageNum)+parseInt(1))+"); id='pNum'> ▶ </a>";
			}
			$("#pageSpace").append(page);
		},
		error:function(request){
			alert("error : " + request);
		}
	});
}

//페이지 input Enter 입력 처리
function estPageInput(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			event.preventDefault();
			var ccPageNum = $("#ccPageInput").val();
			var endPageNum = $("#endPageNum").val();
			if (parseInt(ccPageNum) > parseInt(endPageNum) || parseInt(ccPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#ccPageInput").val("1");
			} else {
				list(ccPageNum);
			}
		}
}
//견적 검색 input Enter 입력 처리
function estSearchInput(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		event.preventDefault();
		searchBtn(1);
	}
}
//조회 버튼 클릭에 대한 검색어 입력 여부 확인
function searchBtn(page){
	var estim_nm = $("#sestim_nm").val();
	var estim_lev_cd = $("#sestim_lev_cd").val();
	var sales_price_1 =  $("#ssales_price_1").val();
	var sales_price_2 =  $("#ssales_price_2").val();
	var estim_valid_d = $("#sestim_valid_d").val();
	if(estim_nm == '' && estim_lev_cd == '' && sales_price_1 == '' && sales_price_2 == '' && estim_valid_d ==''){
		list(1); //검색어가 없을경우에 전체리스트가 출력된다
		/*alert("검색어를 입력하세요");
		$("#sestim_nm").focus();
		return;*/
	}else{
		list(page);
	}
}
//견적 삭제
function estimDeleteBtn(ctx){
	var estimDeleteIdList=[];
	$('#estimDeleteBtn').click( function(){
		if($('#estList input[type=checkbox]:checked').length==0){
			alert("삭제할 견적을 선택해 주세요.");
			return;
		}else{
		if(confirm("삭제 하시겠습니까?")){
			$('#estList input[type=checkbox]:checked').each(function(){
				estimDeleteIdList.push($(this).val());
			});
			
			$.ajax({
				url : ctx+'/estDelete',
				type : 'get',
				datatype : 'json',
				data : { estimDeleteIdList : estimDeleteIdList},
				success : function(result){
					alert(result+'건의 견적이 삭제되었습니다.');
					list($('#ccPageNum').val());
					location.href = ctx + "/est";
				},
				error:function(request){
					alert("error : " + request);
				}
			});
		}else{
			return;
		  }
		}
	});
}
//견적 상세정보 출력
function estDetail(estim_id){
		readDetail();
		$("#mdfBtn").attr("disabled", false);
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		$('#estimatetbody').children().remove();
		$.ajax({
			type: 'GET',
			url : 'estDetail',
			data : {estim_id : estim_id},
			dataType: 'json',
			success:function(result){
				$('#inputCust').val('true');
				$("#estim_id").val(result.detail.estim_id);
				$("#cust_id").val(result.detail.cust_id);
				$("input[name=estim_nm_detail]").val(result.detail.estim_nm);
				$("input[name=cust_nm]").val(result.detail.cust_nm); 
				$("select[name=estim_lev_cd_detail]").children().eq(result.detail.estim_lev_cd).attr("selected","selected");
				$("input[name=sales_oppt_nm]").val(result.detail.sales_oppt_nm);
				$("input[name=estim_valid_d_detail]").val(result.detail.estim_valid_d);
				$("input[name=memo]").val(result.detail.memo);
				
				var content = "";				
				$.each(result.prodList,function(i,list){	
				   content ='<tr id="priceline" class='+list.prod_id+'>'+
							'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+list.prod_id+' onclick="prodChkCancel();">'+
							'<input type="hidden" id="prod_sales_amt"  value='+list.prod_sales_amt+'></th>'+
							'<td style="width: 32%;" id="prod_nm">'+list.prod_nm+'</td>'+
							'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" readonly="readonly" name="estim_qty" id="estim_qty" min="1" max="100" value='+list.estim_qty+' onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
							'<td style="width: 27%;" >'+list.sales_price+'</td>'+
							'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" readonly="readonly" id="discount" name="discount" min="0" max="100" value='+list.discount+' onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
							'<select id="unit" name="discount_unit_cd" style="width: 25%;" disabled="disabled">'+
							'<option value="0">선택</option>';
				   $.each(result.eduList,function(i,eduList){
					   if(eduList.code == list.discount_unit_cd){
						   content += '<option value='+eduList.code+' class="seloption">'+eduList.cd_nm+'</option>';						   
					   }else{
						   content += '<option value='+eduList.code+' >'+eduList.cd_nm+'</option>';
					   }
					});
					content += '</select></td>'+
							   '<td style="width: 15%;" id="sup_price" >'+list.sup_price+'</td></tr>';
					$('#estimatetbody').append(content);
				});
				$(".seloption").attr("selected",true);	
				for(var i=$("#estimatetbody tr").length; i <= 4; i++){
					$('#estimatetbody').append(
							'<tr id="priceline" class="empty">'+
							'<th style="width: 3%;"></th>'+
							'<td style="width: 32%;"></td>'+
							'<td style="width: 8%;"></td>'+
							'<td style="width: 27%;"></td>'+
							'<td style="width: 15%;"></td>'+
							'<td style="width: 15%;"></td>'+
							'</tr>'
							);
				}
				prodChange();
			},
		    error:function(request,status,error){
			        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			       }
		});
}
//달력띄우기
function startCalendar(ctx){
	 $("#sestim_valid_d").datepicker({
	        changeMonth: true, //콤보 박스에 월 보이기
	        changeYear: true, // 콤보 박스에 년도 보이기
	        showOn: 'button', // 우측에 달력 icon 을 보인다.
	        buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	        buttonImageOnly: true //달력에 icon 사용하기
	    }); 
	     //마우스를 손가락 손가락 모양으로 하고 여백주기
	    $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	   //날짜 형식을 0000-00-00으로 지정하기
	    $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');
	    
	    $("#estim_valid_d_detail").datepicker({
	        changeMonth: true, //콤보 박스에 월 보이기
	        changeYear: true, // 콤보 박스에 년도 보이기
	        showOn: 'button', // 우측에 달력 icon 을 보인다.
	        buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	        buttonImageOnly: true //달력에 icon 사용하기
	    }); 
	     //마우스를 손가락 손가락 모양으로 하고 여백주기
	    $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	   //날짜 형식을 0000-00-00으로 지정하기
	    $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');
}