/**
 * 
 */
$(document).ready(function() {
	 var ctx = $("#ctx").val();
	$('#opptSelect').click(function(){
		window.open(ctx+'/ccOpptPopList?cust_id='+$('#cust_id').val()+'','newwindow2','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	}); 
	
	// 상품추가 수량, 금액 실시간 변경
	$("#estimatetbody").bind('input', function(event) { 
		var size = event.target.value;
	    var target = $(event.target);
	    var id = target.attr("id");
	    var count = target.parent().parent().children().eq(2).children().val();
	    var salesamt = target.parent().parent().children().eq(0).children().eq(1).val();
	    var sellamt =  parseInt(salesamt) * parseInt(count);
	    var unit = target.parent().children().eq(1).val();
	   if(id=='discount'){
		   if(unit=='0001'){
			   if(parseInt(size)>parseInt(sellamt)){
				   alert("판매가 보다 높게 지정할 수 없습니다.");
				   event.target.value = event.target.value.substr(0, event.target.value.length-1);  
			   }
		   }else if(unit=='0002'){
			   if(parseInt(size) > parseInt(100)){
				   alert("판매가 보다 높게 지정할 수 없습니다.");
				   event.target.value = event.target.value.substr(0, event.target.value.length-1);
			   }
		   }
	   }else if(id=='estim_qty'){
		   if(parseInt(count) >= parseInt(100)){
			   alert("수량은 1~99까지 가능합니다.");
			   event.target.value = event.target.value.substr(0, event.target.value.length-1);			   
		   }else if(parseInt(count) <= parseInt(0)){
			   alert("수량은 1~99까지 가능합니다.");
			   event.target.value = "1";	
		   }
		   
	   }
		prodChange();
	});
	
	// 상품 리스트 체크박스 선택, 해제
	$("#prodallCheck").click(function(){
		if($("#prodallCheck").prop("checked")){
			$("input[type=checkbox]").prop("checked", true);
		} else {
			$("input[type=checkbox]").prop("checked", false);
		}
	});
	
	// 날짜 아이콘
	$("#estim_valid_d").datepicker({
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
}); 

function inputOpptNm(sales_oppt_id,sales_oppt_nm){
	$('#sales_oppt_id').val(sales_oppt_id);
	$('#sales_oppt_nm').val(sales_oppt_nm);
}

//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function actOpptNmSelect(sales_oppt_id,sales_oppt_nm){
	window.opener.inputOpptNm(sales_oppt_id,sales_oppt_nm);
	self.close();
}

var buttonStatus; // 저장, 수정 버튼상태
var prodDeleteProdId=[]; // 상품 삭제 상품 ID List
var prodDeleteEstimId=[];  // 삭제에 대한 견적 ID List
var prodAddId =[]; // 상품 추가ID List

// 상품 추가
function prodList(ctx){
	window.open(ctx+'/estProdList','newwindow3','width=550, height=560, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

function prodNmSelect(){
	$('#product_list_table tbody tr').click(function(){
		var ctx = $("#ctx").val();
		var prod_id=$(this).find('#prod_id').text();
		var prod_nm=$(this).find('#prod_nm').text();
		var prod_sales_amt=$(this).find('#prod_sales_amt').text();
		
		window.opener.inputProd(prod_id,prod_nm,prod_sales_amt);
		
		self.close();
	});
}

function inputProd(prod_id,prod_nm,prod_sales_amt){
		$("#estimatetbody .empty").remove();
		
		var data = $('#eduCode').val();
		var tmp = data.replace("[", "");
		var tmp2 = tmp.replace("]", "");
		
		var arr = tmp2.split(',');
		var unit = '<option value=0>선택</option>';
		for(var i=0; i<arr.length ; i=i+2){
			unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
		}

	$('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_sales_amt));
	$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
	
	var like = 0;
	if($("#estimatetbody tr").length == 0){
		if($('#flg').val()=='detail'){
			prodAddId.push(prod_id);
		}
		$('#estimatetbody').append(
				'<tr id="priceline" class='+prod_id+' name="prt">'+
				'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
				'<input type="hidden" id="prod_sales_amt" value='+prod_sales_amt+'>'+'</th>'+
				'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
				'<td style="width: 8%;"><input type="number" name="estim_qty" id="estim_qty" class="estim_qty" min="1" max="100" value=1  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
				'<td style="width: 18%;" name="prod_sales_amt">'+prod_sales_amt+'</td>'+
				'<td style="width: 24%;" ><input type="number" id="discount" name="discount" class="discount" min="0" max="100" value=0 onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
				 '<select id="unit" class="unit">'+
				 unit+
				 '</select>'+'</td>'+
				'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
				'</tr>'
		);
		like = 1;
	} else {
		$("#estimatetbody tr").each(function(){
			var old_prodId = $(this).attr("class");

			if(prod_id == old_prodId){
				var count = $(this).children().eq(2).children().val();
				$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
				like=1;
			}
		});
		
		if(like==0){
			if($('#flg').val()=='detail'){
				prodAddId.push(prod_id);
			}
			$('#estimatetbody').append(
					'<tr id="priceline" class='+prod_id+' name="prt">'+
					'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
					'<input type="hidden" id="prod_sales_amt" value='+prod_sales_amt+'>'+'</th>'+
					'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
					'<td style="width: 8%;"><input type="number"  class="estim_qty" name="estim_qty" id="estim_qty" value=1  min="1" max="100" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
					'<td style="width: 18%;" name="prod_sales_amt">'+prod_sales_amt+'</td>'+
					'<td style="width: 24%;" ><input type="number" class="discount" id="discount" name="discount" min="0" max="100" value=0  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
					'<select id="unit" class="unit">'+
					 unit+
					 '</select>'+'</td>'+
					'<td id="sup_price" name="sup_price">0</td>'+
					'</tr>'
			);
		}
	}
	prodChange();	
}

// 상품추가 수량, 금액 변경
function prodChange(){
	var countSum = 0;
	var salesPriceSum = 0;
	var discountSum = 0;
	var supplyPriceSum = 0;
	$("#estimatetbody tr[class!=empty]").each(function(){
		var countObj=$(this).children().eq(2).children();
		var salesamtObj=$(this).children().eq(0).children().eq(1);
		var count = countObj.val();
		if(count==""){
			count="0";
		}
		var sellamt =  $(this).children().eq(3).text();
		var disvalObj = $(this).children().eq(4).children().eq(0);
		var amt = $(this).children().eq(3).text();
		var salesamt = $(this).children().eq(0).children().eq(1).val();
		var sellamt =  parseInt(salesamt) * parseInt(count);			
		if(sellamt==""){
			sellamt="0";
		}
		amt = sellamt;
		$(this).children().eq(3).text(comma(amt));
		salesPriceSum = parseInt(sellamt) + parseInt(salesPriceSum);
		countSum = parseInt(count) + parseInt(countSum);
		var disval =  disvalObj.val();
		if(disval==""){
			disval="0";
		}
		var unit = $(this).children().eq(4).children().eq(1).val();
		var disamt = 0;
		if(unit == "0001"){
			 disamt = parseInt(amt) - parseInt(disval);
			 discountSum = parseInt(disval) + parseInt(discountSum);
		}else if(unit == "0002"){
			var dis = parseInt(amt) * (parseInt(disval)/100);
			disamt = parseInt(amt) - parseInt(dis);
			 discountSum = parseInt(dis) + parseInt(discountSum);
		}else if(unit =="0"){
			disamt = parseInt(amt);
			$(this).children().eq(4).children().eq(0).val("0");
		}
		if(isNaN(disamt) || parseInt(disamt)<0){
			disamt="0";
		}
		$(this).children().eq(5).text(comma(disamt));
		 var realamt = $(this).children().eq(5).text();
		 supplyPriceSum = parseInt(disamt) + parseInt(supplyPriceSum);
	});
	$("#countSum").text(comma(countSum));
	$("#salesPriceSum").text(comma(salesPriceSum));
	$("#discountSum").text(comma(discountSum));
	$("#supplyPriceSum").text(comma(supplyPriceSum));	
}
// 숫자만 입력
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
   
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else return false;
}

function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if(event.target.value==''){
    	event.target.value="0";
    	prodChange();
    }
    else if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else{
    	event.target.value = event.target.value.replace(/[^0-9]/g, "");    	
    }
}

// 숫자 사이 쉼표 추가
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
//숫자 사이 쉼표 삭제
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

// 상품 삭제
function prodDelete(){
	if(confirm("삭제 하시겠습니까? ")){
		$("#estimatetbody input[type=checkbox]:checked").each( function(){
			var classVal =  $(this).val();
			$("."+classVal).remove();
			
			if($('#flg').val()=='detail'){
				prodDeleteProdId.push(classVal);
				prodDeleteEstimId.push($('#estim_id').val());
			}
		});
		$("#prodallCheck").prop("checked", false);
		prodChange();	
	}
}

// 상품 추가
function estAdd(ctx){
	var est_list = []; // 견적당 상품 여러개니까 리스트로 묶어주는거
	var estim_nm = $('#estim_nm').val();
	var cust_id = $('#cust_id').val();
	var estim_lev_cd = $('#estim_lev_cd').val();
	var estim_valid_d = $('#estim_valid_d').val();
	var sales_oppt_id = $('#sales_oppt_id').val();
	var memo = $('#memo').val();
	var prod_id = [];
	var prod_nm = [];
	var estim_qty = []; // 상품 수량
	var prod_sales_amt = $('#prod_sales_amt').text();
	var sales_price = []; // 판매가
	var discount_unit_cd = []; // 할인 코드
	var discount= []; //할인
	var sup_price = []; // 공급가
	var unit_check =0; // 할인 선택 됐는지 검사
	if(estim_nm=="" || estim_nm==null){
		alert("견적명을 입력해 주세요.");
		return false;
	}else if(estim_lev_cd=="0"|| estim_lev_cd==null){
		alert("견적단계를 선택해 주세요");
		return false;
	}else if(estim_valid_d==""|| estim_valid_d==null){
		alert("견적유효일자를 선택해 주세요");
		return false;
	}
	
	// 리스트에 추가해서 묶어주는 역할
	$("#estimatetbody tr[class!=empty]").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);

		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});

	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}

	if(est_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}

	var addChk = confirm("정말 저장 하시겠습니까?");
	if(addChk){
		$.ajax({
			type : 'post',
			url : ctx+'/estAdd',
			dataType : 'json',
			data : {
				estim_valid_d : estim_valid_d,
				estim_lev_cd : estim_lev_cd,
				cust_id : cust_id,
				estim_nm : estim_nm,
				sales_oppt_id : sales_oppt_id,
				memo : memo,
				est_list : est_list
			},
			success:function(){
				alert("정상적으로 등록되었습니다.");
				window.opener.estList(cust_id);
				self.close();
			},
			error:function(request){
				alert("error : " + request.status)
			}
		});
	} else {
		return false;
	}
}

// 견적 수정
function EstimUpdate(ctx){
	var estim_id = $('#estim_id').val();
	var prod_id = [];
	var prod_nm = [];
	var sales_oppt_id = $('#sales_oppt_id').val();
	var estim_qty = [];
	var prod_sales_amt = $('#prod_sales_amt').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var estim_valid_d = $('#estim_valid_d').val();
	var estim_lev_cd = $('#estim_lev_cd').val();
	var cust_id = $('#cust_id').val();
	var estim_nm = $('#estim_nm').val();
	var est_list = [];
	var discount_unit_cd = [];
	var memo = $('#memo').val();

	var cd = 0;
	var unit_check=0;

	if(estim_nm=="" || estim_nm==null){
		alert("견적명을 입력해 주세요.");
		return false;
	}else if(estim_lev_cd=="0"|| estim_lev_cd==null){
		alert("견적단계를 선택해 주세요");
		return false;
	}else if(estim_valid_d==""|| estim_valid_d==null){
		alert("견적유효일자를 선택해 주세요");
		return false;
	}
	
	$("#estimatetbody tr").each(function(){
		
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});
	
	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}

	if(est_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}
	
	var mdfyChk = confirm("정말 저장 하시겠습니까?");
	if(mdfyChk){
		$.ajax({
			url : ctx+'/opptEstimUpdate',
			dataType : 'json',
			data : {
				estim_id : estim_id,
				estim_valid_d : estim_valid_d,
				estim_lev_cd : estim_lev_cd,
				cust_id : cust_id,
				estim_nm : estim_nm,
				sales_oppt_id : sales_oppt_id,
				prodAddId : prodAddId,
				prodDeleteProdId : prodDeleteProdId,
				prodDeleteEstimId : prodDeleteEstimId,
				memo : memo,
				est_list : est_list
			},
			success:function(){
				alert("정상적으로 수정 되었습니다.");
				window.opener.estList(cust_id);
				self.close();
			},
			error:function(request){
				alert("error : " + request.status)
			}
		});
	} else {
		return false;
	}
}

// 팝업창 자동 리사이즈
function setWindowResize() {
	var Dwidth = parseInt(document.body.scrollWidth);
	var Dheight = parseInt(document.body.scrollHeight);
	var divEl = document.createElement("div");
	divEl.style.position = "absolute";
	divEl.style.left = "0px";
	divEl.style.top = "0px";
	divEl.style.width = "100%";
	divEl.style.height = "100%";
	  
	document.body.appendChild(divEl);
	
	window.resizeBy(Dwidth-divEl.offsetWidth, Dheight-divEl.offsetHeight);
	document.body.removeChild(divEl);
}

//숫자만 입력
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 188 ){
//    	alert("keyID : " + keyID);
//    	event.target.value = comma(event.target.value);
    	return;    	
    } 
    else{
    	return false;
    }
}
//숫자 아닌값 replace
function removeChar(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ){
    	return;
    }
    else{
//    	event.target.value = comma(event.target.value);
    	event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
}

//취소버튼
function estClose(){
	var chk = confirm("정말 취소 하시겠습니까?");
	if(chk){
		self.close();
	}else{
		return;
	}
}