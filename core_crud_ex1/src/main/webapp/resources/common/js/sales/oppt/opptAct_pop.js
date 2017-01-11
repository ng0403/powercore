/**
 * 함수 목록
 * actButton(ctx)					:	영업활동	저장(수정) 버튼 클릭 시
 * activeUpdate(ctx)				:	영업활동 편집
 * activeCancel()					:	영업활동 취소 버튼
 * opptActiveDetail()				:	영업활동명 클릭 시 detail값 가져오기
 * startDatePicker()				:	영업활동 사용되는 달력 버튼
 * activeAdd(ctx)					:	영업활동 추가
 * dateFormat(timestamp)			:	date 포맷 변경
 * startDatePicker(ctx)				:	달력 표시
 */

$(function(){
	var ctx = $('#ctx').val();
	activeCancel();
	actButton(ctx);
	startDatePicker(ctx);
});

//영업활동 취소 버튼
function activeCancel(){
	$("#activeAdd_cancel").click( function(){
		self.close();
	});
}
//영업활동 popup 저장(수정) 버튼 클릭 시
function actButton(ctx){
	$('#activeButton').click(function(){
		var flg = $('#flg').val();
		if(flg=='add'){
			activeAdd(ctx);
		}else if(flg=='detail'){
			activeUpdate(ctx);
		}
	});
}

