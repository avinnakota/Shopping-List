$(document).ready(function() {
	$("#add").on("click", function(){
		("ul").append("<li>" + "$(#item).val()" + "</li>");
	});
})