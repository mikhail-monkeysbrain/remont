$(document).ready(function() {

	// $(".works-slider").bxSlider({
	// 	slideWidth: 940,		
	// 	pagerCustom: "#works-slider-pager",		
	// })
	// $("#works-slider-pager").bxSlider({
	// 	controls:false,		
	// 	minSlides: 4,
	// 	maxSlides: 4,
	// 	slideWidth: 220,
	// 	pager: false,
	// 	moveSlides: 1,
	// 	slideMargin: 20,				
	// })

    $(".works-slider").bxSlider({
        slideWidth: 180,
        pager: false,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 10,
        controls: false,
    })
	$(".phone-numb").mask("+7 (999) 999-99-99");

	$(".callbackbutton").fancybox();
	$(".priceformbutton").fancybox();
	$(".feedbackbutton").fancybox();
    $(".elitebutton").fancybox();
	$(".pricelist-popupbutton").fancybox();

    $(".slider-popup").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

	/*$("#callback").validate({
     	rules: {
     		name: { required: true },     		
     		phone: { required: true },     		         		
     	},
     	messages: {        
      
     	},
     	errorPlacement: function(error, element) {

     	},
     	submitHandler: function(form) {
      	var thisForm =$(form);
          
        $.ajax({
			type: "POST",
			url: "mail.php",
			data: thisForm.serialize()
		}).done(function() {
			$(this).find("input").val("");
			$.fancybox({
				closeBtn: false,
                href: '#thanks', 
                modal: true
            });
			 setTimeout(function() {
				$.fancybox.close();
			}, 3000);			
			$("#callback").trigger("reset");
		});
		return false;
        	
       	},
     	success: function() {
       		
     	},
     	highlight: function(element, errorClass) {
      		$(element).addClass('error');
    	},
     	unhighlight: function(element, errorClass, validClass) {
     		$(element).removeClass('error');     		
     	}
    });*/
    /*$("#feedback").validate({
     	rules: {
     		name: { required: true },     		
     		phone: { required: true },     		         		
     	},
     	messages: {        
      
     	},
     	errorPlacement: function(error, element) {

     	},
     	submitHandler: function(form) {
      	var thisForm =$(form);
          
        $.ajax({
			type: "POST",
			url: "mail.php",
			data: thisForm.serialize()
		}).done(function() {
			$(this).find("input").val("");
			$.fancybox({
				closeBtn: false,
                href: '#thanks', 
                modal: true
            });
			 setTimeout(function() {
				$.fancybox.close();
			}, 3000);			
			$("#feedback").trigger("reset");
		});
		return false;
        	
       	},
     	success: function() {
       		
     	},
     	highlight: function(element, errorClass) {
      		$(element).addClass('error');
    	},
     	unhighlight: function(element, errorClass, validClass) {
     		$(element).removeClass('error');     		
     	}
    });*/
    /*$("#price-form").validate({
     	rules: {
     		name: { required: true },     		
     		phone: { required: true },     		          		
     	},
     	messages: {        
      
     	},
     	errorPlacement: function(error, element) {

     	},
     	submitHandler: function(form) {
      	var thisForm =$(form);
          
        $.ajax({
			type: "POST",
			url: "mail.php",
			data: thisForm.serialize()
		}).done(function() {
			$(this).find("input").val("");
			$.fancybox({
				closeBtn: false,
                href: '#thanks', 
                modal: true
            });
			 setTimeout(function() {
				$.fancybox.close();
			}, 3000);			
			$("#price-form").trigger("reset");
		});
		return false;
        	
       	},
     	success: function() {
       		
     	},
     	highlight: function(element, errorClass) {
      		$(element).addClass('error');
    	},
     	unhighlight: function(element, errorClass, validClass) {
     		$(element).removeClass('error');     		
     	}
    });*/
    $("#pricelist-popup-form").validate({
     	rules: {
     		name: { required: true },     		
     		phone: { required: true },     		          		
     	},
     	messages: {        
      
     	},
     	errorPlacement: function(error, element) {

     	},
     	submitHandler: function(form) {
      	var thisForm =$(form);
          
        $.ajax({
			type: "POST",
			url: "mail.php",
			data: thisForm.serialize()
		}).done(function() {
			$(this).find("input").val("");
			$.fancybox({
				closeBtn: false,
                href: '#thanks', 
                modal: true
            });
			 setTimeout(function() {
				$.fancybox.close();
			}, 3000);			
			$("#pricelist-popup-form").trigger("reset");
		});
		return false;
        	
       	},
     	success: function() {
       		
     	},
     	highlight: function(element, errorClass) {
      		$(element).addClass('error');
    	},
     	unhighlight: function(element, errorClass, validClass) {
     		$(element).removeClass('error');     		
     	}
    });

    /*$("#header-form").validate({
     	rules: {
     		name: { required: true },     		
     		phone: { required: true },     		          		
     	},
     	messages: {        
      
     	},
     	errorPlacement: function(error, element) {

     	},
     	submitHandler: function(form) {
      	var thisForm =$(form);
          
        $.ajax({
			type: "POST",
			url: "mail.php",
			data: thisForm.serialize()
		}).done(function() {
			$(this).find("input").val("");
			$.fancybox({
				closeBtn: false,
                href: '#thanks', 
                modal: true
            });
			 setTimeout(function() {
				$.fancybox.close();
			}, 3000);			
			$("#header-form").trigger("reset");
		});
		return false;
        	
       	},
     	success: function() {
       		
     	},
     	highlight: function(element, errorClass) {
      		$(element).addClass('error');
    	},
     	unhighlight: function(element, errorClass, validClass) {
     		$(element).removeClass('error');     		
     	}
    });*/

    /*$("#consult-form").validate({
     	rules: {
     		name: { required: true },     		
     		phone: { required: true },     		          		
     	},
     	messages: {        
      
     	},
     	errorPlacement: function(error, element) {

     	},
     	submitHandler: function(form) {
      	var thisForm =$(form);
          
        $.ajax({
			type: "POST",
			url: "mail.php",
			data: thisForm.serialize()
		}).done(function() {
			$(this).find("input").val("");
			$.fancybox({
				closeBtn: false,
                href: '#thanks', 
                modal: true
            });
			 setTimeout(function() {
				$.fancybox.close();
			}, 3000);			
			$("#consult-form").trigger("reset");
		});
		return false;
        	
       	},
     	success: function() {
       		
     	},
     	highlight: function(element, errorClass) {
      		$(element).addClass('error');
    	},
     	unhighlight: function(element, errorClass, validClass) {
     		$(element).removeClass('error');     		
     	}
    });*/
	
	$(".tab-left").click(function(e){
		e.preventDefault();

		var activeTab;
		
		$(".tab-pane").each(function(ind){
			if ($(this).hasClass("active")){
				activeTab = ind;
			}
		});

		if(activeTab > 0){
			$(".tab-pane, .price-tab li").removeClass("active");
			$(".tab-pane").eq(activeTab-1).addClass("active");
			$(".price-tab li").eq(activeTab-1).addClass("active");
			$(".tab-right").fadeIn(500);
		}
		else{
			$(".tab-left").fadeOut(500);
		}

	});
	$(".tab-right").click(function(e){
		e.preventDefault();

		var activeTab;
		
		$(".tab-pane").each(function(ind){
			if ($(this).hasClass("active")){
				activeTab = ind;
			}
		});

		if(activeTab < 4){
			$(".tab-pane, .price-tab li").removeClass("active");
			$(".tab-pane").eq(activeTab+1).addClass("active");
			$(".price-tab li").eq(activeTab+1).addClass("active");
			$(".tab-left").fadeIn(500);
		}
		else{
			$(".tab-right").fadeOut(500);
		}
	})

	$(".header-menu a").mPageScroll2id({
        scrollSpeed: 500, 
                         
    });
    $(".fixed-menu a").mPageScroll2id({
        scrollSpeed: 500,                       
    });


    var $menu = $("#menu");
    
   	$(window).scroll(function(){
    	if ( $(this).scrollTop() > 100 && $menu.hasClass("header-menu") ){
     		$menu.fadeOut('normal',function(){
      		$(this).removeClass("header-menu")
          		.addClass("fixed-menu")
          		.fadeIn('normal');
     		});
    } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed-menu")) {
     	$menu.fadeOut('normal',function(){
     	 	$(this).removeClass("fixed-menu")
          		.addClass("header-menu")
          		.fadeIn('normal');
     		});
   		}
   	});//scroll 


	
});