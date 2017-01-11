	var num=0;

	$(function() {
		init();
		/*asideDate(num);*/
	});

	function init() {
		
		//$( "#datepicker" ).datepicker();
		
		$('#leftgo').click(function(event){
			
			event.preventDefault();
			
			var today = new Date();
			
			num--;
			if(num+today.getMonth()<0){
				num=-today.getMonth()+11
			}
			
			
			
			$('#leftgo').append("<span></span>");
			$('#caltable tbody').remove();
			$('#caltable').append("<tbody>");
			asideDate(num);
			$('#caltable').append("</tbody>");

		});
		
		$('#rightgo').click(function(event){
			
			event.preventDefault();
			
			var today = new Date();
			
			num++;
			if(num+today.getMonth()>11){
				num=-today.getMonth()
			}
			
	
			$('#leftgo').append("<span></span>");
			$('#caltable tbody').remove();
			$('#caltable').append("<tbody>");
			asideDate(num);
			$('#caltable').append("</tbody>");

		});
		
		$(".naviT").delegate('.navibtn', 'click',function(event) {
			var navibtn=$(this).text();
			if($(this).attr('href')=='#'){
				event.preventDefault();
			}
			
			var allmenu = $('#test').find('.hide1');
			allmenu.hide();
			
			var submenu = $(this).next("ul");
			if ($(this).next("ul").find(".subbtn").length >= 1) {
				if (submenu.is(":visible")) {
					submenu.slideUp();
				} else {
					submenu.slideDown();
				}
			}
		});
		
	}
		