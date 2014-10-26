$(document).ready(function() {
	$("#add").on("click", function(){
		var listItem = $("#item").val();
		$(this).closest("#note").find("ul").append("<li>" + listItem + "</li>");
	});
});