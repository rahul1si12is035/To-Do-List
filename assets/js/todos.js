$("ul").on("click", "li", function(){
	/*$(this).css("color","grey");
	$(this).css("text-decoration", "line-through");	*/
	/*if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
		color: "black",
		textDecoration: "none"
	});
	}
	else {
		$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
	}*/
	$(this).toggleClass("completed");
});

//click on x to delete to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

