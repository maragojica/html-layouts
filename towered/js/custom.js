jQuery(window).on('load', function(){
	jQuery('#sidebar #sidebar-content').append("<a href='javascript:void(0)' class='btn-scroll btn-scroll-top'></a>");
	jQuery('#sidebar #sidebar-content').append("<a href='javascript:void(0)' class='btn-scroll btn-scroll-bottom' style='display:none;'></a>");

	var scrolled=0;

	jQuery(".btn-scroll-top").on("click" ,function(){
        scrolled=scrolled+300;
		jQuery("#sidebar #sidebar-content").animate({ scrollTop:  scrolled });
		
	});
	jQuery('.btn-scroll-bottom').on("click" ,function(){
		scrolled=scrolled-300;
		
		jQuery("#sidebar #sidebar-content").animate({ scrollTop:  scrolled });
		
	});

	jQuery('#sidebar #sidebar-content').bind('scroll', function(){
        if(jQuery(this).scrollTop() + jQuery(this).innerHeight()>=jQuery(this)[0].scrollHeight)
        {
        	jQuery('.btn-scroll-top').hide();jQuery('.btn-scroll-bottom').show();
        }
    });
    jQuery('#sidebar #sidebar-content').bind('scroll', function(){
        if(jQuery(this).scrollTop() == 0)
        {
        	jQuery('.btn-scroll-top').show();jQuery('.btn-scroll-bottom').hide();
        }
    });

    var w = jQuery(window).width();
    if(w <= 991){
    	jQuery('.wrap-hello-icons .top-icon').addClass('position-initial');
    	jQuery('.wrap-hello-icons .btn-group').addClass('position-initial');
    }
});

function keyPressActivity(e, week_id, value){
	if (e.keyCode == 13) {
		var code = 1000 + Math.floor(Math.random() * 6000000);
		hideInput('activity',week_id);
        jQuery('.td-activity-'+week_id).append("<div class='font14 wrap-fontawesome activity-"+week_id+"-"+code+"'><i class='fas fa-chevron-circle-right color-orange fa-2x'></i> "+value+"</div>");
        jQuery('.td-activity-modal-'+week_id).append("<div class='d-flex align-items-center form-group mb-1 activity-"+week_id+"-"+code+"'><a href='javascript::void(0);' class='color-orange font20 mr-1' onclick=\"removeInput('activity-"+week_id+"-"+code+"')\"><i class='fas fa-minus-circle fas-16'></i></a><input type='text' value='"+value+"' class='input2 bg-grey-light border-none'></div>");
    }
}

function keyPressContent(e, week_id, value){
	if (e.keyCode == 13) {
		var code = 1000 + Math.floor(Math.random() * 6000000);
		hideInput('content',week_id);
        jQuery('.td-content-'+week_id).append("<div class='font14 wrap-fontawesome content-"+week_id+"-"+code+"'><i class='fas fa-chevron-circle-right color-orange fa-2x'></i> "+value+"</div>");
        jQuery('.td-content-modal-'+week_id).append("<div class='d-flex align-items-center form-group mb-1 content-"+week_id+"-"+code+"'><a href='javascript::void(0);' class='color-orange font20 mr-1' onclick=\"removeInput('content-"+week_id+"-"+code+"')\"><i class='fas fa-minus-circle fas-16'></i></a><input type='text' value='"+value+"' class='input2 bg-grey-light border-none'></div>");
    }
}

function removeInput(code){
	jQuery("."+code).remove();
}

function hideInput(type, code){
	jQuery(".td-"+type+"-"+code+"-input").hide();
}

