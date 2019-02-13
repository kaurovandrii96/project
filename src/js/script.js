$(".accordion__text").hide().prev().click(function() {
	$(this).parents(".accordion").find(".accordion__text").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});