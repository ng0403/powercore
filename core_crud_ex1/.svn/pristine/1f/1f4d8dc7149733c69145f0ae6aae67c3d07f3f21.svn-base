$(function(){
	var ctx = $('#ctx').val();
	var sales_actvy_id = $("#nowSales_actvy_id").val();
	startCalendar(ctx);
	endCalendar(ctx);
	actAddBtn();
	actMdfyBtn();
});

//추가버튼 클릭했을 때
function actAddBtn(){
	$("#actAddBtn").click(function() {
		$("#act_tab_tbody input[type='text']").css("background-color", "white");
		$("#memo").css("background-color", "white");
		$("#act_tab_tbody input[type='text']").val('').attr("disabled", false);
		
		$("#sales_actvy_type_nm").attr("disabled", false);
		$("#sales_actvy_type_nm").val("0");
		$("#actdiv_1").attr("disabled", false);
		$('#actdiv_1').prop("checked", false);
		$("#actdiv_2").attr("disabled", false);
		$('#actdiv_2').prop("checked", false);
		$("#sales_actvy_stat_nm").attr("disabled", false);
		$("#sales_actvy_stat_nm").val("0");
		$("#act_opp_nm").attr("disabled", false);
		$("#customer").attr("disabled", false);
		$("#strt_t_h").val("0");
		$("#strt_t_m").val("0");
		$("#strt_t_h").attr("disabled", false);
		$("#strt_t_m").attr("disabled", false);
		$("#end_t_h").val("0");
		$("#end_t_m").val("0");
		$("#end_t_h").attr("disabled", false);
		$("#end_t_m").attr("disabled", false);
		
		$("#sales_actvy_nm").attr("readonly", false);
		$("#memo").prop("readonly", false);
		$("#memo").prop("disabled", false);
		$("#memo").val("");
	
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "none");
		$("#actAddBtnDiv").css("display", "block");
		$("#actMdfBtnDiv").css("display", "none");
	});
}

//편집버튼 클릭했을 때
function actMdfyBtn(){
	$("#actMdfBtn").click(function() {
		$("#act_tab_tbody input[type='text']").css("background-color", "white");
		$("#memo").css("background-color", "white");
		$("#act_tab_tbody input").attr("readonly", false);
		$("#memo").attr("disabled", false);
		$("#memo").attr("readonly", false);
		$("#act_tab_tbody input").attr("disabled", false);
		$("#sales_actvy_type_nm").attr("disabled", false);
		$("#actdiv_1").attr("disabled", false);
		$("#actdiv_2").attr("disabled", false);
		$("#sales_actvy_stat_nm").attr("disabled", false);
		$("#act_opp_nm").attr("disabled", false);
		$("#customer").attr("disabled", false);
		$("#strt_t_h").attr("disabled",false);
		$("#strt_t_m").attr("disabled",false);
		$("#end_t_h").attr("disabled",false);
		$("#end_t_m").attr("disabled",false);
		
		//할일을 클릭했을 때 영업기회명과 고객사 비활성화
		if($('#actdiv_1').is(':checked')){
			$("#sales_oppt_nm").css("background-color","#EAEAEA");
			$('#sales_oppt_nm').attr('disabled',true);
			$('#act_opp_nm').attr('disabled',true);
		}
		
		//버튼 활성화
		$("#actBaseBtnDiv").css("display", "none");
		$("#actAddBtnDiv").css("display", "none");
		$("#actMdfBtnDiv").css("display", "block");
	});
}

//추가에서 취소버튼 클릭했을 때
function actAddCancelBt(){
	$(document).ready(function() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "block");
		$("#actAddBtnDiv").css("display", "none");
		$("#actMdfBtnDiv").css("display", "none");
		
		$("#act_tab_tbody input[type='text']").css("background-color", "#EAEAEA");
		$("#memo").css("background-color", "#EAEAEA");
		$('#sales_actvy_nm').attr("disabled",true);
		$('#actdiv_1').attr("disabled",true);
		$('#actdiv_2').attr("disabled",true);
		$('#actdiv_1').prop("checked",false);
		$('#actdiv_2').prop("checked",false);
		$('#sales_actvy_type_nm').attr("disabled",true);
		$('#sales_oppt_nm').attr("disabled",true);
		$('#act_opp_nm').attr("disabled",true);
		$('#cust_nm').attr("disabled",true);
		$('#customer').attr("disabled",true);
		$('#sales_actvy_stat_nm').attr("disabled",true);
		$('#strt_d').attr("disabled",true);
		$('#strt_t_h').prop("checked", true);
		$('#strt_t_m').prop("checked", true);
		$('#end_d').attr("disabled",true);
		$('#end_t_h').attr("disabled",true);
		$('#end_t_m').attr("disabled",true);
		$('#memo').attr("disabled",true);
		
		$('#sales_actvy_nm').val("");
		$('#actdiv_1').val("");
		$('#actdiv_2').val("");
		$('#sales_actvy_type_nm').val("0");
		$('#sales_oppt_nm').val("");
		$('#cust_nm').val("");
		$('#sales_actvy_stat_nm').val("0");
		$('#strt_d').val("");
		$('#strt_t_h').val("0");
		$('#strt_t_m').val("0");
		$('#end_d').val("");
		$('#end_t_h').val("0");
		$('#end_t_m').val("0");
		$('#memo').val("");
	}
  });
}