jQuery(function() {
	

	jQuery('.btn-week').click(function(){
		jQuery(this).toggleClass('show');
	});

	jQuery("#btn-expand").click(function(){

		var x = document.getElementById("span-text");
		if (x.innerHTML === "Expand All") {
			x.innerHTML = "Collapse All";
		} else {
			x.innerHTML = "Expand All";
		}

		jQuery(".btn-accordeon").toggleClass("collapsed");
		jQuery(".multi-collapse").toggleClass("show");

	});
	jQuery(".toltip-open").click(function(e){
		e.stopPropagation();
		jQuery(this).find(".toltip5").slideToggle();
	});

	jQuery(".add-activity").click(function(){
		var id=jQuery(this).data('activity');
		jQuery('.td-activity-'+id+'-input').toggle();
	});

	jQuery(".add-content").click(function(){
		var id=jQuery(this).data('content');
		jQuery('.td-content-'+id+'-input').toggle();
	});

	jQuery('.week-co').click(function(){
		jQuery(this).find('.dropdown_week').slideToggle(300);
	});

	jQuery('.btn-course-objetive-week').click(function(){
		var btn, week, content;
		btn = jQuery(this).data('btn');
		week_id = jQuery(this).data('week');
		content = jQuery(this).html();

		jQuery(".wrap-modal-course-objectives-content-week-" + week_id).append("<div class='flex-middle pl-25 mb-2 font14 wrap-fontawesome content-course-objetives-"+week_id+"-"+btn+"'><a href='javascript::void(0);' class='btn-remove-item color-orange font20 mr-1 ml--25' onclick=\"removeInput('content-course-objetives-"+week_id+"-"+btn+"')\"><i class='fas fa-minus-circle fas-16'></i></a> "+content+"</div>");

		jQuery(".wrap-course-objectives-content-week-" + week_id).append("<div class='flex-middle pl-25 mb-2 font14 wrap-fontawesome content-course-objetives-"+week_id+"-"+btn+"'><i class='fas fa-chevron-circle-right color-orange fa-2x ml--25'></i> "+content+"</div>");
	});

	jQuery('.btn-learning-week').click(function(){
		var btn, week, content;
		btn = jQuery(this).data('btn');
		week_id = jQuery(this).data('week');
		content = jQuery(this).html();

		jQuery(".wrap-modal-learning-content-week-" + week_id).append("<div class='flex-middle pl-25 mb-2 font14 wrap-fontawesome content-learning-"+week_id+"-"+btn+"'><a href='javascript::void(0);' class='btn-remove-item color-orange font20 mr-1 ml--25' onclick=\"removeInput('content-learning-"+week_id+"-"+btn+"')\"><i class='fas fa-minus-circle fas-16'></i></a> "+content+"</div>");

		jQuery(".wrap-learning-content-week-" + week_id).append("<div class='flex-middle pl-25 mb-2 font14 wrap-fontawesome content-learning-"+week_id+"-"+btn+"'><i class='fas fa-chevron-circle-right color-orange fa-2x ml--25'></i> "+content+"</div>");
	});
	jQuery('.btn-activity-week').click(function(){
		var btn, week, content;
		btn = jQuery(this).data('btn');
		week_id = jQuery(this).data('week');
		content = jQuery(this).html();

		jQuery(".wrap-modal-activity-content-week-" + week_id).append("<div class='pl-25 mb-2 font14 wrap-fontawesome content-learning-"+week_id+"-"+btn+"'><a href='javascript::void(0);' class='btn-remove-item color-orange font20 mr-1 ml--25' onclick=\"removeInput('content-learning-"+week_id+"-"+btn+"')\"><i class='fas fa-minus-circle fas-16'></i></a> "+content+"</div>");

		/*jQuery(".wrap-modal-activity-content-week-" + week_id).append("<div class='pl-25 mb-2 font14 wrap-fontawesome content-learning-"+week_id+"-"+btn+"'><i class='fas fa-chevron-circle-right color-orange fa-2x ml--25'></i> "+content+"</div>");*/
	});

			jQuery('.courses-box-footer a').click(function(){
				value = jQuery(this).closest('.course-box').find('.form-group input').val();
				btn = jQuery(this).data('btn');
				week_id = jQuery(this).data('week');

				jQuery(this).closest('.course-box').find('.td-modal').append("<div class='pl-25 mb-2 font14 wrap-fontawesome content-learning-"+week_id+"-"+btn+"'><a href='javascript::void(0);' class='btn-remove-item color-orange font20 mr-1 ml--25' onclick=\"removeInput('content-learning-"+week_id+"-"+btn+"')\"><i class='fas fa-minus-circle fas-16'></i></a> "+value+"</div>");

				jQuery(this).closest('.course-box').find('.form-group input').val('');
			});

	jQuery('.btn-content-week').click(function(){
		var btn, week, content;
		btn = jQuery(this).data('btn');
		week_id = jQuery(this).data('week');
		content = jQuery(this).html();

		jQuery(".wrap-modal-content-box-week-" + week_id).append("<div class='pl-25 mb-2 font14 wrap-fontawesome content-learning-"+week_id+"-"+btn+"'><a href='javascript::void(0);' class='color-orange font20 mr-1 ml--25' onclick=\"removeInput('content-learning-"+week_id+"-"+btn+"')\"><i class='fas fa-minus-circle fas-16'></i></a> "+content+"</div>");

		/*jQuery(".wrap-modal-activity-content-week-" + week_id).append("<div class='pl-25 mb-2 font14 wrap-fontawesome content-learning-"+week_id+"-"+btn+"'><i class='fas fa-chevron-circle-right color-orange fa-2x ml--25'></i> "+content+"</div>");*/
	});



	jQuery(function () {
	  jQuery('[data-toggle="tooltip"]').tooltip();
	});
	jQuery("#email-toltip .toltip-content p").text(function(index, currentText) {
	    if(currentText.length > 140)
	    	return currentText.substr(0, 140)+"...";
	    else
	    	return currentText;
	});
	jQuery('.tab-btn-acordion').click(function(){

		jQuery('#table-collapse-1').hide();
		jQuery('#table-collapse-2').hide();
		jQuery('#table-collapse-3').hide();
		jQuery('#table-collapse-4').hide();
		jQuery('#table-collapse-5').hide();
		jQuery('#table-collapse-6').hide();


		id=jQuery(this).data('acordion-id');
		jQuery('#table-collapse-'+id).toggle();
		//alert(jQuery(this).data('acordion-id'));
	});
	jQuery("#menu-button-hide-show").click(function(){
		if(jQuery( "#sidebar" ).hasClass( "hidden" )){
			jQuery(this).removeClass("icon-arrow-right");
			jQuery(this).addClass("icon-arrow-left");
		}else{
			jQuery(this).removeClass("icon-arrow-left");
			jQuery(this).addClass("icon-arrow-right");
		}
		jQuery(".group-hide").toggle();
		jQuery("#sidebar").toggleClass("hidden");
	});

	jQuery("input[name='radio1']").click(function(){
		var radioValue = jQuery("input[name='radio1']:checked").val();
		if(radioValue == 'option1'){
			jQuery('#input-end-date').prop("disabled", true);
		}else{
			jQuery('#input-end-date').prop("disabled", false);
		}
	});

	jQuery('.dropdown a').click(function(){
    	jQuery('.dropdown-menu').toggle();
    });

	jQuery("#save-week-1, #complete-week-1").click(function(){
		jQuery("#w1-co").html("Connect with a partner in another country and engage in conversations that result in a joint project that enhances student's intercultural competency skills and knowledge.");
		jQuery("#w1-led").html("â€¢ Synchronous Video Lecture<br>â€¢ Independent Assignments");
		jQuery("#w1-a").html("â€¢ Syllabus Review");
		jQuery("#w1-c").html("â€¢ Text Book: Global Ethics, Chapter 1<br>â€¢ Video: Introduction to COIL");

		jQuery("#tr-w1").remove();
	});




	jQuery('.dropdown-menu .toltip-body').on('click', function(e) {
		e.stopPropagation();
	});

	jQuery('#notification-toltip .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#notification-toltip #toltip-item-"+id).remove();

		var notification_number_outer_current = jQuery('.top-wrap-notifications .outer').html();
		notification_number_outer_current = parseInt(notification_number_outer_current);
		notification_number_outer_new = notification_number_outer_current - 1;
		jQuery('.top-wrap-notifications .outer').html(notification_number_outer_new);

		if(notification_number_outer_new == 0)
			jQuery('.top-wrap-notifications .note').remove();

	});

	jQuery('#email-toltip .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#email-toltip #toltip-item-"+id).remove();
	});

	jQuery('.dropdown-menu-course .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#toltip-item-course-"+id).remove();
	});
	jQuery('#toltip-my-calendar .toltip-item a.close-times').click(function(){
		var id;
		id = jQuery(this).data('id');
		jQuery("#toltip-my-calendar #toltip-item-"+id).remove();
	});



	jQuery("#add-membership").click(function(e){
		e.stopPropagation();
		jQuery(".membership").show();
	});

	jQuery("#remove-membership-2").click(function(e){
		e.stopPropagation();
		jQuery("#membership-2").hide();
	});

	jQuery("#remove-membership-3").click(function(e){
		e.stopPropagation();
		jQuery("#membership-3").hide();
	});

	jQuery("#remove-course-1").click(function(e){
		e.stopPropagation();
		jQuery("#course-1").hide();
	});
	jQuery("#remove-course-2").click(function(e){
		e.stopPropagation();
		jQuery("#course-2").hide();
	});
	jQuery("#remove-course-3").click(function(e){
		e.stopPropagation();
		jQuery("#course-3").hide();
	});
	jQuery("#remove-course-4").click(function(e){
		e.stopPropagation();
		jQuery("#course-4").hide();
	});
	jQuery("#remove-course-5").click(function(e){
		e.stopPropagation();
		jQuery("#course-5").hide();
	});
	jQuery("#remove-courseobj-1").click(function(e){
		e.stopPropagation();
		jQuery("#courseobj-1").hide();
	});
	jQuery("#remove-courseobj-2").click(function(e){
		e.stopPropagation();
		jQuery("#courseobj-2").hide();
	});
	jQuery("#remove-courseobj-3").click(function(e){
		e.stopPropagation();
		jQuery("#courseobj-3").hide();
	});
	jQuery("#remove-courselearn-1").click(function(e){
		e.stopPropagation();
		jQuery("#courselearn-1").hide();
	});
	jQuery("#remove-courselearn-2").click(function(e){
		e.stopPropagation();
		jQuery("#courselearn-2").hide();
	});
	jQuery("#remove-courselearn-3").click(function(e){
		e.stopPropagation();
		jQuery("#courselearn-3").hide();
	});

	jQuery("#add-certificate").click(function(e){
		e.stopPropagation();
		jQuery(".certificate").show();
	});

	jQuery("#remove-certificate-2").click(function(e){
		e.stopPropagation();
		jQuery("#certificate-2").hide();
	});

	jQuery("#remove-certificate-3").click(function(e){
		e.stopPropagation();
		jQuery("#certificate-3").hide();
	});

	jQuery("#add-area").click(function(e){
		e.stopPropagation();
		jQuery(".area").show();
	});

	jQuery("#remove-area-1").click(function(e){
		e.stopPropagation();
		jQuery("#area-1").hide();
	});

	jQuery("#remove-area-2").click(function(e){
		e.stopPropagation();
		jQuery("#area-2").hide();
	});

	jQuery("#remove-area-3").click(function(e){
		e.stopPropagation();
		jQuery("#area-3").hide();
	});
		jQuery("#remove-area-3").click(function(e){
			e.stopPropagation();
			jQuery("#area-3").hide();
		});


	jQuery("#btn-notification").click(function(e){
		e.stopPropagation();
		jQuery('.any-toltip').slideUp();

		jQuery("#notification-toltip").slideToggle();
		jQuery(".top-icon .note").show();
		jQuery("#btn-notification .note").slideToggle();
	});

	jQuery(".toltip-close-details a.close-this").click(function(){
		jQuery(this).closest(".toltip-item").attr('style','display:none !important');
	});

	jQuery("#btn-email").click(function(e){
		e.stopPropagation();
		jQuery('.any-toltip').slideUp();

		jQuery("#email-toltip").slideToggle();
		jQuery(".top-icon .note").show();
		jQuery("#btn-email .note").slideToggle();
	});

	jQuery("#btn-user").click(function(e){
		e.stopPropagation();
		jQuery('.any-toltip').slideUp();
		jQuery(".top-icon .note").show();
		jQuery("#user-toltip").slideToggle();
	});

	jQuery(".toltip-header-right a.icon-close").click(function(){
		jQuery(this).closest(".toltip-item").attr('style','display:none !important');
	});

	jQuery(".box-top").click(function(e){
		e.stopPropagation();
		jQuery(this).find(".toltip2").slideToggle();
	});

	jQuery("a.btn-remove").click(function(e){
		e.stopPropagation();
		jQuery(this).closest(".col-lg-3").toggle("slide",{ direction: "left" }, 1000);
	});

	jQuery(".partner-img").click(function(e){
		e.stopPropagation();
		jQuery(".toltip3").slideUp();
		jQuery(this).find(".toltip3").slideToggle();
	});

	jQuery("#partner-search, .btn-close").click(function(e){
		e.stopPropagation();
		jQuery("#search-toltip").slideToggle();
	});

	//ALL INTEREST
	/*jQuery(".toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery(".interest-modal").slideUp();
	});*/

	jQuery(".view-more-interest").click(function(e){
		e.stopPropagation();
		jQuery(".interest-modal").slideUp();
		var id;
		id = jQuery(this).attr("id");
		jQuery("#"+id+"-modal").slideToggle();
	});

	//interest 1
	/*jQuery("#view-more-interest").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal").slideToggle();
	});*/


	//interest 2
	jQuery("#view-more-interest-2").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal-2").slideToggle();
	});

	/*jQuery("#view-more-interest-modal2 .toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal2").slideToggle();
	});*/
	//view interest 3
	jQuery("#view-more-interest-3").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal-3").slideToggle();
	});

	/*jQuery("#view-more-interest-modal3 .toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery("#view-more-interest-modal3").slideToggle();
	});*/



	jQuery("#add-interest").click(function(e){
		e.stopPropagation();
		jQuery("#add-interest-modal").slideToggle();
	});
	/*jQuery("#add-interest-modal .toltip-close2 a").click(function(e){
		e.stopPropagation();
		jQuery("#add-interest-modal").slideToggle();
	});*/

	jQuery("#btn-my-calendar").click(function(e){
		e.stopPropagation();
		jQuery("#toltip-my-calendar").slideToggle();
	});

	jQuery("#headline-my-academic-profile").hover(function(e){
		jQuery("#toltip-headline-my-academic-profile").show();
		e.stopPropagation();
	});

	/*jQuery(".toltip-inner .icon-close-hover").click(function(){
		jQuery(this).closest(".toltip-hover").attr('style','display:none !important');
	});*/

	jQuery("#your-advisor").hover(function(e){
		jQuery("#toltip-your-advisor").show();
	});

	jQuery('#my-calendar-container').on('mouseleave', '.event-styled .popup', function(){
		jQuery(this).css("display","none");
	});

	jQuery("#btn-sign-out").click(function(){
		jQuery('#userModal').modal('hide');
	});

	jQuery("#btn-remove-interest").click(function (){
		var ids;
		ids = jQuery(this).data("ids");
		jQuery("#areas-of-interest-"+ids).slideUp().remove();
	});
	jQuery(".btn-remove-interest").click(function (){
		var id;
		id = jQuery(this).data("id");
		jQuery('#btn-remove-interest').attr("data-ids", id);
	});
	/*
	jQuery(".btn-remove-interest").click(function (){
		var id;
		id = jQuery(this).data("id");

		jQuery("#areas-of-interest-"+id).slideUp().remove();
	});
	*/
	jQuery("#save-what-type").click(function(){
		jQuery("#areas-of-interest-3").show()
	});

	jQuery("a[data-target='#badgesModal']").click(function() {
	    jQuery(this).find(".note").hide();
	});
	jQuery("a[data-target='#notificationModal']").click(function() {
	    jQuery(this).find(".note").hide();
	});
	jQuery("a[data-target='#messagesModal']").click(function() {
	    jQuery(this).find(".note").hide();
	});
	$("#badgesModal, #notificationModal, #messagesModal").on("hide.bs.modal", function () {
	    jQuery(".note").show();
	});



	/* always end
	jQuery('.datepicker').datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: 'dd-mm-yy'
	});
	*/


	jQuery('.tree-sidebar li a').click(function(){
		jQuery('.tree-sidebar a').removeClass('active');
		jQuery(this).addClass('active');
		var id = jQuery(this).data('id');

		jQuery('.wrap-folder .tab-content').removeClass('active');
		jQuery('.wrap-folder .tab-content-'+id).addClass('active');
	});

	jQuery('.btn-bookmark').click(function(){
		if(!jQuery(this).hasClass('clicked')){
			jQuery(this).addClass('clicked');
			jQuery(this).find('span.icon').attr('class','icon-solid icon-bookmark');
			jQuery(this).find('span.txt').text('Bookmarked!');
		}else{
			jQuery(this).removeClass('clicked');
			jQuery(this).find('span.icon').attr('class','icon-regular icon-bookmark');
			jQuery(this).find('span.txt').text('Bookmarks');
		}
	});

	jQuery('.dropdown-button').click(function(){
		jQuery(this).find('.dropdown-btn-menu').slideToggle();
	});
				// modal edit event
				jQuery('#eventEditRepeat').change(function(){
					if(jQuery(this).val() == "Never")
						jQuery('#eventEditRepeatEnd').attr("disabled",true);
					else
						jQuery('#eventEditRepeatEnd').attr("disabled",false);

					jQuery('#eventEditRepeatDate').attr("disabled",true);
				});

				jQuery('#eventEditRepeatEnd').change(function(){
					if(jQuery(this).val() == "On Date")
						jQuery('#eventEditRepeatDate').attr("disabled",false);
					else
						jQuery('#eventEditRepeatDate').attr("disabled",true);
				});

				// modal new event
				jQuery('#eventEditRepeat').change(function(){
					if(jQuery(this).val() == "Never")
						jQuery('#eventEditRepeatEnd').attr("disabled",true);
					else
						jQuery('#eventEditRepeatEnd').attr("disabled",false);

					jQuery('#eventEditRepeatDate').attr("disabled",true);
				});

				jQuery('#eventEditRepeatEnd').change(function(){
					if(jQuery(this).val() == "On Date")
						jQuery('#eventEditRepeatDate').attr("disabled",false);
					else
						jQuery('#eventEditRepeatDate').attr("disabled",true);
				});

	jQuery('.card-btn-bookmark').click(function(){

		if(!jQuery(this).hasClass('unchecked')){
			jQuery(this).html("<i class='fas fa-bookmark mr-1'></i> Bookmarked!");
			jQuery(this).addClass('unchecked');
			jQuery(this).closest('.filter').addClass('bookmarks');
		}else{
			jQuery(this).html("<i class='far fa-bookmark mr-1'></i> Bookmark");
			jQuery(this).removeClass('unchecked');
			jQuery(this).closest('.filter').removeClass('bookmarks');
		}
	});
	jQuery(".tab-content label input[type='checkbox']").click(function(){
		if(jQuery(this).prop('checked')){
			jQuery(this).addClass('checked');
			jQuery(this).closest('label').addClass('checked');
		}
		else{
			jQuery(this).removeClass('checked');
			jQuery(this).removeAttr('checked');
			jQuery(this).closest('label').removeClass('checked');
		}
	});

	jQuery("input[name='file-check']").change(function(){
		count = document.querySelectorAll('input[name=file-check]:checked').length;

	    if(count>0) {
	        jQuery('.btn-file-delete').show();
			jQuery('.btn-file-restore').hide();
	    } else {
	        jQuery('.btn-file-delete').hide();
	    }
	});

	jQuery(".tab-content-recycle-bin input[name='file-check']").change(function(){
		count = document.querySelectorAll('input[name=file-check]:checked').length;

		if(count>0) {
			jQuery('.btn-file-restore').show();
			jQuery('.btn-file-delete').hide();

		} else {
			jQuery('.btn-file-restore').hide();
		}
	});

	jQuery('.btn-clear-date').click(function(){
		jQuery(this).closest('.wrap-input').find('input').val('');
		jQuery(this).hide();
	});

	
	/**
	 * CLEAR DATE
	 */
	var number = jQuery('.wrap-input-calendar input');
    number.on('change', function() {

      	if (jQuery(this).val() != "")
      		jQuery(this).closest('.wrap-input').find('.btn-clear-date').show();
      	else
          	jQuery(this).closest('.wrap-input').find('.btn-clear-date').hide();
    });

    /* Custom select design */

            $(".dropdown img.flag").addClass("flagvisibility");

            $(".dropdown dt a").click(function() {
                $(".dropdown dd ul").toggle();
            });

            $(".dropdown dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown dt a span").html(text);
                $(".dropdown dd ul").hide();
                $("#result").html("Selected value is: " + getSelectedValue("sample"));
            });

            function getSelectedValue(id) {
                return $("#" + id).find("dt a span.value").html();
            }

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown"))
                    $(".dropdown dd ul").hide();
            });



            $(".dropdown img.flag").toggleClass("flagvisibility");

            jQuery('.region-1').change(function() {
            	if(!jQuery(this).val()){ // vacio
            		jQuery('.region-2').prop( "disabled", true ).val('');
            		jQuery('.region-3').prop( "disabled", true ).val('');
            		jQuery('.region-4').prop( "disabled", true ).val('');
            	}else{// lleno
            		jQuery('.region-2').prop( "disabled", false ).val('');
            	}
            });
            jQuery('.region-2').change(function() {
            	if(!jQuery(this).val()){ // vacio
            		jQuery('.region-3').prop( "disabled", true ).val('');
            		jQuery('.region-4').prop( "disabled", true ).val('');
            	}else{ // lleno
            		jQuery('.region-3').prop( "disabled", false ).val('');
            	}
            });
            jQuery('.region-3').change(function() {
            	if(!jQuery(this).val()){ // vacio
            		jQuery('.region-4').prop( "disabled", true ).val('');
            	}else{ // lleno
            		jQuery('.region-4').prop( "disabled", false ).val('');
            	}
            });



            jQuery('.discipline-1').change(function() {
            	if(!jQuery(this).val()){ // vacio
            		jQuery('.discipline-2').prop( "disabled", true ).val('');
            		jQuery('.discipline-3').prop( "disabled", true ).val('');
            	}else{// lleno
            		jQuery('.discipline-2').prop( "disabled", false ).val('');
            	}
            });
            jQuery('.discipline-2').change(function() {
            	if(!jQuery(this).val()){ // vacio
            		jQuery('.discipline-3').prop( "disabled", true ).val('');
            	}else{ // lleno
            		jQuery('.discipline-3').prop( "disabled", false ).val('');
            	}
            });
	/* End */

	jQuery('.activity-mod-btn').click(function(){
		id=jQuery(this).data('id');
		value=jQuery('#activity-'+id+'-input').val();
		jQuery('#activity-'+id+'-input').val('');

		if(value != '' || value != null){
			content = "<div class='activity-item flex-middle pl-25 mb-2 font14 wrap-fontawesome'><a href='#' class='activity-item-remove color-orange font20 mr-1 ml--25'><i class='fas fa-minus-circle fas-16'></i></a><div>"+value+"</div></div>";
			jQuery('#activity-'+id).append(content);
		}
	});
	jQuery('.activity-mod-btn2').click(function(){
		id=jQuery(this).data('id');
		week=jQuery(this).data('week');
		placeholder=jQuery(this).data('placeholder');
		jQuery('#activity-'+id+'-input').val('');

		content = "<div class='activity-item flex-middle pl-25 mb-2 font14 wrap-fontawesome'><a href='#' class='activity-item-remove color-orange font20 mr-1 ml--25'><i class='fas fa-minus-circle fas-16'></i></a><input class='input input-text w-100 mr-2' value='' placeholder='"+placeholder+"' /></div>";
		jQuery('#activity-'+id).append(content);
	});
	jQuery('.activity-item-remove').click(function(event){
		jQuery(this).closest('.activity-item').remove();
	});

	jQuery('.content-mod-btn').click(function(){
		id=jQuery(this).data('id');
		value=jQuery('#content-'+id+'-input').val();
		jQuery('#content-'+id+'-input').val('');

		if(value != '' || value != null){
			content = "<div class='content-item flex-middle pl-25 mb-2 font14 wrap-fontawesome'><a href='#' class='content-item-remove color-orange font20 mr-1 ml--25'><i class='fas fa-minus-circle fas-16'></i></a><div>"+value+"</div></div>";
			jQuery('#content-'+id).append(content);
		}
	});
	jQuery('.content-mod-btn2').click(function(){
		id=jQuery(this).data('id');
		week=jQuery(this).data('week');
		placeholder=jQuery(this).data('placeholder');
		jQuery('#content-'+id+'-input').val('');

		content = "<div class='content-item flex-middle pl-25 mb-2 font14 wrap-fontawesome'><a href='#' class='content-item-remove color-orange font20 mr-1 ml--25'><i class='fas fa-minus-circle fas-16'></i></a><textarea rows='3' class='input input-text w-100 mr-2' placeholder='"+placeholder+"'></textarea></div>";
		jQuery('#content-'+id).append(content);
		
	});
	jQuery('.content-item-remove').click(function(event){
		jQuery(this).closest('.content-item').remove();
	});
	//system folders
	jQuery("a[data-id]").click(function(){
		
		jQuery(this).closest('ul').find('i').removeClass('fa-folder-open').addClass('fa-folder');
		jQuery(this).closest('li').find('ul').slideToggle();
		jQuery(this).find('i').toggleClass('fa-folder fa-folder-open')

	});
	jQuery(".link-folder").click(function(){
		ID = jQuery(this).attr('id');
		jQuery("a[data-id='"+ID+"']").click();
	});
	jQuery('.start-matches').click(function(){
		jQuery(this).find('i').toggleClass('far fas color-blue');
	});
	jQuery('.start-matches-bottom').click(function(){
		jQuery(this).find('i').toggleClass('far fas color-orange');
	});

	jQuery('.btn-group-menu .btn-menu').click(function(){
		jQuery('.any-toltip').hide();
	});

	jQuery('.icon-setting').click(function(){
		jQuery('.dropdown-menu').removeClass('show');
		jQuery('.btn-group-menu').removeClass('show');
	});

	jQuery(".my-course-thumb-wrap").hover(function () {
        jQuery(this).find('.tt-wrap').show();
    }, function () {
        jQuery(this).find('.tt-wrap').hide();
    });

    jQuery(".my-course-thumb-wrap .close").click(function () {
        jQuery(this).closest('.tt-wrap').hide();
    });
	jQuery(".tree-folder li a").click(function () {
		if (jQuery(".tab-content-recycle-bin").hasClass("active")) {
			jQuery('#file .dropdown-button').css("display", "none");
		}
		else{
			jQuery('#file .dropdown-button').css("display", "block");
		}
	});
	jQuery('#toggleVideoEdit').change(function() {
		ChangeVideoPlaceEdit();
	});
	jQuery('#toggleVideoAdd').change(function() {
		ChangeVideoPlaceAdd();
	});
	jQuery(window).on('load', function(){
		ChangeVideoPlaceEdit();
		ChangeVideoPlaceAdd();


	});

	jQuery("a#menu-button-responsive").click(function(){
		if ( jQuery( "#sidebar-content-mobile" ).is( ":hidden" ) ) {
			jQuery("#container").css("margin-top","0px");
		}else{
			jQuery("#container").css("margin-top","70px");
		}

		jQuery("#sidebar-content-mobile").slideToggle();
		jQuery(this).toggleClass('open');
		jQuery('body').toggleClass('expand-menu');
	});

	jQuery('#sidebar-content-mobile #nav-mobile li').click(function(e){
		jQuery("#sidebar-content-mobile #nav-mobile li ul.sub-menu").hide();
		jQuery(this).find("ul.sub-menu").show();
	});

	

	function ChangeVideoPlaceEdit(e){

		if (jQuery(".box-video-conference-edit .toggle").hasClass("off")) {
			jQuery('#videoConferenceText').attr('placeholder', '');
			jQuery('#videoConferenceText').val("");
			jQuery('#videoConferenceText').attr('disabled', 'disabled');
		}
		else{
			jQuery('#videoConferenceText').attr('placeholder', 'http://meeting.inspired.com/73jd8fhre8');
			jQuery('#videoConferenceText').val("http://meeting.inspired.com/73jd8fhre8");
			jQuery('#videoConferenceText').removeAttr("disabled");
		}
	}
	function ChangeVideoPlaceAdd(e){

		if (jQuery(".box-video-conference-add .toggle").hasClass("off")) {
			jQuery('#videoConferenceTextAdd').attr('placeholder', '');
			jQuery('#videoConferenceTextAdd').val("");
			jQuery('#videoConferenceTextAdd').attr('disabled', 'disabled');
		}
		else{
			jQuery('#videoConferenceTextAdd').attr('placeholder', 'http://meeting.inspired.com/73jd8fhre8');
			jQuery('#videoConferenceTextAdd').val("http://meeting.inspired.com/73jd8fhre8");
			jQuery('#videoConferenceTextAdd').removeAttr("disabled");
		}
	}


});

