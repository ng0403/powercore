$(function(){
	var ctx = $('#ctx').val();
	filelistfunc(ctx)
});

function filelistfunc(ctx){
	
	$('.bt_position_popup').delegate('#filesearch', 'click', function(){	
		
		var callfile = $('#ofilesearch').click();
		
		if(!callfile){
			return false;
		}
		var ofile=$('#ofilesearch').val();
		$('#filelist').append("<input type='hidden' class='flist' value='"+ofile+"'><a href='#'>"+ofile+"</a><br/>");
		});
	
	$('#closePopup').click(function(){	
		
		self.close();
		
	});
	
	$('.bt_position_popup').delegate('#submitlist', 'click', function(){
		
		var filelist = new Array();
		
		var olist= $('.flist');
		
		for(var i=0; i<olist.length; i++){
			filelist.push($(olist[i]).val());
		}
		
		window.opener.filelistener(filelist);
		
		self.close();
		
	});
	
}