//추가하고 나서 처음으로 리셋
function actAddReset(){
	$(document).ready(function() {
	
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "block");
		$("#actAddBtnDiv").css("display", "none");
		$("#actMdfBtnDiv").css("display", "none");
		
		$("#act_tab_tbody input[type='text']").css("background-color", "#EAEAEA");
		$('#sales_actvy_nm').attr("disabled",true);
		$('#actdiv_1').attr("disabled",true);
		$('#actdiv_2').attr("disabled",true);
		$('#actdiv_1').prop("checked",false);
		$('#actdiv_2').prop("checked",false);
		$('#sales_actvy_type_nm').attr("disabled",true);
		$('#sales_oppt_nm').attr("disabled",true);
		$('#act_opp_nm').attr("disabled",true);
		$('#cust_nm').attr("disabled",true);
		$('#customer').attr("disabled",true);
		$('#sales_actvy_stat_nm').attr("disabled",true);
		$('#strt_d').attr("disabled",true);
		$('#strt_t_h').prop("checked", true);
		$('#strt_t_m').prop("checked", true);
		$('#end_d').attr("disabled",true);
		$('#end_t_h').attr("disabled",true);
		$('#end_t_m').attr("disabled",true);
		$('#memo').attr("disabled",true);
		
		$('#sales_actvy_nm').val("");
		$('#actdiv_1').val("");
		$('#actdiv_2').val("");
		$('#sales_actvy_type_nm').val("0");
		$('#sales_oppt_nm').val("");
		$('#cust_nm').val("");
		$('#sales_actvy_stat_nm').val("0");
		$('#strt_d').val("");
		$('#strt_t_h').val("0");
		$('#strt_t_m').val("0");
		$('#end_d').val("");
		$('#end_t_h').val("0");
		$('#end_t_m').val("0");
		$('#memo').val("");
  });
}

//취소버튼 클릭했을 때 상세정보 보여주기
function actMdfyCancelBt(){
	// 취소 버튼 기능
	$(document).ready(function() {
		
		var ynChk = confirm("정말 취소하시겠습니까?");
		if(ynChk){
		
		$("#act_tab_tbody input[type='text']").css("background-color", "#EAEAEA");
		$("#memo").css("background-color", "#EAEAEA");
		
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "block");
		$("#actAddBtnDiv").css("display", "none");
		$("#actMdfBtnDiv").css("display", "none");
		
		//취소 클릭했을 때 원래 값 넣어주기
		$('#sales_actvy_nm').val($('#hsales_actvy_nm').val()).attr('disabled',true);
		if($('#hsales_actvy_div_cd').val()=='0001'){
			$('#actdiv_1').val($('#hsales_actvy_div_cd').val()).prop("checked", true);
			$('#actdiv_1').attr("disabled", true);
			$('#actdiv_2').attr("disabled", true);
		}else{
			$('#actdiv_2').val($('#hsales_actvy_div_cd').val()).prop("checked", true);
			$('#actdiv_1').attr("disabled", true);
			$('#actdiv_2').attr("disabled", true);
		}
		$('#sales_actvy_type_nm').val($('#hsales_actvy_type_nm').val()).attr("selected", "selected").attr('disabled',true);
		$('#sales_oppt_nm').val($('#hsales_oppt_id').val()).attr('disabled',true);
		$('#cust_nm').val($('#hcust_id').val()).attr('disabled',true);
		$('#sales_actvy_stat_nm').val($('#hsales_actvy_stat_cd').val()).attr("selected", "selected").attr('disabled',true);
		$('#strt_d').val($('#hstrt_d').val()).attr('disabled',true);
		$('#strt_t_h').val($('#hstrt_t_h').val()).attr('disabled',true);
		$('#strt_t_m').val($('#hstrt_t_m').val()).attr('disabled',true);
		$('#end_d').val($('#hend_d').val()).attr('disabled',true);
		$('#end_t_h').val($('#hend_t_h').val()).attr('disabled',true);
		$('#end_t_m').val($('#hend_t_m').val()).attr('disabled',true);
		$('#memo').val($('#hmemo').val()).attr('disabled',true);
		}
	});
}
//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
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

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat_D(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}

function actTabInit(){
	$('#sales_actvy_nm').attr('disabled',true);
	$('#actdiv_1').attr('disabled',true);
	$('#actdiv_2').attr('disabled',true);
	$('#sales_actvy_type_nm').attr('disabled',true);
	$('#sales_oppt_nm').attr('disabled',true);
	$('#act_opp_nm').attr('disabled',true);
	$('#cust_nm').attr('disabled',true);
	$('#customer').attr('disabled',true);
	$('#sales_actvy_stat_nm').attr('disabled',true);
	$('#strt_d').attr('disabled',true);
	$('#strt_t_h').attr('disabled',true);
	$('#strt_t_m').attr('disabled',true);
	$('#end_d').attr('disabled',true);
	$('#end_t_h').attr('disabled',true);
	$('#end_t_m').attr('disabled',true);
	$('#memo').attr('disabled',true);
}