function resizeHeightSidebar(){
	var height_sidebar = parseInt(jQuery(window).height()) - 193;
	jQuery('#sidebar-content').css('max-height', height_sidebar);
}

jQuery( window ).resize(function() {
	resizeHeightSidebar();
});

jQuery(window).on('load', function(){

	resizeHeightSidebar();

	jQuery('#filter_event').appendTo("#calendar-tiny .fc-toolbar .fc-center");
	setTimeout(
		function() {
			jQuery('input.knob').show();
		}, 100);

	jQuery('.dataTables_wrapper .row:last-child > div').removeAttr('class');


	jQuery('.table-responsive-stack').each(function (i) {
        var id = jQuery(this).attr('id');
        //alert(id);
        jQuery(this).find("th").each(function (i) {
          jQuery('#' + id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + jQuery(this).text() + ':</span> ');
          jQuery('.table-responsive-stack-thead').hide();

        });
    });

    function flexTable() {
        if (jQuery(window).width() < 1201) {

          jQuery(".table-responsive-stack").each(function (i) {
            jQuery(this).find(".table-responsive-stack-thead").show();
            jQuery(this).find('thead').hide();
          });


          // window is less than 768px   
        } else {


          jQuery(".table-responsive-stack").each(function (i) {
            jQuery(this).find(".table-responsive-stack-thead").hide();
            jQuery(this).find('thead').show();
          });
        }
        // flextable   
    }
    flexTable();

  	window.onresize = function (event) {
    	flexTable();
  	};

  	/*
  	jQuery('.wrap-chat h3').click(function(){
  		jQuery('.chat-text, .chat-meta').hide();
  		jQuery('.wrap-chat i.far').removeClass('fa-angle-down').addClass('fa-angle-up');
  	});
  	
  	jQuery('.input-text-chat').click(function(){
  		jQuery('.chat-text, .chat-meta').show();
  		jQuery('.wrap-chat h3 span.chat-title span.info').hide();

  		jQuery('.wrap-chat i.far').removeClass('fa-angle-up').addClass('fa-angle-down');
  	});
  	*/

  	jQuery('.wrap-chat h3, .input-text-chat').click(function(){
  		if(!jQuery(this).closest('.wrap-chat').hasClass('active')){
  			jQuery(this).closest('.wrap-chat').addClass('active');
  			jQuery('.wrap-chat i.far').removeClass('fa-angle-up').addClass('fa-angle-down');

  			jQuery(".wrap-input-chat input[type='text']").removeClass('input-text-chat');

  			jQuery('.chat-text, .chat-meta').show();
  		}else{
  			jQuery(this).closest('.wrap-chat').removeClass('active');
  			jQuery('.wrap-chat i.far').removeClass('fa-angle-down').addClass('fa-angle-up');
  			jQuery('.chat-text, .chat-meta').hide();
  		}
  	});


  		jQuery('#btn-record').click(function(){
	  		jQuery(this).addClass('active');
	  		
	  		jQuery(this).find('.text').html('Recording');
  			jQuery(this).find('.icon').css('background','#adadad');
  			jQuery('#box-messages .message').show();
  			jQuery('#box-messages .message').html('This Meeting is Being Recorded');
	  		
	  		jQuery('#btn-stop-recording').show();
	  	});

	  	jQuery('#btn-stop-recording').click(function(){
	  		jQuery('#btn-record').removeClass('active');
	  		
  			jQuery('#btn-record').find('.text').html('Record');
  			jQuery('#btn-record').find('.icon').css('background','#fff');
  			jQuery('#box-messages .message').html('Recording Ended');
	  		
			jQuery(this).hide();
	  		setTimeout(function() {
				jQuery('#box-messages .message').hide();
			}, 5000);
	  	});

	  	jQuery('.btn-microphone').click(function(e){
	  		e.preventDefault();
	  		jQuery('.btn-microphone').toggleClass('muted');
	  		
	  		var status = jQuery('.btn-microphone').hasClass('muted');
	  		if(status){
	  			jQuery('.btn-microphone').find('.text').html('Muted');
	  			jQuery('.btn-microphone').find('.icon').removeClass('icon-microphone');
	  			jQuery('.btn-microphone').find('.icon').addClass('icon-microphone-slash');
	  			
	  			jQuery('.btn-microphone').find('.icon.icon-secondary').addClass('icon-regular').removeClass('icon-solid');
	  			jQuery('.btn-microphone').find('.icon.icon-control').removeClass('color-blue');
	  			jQuery('.btn-microphone').find('.icon.icon-control').addClass('color-muted');
	  		}
	  		else{
	  			jQuery('.btn-microphone').find('.text').html('Mic On');
	  		  	jQuery('.btn-microphone').find('.icon').removeClass('icon-microphone-slash');
	  			jQuery('.btn-microphone').find('.icon').addClass('icon-microphone');

	  			jQuery('.btn-microphone').find('.icon.icon-secondary').removeClass('icon-regular').addClass('icon-solid');
	  			jQuery('.btn-microphone').find('.icon.icon-control').removeClass('color-muted');
	  			jQuery('.btn-microphone').find('.icon.icon-control').addClass('color-blue');
	  		}
	  	});

	  	jQuery('.btn-microphone-brittany-current').click(function(e){
	  		e.preventDefault();
	  		jQuery('.btn-microphone-brittany-current').toggleClass('muted');
	  		
	  		var status = jQuery('.btn-microphone-brittany-current').hasClass('muted');
	  		if(status){
	  			jQuery('.btn-microphone-brittany-current').find('.text').html('Muted');
	  			jQuery('.btn-microphone-brittany-current').find('.icon').removeClass('icon-microphone');
	  			jQuery('.btn-microphone-brittany-current').find('.icon').addClass('icon-microphone-slash');
	  			
	  			jQuery('.btn-microphone-brittany-current').find('.icon.icon-secondary').addClass('icon-regular').removeClass('icon-solid');
	  			jQuery('.btn-microphone-brittany-current').find('.icon.icon-control').removeClass('color-blue');
	  			jQuery('.btn-microphone-brittany-current').find('.icon.icon-control').addClass('color-muted');
	  		}
	  		else{
	  			jQuery('.btn-microphone-brittany-current').find('.text').html('Mic On');
	  		  	jQuery('.btn-microphone-brittany-current').find('.icon').removeClass('icon-microphone-slash');
	  			jQuery('.btn-microphone-brittany-current').find('.icon').addClass('icon-microphone');

	  			jQuery('.btn-microphone-brittany-current').find('.icon.icon-secondary').removeClass('icon-regular').addClass('icon-solid');
	  			jQuery('.btn-microphone-brittany-current').find('.icon.icon-control').removeClass('color-muted');
	  			jQuery('.btn-microphone-brittany-current').find('.icon.icon-control').addClass('color-blue');
	  		}
	  	});

	  	jQuery('.btn-video').click(function(e){
	  		e.preventDefault();
	  		jQuery('.btn-video').toggleClass('video-off');
	  		
	  		var status = jQuery('.btn-video').hasClass('video-off');
	  		if(status){
	  			jQuery('.btn-video').find('.text').html('Video Off');
	  			jQuery('.btn-video').find('.icon.icon-main').addClass('color-muted');

	  			jQuery('.btn-video').find('.icon').addClass('icon-video-slash').removeClass('icon-video'); 
	  			jQuery('.btn-video').find('.icon.icon-secondary').addClass('icon-regular').removeClass('icon-solid');

	  			jQuery('.box-meet.active').find('img.photo-user').attr('src','images/Bradley-Dexter-circle.jpg');
	  		}
	  		else{
	  			jQuery('.btn-video').find('.text').html('Video On');

	  			jQuery('.btn-video').find('.icon').removeClass('icon-video-slash');
	  			jQuery('.btn-video').find('.icon.icon-main').removeClass('color-muted');

	  			jQuery('.btn-video').find('.icon').addClass('icon-video').removeClass('icon-video-slash'); 
	  			jQuery('.btn-video').find('.icon.icon-secondary').addClass('icon-solid').removeClass('icon-regular');

	  			jQuery('.box-meet.active').find('img.photo-user').attr('src','images/Bradley-Dexter.jpg');
	  		}
	  	});

	  	/*jQuery('#btn-video').click(function(){
	  		jQuery(this).toggleClass('video-off');
	  		
	  		var status = jQuery(this).hasClass('video-off');
	  		if(status){
	  			jQuery(this).find('.text').html('Video Off');
	  			jQuery(this).find('.icon').removeClass('icon-video');
	  			jQuery(this).find('.icon').addClass('icon-video-slash');

	  			jQuery(this).find('.icon').addClass('color-muted');

	  			jQuery('.box-meet.active').find('img.photo-user').attr('src','images/Bradley-Dexter-circle.jpg');
	  		}
	  		else{
	  			jQuery(this).find('.text').html('Video On');
	  			jQuery(this).find('.icon').removeClass('icon-video-slash');
	  			jQuery(this).find('.icon').addClass('icon-video');

	  			jQuery(this).find('.icon').removeClass('color-muted');
	  			jQuery('.box-meet.active').find('img.photo-user').attr('src','images/Bradley-Dexter.jpg');
	  		}
	  	});*/

	  	jQuery('.btn-video-brittany').click(function(){
	  		jQuery('.btn-video-brittany').toggleClass('video-off');
	  		
	  		var status = jQuery('.btn-video-brittany').hasClass('video-off');
	  		if(status){
	  			jQuery('.btn-video-brittany').find('.text').html('Video Off');
	  			jQuery('.btn-video-brittany').find('.icon').removeClass('icon-video');
	  			jQuery('.btn-video-brittany').find('.icon').addClass('icon-video-slash');
	  			jQuery('.btn-video-brittany').find('.icon.icon-secondary').removeClass('icon-solid').addClass('icon-regular');
	  			jQuery('.btn-video-brittany').find('.icon.icon-secondary').removeClass('icon-video').addClass('icon-video-slash');

	  			jQuery('.btn-video-brittany').find('.icon.icon-main').addClass('color-muted');

	  			jQuery('.box-meet-brittany').find('img.photo-user').attr('src','images/Brittany-Simms-circle.jpg');
	  		}
	  		else{
	  			jQuery('.btn-video-brittany').find('.text').html('Video On');
	  			jQuery('.btn-video-brittany').find('.icon').removeClass('icon-video-slash');
	  			jQuery('.btn-video-brittany').find('.icon').addClass('icon-video');

	  			jQuery('.btn-video-brittany').find('.icon.icon-secondary').addClass('icon-solid').removeClass('icon-regular');
	  			jQuery('.btn-video-brittany').find('.icon.icon-secondary').addClass('icon-video').removeClass('icon-video-slash');

	  			jQuery('.btn-video-brittany').find('.icon.icon-main').removeClass('color-muted');
	  			jQuery('.box-meet-brittany').find('img.photo-user').attr('src','images/Brittany-Simms.jpg');
	  		}
	  	});

	  	jQuery('#btn-hand').click(function(){
	  		jQuery(this).toggleClass('active');
	  		
	  		var status = jQuery(this).hasClass('active');
	  		if(status){
	  			jQuery(this).find('.text').html('Hand Raised');
	  			jQuery(this).find('.icon').removeClass('icon-solid');
	  			jQuery(this).find('.icon').addClass('icon-regular');

	  			jQuery(this).find('.icon').css('background','#adadad');
	  			jQuery('.text-hand-raised').show();

	  			jQuery('.text-hand-raised').show();
	  			jQuery('.icon-circle-hand').show();
	  		}
	  		else{
	  			jQuery(this).find('.text').html('Raise Hand');
	  			jQuery(this).find('.icon').removeClass('icon-regular');
	  			jQuery(this).find('.icon').addClass('icon-solid');

	  			jQuery(this).find('.icon').css('background','#fff');
	  			jQuery('.text-hand-raised').hide();
	  			jQuery('.icon-circle-hand').hide();
	  		}
	  	});

	  	jQuery('#btn-meet-share').click(function(){
	  		jQuery(this).toggleClass('active');
	  		
	  		var status = jQuery(this).hasClass('active');
	  		if(status){
	  			jQuery(this).find('.text').html('Sharing');
	  			jQuery(this).find('.icon').css('background','#0099ff');

	  			jQuery(this).find('.icon').removeClass('color-blue');
	  			jQuery(this).find('.icon').addClass('color-white');

	  			jQuery(this).find('.icon').removeClass('icon-solid');
	  			jQuery(this).find('.icon').addClass('icon-regular');
	  		}
	  		else{
	  			jQuery(this).find('.text').html('Share Screen');
	  			jQuery(this).find('.icon').css('background','#fff');

	  			jQuery(this).find('.icon').addClass('color-blue');
	  			jQuery(this).find('.icon').removeClass('color-white');

	  			jQuery(this).find('.icon').addClass('icon-solid');
	  			jQuery(this).find('.icon').removeClass('icon-regular');
	  		}
	  	});

	  	jQuery('.btn-microphone-user').click(function(e){
	  		e.preventDefault();
	  		var user = jQuery(this).data('user');
	  		jQuery('.btn-microphone-'+user).toggleClass('muted');
	  		
	  		var status = jQuery('.btn-microphone-'+user).hasClass('muted');
	  		if(status){
	  			jQuery('.btn-microphone-'+user).find('.icon').removeClass('icon-microphone');
	  			jQuery('.btn-microphone-'+user).find('.icon').addClass('icon-microphone-slash');
	  			jQuery('.btn-microphone-'+user).find('.icon').removeClass('icon-solid').addClass('icon-regular');
	  			jQuery('.btn-microphone-'+user).find('.icon.icon-control').addClass('icon-solid');
	  		}
	  		else{
	  			jQuery('.btn-microphone-'+user).find('.icon').removeClass('icon-microphone-slash');
	  			jQuery('.btn-microphone-'+user).find('.icon').addClass('icon-microphone');
	  			jQuery('.btn-microphone-'+user).find('.icon').removeClass('icon-regular').addClass('icon-solid');
	  		}
	  	});

	  	/*jQuery('.btn-microphone-brittany').click(function(){
	  		jQuery('.btn-microphone-brittany').toggleClass('muted');
	  		
	  		var status = jQuery('.btn-microphone-brittany').hasClass('muted');
	  		if(status){
	  			jQuery('.btn-microphone-brittany').find('.text').html('Muted');
	  			jQuery('.btn-microphone-brittany').find('.icon').removeClass('icon-microphone');
	  			jQuery('.btn-microphone-brittany').find('.icon').addClass('icon-microphone-slash');
	  			jQuery('.btn-microphone-brittany').find('.icon').removeClass('icon-solid').addClass('icon-regular');

	  			jQuery('.btn-microphone-brittany').find('.icon.icon-control').removeClass('color-blue');
	  			jQuery('.btn-microphone-brittany').find('.icon.icon-control').addClass('color-muted');
	  		}
	  		else{
	  			jQuery('.btn-microphone-brittany').find('.text').html('Mic On');
	  		  	jQuery('.btn-microphone-brittany').find('.icon').removeClass('icon-microphone-slash');
	  			jQuery('.btn-microphone-brittany').find('.icon').addClass('icon-microphone');
	  			jQuery('.btn-microphone-brittany').find('.icon').removeClass('icon-regular').addClass('icon-solid');

	  			jQuery('.btn-microphone-brittany').find('.icon.icon-control').removeClass('color-muted');
	  			jQuery('.btn-microphone-brittany').find('.icon.icon-control').addClass('color-blue');
	  		}
	  	});*/

	  	jQuery('.btn-sharing').click(function(){
	  		jQuery('.btn-sharing').toggleClass('sharing');
	  		
	  		var status = jQuery('.btn-sharing').hasClass('sharing');
	  		if(status){
	  			jQuery('.btn-sharing').find('.text').html('Sharing');
	  			jQuery('.btn-sharing').find('.icon').removeClass('icon-solid').removeClass('color-blue');
	  			jQuery('.btn-sharing').find('.icon').addClass('icon-regular').addClass('color-white');

	  			jQuery('.btn-sharing').find('.icon').removeClass('bg-white');
	  			jQuery('.btn-sharing').find('.icon').addClass('bg-blue-selected');
	  		}
	  		else{
	  			jQuery('.btn-sharing').find('.text').html('Share Screen');
	  		  	jQuery('.btn-sharing').find('.icon').addClass('icon-solid').addClass('color-blue');
	  			jQuery('.btn-sharing').find('.icon').removeClass('icon-regular').removeClass('color-white');

	  			jQuery('.btn-sharing').find('.icon').addClass('bg-white');
	  			jQuery('.btn-sharing').find('.icon').removeClass('bg-blue-selected');
	  		}
	  	});

	  	jQuery('#btn-share').click(function(){
	  		jQuery('.sidebar-top').hide();
	  		jQuery('.box-sharing').show();
	  		jQuery('.box-top').prependTo('.wrap-sidebar');

	  		jQuery('.btn-share').find('.text').html('Sharing');
	  		jQuery('.btn-share').find('.icon').removeClass('icon-solid').removeClass('color-blue');
	  		jQuery('.btn-share').find('.icon').addClass('icon-regular').addClass('color-white');

	  		jQuery('.btn-share').find('.icon').removeClass('bg-white');
	  		jQuery('.btn-share').find('.icon').addClass('bg-blue-selected');

	  		jQuery('.container-fluid').css('padding-right','480px');
	  		jQuery('.wrap-sidebar').css('width','465px');
	  		jQuery('.sidebar-bottom').css('max-width','445px');
	  		jQuery('.wrap-chat').css('max-width','435px');
	  	});
	  	jQuery('#btn-share-brittany').click(function(){
	  		jQuery('.sidebar-top').hide();
	  		jQuery('.box-sharing').show();
	  		jQuery('.box-top').prependTo('.wrap-sidebar');

	  		//jQuery('.btn-share').find('.text').html('Sharing');
	  		//jQuery('.btn-share').find('.icon').removeClass('icon-solid').removeClass('color-blue');
	  		//jQuery('.btn-share').find('.icon').addClass('icon-regular').addClass('color-white');

	  		//jQuery('.btn-share').find('.icon').removeClass('bg-white');
	  		//jQuery('.btn-share').find('.icon').addClass('bg-blue-selected');

	  		jQuery('.container-fluid').css('padding-right','480px');
	  		jQuery('.wrap-sidebar').css('width','465px');
	  		jQuery('.sidebar-bottom').css('max-width','445px');
	  		jQuery('.wrap-chat').css('max-width','435px');
	  	});
	  	jQuery('#btn-share-screen').click(function(){
	  		//jQuery('.sidebar-top').hide();
	  		jQuery('.box-sharing-screen').show();
	  		//jQuery('.box-top').prependTo('.wrap-sidebar');

	  		jQuery('.btn-share').find('.text').html('Sharing');
	  		jQuery('.btn-share').find('.icon').removeClass('icon-solid').removeClass('color-blue');
	  		jQuery('.btn-share').find('.icon').addClass('icon-regular').addClass('color-white');

	  		jQuery('.btn-share').find('.icon').removeClass('bg-white');
	  		jQuery('.btn-share').find('.icon').addClass('bg-blue-selected');

	  		/*jQuery('.container-fluid').css('padding-right','480px');
	  		jQuery('.wrap-sidebar').css('width','465px');
	  		jQuery('.sidebar-bottom').css('max-width','445px');
	  		jQuery('.wrap-chat').css('max-width','435px');*/
	  	});
	  	jQuery('.box-screen').click(function(){
	  		jQuery('.box-screen').removeClass('bg-blue-selected');
	  		jQuery(this).addClass('bg-blue-selected');
	  	});
	  	jQuery('#btn-stop-sharing').click(function(){
	  		jQuery('.sidebar-top').show();
	  		jQuery('.box-sharing').hide();
	  		jQuery('.box-top').prependTo('.box-main');

	  		jQuery('.btn-share').find('.text').html('Share Screen');
	  		jQuery('.btn-share').find('.icon').addClass('icon-solid').addClass('color-blue');
	  		jQuery('.btn-share').find('.icon').removeClass('icon-regular').removeClass('color-white');

	  		jQuery('.btn-share').find('.icon').addClass('bg-white');
	  		jQuery('.btn-share').find('.icon').removeClass('bg-blue-selected');

	  		jQuery('.container-fluid').css('padding-right','380px');
	  		jQuery('.wrap-sidebar').css('width','365px');
	  		jQuery('.sidebar-bottom').css('max-width','350px');
	  		jQuery('.wrap-chat').css('max-width','335px');
	  	});

	  	jQuery('#btn-chat-send').click(function(){
	  		jQuery('#input-chat').val('');
	  		jQuery('#chat-item-bradley').show();
	  	});

	  	jQuery('#btn-close-modal-inez-campos').click(function(){
	  		jQuery('#modal-admit-inez-campos').hide();
	  	});
	  	jQuery('#admit-inez-campos, #btn-admit-inez-campos').click(function(){
	  		jQuery('.lobbys').hide();
	  		jQuery('#meet-inez-campos').appendTo('.participants');
	  		//jQuery('#meet-inez-campos .icon').removeClass('icon-check-circle').addClass('icon-microphone-slash');
	  		jQuery('#meet-inez-campos .btn-microphone').removeClass('lobby-left').addClass('participant-left');
	  		jQuery('#meet-inez-campos a, #meet-inez-campos span').show();
	  		jQuery('#admit-inez-campos').hide();

	  		jQuery('#grid-inez-campos').show();
	  		jQuery('#modal-admit-inez-campos').hide();
	  		jQuery('.sidebar-meeting, #admit-not-inez-campos').hide();


	  	});
	  	jQuery('#admit-not-inez-campos').click(function(){
	  		jQuery('#modal-admit-inez-campos').hide();
	  		jQuery('.wrap-lobby').hide();	  		
	  	});

	  	jQuery(".btn-collapse-announce").click(function(){
			jQuery(".box-collapse-announce").toggleClass('display-none');
		});

		jQuery(".mute-action").click(function(){
			var txt = jQuery(this).find('span').html();
			if(txt == "Mute All"){
				jQuery(this).find('span').html('All Muted').addClass('color-blue');
				jQuery('.btn-microphone-sophia .icon')
					.removeClass('icon-microphone').addClass('icon-microphone-slash')
					.removeClass('icon-solid').addClass('icon-regular');
				jQuery('.btn-microphone-noah .icon')
					.removeClass('icon-microphone').addClass('icon-microphone-slash')
					.removeClass('icon-solid').addClass('icon-regular');
			}
			else{
				jQuery(this).find('span').html('Mute All').removeClass('color-blue');
				jQuery('.btn-microphone-sophia .icon')
					.addClass('icon-microphone').removeClass('icon-microphone-slash')
					.addClass('icon-solid').removeClass('icon-regular');
				jQuery('.btn-microphone-noah .icon')
					.addClass('icon-microphone').removeClass('icon-microphone-slash')
					.addClass('icon-solid').removeClass('icon-regular');
			}
		});

		jQuery('.multi-events .multi-head .close').click(function(){
	    	jQuery(this).closest('.multi-events').hide();
	    });
	    jQuery('.multi-event-detail .multi-head .back').click(function(){
	    	jQuery(this).closest('.multi-event-detail').hide();
	    	jQuery('.multi-events').show();
	    });
	    jQuery('.multi-events .event-item').click(function(){
	    	var eve_id = jQuery(this).data('event');
	    	jQuery('.multi-events').hide();
	    	jQuery('.multi-event-detail-'+eve_id).show();
	    });

		jQuery(".box-search input[type='text']").keyup(function(){
			var v = jQuery(this).val();
			if(v)
				jQuery('.box-search .search-result').show();
			else
				jQuery('.box-search .search-result').hide();	
		});

		var w = jQuery(window).width();
		if(w<992){
			jQuery( ".wrap-program-length1" ).insertAfter( ".before-mobile-program-length1" );	
			jQuery( ".wrap-program-length2" ).insertAfter( ".before-mobile-program-length2" );	
			jQuery( ".wrap-program-length3" ).insertAfter( ".before-mobile-program-length3" );	
		} 

		jQuery('.wrap-input-edit .icon-edit').click(function(){
			jQuery(this).closest('.wrap-input-edit').find("input[type='text']").attr('readonly', false).css('border','1px solid #ccc').css('background','#fff');
			jQuery(this).hide();
			jQuery(this).closest('.wrap-input-edit').find("input[type='text']")[0].focus(); 
		});

		jQuery(".wrap-input-edit input[type='text']").on('keypress',function(event){
		    var keycode = (event.keyCode ? event.keyCode : event.which);
		    if(keycode == '13'){
		        jQuery(this).attr('readonly', true).css('border','none').css('background','transparent');
				jQuery(this).closest('.wrap-input-edit').find('.icon-edit').show();
		    }
		});

		jQuery('.modal-instructor').click(function(){
			setTimeout(function() {
				jQuery('.modal-backdrop').addClass('modal-overlay-transparent');
			}, 1);
		});





		jQuery(".selectpicker").selectpicker({
	        noneSelectedText : 'Please Select' // by this default 'Nothing selected' -->will change to Please Select
	    });

});


