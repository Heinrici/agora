$(document).ready(function () {
	
$("#loginload").click(function()  {	

	if($('#signuppanel').is(':visible')) {
	$('#signuppanel').hide();
	$('#loginpanel').fadeIn(200);
	}
	else {

	if($('#loginpanel').is(':visible')) {
	$('#loginpanel').fadeOut(200);
	}
	else {
	$('#loginpanel').fadeIn(200);
	}
}
});


$("#signupload").click(function()  {

	if($('#loginpanel').is(':visible')) {
	$('#loginpanel').hide();
	$('#signuppanel').fadeIn(200);
	}
	else {

	if($('#signuppanel').is(':visible')) {
	$('#signuppanel').fadeOut(200);
	}
	else {
	$('#signuppanel').fadeIn(200);
	}

}	
});

$('#postpanel').hover(

	function () {
		$('#hoverwhite').show("slow");
	},
	function () {
		$('#hoverwhite').hide("slow");
	}

	);


});