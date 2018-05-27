$(function(){
    $(".product-bar li").click(function(){
		var dataList = $(this).attr("data-tabs");
		
		$(".product-bar li").removeClass("currentTabName");
		$(".product").removeClass("currentTab");
		
		$(this).addClass("currentTabName");
		$("."+dataList).addClass("currentTab");
	});

	/**Close button**/
	$(".btn-close").click(function(){
		$(".displayNone").css("display","none");
	});

	/**Modal**/
	$(".btn-view").click(function(){
		var dataTarget = $(this).attr("data-target");
		$("."+ dataTarget).css("display", "block");
	})

	/**Quanity**/
	$(".btn-decrease").click(function() {
		var changeAmount = Number($(".amount-input").val());
		if (changeAmount > 1) {
			changeAmount--;
			$(".amount-input").val(changeAmount);
		}
	});
	
	$(".btn-increase").click(function() {
		var changeAmount = Number($(".amount-input").val());
		changeAmount++;
		$(".amount-input").val(changeAmount);
	});

	/*Scroll link*/
	$('.scroll-link').on('click', function(event) {
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
  
	function scrollToID(id, speed){
		var offSet = 0;
		var targetOffset = $(id).offset().top - offSet;
		var mainNav = $('nav');	$('html,body').animate({scrollTop:targetOffset}, speed);
		if (mainNav.hasClass("open")) {
			mainNav.css("height", "1px").removeClass("in").addClass("collapse");
			mainNav.removeClass("open");
		}
	}
	if (typeof console === "undefined") {
		console = {
			log: function() { }
		};
	}

	/*Go to top button*/
	$(window).scroll(function(){
		if($(window).scrollTop()>300) {
			$(".go-top-btn").show();
		} else {
			$(".go-top-btn").hide();
		}
	});
	
})