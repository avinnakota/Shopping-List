$(document).ready(function() {
	//The following code adds items to the list
	$("#add").on("click", function(){
		var listItem = $("#item").val();
		$(this).closest("#note").find("ul").append("<li>" + listItem  + "</li>");
	});
	//This code makes the list items sortable
	$("ul").sortable({ axis: "y" });
});