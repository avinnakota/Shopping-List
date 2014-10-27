$(document).ready(function() {
	//The following code adds items to the list
	$("#add").on("click", function(){
		var listItem = $("#item").val();
		$(this).closest("#note").find("ul").append
		("<li><button class = "rid">-</button><p class = "itembar">"	
		+ listItem  + "</p></li>");
	});
	//This code deletes 
	$("ul").on("click", "li", function(){
		(this).remove();
	});
	//This code makes the list items sortable
	$("ul").sortable({ axis: "y" });
});