//영업활동 편집
function activeUpdate(ctx){
	
	var sales_actvy_id = $('#sales_actvy_id').val();
	var sales_actvy_nm = $('#sales_actvy_nm').val();
	var sales_actvy_div_cd = $('input[name=sales_actvy_div_cd]:checked').val();
	var sales_actvy_type_cd  = $('#sales_actvy_type_cd').val();
	var sales_oppt_id = $('#sales_oppt_id').val();
	var cust_id = $('#cust_id').val();
	var sales_actvy_stat_cd = $('#sales_actvy_stat_cd').val();
	var strt_d = $('#strt_d').val();
	var strt_t_h = $('#strt_t_h').val();
	var strt_t_m = $('#strt_t_m').val();
	var strt_t = strt_t_h+":"+strt_t_m; 
	var end_d = $('#end_d').val(); 
	var end_t_h = $('#end_t_h').val();
	var end_t_m = $('#end_t_m').val();
	var end_t = end_t_h+":"+end_t_m; 
	var memo = $('#memo').val();
	var sales_oppt_nm = $('#sales_oppt_nm').val();

	if(sales_actvy_nm==""||sales_actvy_nm==null){
		alert("영업활동명을 입력해 주세요");
		return false;
	}else if(sales_actvy_div_cd==""|| sales_actvy_div_cd ==null){
		alert("영업활동구분을 선택해 주세요");
		return false;
	}else if(strt_d==""|strt_d==null){
		alert("시작일자를 선택해 주세요");
		return false;
	}else if(strt_t_h=="0"|| strt_t_h==null){
		alert("시작일자 시를 선택해 주세요");
		return false;
	}else if(strt_t_m=="0"|| strt_t_m==null){
		alert("시작일자 분을 선택해 주세요");
		return false;
	}else if(end_d==""||end_d==null){
		alert("종료일자를 선택해 주세요");
		return false;
	}else if(end_t_h=="0"|| end_t_h==null){
		alert("종료일자 시를 선택해 주세요");
		return false;
	}else if(end_t_m=="0"|| end_t_m==null){
		alert("종료일자 분을 선택해 주세요");
		return false;
	}else if(sales_actvy_type_cd=="0"||sales_actvy_type_cd==null){
		alert("활동유형을 선택해 주세요");
		return false;
	}else if(sales_actvy_stat_cd=="0"||sales_actvy_stat_cd==null){
		alert("상태를 선택해 주세요");
		return false;
	}
		       
	$.ajax({
		type : 'post',
		data : {
			sales_actvy_id : sales_actvy_id,
			sales_actvy_nm : sales_actvy_nm,
			sales_actvy_div_cd : sales_actvy_div_cd,
			sales_actvy_type_cd : sales_actvy_type_cd,
			sales_oppt_id : sales_oppt_id,
			cust_id : cust_id,
			sales_actvy_stat_cd : sales_actvy_stat_cd,
			strt_d : strt_d,
			strt_t : strt_t,
			end_d : end_d,
			end_t : end_t,
			memo : memo,
			sales_oppt_nm : sales_oppt_nm
		},
		datatype : 'json',
		url : ctx+'/opptActiveUpdate',
		success:function(result){
			alert("정상적으로 수정 되었습니다.");
			
			window.opener.viewSalesActive(sales_oppt_id);
			self.close();
			
			
		},
		error:function(request){
			alert("error : " +request.status);
		}
	});
	
}
//영업활동명 클릭 시 detail값 가져오는 함수
function opptActiveDetail(){
	var actvyId = $('#sales_actvy_id').val();
	$.ajax({
		type : 'get',
		datatype : 'json',
		url : 'opptActiveDetail',
		data : {actvyId : actvyId},
		success:function(result){
				$('#flg').val(result.flg);
				if(result.flg=='detail'){
					$('#activeButton').val('수정');
				}
				var sales_actvy_div_cd = result.detail.sales_actvy_div_cd;
				var sales_actvy_type_cd = result.detail.sales_actvy_type_cd;
				var sales_actvy_stat_cd = result.detail.sales_actvy_stat_cd;
				var strt_t = result.detail.strt_t;
				var end_t = result.detail.end_t;
				var strt_d = result.detail.strt_d;
				var end_d = result.detail.end_d;
				$('#strt_d').val(strt_d);
				$('#end_d').val(end_d);
				$('#memo').val(result.detail.memo);
				
				$('input[name=sales_actvy_div_cd]').each(function(){
					var v =$(this).val();
					if(v==sales_actvy_div_cd){
						$(this).attr("checked",true);
					}
				});
				$('#cust_id').val(result.cust_id);
				$('#cust_nm').val(result.cust_nm);
				$('#sales_oppt_id').val(result.sales_oppt_id);
				$('#sales_actvy_nm').val(result.detail.sales_actvy_nm);
				
				$('#sales_actvy_type_cd').children().eq(sales_actvy_type_cd).attr("selected",true);
				$('#sales_actvy_stat_cd').children().eq(sales_actvy_stat_cd).attr("selected",true);
				$('#strt_t_h').children().eq(strt_t.substring(0,2)).attr("selected",true);
				$('#strt_t_m').children().eq(parseInt(strt_t.substring(3,4))+parseInt(1)).attr("selected",true);
				$('#end_t_h').children().eq(end_t.substring(0,2)).attr("selected",true);
				$('#end_t_m').children().eq(parseInt(end_t.substring(3,4))+parseInt(1)).attr("selected",true);
		},
		error:function(request){
			alert("error : " + request);
		}
	});
}
//영업활동 pop에서 사용되는 datePicker
function startDatePicker(ctx){
	  $("#strt_d").datepicker({
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
	    /*    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
	    $("#end_d").datepicker({
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
	    /*    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/

}
//date 포맷 변경
//function dateFormat(timestamp) {
//	var date = new Date(timestamp);
//	var year = date.getFullYear();
//	var month = date.getMonth() + 1;
//	var day = date.getDate();
//	var hour = date.getHours();
//	var min = date.getMinutes();
//	var sec = date.getSeconds();
//	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
//			+ (day < 10 ? "0" + day : day);
//	return retVal
//}

//영업활동 추가
function activeAdd(ctx){
		var sales_actvy_nm = $('#sales_actvy_nm').val();
		var sales_actvy_div_cd = $('input[name=sales_actvy_div_cd]:checked').val();
		var sales_actvy_type_cd  = $('#sales_actvy_type_cd').val();
		var sales_oppt_id = $('#sales_oppt_id').val();
		var cust_id = $('#cust_id').val();
		var sales_actvy_stat_cd = $('#sales_actvy_stat_cd').val();
		var strt_d = $('#strt_d').val();
		var strt_t_h = $('#strt_t_h').val();
		var strt_t_m = $('#strt_t_m').val();
		var strt_t = strt_t_h+":"+strt_t_m; 
		var end_d = $('#end_d').val(); 
		var end_t_h = $('#end_t_h').val();
		var end_t_m = $('#end_t_m').val();
		var end_t = end_t_h+":"+end_t_m; 
		var memo = $('#memo').val();
		var sales_oppt_nm = $('#sales_oppt_nm').val();

		if(sales_actvy_nm==""||sales_actvy_nm==null){
			alert("영업활동명을 입력해 주세요");
			return false;
		}else if(sales_actvy_div_cd==""|| sales_actvy_div_cd ==null){
			alert("영업활동구분을 선택해 주세요");
			return false;
		}else if(strt_d==""|strt_d==null){
			alert("시작일자를 선택해 주세요");
			return false;
		}else if(strt_t_h=="0"|| strt_t_h==null){
			alert("시작일자 시를 선택해 주세요");
			return false;
		}else if(strt_t_m=="0"|| strt_t_m==null){
			alert("시작일자 분을 선택해 주세요");
			return false;
		}else if(end_d==""||end_d==null){
			alert("종료일자를 선택해 주세요");
			return false;
		}else if(end_t_h=="0"|| end_t_h==null){
			alert("종료일자 시를 선택해 주세요");
			return false;
		}else if(end_t_m=="0"|| end_t_m==null){
			alert("종료일자 분을 선택해 주세요");
			return false;
		}else if(sales_actvy_type_cd=="0"||sales_actvy_type_cd==null){
			alert("활동유형을 선택해 주세요");
			return false;
		}else if(sales_actvy_stat_cd=="0"||sales_actvy_stat_cd==null){
			alert("상태를 선택해 주세요");
			return false;
		}       
		$.ajax({
			type : 'post',
			data : {
				sales_actvy_nm : sales_actvy_nm,
				sales_actvy_div_cd : sales_actvy_div_cd,
				sales_actvy_type_cd : sales_actvy_type_cd,
				sales_oppt_id : sales_oppt_id,
				cust_id : cust_id,
				sales_actvy_stat_cd : sales_actvy_stat_cd,
				strt_d : strt_d,
				strt_t : strt_t,
				end_d : end_d,
				end_t : end_t,
				memo : memo,
				sales_oppt_nm : sales_oppt_nm
			},
			datatype : 'json',
			url : ctx+'/opptActiveAdd',
			success:function(result){
				alert("정상적으로 등록되었습니다.");
				window.opener.viewSalesActive(sales_oppt_id);
				self.close();
			},
			error:function(request){
				alert("error : " +request.status);
			}
		});
}