function project_type(values){
	var htmlcont_1, htmlcont_2, htmlcont_3, htmlcont_4;

	// academy journal - best practices - general publication - mentorship - peer review research
	htmlcont_1 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business " selected>Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English" selected="">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select class="select input"><option value=""></option><option value="Global" selected="">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All" selected>All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div>';

	// course development
	htmlcont_2 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business " selected>Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Delivery Method</label><select class="input select"><option value=""></option><option value="Online" selected="">Online</option><option value="Blended or Hybrid">Blended or Hybrid</option><option value="On-ground">On-ground</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select><option value=""></option><option value="Global" selected="">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All">All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English" selected="">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Program Length</label><select class="input select"><option value=""></option><option value="Mini Term">Mini Term</option><option value="Ongoing ">Ongoing </option><option value="Quarter ">Quarter </option><option value="Semester ">Semester </option><option value="Summer ">Summer </option><option value="Trimester" selected>Trimester</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Credit</label><select class="input select"><option value=""></option><option value="1">1 </option><option value="2">2 </option><option value="3" selected="">3 </option><option value="4">4 </option><option value="other">Other </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Program Level</label><select class="input select"><option value=""></option><option value="Certificate ">Certificate </option><option value="Associates ">Associates </option><option value="Undergraduate " selected="">Undergraduate </option><option value="Graduate ">Graduate </option><option value="Masters ">Masters </option><option value="Doctoral ">Doctoral </option></select></div></div>';

	//curriculum development
	htmlcont_3 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business ">Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Delivery Method</label><select class="input select"><option value=""></option><option value="Online" >Online</option><option value="Blended or Hybrid">Blended or Hybrid</option><option value="On-ground">On-ground</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select class="select input"><option value=""></option><option value="Global">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All">All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Program Level</label><select class="input select"><option value=""></option><option value="Certificate ">Certificate </option><option value="Associates ">Associates </option><option value="Undergraduate ">Undergraduate </option><option value="Graduate ">Graduate </option><option value="Masters ">Masters </option><option value="Doctoral ">Doctoral </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Credit</label><select class="input select"><option value=""></option><option value="1">1 </option><option value="2">2 </option><option value="3" >3 </option><option value="4">4 </option><option value="other">Other </option></select></div></div>';

	// study abroad - other
	htmlcont_4 = '<div class="col-md-6"><div class="form-group"><label>Discipline:</label><select class="input select"><option value="Anthropology ">Anthropology </option><option value="Archaeology ">Archaeology </option><option value="Arts ">Arts </option><option value="Biology ">Biology </option><option value="Business ">Business </option><option value="Chemistry ">Chemistry </option><option value="Computer Science ">Computer Science </option><option value="Earth Science ">Earth Science </option><option value="Economics ">Economics </option><option value="Engineering ">Engineering </option><option value="History ">History </option><option value="Human Geography ">Human Geography </option><option value="Languages ">Languages </option><option value="Law ">Law </option><option value="Literature ">Literature </option><option value="Mathematics ">Mathematics </option><option value="Medicine and Health ">Medicine and Health </option><option value="Philosophy ">Philosophy </option><option value="Physics ">Physics </option><option value="Political Science ">Political Science </option><option value="Psychology ">Psychology </option><option value="Sociology ">Sociology </option><option value="Space Sciences ">Space Sciences </option><option value="Statistics ">Statistics </option><option value="Theology ">Theology </option></select></div></div><div class="col-md-6"><div class="form-group"><label>Preferred Language</label><select class="input select"><option value=""></option><option value="English">English</option><option value="Arabic ">Arabic </option><option value="Bengali ">Bengali </option><option value="French ">French </option><option value="Hindi ">Hindi </option><option value="Japanese ">Japanese </option><option value="Mandarin ">Mandarin </option><option value="Norwegian ">Norwegian </option><option value="Punjabi ">Punjabi </option><option value="Russian ">Russian </option><option value="Spanish">Spanish</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Collaboration Type</label><select class="select input"><option value=""></option><option value="Global">Global</option><option value="Departmental">Departmental</option><option value="Institutional">Institutional</option><option value="Regional">Regional</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Region:</label><select class="select input"><option value=""></option><option value="All">All</option><option value="Africa ">Africa </option><option value="Asia ">Asia </option><option value="Central America ">Central America </option><option value="Europe ">Europe </option><option value="Middle East ">Middle East </option><option value="North America ">North America </option><option value="Oceania ">Oceania </option><option value="South America ">South America </option><option value="The Caribbean ">The Caribbean </option></select></div></div>';

	switch(values){
		case "":
		case "Academic Journal":
		case "Best Practices":
		case "General Publication":
		case "Mentorship":
		case "Peer Review":
		case "Research":
			jQuery("#wrap-project-type").html(htmlcont_1); break;

		case "Course Development":
			jQuery("#wrap-project-type").html(htmlcont_2); break;

		case "Curriculum Development":
			jQuery("#wrap-project-type").html(htmlcont_3); break;

		case "Study Abroad":
		case "Other":
			jQuery("#wrap-project-type").html(htmlcont_4); break;
	}
}