//시작일자 달력띄우기
function startCalendar(ctx){
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
/*	 $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
}

//종료일자 달력띄우기
function endCalendar(ctx){
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
	/* $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
}

//상세정보가 클릭돼있을 때 상세정보함수 불러오기
function actTabFunc(sales_actvy_id) {

	$(document).ready(function() {
		$("#nowSales_actvy_id").val(sales_actvy_id); // 현재 sales_actvy_id 저장
			
		if($("#tab1").is(":checked")){ // 상세정보 불러오기
			if(sales_actvy_id != '')  actDetail(sales_actvy_id);
		} 
	});
}

//영업활동명을 클릭했을 때 상세정보
function actDetail(sales_actvy_id) {
		
		var ctx = $("#ctx").val();
		var at_select = $("#sales_actvy_type_nm");
		var at_select_option = "";
		var adiv_select = $("#sales_actvy_div_nm");
		var adiv_select_option = "";
		var astat_select = $("#sales_actvy_stat_nm");
		var astat_select_option = "";
		
		// 버튼 재설정
		$("#actBaseBtnDiv").css("display", "block");
		$("#actAddBtnDiv").css("display", "none");
		$("#actMdfBtnDiv").css("display", "none");
        
		$("#act_tab_tbody input[type='text']").css("background-color", "#EAEAEA");
		$("#memo").css("background-color", "#EAEAEA");
		
		$.ajax({
			type : 'POST',
			url : ctx+'/actDetail',
			data : "sales_actvy_id="+sales_actvy_id,
			dataType : "json",
			success : function(data) {
				        
				       /* //날짜함수변환 
						start_d = dateFormat_D(Number(data.strt_d));
						end_d = dateFormat_D(Number(data.end_d));
						reg_dt = dateFormat(Number(data.fst_reg_dt));*/
			
				        $("#nowSales_actvy_id").val(data.sales_actvy_id);
						$('#sales_actvy_nm').val(data.sales_actvy_nm).attr("disabled", true);
						
						if (data.sales_actvy_div_cd == "0001") {
							$('#actdiv_1').prop("checked", true);
							$('#actdiv_2').prop("checked", false);
							$('#actdiv_2').attr("disabled", true);
						} else {
							$('#actdiv_1').prop("checked", false);
							$('#actdiv_2').prop("checked", true);
							$('#actdiv_1').attr("disabled", true);
						}
						$("#sales_actvy_type_nm").children().eq(data.sales_actvy_type_cd).attr("selected", "selected"); // 
						$("#sales_actvy_type_nm").attr("disabled", true); // 
						$('#sales_oppt_nm').val(data.sales_oppt_nm).attr("disabled", true);
						$('#act_opp_nm').attr("disabled",true);
						$('#cust_nm').val(data.cust_nm).attr("disabled", true);
						$('#customer').attr("disabled",true);
						$("#sales_actvy_stat_nm").children().eq(data.sales_actvy_stat_cd).prop("selected", true); // 
						$("#sales_actvy_stat_nm").attr("disabled", "disabled"); // 
						
						$('#strt_d').val(data.strt_d).attr("disabled", true);
						var stimedb = $('.start_hour').find('option');
						var smindb = $('.start_minute').find('option');
						
						if(data.strt_t!=null){
							var strt_t = data.strt_t;
							var st = strt_t.split(":");
							
							for(var t=0; t<stimedb.length; t++){
								
								if($(stimedb[t]).val()==st[0]){
									$(stimedb[t]).attr("selected", "selected");
									$('#hstrt_t_h').val(st[0]);
								}
							}
							
							for(var j=0; j<smindb.length; j++){
								
								if($(smindb[j]).val()==st[1]){
									$(smindb[j]).attr("selected", "selected");
									$('#hstrt_t_m').val(st[1]);
								}	
							}
						}else{
							$(stimedb[0]).attr("selected", "selected");
							$(smindb[0]).attr("selected", "selected");
						}
						
						$("#strt_t_h").attr("disabled", true);
						$('#strt_t_m').attr("disabled", true);
									
						$('#end_d').val(data.end_d).attr("disabled", true);
						
						var etimedb = $('.end_hour').find('option');
						var emindb = $('.end_minute').find('option');
						
						if(data.end_t!=null){
							var end_t = data.end_t;
							var et = end_t.split(":");
							
							for(var i=0; i<etimedb.length; i++){
								
								if($(etimedb[i]).val()==et[0]){
									$(etimedb[i]).attr("selected", "selected");
									$('#hend_t_h').val(et[0]);
								}
							}
							
							for(var m=0; m<emindb.length; m++){
								
								if($(emindb[m]).val()==et[1]){
									$(emindb[m]).attr("selected", "selected");
									$('#hend_t_m').val(et[1]);
								}	
							}
							
						}else{
							$(etimedb[0]).attr("selected", "selected");
							$(emindb[0]).attr("selected", "selected");
						}
							
						$("#end_t_h").attr("disabled", true);
						$("#end_t_m").attr("disabled", true);	
						$('#memo').val(data.memo).attr("disabled", true);
						
						//히든속성에 value 값 설정하기
						$('#hsales_actvy_nm').val(data.sales_actvy_nm);
						$('#hsales_actvy_div_cd').val(data.sales_actvy_div_cd);
						$('#hsales_actvy_type_nm').val(data.sales_actvy_type_cd);
						$('#sales_oppt_id').val(data.sales_oppt_id);
						$('#hsales_oppt_id').val(data.sales_oppt_nm);
						$('#cust_id').val(data.cust_id);
						$('#hcust_id').val(data.cust_nm);
						$('#hsales_actvy_stat_cd').val(data.sales_actvy_stat_cd);
						$('#hstrt_d').val(data.strt_d);
						$('#hend_d').val(data.end_d);
						$('#hmemo').val(data.memo);
				
			},
			error : function(request,status,error) {
		          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		      }
		});
}

