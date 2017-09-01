function toggleUnderline(navElement){
	$(navElement).click(function() {
		if($("#about").hasClass("underline")){
			$("#about").toggleClass("underline");
		}
		if($("#work").hasClass("underline")){
			$("#work").toggleClass("underline");
		}
		if($("#team").hasClass("underline")){
			$("#team").toggleClass("underline");
		}
		if($("#contact").hasClass("underline")){
			$("#contact").toggleClass("underline");
		}
	$(navElement).toggleClass("underline");
	});
}
/**
 * Declare the function toggleUnderline
 * It will check for which element in the header is currently underlined
 * Then it remove the underline from that element
 * And underline the clicked element
 */

toggleUnderline("#about");
toggleUnderline("#work");
toggleUnderline("#team");
toggleUnderline("#contact");
//Call the toggleUnderline for each nav element