function onlyNumber(e){
    key = (document.all) ? e.keyCode : e.which;

    if (key==8 || key==127 || key==9 || key==39|| key==37){
        return true;
    }

    patron =/[(,),0-9,+,-]/;
    key_final = String.fromCharCode(key);
    return patron.test(key_final);
}

function discipline_1(option){
	if(option != "")
		jQuery("#select_discipline_2").removeAttr("disabled");
	else{
		jQuery("#select_discipline_2").attr("disabled",true);
		jQuery("#select_discipline_2").prop("selectedIndex", 0);
		jQuery("#select_discipline_3").prop("selectedIndex", 0);
	}
}
function discipline_2(option){
	if(option != "")
		jQuery("#select_discipline_3").removeAttr("disabled");
	else{
		jQuery("#select_discipline_3").attr("disabled",true);
		jQuery("#select_discipline_3").prop("selectedIndex", 0);
	}
}
function collaboration_type(option){
	if(option == ""){
		jQuery("#select_region_1").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}

	if(option == "Departmental" || option == "Institutional" || option == "Regional"){
		document.getElementById("select_region_1").selectedIndex = "7";

		jQuery("#select_region_1").attr("disabled",true);

		jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}else
		if(option == "Global"){
			jQuery("#select_region_1").removeAttr("disabled").prop("selectedIndex", 0);
			jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
			jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
			jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
		}
}

