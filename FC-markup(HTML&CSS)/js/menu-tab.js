$(document).ready(function() {
	var menu = $(".main-menu > li");
	var tab = $(".notice-heading, .pds-heading");
	var list = $(".related-list");
	var last = $(".related-list li:last-child")



	menu.hover(function() {
		$(this).find(".sub-menu").toggleClass("menu-act");
	});
	menu.on("focusin", function() {
		$(this).siblings().find(".sub-menu").removeClass("menu-act");
		$(this).find(".sub-menu").addClass("menu-act");
	});

	tab.on("click focusin", function() {
		$(this).parent().addClass("board-act").siblings().removeClass("board-act");
	});
	list.focusin(function(){
		$(this).addClass("list-open");
	});
	last.focusout(function(){
		$(this).parents(".related-list").removeClass("list-open");
	});
		
});