//페이지 입력 이동
function pageInputAct(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			var actPageNum = $("#actPageInput").val();
			var endPageNum = $("#endPageNum").val();
			var ssales_actvy_nm = $("#ssales_actvy_nm").val();
			var ssales_actvy_div_cd = $("#ssales_actvy_div_cd").val();
			var sact_oppt_nm = $("#sact_oppt_nm").val();
			var sstart_day = $("#sstart_day").val();
			var ssales_actvy_stat_cd = $("#ssales_actvy_stat_cd").val();
			if (parseInt(actPageNum) > parseInt(endPageNum) || parseInt(actPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#actPageInput").val("1");
			} else {
				if(ssales_actvy_nm == '' && ssales_actvy_div_cd == '0' && sact_oppt_nm == '' && sstart_day == ''&& ssales_actvy_stat_cd == '0'){
					actPaging(actPageNum);
				} else {
					actPaging(actPageNum);
				}
				
			}
		}
	event.stopPropagation();
}

//영업활동 페이징
function actPaging(actPageNum) {
	var ctx = $("#ctx").val();
	var tbody = $('#act_list_tbody');
	var tbodyContent = "";
	var actData = { "actPageNum": actPageNum };
	
	$.ajax({
		url : ctx+'/actPaging',
		type : 'POST',
		data : actData,
		success : function(data) {
			var start_d  = null;
			var end_d = null;
			var reg_dt = null;

			if(data.actListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/act';
			}else{
				tbody.children().remove();
			
			for (var i = 0; i < data.actList.length; i++) {
				/*start_d = dateFormat_D(Number(data.actList[i].strt_d));
				end_d = dateFormat_D(Number(data.actList[i].end_d));
				reg_dt = dateFormat(Number(data.actList[i].fst_reg_dt));*/
				
				tbodyContent = "<tr>"
									+"<th style='width:2%;'><input type='checkbox'></th>"
									+"<td style='width:16%; text-align: left; padding-left:5px;' class='act_nm_tag' onclick=actTabFunc('"+data.actList[i].sales_actvy_id+"')>"
									+"<input type='hidden' value="+data.actList[i].sales_actvy_id+" id='hi_act_id'>"
									+"<a id='act_id_a' style='color: blue; cursor: pointer;' class='actClick'>"+data.actList[i].sales_actvy_nm+"</a></td>"
									+"<td style='width:6%; text-align: center;' class='act_div_tag'>"+data.actList[i].sales_actvy_div_cd+"</td>"; 
									
								    if(data.actList[i].sales_oppt_nm == 'null' || data.actList[i].sales_oppt_nm == null || data.actList[i].sales_oppt_nm == ""){
								    	tbodyContent += "<td class='act_oppt_tag' style='width:24%; text-align: left; padding-left:5px;'></td>";
									}else{
										tbodyContent +="<td class='act_oppt_tag' style='width:24%; text-align: left; padding-left:5px;'>"+data.actList[i].sales_oppt_nm+"</td>";
									}
								    
								    tbodyContent +="<td style='width:6%; text-align: center;' class='act_type_tag'>"+data.actList[i].sales_actvy_type_cd+"</td>"
									+"<td style='width:8%; text-align: center;' class='act_starth_tag'>"+data.actList[i].strt_d+"</td>";
									
								    if(data.actList[i].strt_t == 'null' || data.actList[i].strt_t == null || data.actList[i].strt_t == "" || data.actList[i].strt_t == "0"){
								    	tbodyContent += "<td class='act_startm_tag' style='width:6%; text-align: center;'></td>";
									}else{
										tbodyContent +="<td class='act_startm_tag' style='width:6%; text-align: center;'>"+data.actList[i].strt_t+"</td>";
									}
								    
								    tbodyContent +="<td class='act_endh_tag' style='width:8%; text-align: center;'>"+data.actList[i].end_d+"</td>";
								    
								    if(data.actList[i].end_t == 'null' || data.actList[i].end_t == null || data.actList[i].end_t == "" || data.actList[i].end_t == "0"){
								    	tbodyContent += "<td class='act_endm_tag' style='width:6%; text-align: center;'></td>";
								    }else{
								    	tbodyContent +="<td class='act_endm_tag' style='width:6%; text-align: center;'>"+data.actList[i].end_t+"</td>";
								    }
									
								    tbodyContent +="<td class='act_stat_tag' style='width:4%; text-align: center;'>"+data.actList[i].sales_actvy_stat_cd+"</td>"
									+"<td class='act_reg_tag' style='width:6%; text-align: center;'>"+data.actList[i].fst_reg_id_nm+"</td>"
				                    +"<td class='act_dt_tag' style='width:8%; text-align: center;'>"+data.actList[i].fst_reg_dt+"</td></tr>"
				                    +"<tr>"
			   tbody.append(tbodyContent);
			}
			
			if(data.actList.length < 5){
				for(var j = 0; j < 5-data.actList.length; j++){
					tbodyContent ="<tr style='height:25px;'>"
						+"<th></th>"
						+"<td></td><td></td><td></td><td></td>"
						+"<td></td><td></td><td></td><td></td>"
						+"<td></td><td></td>"
						+"<td></td></tr>";
					tbody.append(tbodyContent);
				}
			}
			
			var pageContent = "";
			// 페이징 다시그리기
			$("#act_page_div").children().remove();

			if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
				pageContent = "<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>" 
				+"<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				+"<a> ◀ </a><input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
				+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
			} else if(data.actPageNum == data.page.startPageNum){
				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
								+"<a> ◀ </a> <input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
								+"<a href='#' onclick=actPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=actPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
			} else if(data.actPageNum == data.page.endPageNum){
				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
				                +"<a href='#' onclick=actPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
								+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.page.endPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
								+"<a href='#' onclick=actPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
								+"<a> ▶ </a>";
			} else {
				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
								+"<a href='#' onclick=actPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
								+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
								+"<a href='#' onclick=actPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=actPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
			}
			$("#act_page_div").append(pageContent);
		  }
		},
		error : function(request,status,error) {
	          alert("페이징code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	      }
	});
}

//영업활동 조회 페이징
function schActPaging(actPageNum) {
	var ctx = $("#ctx").val();
	var tbody = $('#act_list_tbody');
	var tbodyContent = "";
	var ssales_actvy_nm = $("#ssales_actvy_nm").val();
	var ssales_actvy_div_cd = $("#ssales_actvy_div_cd").val();
	var sact_oppt_nm = $("#sact_oppt_nm").val();
	var sstart_day = $("#sstart_day").val();
	var ssales_actvy_stat_cd = $("#ssales_actvy_stat_cd").val();
	var actData = { "actPageNum": actPageNum, 
			"ssales_actvy_nm": ssales_actvy_nm, 
			"ssales_actvy_div_cd":ssales_actvy_div_cd, 
			"sact_oppt_nm":sact_oppt_nm,
			"sstart_day":sstart_day,
			"ssales_actvy_stat_cd":ssales_actvy_stat_cd
	};
	
	$.ajax({
		url : ctx+'/actPaging',
		type : 'POST',
		data : actData,
		success : function(data) {
			/*
			var start_d  = null;
			var end_d = null;
			var reg_dt = null;
			var sstart_day  = null;*/
			
			if(data.actListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/act';
			}else{
				tbody.children().remove();
				
			/*	sstart_day = dateFormat_D(Number(data.sstart_day));*/
				
				$("#sact_oppt_nm").val(data.sact_oppt_nm);
				$("#ssales_actvy_div_cd").val(data.ssales_actvy_div_cd);
				$("#ssales_actvy_nm").val(data.ssales_actvy_nm);
				$("#sstart_day").val(data.sstart_day);
				$("#ssales_actvy_stat_cd").val(data.ssales_actvy_stat_cd);
				
				tbody.children().remove();
				
				for (var i = 0; i < data.actList.length; i++) {
					/*start_d = dateFormat_D(Number(data.actList[i].strt_d));
					end_d = dateFormat_D(Number(data.actList[i].end_d));
					reg_dt = dateFormat(Number(data.actList[i].fst_reg_dt));*/
					
					tbodyContent = "<tr>"
						+"<th style='width:2%;'><input type='checkbox'></th>"
						+"<td style='width:16%; text-align: left; padding-left:5px;' class='act_nm_tag' onclick=actTabFunc('"+data.actList[i].sales_actvy_id+"')>"
						+"<input type='hidden' value="+data.actList[i].sales_actvy_id+" id='hi_act_id'>"
						+"<a id='act_id_a' style='color: blue; cursor: pointer;' class='actClick'>"+data.actList[i].sales_actvy_nm+"</a></td>"
						+"<td style='width:6%; text-align: center;' class='act_div_tag'>"+data.actList[i].sales_actvy_div_cd+"</td>"; 
						
					    if(data.actList[i].sales_oppt_nm == 'null' || data.actList[i].sales_oppt_nm == null || data.actList[i].sales_oppt_nm == ""){
					    	tbodyContent += "<td class='act_oppt_tag' style='width:24%; text-align: left; padding-left:5px;'></td>";
						}else{
							tbodyContent +="<td class='act_oppt_tag' style='width:24%; text-align: left; padding-left:5px;'>"+data.actList[i].sales_oppt_nm+"</td>";
						}
					    
					    tbodyContent +="<td style='width:6%; text-align: center;' class='act_type_tag'>"+data.actList[i].sales_actvy_type_cd+"</td>"
						+"<td style='width:8%; text-align: center;' class='act_starth_tag'>"+data.actList[i].strt_d+"</td>";
						
					    if(data.actList[i].strt_t == 'null' || data.actList[i].strt_t == null || data.actList[i].strt_t == "" || data.actList[i].strt_t == "0"){
					    	tbodyContent += "<td class='act_startm_tag' style='width:6%; text-align: center;'></td>";
						}else{
							tbodyContent +="<td class='act_startm_tag' style='width:6%; text-align: center;'>"+data.actList[i].strt_t+"</td>";
						}
					    
					    tbodyContent +="<td class='act_endh_tag' style='width:8%; text-align: center;'>"+data.actList[i].end_d+"</td>";
					    
					    if(data.actList[i].end_t == 'null' || data.actList[i].end_t == null || data.actList[i].end_t == "" || data.actList[i].end_t == "0"){
					    	tbodyContent += "<td class='act_endm_tag' style='width:6%; text-align: center;'></td>";
					    }else{
					    	tbodyContent +="<td class='act_endm_tag' style='width:6%; text-align: center;'>"+data.actList[i].end_t+"</td>";
					    }
						
					    tbodyContent +="<td class='act_stat_tag' style='width:4%; text-align: center;'>"+data.actList[i].sales_actvy_stat_cd+"</td>"
						+"<td class='act_reg_tag' style='width:6%; text-align: center;'>"+data.actList[i].fst_reg_id_nm+"</td>"
	                    +"<td class='act_dt_tag' style='width:8%; text-align: center;'>"+data.actList[i].fst_reg_dt+"</td></tr>"
	                    +"<tr>"
					    tbody.append(tbodyContent);
			    }
				
				if(data.actList.length < 5){
					for(var j = 0; j < 5-data.actList.length; j++){
						tbodyContent ="<tr style='height:36px;'>"
							+"<th></th>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td><td></td>"
							+"<td></td></tr>";
						tbody.append(tbodyContent);
					}
				}
				
				var pageContent = "";
				// 페이징 다시그리기
				$("#act_page_div").children().remove();
				
				if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
					pageContent = "<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>" 
					+"<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a> ◀ </a><input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
					+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
				} else if(data.actPageNum == data.page.startPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
					+"<a> ◀ </a> <input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
					+"<a href='#' onclick=schActPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
				} else if(data.actPageNum == data.page.endPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
					+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.page.endPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
					+"<a href='#' onclick=schActPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
					+"<a> ▶ </a>";
				} else {
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
					+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
					+"<a href='#' onclick=schActPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
				}
				$("#act_page_div").append(pageContent);
			}
		},
		error : function(request,status,error) {
	          alert("조회페이징code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	      }
	});
}

//검색 엔터키 기능
function actSearchEnter(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		if ($("#ssales_actvy_nm").val() == '' && $("#ssales_actvy_div_cd").val() == '0' && $("#sact_oppt_nm").val() == '' && $("#sstart_day").val() == '' && $("#ssales_actvy_stat_cd").val() == '0') {
			alert("검색어를 입력하세요.")
			$("#ssales_actvy_nm").focus();
		} else {
			schActPaging(1);
		}
	}
	event.stopPropagation();
}

function actInsertClick(){
	$('#actAddBtn').click(function(){
		$('#actAddSaveBtn').css("display", "inline-block");
		$('#actCancelBtn').attr("disabled", false);
		$('#actModifyBtn').css("display", "none");
		$('#actAddBtn').css("display", "none");
		
		actContentEmpty();
		
		$('#sales_actvy_nm').attr('disabled',false);
		$('#actdiv_1').attr('disabled',false);
		$('#actdiv_2').attr('disabled',false);
		$('#sales_actvy_type_nm').attr('disabled',false);
		$('#sales_oppt_nm').attr('disabled',false);
		$('#act_opp_nm').attr('disabled',false);
		$('#cust_nm').attr('disabled',false);
		$('#customer').attr('disabled',false);
		$('#sales_actvy_stat_nm').attr('disabled',false);
		$('#strt_d').attr('disabled',false);
		$('#strt_t_h').attr('disabled',false);
		$('#strt_t_m').attr('disabled',false);
		$('#end_d').attr('disabled',false);
		$('#end_t_h').attr('disabled',false);
		$('#end_t_m').attr('disabled',false);
		$('#memo').attr('disabled',false);
	});

}

//영업활동 등록
function actInsert(ctx) {
	$(document).ready(function() {
		var actTbody = $('#act_list_tbody');
		var actListContent = "";
		var strt_t_h = $('#strt_t_h').val();
		var strt_t_m = $('#strt_t_m').val();
		var end_t_h = $('#end_t_h').val();
		var end_t_m = $('#end_t_m').val();
		
		if($('#actdiv_1').is(':checked')){
			var sales_actvy_div_nm1=$('#actdiv_1').val();
			
		}else{
			var sales_actvy_div_nm1=$('#actdiv_2').val();		
			}		
		var obj = {
				sales_actvy_nm : $('#sales_actvy_nm').val(),
				sales_actvy_div_cd : sales_actvy_div_nm1,
				sales_actvy_type_cd : $('#sales_actvy_type_nm').val(),
				sales_oppt_id : $('#sales_oppt_id').val(),
				cust_id : $('#cust_id').val(),
				sales_actvy_stat_cd : $('#sales_actvy_stat_nm').val(),
				strt_d : $('#strt_d').val(),
				strt_t : $('#strt_t_h').val()+":"+$('#strt_t_m').val(),
				end_d : $('#end_d').val(),
				end_t : $('#end_t_h').val()+":"+$('#end_t_m').val(),    			
		        memo : $('#memo').val()
			}
		
		if(obj.sales_actvy_nm==""||obj.sales_actvy_nm==null){
			alert("영업활동명을 입력해 주세요");
			return false;
		}else if(obj.sales_actvy_type_cd=="0"||obj.sales_actvy_type_cd==null){
			alert("활동유형을 선택해 주세요");
			return false;			
		}/*else if($('#actdiv_2').is(':checked')){
            if(obj.sales_oppt_id==""||obj.sales_oppt_id==null){
            	alert("영업기회명을 선택해 주세요");
			}else if(obj.cust_id==""||obj.cust_id==null){
            	alert("고객사를 선택해 주세요");
            }
		}*/else if(obj.sales_actvy_stat_cd=="0"||obj.sales_actvy_stat_cd==null){
			alert("상태를 선택해 주세요");
			return false;
		}else if(obj.strt_d==""||obj.strt_d==null){
			alert("시작일자를 선택해 주세요");
			return false;
		}else if(strt_t_h=="0"|| strt_t_h==null){
			alert("시를 선택해 주세요");
			return false;
		}else if(strt_t_m=="0"|| strt_t_m==null){
			alert("분을 선택해 주세요");
			return false;
		}else if(obj.end_d==""||obj.end_d==null){
			alert("종료일자를 선택해 주세요");
			return false;
		}else if(end_t_h=="0"|| end_t_h==null){
			alert("시를 선택해 주세요");
			return false;
		}else if(end_t_m=="0"|| end_t_m==null){
			alert("분을 선택해 주세요");
			return false;
		}
		
	    var jsonData = JSON.stringify(obj);		//JSON Object 생성
	    jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
	    var insertChk = confirm("정말 등록 하시겠습니까?");
		if(insertChk){
		$.ajax({
			type : 'POST',
			url : ctx+'/actInsert',
			data : jsonData,
			contentType : 'application/json; charset=UTF-8',
			dataType : "json",
			success : function(data) {
				
				      alert("영업활동이 등록되었습니다.");
				      
				      actAddReset();
				      $("#memo").css("background-color", "#EAEAEA");
				      actPaging("1");
			},
			error : function(request,status,error) {
		          alert("활동등록code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		      }
	       });
	    }else{
	    	return;
	    }
    });
}

//영업활동 수정
function actModify(ctx){
	$(document).ready(function() {
		var actTbody = $('#act_list_tbody');
		var actListContent = "";
		
		if($('#actdiv_1').is(':checked')){
			var sales_actvy_div_nm1=$('#actdiv_1').val();
			
		}else{
			var sales_actvy_div_nm1=$('#actdiv_2').val();		
			}		
		var obj = {
				sales_actvy_id : $("#nowSales_actvy_id").val(),
				sales_actvy_nm : $('#sales_actvy_nm').val(),
				sales_actvy_div_cd : sales_actvy_div_nm1,
				sales_actvy_type_cd : $('#sales_actvy_type_nm').val(),
				sales_oppt_id : $('#sales_oppt_id').val(),
				sales_oppt_nm : $('#sales_oppt_nm').val(),
				cust_id : $('#cust_id').val(),
				sales_actvy_stat_cd : $('#sales_actvy_stat_nm').val(),
				strt_d : $('#strt_d').val(),
				strt_t : $('#strt_t_h').val()+":"+$('#strt_t_m').val(),
				end_d : $('#end_d').val(),
				end_t : $('#end_t_h').val()+":"+$('#end_t_m').val(),    			
		        memo : $('#memo').val()/*,
		        actPageNum : $('#actPageNum').val()*/
			}

	    var jsonData = JSON.stringify(obj);		//JSON Object 생성
	    jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
		$.ajax({
			type : 'POST',
			url : ctx+'/actEdit',
			data : jsonData,
			contentType : 'application/json; charset=UTF-8',
			dataType : "json",
			success : function(data) {
				      alert("영업활동이 편집되었습니다.");
				      /*actPaging(data.actPageNum);*/
				      
				      /*var start_d  = null;
					  var end_d = null;
					  var reg_dt = null;
					
                      start_d = dateFormat_D(Number(data.strt_d));
					  end_d = dateFormat_D(Number(data.end_d));
					  reg_dt = dateFormat(Number(data.fst_reg_dt));*/
					  
				      var list = $('.act_list_tbody tr').find('#hi_act_id').toArray();

				      for(var i=0; i<list.length; i++){
				    	  if($(list[i]).val()==data.sales_actvy_id){
				    		  	
				    		    $(list[i]).parent().parent().children('.act_nm_tag').find('a').text(data.sales_actvy_nm);
			    		       
				    		    if(data.sales_actvy_div_cd == '0001'){
									$(list[i]).parent().parent().children('.act_div_tag').text('할일');

								}else{
									$(list[i]).parent().parent().children('.act_div_tag').text('영업기회');
								}
				    		    if(data.sales_oppt_nm == 'null' || data.sales_oppt_nm == null || data.sales_oppt_nm == ""){
								   $(list[i]).parent().parent().children('.act_oppt_tag').text('');
				    		    }else{
				    		       $(list[i]).parent().parent().children('.act_oppt_tag').text(data.sales_oppt_nm);
				    		    }
								$(list[i]).parent().parent().children('.act_type_tag').text($('#sales_actvy_type_nm').find('option[value="'+data.sales_actvy_type_cd+'"]').text());	
								$(list[i]).parent().parent().children('.act_starth_tag').text(data.strt_d);
								$(list[i]).parent().parent().children('.act_startm_tag').text(data.strt_t);
								$(list[i]).parent().parent().children('.act_stat_tag').text($('#sales_actvy_stat_nm').find('option[value="'+data.sales_actvy_stat_cd+'"]').text());
							    $(list[i]).parent().parent().next().children('.act_endh_tag').text(data.end_d);
							    $(list[i]).parent().parent().next().children('.act_endm_tag').text(data.end_t);
				    		    
							    // 버튼 재설정
								$("#actBaseBtnDiv").css("display", "block");
								$("#actAddBtnDiv").css("display", "none");
								$("#actMdfBtnDiv").css("display", "none");
								
								$("#act_tab_tbody input[type='text']").css("background-color", "#EAEAEA");
								$("#memo").css("background-color", "#EAEAEA");
							    $("#act_tab_tbody input").attr("disabled", true);
							    $("#sales_actvy_type_nm").attr("disabled", true);
							    $("#sales_actvy_stat_nm").attr("disabled", true);
							    $("#strt_t_h").attr("disabled", true);
							    $("#strt_t_m").attr("disabled", true);
							    $("#end_t_h").attr("disabled", true);
							    $("#end_t_m").attr("disabled", true);
							    $("#memo").attr("disabled", true);
							    
							    //히든 속성에 value값 설정하기
							    $("#hsales_actvy_nm").val(data.sales_actvy_nm); // 영업활동명
							    $("#hsales_actvy_div_cd").val(data.sales_actvy_div_cd); // 활동구분
							    $("#hsales_actvy_type_nm").val(data.sales_actvy_type_cd); // 활동유형
							    $("#sales_oppt_id").val(data.sales_oppt_nm); // 영업기회명
							    $("#hcust_id").val(data.cust_nm); // 고객사
							    $("#cust_id").val(data.cust_id); // 고객사
							    $("#hstrt_d").val(data.strt_d); // 시작일자
							    $("#hend_d").val(data.end_d); // 종료일자
							    $("#hmemo").val(data.memo); // 메모
							    
							    var stimedb = $('.start_hour').find('option');
								var smindb = $('.start_minute').find('option');
								
								if(data.strt_t!=null){
									var strt_t = data.strt_t;
									var st = strt_t.split(":");
									
									for(var t=0; t<stimedb.length; t++){
										
										if($(stimedb[t]).val()==st[0]){
											$('#hstrt_t_h').val(st[0]);
										}
									}
									
									for(var j=0; j<smindb.length; j++){
										
										if($(smindb[j]).val()==st[1]){
											$('#hstrt_t_m').val(st[1]);
										}	
									}
								}
								var etimedb = $('.end_hour').find('option');
								var emindb = $('.end_minute').find('option');
								
								if(data.end_t!=null){
									var end_t = data.end_t;
									var et = end_t.split(":");
									
									for(var i=0; i<etimedb.length; i++){
										
										if($(etimedb[i]).val()==et[0]){
											$('#hend_t_h').val(et[0]);
										}
									}
									
									for(var m=0; m<emindb.length; m++){
										
										if($(emindb[m]).val()==et[1]){
											$('#hend_t_m').val(et[1]);
										}	
									}
								}
				    	  }
				      } 
			},
			error : function(request,status,error) {
		          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		      }
	});
});
}

//활동구분 클릭했을 때 활성화 비활성화 설정해주기
function actDivCheck(){

	if($('#actdiv_1').is(':checked')){
		 $("#sales_oppt_nm").css("background-color","#EAEAEA");
	     $('#sales_oppt_nm').attr("disabled",true);
	     $('#sales_oppt_nm').val("");
	     $('#sales_oppt_id').val("");
		 $('#act_opp_nm').attr("disabled",true);
		 $("#cust_nm").css("background-color", "white");
	}else{
		 $("#sales_oppt_nm").css("background-color","white");
		 $("#cust_nm").css("background-color", "white");
		 $('#sales_oppt_nm').attr("disabled",false);
		 $('#act_opp_nm').attr("disabled",false);
		 $('#cust_nm').attr("disabled",false);
		 $('#customer').attr("disabled",false);
	}
}

function reset(){
	 $('#sales_actvy_nm').val("");
	 $('#actdiv_1').prop("checked",false);
	 $('#actdiv_2').prop("checked",false);
	 $('#sales_actvy_type_nm').val("0");
	 $('#sales_oppt_nm').val("");
	 $('#cust_nm').val("");
	 $('#sales_actvy_stat_nm').val("0");
	 $('#strt_d').val("");
	 $('#strt_t_h').val("0");
	 $('#strt_t_m').val("0");
	 $('#end_d').val("");
	 $('#end_t_h').val("0");
	 $('#end_t_m').val("0");
	 $('#memo').val("");
	 
}

function searchActDiv(){
	if($('#ssales_actvy_div_cd').val()=='0001'){
		$('#sact_oppt_nm').attr("disabled",true);
	}else{
		$('#sact_oppt_nm').attr("disabled",false);
	}
}