$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$(".go__to").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});