function region_1(option){
	if(option != ""){
		jQuery("#select_region_2").removeAttr("disabled").prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
	else{
		jQuery("#select_region_2").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
}

function region_2(option){
	if(option != ""){
		jQuery("#select_region_3").removeAttr("disabled").prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
	else{
		jQuery("#select_region_3").attr("disabled",true).prop("selectedIndex", 0);
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
}

function region_3(option){
	if(option != "")
		jQuery("#select_region_4").removeAttr("disabled").prop("selectedIndex", 0);
	else{
		jQuery("#select_region_4").attr("disabled",true).prop("selectedIndex", 0);
	}
}

function remove_row(row){
	jQuery("#Project_Invites_" + row).remove();
}

function decline_row(row){
	if(confirm('Are you sure to decline?'))
		jQuery("#Project_Invites_" + row).remove();
}

function changePercentageDonut(value){
	jQuery('.wrap-donut input').val(value+'%');
	Plugins.init();
}

function changePercentageDonut_lastTask(value){
	jQuery('.wrap-donut input').val(value+'%');
	jQuery('.wrap-btn-complete a.btn').removeClass('btn-grey');
	jQuery('.wrap-btn-complete a.btn').addClass('btn-green');
	Plugins.init();
}

function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
}

function matchStart(params, data) {
    params.term = params.term || '';
    if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0) {
        return data;
    }
    return false;
}







function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
} 


var languages = ["English", "Mandarin Chinese Simplified", "Mandarin Chinese Traditional", "Cantonese", "Spanish", "Amharic", "Bengali", "Bhojpuri", "Burmese", "unjabi", "Eastern Punjabi", "Egyptian Spoken Arabic", "Filipino", "French", "Gujarati", "Hausa", "Hindi", "Indonesian", "Iranian Persian", "Italian", "Japanese", "Javanese", "Kannada", "Korean", "Marathi", "Nigerian Pidgin", "Odia", "Polish", "Portuguese", "Russian", "Standard Arabic", "Standard German", "Sudanese Spoken Arabic", "Swahili", "Tamil", "Telugu", "Thai", "Turkish", "Urdu", "Vietnamese", "Western Punjabi (Lahnda)", "Yoruba" ];
var country = ["Afghanistan (AFG)", "Albania (ALB)", "Algeria (DZA)", "American Samoa (ASM)", "Andorra (AND)", "Angola (AGO)", "Anguilla (AIA)", "Antarctica (ATA)", "Antigua and Barbuda (ATG)", "Argentina (ARG)", "Armenia (ARM)", "Aruba (ABW)", "Australia (AUS)", "Austria (AUT)", "Azerbaijan (AZE)", "Bahamas (BHS)", "Bahrain (BHR)", "Bangladesh (BGD)", "Barbados (BRB)", "Belarus (BLR)", "Belgium (BEL)", "Belize (BLZ)", "Benin (BEN)", "Bermuda (BMU)", "Bhutan (BTN)", "Bolivia (BOL)", "Bonaire, Sint Eustatius and Saba (BES)", "Bosnia and Herzegovina (BIH)", "Botswana (BWA)", "Bouvet Island (BVT)", "Brazil (BRA)", "British Indian Ocean Territory (IOT)", "Brunei Darussalam (BRN)", "Bulgaria (BGR)", "Burkina Faso (BFA)", "Burundi (BDI)", "Cabo Verde (CPV)", "Cambodia (KHM)", "Cameroon (CMR)", "Canada (CAN)", "Cayman Islands (CYM)", "Central African Republic (CAF)", "Chad (TCD)", "Chile (CHL)", "China (CHN)", "Christmas Island (CXR)", "Cocos (Keeling) Islands (CCK)", "Colombia (COL)", "Comoros (COM)", "Congo, the Democratic Republic of the (COD)", "Congo, Republic of the (COG)", "Cook Islands (COK)", "Costa Rica (CRI)", "Croatia (HRV)", "Cuba (CUB)", "Curaçao (CUW)", "Cyprus (CYP)", "Czechia (CZE)", "Côte d", "Ivoire (CIV)", "Denmark (DNK)", "Djibouti (DJI)", "Dominica (DMA)", "Dominican Republic (DOM)", "Ecuador (ECU)", "Egypt (EGY)", "El Salvador (SLV)", "Equatoria Guinea (GNQ)", "Eritrea (ERI)", "Estonia (EST)", "Eswatini (SWZ)", "Ethiopia (ETH)", "Falkland Islands [Malvinas] (FLK)", "Faroe Islands (FRO)", "Fiji (FJI)", "Finland (FIN)", "France (FRA)", "French Guiana (GUF)", "French Polynesia (PYF)", "French Southern Territories (ATF)", "Gabon (GAB)", "Gambia (GMB)", "Georgia (GEO)", "Germany (DEU)", "Ghana (GHA)", "Gibraltar (GIB)", "Greece (GRC)", "Greenland (GRL)", "Grenada (GRD)", "Guadeloupe (GLP)", "Guam (GUM)", "Guatemala (GRM)", "Guernsey (GGY)", "Guinea (GIN)", "Guinea-Bissau (GNB)", "Guyana (GUY)", "Haiti (HTI)", "Heard Island and McDonald Islands (HMD)", "Holy See (VAT)", "Honduras (HND)", "Hong Kong (HKG)", "Hungary (HUN)", "Iceland (ISL)", "India (IND)", "Indonesia (IDN)", "Iran, Islamic Republic of (IRN)", "Iraq (IRQ)", "Ireland (IRL)", "Isle of Man (IMN)", "Israel (ISR)", "Italy (ITA)", "Jamaica (JAM)", "Japan (JPN)", "Jersey (JEY)", "Jordan (JOR)", "Kazakhstan (KAZ)", "Kenya (KEN)", "Kiribati (KIR)", "Korea, the Democratic People's Republic of (PRK)", "Korea, the Republic of (KOR)", "Kuwait (KWT)", "Kyrgyzstan (KGZ)", "Lao People's Democratic Republic (LAO)", "Latvia (LVA)", "Lebanon (LBN)", "Lesotho (LSO)", "Liberia (LBR)", "Libya (LBY)", "Liechstenstein (LIE)", "Lithuania (LTU)", "Luxembourg (LUX)", "Macao (MAC)", "Madagascar (MDG)", "Malawi (MWI)", "Malaysia (MYS)", "Maldives (MDV)", "Mali (MLI)", "Malta (MLT)", "Marshall Islands (MHL)", "Martinique (MTQ)", "Mauritania (MRT)", "Mauritius (MUS)", "Mayotte (MYT)", "Mexico (MEX)", "Micronesia, Federated States of (FSM)", "Moldova, the Republic of (MDA)", "Monaco (MCO)", "Mongolia (MNG)", "Montenegro (MNE)", "Montserrat (MSR)", "Morocco (MAR)", "Mozambique (MOZ)", "Myanmar (MMR)", "Namibia (NAM)", "Nauru (NRU)", "Nepal (NPL)", "Netherlands (NLD)", "New Caledonia (NCL)", "New Zealand (NZL)", "Nicaragua (NIC)", "Niger (NER)", "Nigeria (NGA)", "Niue (NIU)", "Norfolk Island (NFK)", "Northern Mariana Islands (MNP)", "Norway (NOR)", "Oman (OMN)", "Pakistan (PAK)", "Palau (PLW)", "Palestine, State of (PSE)", "Panama (PAN)", "Papua New Guinea (PNG)", "Paraguay (PRY)", "Peru (PER)", "Philippines (PHL)", "Pitcairn (PCN)", "Poland (POL)", "Portugal (PRT)", "Puerto Rico (PRI)", "Qatar (QAT)", "Republic of North Macedonia (MKD)", "Romania (ROU)", "Russian Federation (RUS)", "Rwanda (RWA)", "Réunion (REU)", "Saint Barthélemy (BLM)", "Saint Helena, Ascension and Tristan da Cunha (SHN)", "Saint Kitts and Nevis (KNA)", "Saint Lucia (LCA)", "Saint Martin (French Part) (MAF)", "Saint Pierre and Miquelon (SPM)", "Saint Vincent and the Grenadines (VCT)", "Samoa (WSM)", "San Marino (SMR)", "Sao Tome and Principe (STP)", "Saudi Arabia (SAU)", "Senegal (SEN)", "Serbia (SRB)", "Seychelles (SYC)", "Sierra Leone (SLE)", "Singapore (SGP)", "Sint Maarten (Dutch part) (SXM)", "Slovakia (SVK)", "Slovenia (SVN)", "Solomon Islands (SLB)", "Somalia (SOM)", "South Africa (ZAF)", "South Georgia and the South Sandwich Islands (SGS)", "South Sudan (SSD)", "Spain (ESP)", "Sri Lanka (LKA)", "Sudan (SDN)", "Suriname (SUR)", "Svalbard and Jan Mayen (SJM)", "Sweden (SWE)", "Switzerland (CHE)", "Syrian Arab Republic (SYR)", "Taiwan, Province of China (TWN)", "Tajikistand (TJK)", "Tanzania, United Republic of (TZA)", "Thailand (THA)", "Timor-Leste (TLS)", "Togo (TGO)", "Tokelau (TKL)", "Tonga (TON)", "Trinidad and Tobago (TTO)", "Tunisia (TUN)", "Turkey (TUR)", "Turkmenistan (TKM)", "Turks and Caicos Island (TCA)", "Tuvalu (TUV)", "Uganda (UGA)", "Ukraine (UKR)", "United Arab Emirates (ARE)", "United Kingdom of Great Britain and Northern Ireland (GBR)", "United States Minor Outlying Islands (UMI)", "United States of America (USA)", "Uruguay (URY)", "Uzbekistan (UZB)", "Vanuatu (VUT)", "Venezuela, Bolivarian Republic of (VEN)", "Viet Nam (VNM)", "Virgin Islands, British (VGB)", "Virgin Islands, U.S. (VIR)", "Wallis and Futuna (WLF)", "Western Sahara (ESH)", "Yemen (YEM)", "Zambia (ZMB)", "Zimbabwe (ZWE)", "Åland Islands (ALA)"];
var time_zone = ["Please Select", "Acre Time (ACT)", "Afghanistan Time (AFT)", "Alaska Daylight Time (AKDT)", "Alaska Standard Time (AKST)", "Alma-Ata Time (ALMT)", "Alpha Time Zone (A)", "Amazon Summer Time (AMST)", "Amazon Time (AMT)", "Anadyr Summer Time (ANAST)", "Anadyr Time (ANAT)", "Anywhere on Earth (AoE)", "Aqtobe Time (AQTT)", "Arabia Daylight Time (ADT)", "Arabia Standard Time (AST)", "Argentina Time (ART)", "Armenia Summer Time (AMST)", "Armenia Time (AMT)", "Atlantic Daylight Time (ADT)", "Atlantic Standard Time  (AST)", "Atlantic Time (AT)", "Australian Central Standard Time (ACST)", "Australian Central Time (ACT)", "Australian Central Western Standard Time (ACWST)", "Australian Eastern Daylight Time (AEDT)", "Australian Eastern Standard Time (AEST)", "Australian Eastern Time (AET)", "Australian Western Daylight Time (AWDT)", "Australian Western Standard Time (AWST)", "Azerbaijan Summer Time (AZST)", "Azerbaijan Time (AZT)", "Azores Summer Time (AZOST)", "Azores Time (AZOT)", "Bangladesh Standard Time (BST)", "Bhutan Time (BTT)", "Bolivia Time (BOT)", "Bougainville Standard Time (BST)", "Brasília Summer Time (BRST)", "Brasília Time (BRT)", "Bravo Time Zone (B)", "British Summer Time (BST)", "Brunei Darussalam Time (BNT)", "Cape Verde Time (CVT)", "Casey Time (CAST)", "Cayman Islands Daylight Saving Time (CIDST)", "Cayman Islands Standard Time (CIST)", "Central Africa Time (CAT)", "Central Daylight Time (CDT)", "Central European Summer Time (CEST)", "Central European Time (CET)", "Central Indonesian Time (WITA)", "Central Standard Time (CST)", "Central Time (CT)", "Chamorro Standard Time (ChST)", "Charlie Time Zone (C)", "Chatham Island Daylight Time (CHADT)", "Chatham Island Standard Time (CHAST)", "Chile Standard Time (CLT)", "Chile Summer Time (CLST)", "China Standard Time (CST)", "Choibalsan Summer Time (CHOST)", "Choibalsan Time (CHOT)", "Christmas Island Time (CXT)", "Chuuk Time (CHUT)", "Cocos Islands Time (CCT)", "Colombia Time (COT)", "Cook Island Time (CKT)", "Coordinated Universal Time (UTC)", "Cuba Daylight Time (CDT)", "Cuba Standard Time (CST)", "Davis Time (DAVT)", "Delta Time Zone (D)", "Dumont-d'Urville Time (DDUT)", "East Greenland Time (EGT)", "East Timor Time (TLT)", "Easter Island Standard Time (EAST)", "Easter Island Summer Time (EASST)", "Eastern Africa Time (EAT)", "Eastern Daylight Time (EDT)", "Eastern European Summer Time (EEST)", "Eastern European Time (EET)", "Eastern Greenland Summer Time (EGST)", "Eastern Indonesian Time (WIT)", "Eastern Standard Time (EST)", "Eastern Time (ET)", "Echo Time Zone (E)", "Ecuador Time (ECT)", "Falkland Island Time (FKT)", "Falkland Islands Summer Time (FKST)", "Fernando de Noronha Time (FNT)", "Fiji Summer Time (FJST)", "Fiji Time (FJT)", "Foxtrot Time Zone (F)", "French Guiana Time (GFT)", "French Southern and Antarctic Time (TFT)", "Further-Eastern European Time (FET)", "Galapagos Time (GALT)", "Gambier Time (GAMT)", "Georgia Standard Time (GET)", "Gilbert Island Time (GILT)", "Greenwich Mean Time (GMT)", "Gulf Standard Time (GST)", "Guyana Time (GYT)", "Hawaii Standard Time (HST)", "Hawaii-Aleutian Daylight Time (HDT)", "Hong Kong Time (HKT)", "Hovd Summer Time (HOVST)", "Hovd Time (HOVT)", "India Standard Time (IST)", "Indian Chagos Time (IOT)", "Indochina Time (ICT)", "Iran Daylight Time (IRDT)", "Iran Standard Time (IRST)", "Irish Standard Time (IST)", "Irkutsk Summer Time (IRKST)", "Irkutsk Time (IRKT)", "Israel Daylight Time (IDT)", "Israel Standard Time (IST)", "Japan Standard Time (JST)", "Kamchatka Summer Time (PETST)", "Kamchatka Time (PETT)", "Kilo Time Zone (K)", "Korea Standard Time (KST)", "Kosrae Time (KOST)", "Krasnoyarsk Summer Time (KRAST)", "Krasnoyarsk Time (KRAT)", "Kuybyshev Time (KUYT)", "Kyrgyzstan Time (KGT)", "Lima Time Zone (L)", "Line Islands Time (LINT)", "Lord Howe Daylight Time (LHDT)", "Lord Howe Standard Time (LHST)", "Magadan Summer Time (MAGST)", "Magadan Time (MAGT)", "Malaysia Time (MYT)", "Maldives Time (MVT)", "Marquesas Time (MART)", "Marshall Islands Time (MHT)", "Mauritius Time (MUT)", "Mawson Time (MAWT)", "Mike Time Zone (M)", "Moscow Daylight Time (MSD)", "Moscow Standard Time (MSK)", "Mountain Daylight Time (MDT)", "Mountain Standard Time (MST)", "Mountain Time (MT)", "Myanmar Time (MMT)", "Nauru Time (NRT)", "Nepal Time (NPT)", "New Caledonia Time (NCT)", "New Zealand Daylight Time (NZDT)", "New Zealand Standard Time (NZST)", "Newfoundland Daylight Time (NDT)", "Newfoundland Standard Time (NST)", "Niue Time (NUT)", "Norfolk Daylight Time (NFDT)", "Norfolk Time (NFT)", "November Time Zone (N)", "Novosibirsk Summer Time (NOVST)", "Novosibirsk Time (NOVT)", "Omsk Standard Time (OMST)", "Omsk Summer Time (OMSST)", "Oral Time (ORAT)", "Oscar Time Zone (O)", "Pacific Daylight Time (PDT)", "Pacific Standard Time (PST)", "Pacific Time (PT)", "Pakistan Standard Time (PKT)", "Palau Time (PWT)", "Papa Time Zone (P)", "Papua New Guinea Time (PGT)", "Paraguay Summer Time (PYST)", "Paraguay Time (PYT)", "Peru Time (PET)", "Philippine Time (PHT)", "Phoenix Island Time (PHOT)", "Pierre & Miquelon Daylight Time (PMDT)", "Pierre & Miquelon Standard Time (PMST)", "Pitcairn Standard Time (PST)", "Pohnpei Standard Time (PONT)", "Pyongyang Time (PYT)", "Quebec Time Zone (Q)", "Qyzylorda Time (QYZT)", "Reunion Time (RET)", "Romeo Time Zone (R)", "Rothera Time (ROTT)", "Sakhalin Time (SAKT)", "Samara Time (SAMT)", "Samoa Standard Time (SST)", "Seychelles Time (SCT)", "Sierra Time Zone (S)", "Singapore Time (SGT)", "Solomon Islands Time (SBT)", "South Africa Standard Time (SAST)", "South Georgia Time (GST)", "Srednekolymsk Time (SRET)", "Suriname Time (SRT)", "Syowa Time (SYOT)", "Tahiti Time (TAHT)", "Tajikistan Time (TJT)", "Tango Time Zone (T)", "Tokelau Time (TKT)", "Tonga Summer Time (TOST)", "Tonga Time (TOT)", "Turkey Time (TRT)", "Turkmenistan Time (TMT)", "Tuvalu Time (TVT)", "Ulaanbaatar Summer Time (ULAST)", "Ulaanbaatar Time (ULAT)", "Uniform Time Zone (U)", "Uruguay Summer Time (UYST)", "Uruguay Time (UYT)", "Uzbekistan Time (UZT)", "Vanuatu Time (VUT)", "Venezuelan Standard Time (VET)", "Victor Time Zone (V)", "Vladivostok Summer Time (VLAST)", "Vladivostok Time (VLAT)", "Vostok Time (VOST)", "Wake Time (WAKT)", "Wallis and Futuna Time (WFT)", "West Africa Summer Time (WAST)", "West Africa Time (WAT)", "West Greenland Time (WGT)", "West Samoa Time (WST)", "Western Argentine Summer Time (WARST)", "Western European Summer Time (WEST)", "Western European Time (WET)", "Western Greenland Summer Time (WGST)", "Western Indonesian Time (WIB)", "Western Sahara Standard Time (WT)", "Western Sahara Summer Time (WST)", "Whiskey Time Zone (W)", "X-ray Time Zone (X)", "Yakutsk Summer Time (YAKST)", "Yakutsk Time (YAKT)", "Yankee Time Zone (Y)", "Yap Time (YAPT)", "Yekaterinburg Summer Time (YEKST)", "Yekaterinburg Time (YEKT)", "Zulu Time Zone (Z)"];
var currency = ["Afghani (AFN)", "Algerian Dinar (DZD)", "Argentine Peso (ARS)", "Armenian Dram (AMD)", "Aruban Florin (AWG)", "Australian Dollar (AUD)", "Azerbaijan Manat (AZN)", "Bahamian Dollar (BSD)", "Bahraini Dinar (BHD)", "Baht (THB)", "Balboa (PAB)", "Barbados Dollar (BBD)", "Belarusian Ruble (BYN)", "Belize Dollar (BZD)", "Bermudian Dollar (BMD)", "Bolívar Soberano (VES)", "Boliviano (BOB)", "Brazilian Real (BRL)", "Brunei Dollar (BND)", "Bulgarian Lev (BGN)", "Burundi Franc (BIF)", "Cabo Verde Escudo (CVE)", "Canadian Dollar (CAD)", "Cayman Islands Dollar (KYD)", "CFA Franc BCEAO (XOF)", "CFA Franc BEAC (XAF)", "CFP Franc (XPF)", "Chilean Peso (CLP)", "Colombian Peso (COP)", "Comorian Franc (KMF)", "Congolese Franc (CDF)", "Convertible Mark (BAM)", "Cordoba Oro (NIO)", "Costa Rican Colon (CRC)", "Cuban Peso (CUP)", "Czech Koruna (CZK)", "Dalasi (GMD)", "Danish Krone (DKK)", "Denar (MKD)", "Djibouti Franc (DJF)", "Dobra (STN)", "Dominican Peso (DOP)", "Dong (VND)", "East Caribbean Dollar (XCD)", "Egyptian Pound (EGP)", "El Salvador Colon (SVC)", "Ethiopian Birr (ETB)", "Euro (EUR)", "Falkland Islands Pound (FKP)", "Fiji Dollar (FJD)", "Forint (HUF)", "Ghana Cedi (GHS)", "Gibraltar Pound (GIP)", "Gourde (HTG)", "Guarani (PYG)", "Guinean Franc (GNF)", "Guyana Dollar (GYD)", "Hong Kong Dollar (HKD)", "Hryvnia (UAH)", "Iceland Krona (ISK)", "Indian Rupee (INR)", "Iranian Rial (IRR)", "Iraqi Dinar (IQD)", "Jamaican Dollar (JMD)", "Jordanian Dinar (JOD)", "Kenyan Shilling (KES)", "Kina (PGK)", "Kuna (HRK)", "Kuwaiti Dinar(KWD)", "Kwanza (AOA)", "Kyat (MMK)", "Lao Kip (LAK)", "Lari (GEL)", "Lebanese Pound (LBD)", "Lek (ALL)", "Lempira (HNL)", "Leone (SLL)", "Liberian Dollar (LRD)", "Libyan Dinar (LYD)", "Lilangeni (SZL)", "Loti (LSL)", "Malagasy Ariary (MGA)", "Malawi Kwacha (MWK)", "Malaysian Ringgit (MYR)", "Mauritius Rupee (MUR)", "Mexican Peso (MXN)", "Mexican Unidad de Inversion (MXV)", "Moldovan Leu (MDL)", "Moroccan Dirham (MAD)", "Mozambique Metical (MZN)", "Mvdol (BOV)", "Naira (NGN)", "Nakfa (ERN)", "Namibia Dollar (NAD)", "Nepalese Rupee (NPR)", "Netherlands Antillean Guilder (ANG)", "New Israeli Sheqel (ILS)", "New Taiwan Dollar (TWD)", "New Zealand Dollar (NZD)", "Ngultrum (BTN)", "North Korean Won (KPW)", "Norwegian Krone (NOK)", "Ouguiya (MRU)", "Pa'anga (TOP)", "Pakistan Rupee (PKR)", "Pataca (MOP)", "Peso Convertible (CUC)", "Peso Uruguayo (UYU)", "Philippine Peso (PHP)", "Pound Sterling (GBP)", "Pula (BWP)", "Qatari Rial (QAR)", "Quetzal (GTQ)", "Rand (ZAR)", "Rial Omani (OMR)", "Riel (KHR)", "Romanian Leu (RON)", "Rufiyaa (MVR)", "Rupiah (IDR)", "Russian Ruble (RUB)", "Rwanda Franc (RWF)", "Saint Helena Pound (SHP)", "Saudi Riyal (SAR)", "Serbian Dinar (RSD)", "Seychelles Rupee (SCR)", "Singapore Dollar (SGD)", "Sol (PEN)", "Solomon Islands Dollar (SBD)", "Som (KGS)", "Somali Shilling (SOS)", "Somoni (TJS)", "South Sudanese Pound (SSP)", "Sri Lanka Rupee (LKR)", "Sucre (XSU)", "Sudanese Pound (SDG)", "Surinam Dollar (SRD)", "Swedish Krona (SEK)", "Syrian Pound (SYP)", "Taka (BDT)", "Tala (WST)", "Tanzanian Shilling (TZS)", "Tenge (KZT)", "Trinidad and Tobago Dollar (TTD)", "Tugrik (MNT)", "Tunisian Dinar (TND)", "Turkish Lira (TRY)", "Turkmenistan New Manat (TMT)", "UAE Dirham (AED)", "Uganda Shilling (UGX)", "Unidad de Fomento (CLF)", "Unidad de Valor Real (COU)", "Unidad Previsional (UYW)", "Uruguay Peso en Unidades Indexadas (UYI)", "US Dollar (USD)", "Uzbekistan Sum (UZS)", "Vatu (VUV)", "WIR Euro (CHE)", "WIR Franc (CHW)", "Won (KRW)", "Yemeni Rial (YER)", "Yen (JPY)", "Yuan Renminbi (CNY)", "Zambian Kwacha (ZMW)", "Zimbabwe Dollar (ZWL)", "Zloty (PLN)"];
var race = ["American Indian or Alaska Native", "Black or African American", "East Asian", "Hispanic", "Native Hawaiian or Other Pacific Islander", "South Asian", "Southeast Asian", "West or Central Asian", "White"];
var citizenship = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var nationality = ["Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Anguillan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bermudian", "Bhutanese", "Bolivian", "Botswanan", "Brazilian", "British", "British Virgin Islander", "Bruneian", "Bulgarian", "Burkinan", "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Cayman Islander", "Central African", "Chadian", "Chilean", "Chinese", "Chinese (Hong Kong)", "Citizen of Antigua and Barbuda", "Citizen of Bosnia and Herzegovina", "Citizen of Guinea Bissau", "Citizen of Kiribati", "Citizen of Seychelles", "Citizen of the Dominican Republic", "Citizen of Vanuatu", "Colombian", "Comoran", "Congolese (Congo)", "Congolese (DRC)", "Cook Islander", "Costa Rican", "Croatian", "Cuban", "Cymraes", "Cymro", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirati", "English", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Faroese", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Gibraltarian", "Greek", "Greenlandic", "Grenadian", "Guamanian", "Guatemalan", "Guinean", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakh", "Kenyan", "Kittitian", "Kosovan", "Kuwaiti", "Kyrgyz", "Lao", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtenstein Citizen", "Lithuanian", "Luxembourger", "Macanese", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldavian", "Malian", "Maltese", "Marshallese", "Martiniquais", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monegasque", "Mongolian", "Montenegrin", "Montserratian", "Moroccan", "Mosotho", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerian", "Nigerien", "Niuean", "North Korean", "Northern Irish", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Pitcairn Islander", "Polish", "Portuguese", "Prydeinig", "Puerto Rican", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Helenian", "Saint Lucian", "Salvadorean", "Sammarinese", "Samoan", "Sao Tomean", "Saudi Arabian", "Scottish", "Senegalese", "Serbian", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "South Sudanese", "Spanish", "Sri Lankan", "Stateless", "Sudanese", "Surinamese", "Swazi", "Swedish", "Swiss", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian", "Tristanian", "Tunisian", "Turkish", "Turkmen", "Turks and Caicos Islander", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbek", "Vatican Citizen", "Venezuelan", "Vietnamese", "Vincentian", "Wallisian", "Welsh", "Yemeni", "Zambian", "Zimbabwean"];