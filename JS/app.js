$(document).ready(function() {
	//The following code adds items to the list
	$("#add").on("click", function(){
		var listItem = $("#item").val();
		$(this).closest("#note").find("ul").append
		("<li><button class = 'rid'></button><button class = 'checkmark'></button>"	+ listItem  + "</li>");
	});
	//This code deletes 
	$(".rid").on("click", "li", function(){
		this.remove();
	});
	$(".checkmark").on("click", "li", function() {
		this.css({"text-decoration": "line-through"});
	});
});