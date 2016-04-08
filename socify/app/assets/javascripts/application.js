// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bindWithDelay
//= require jquery.datetimepicker
//= require_tree .

$(document).ready(function(){
  $("#event_when").datetimepicker({
    format:'Y/m/d H:i'
  });
  $("#user_dob").datetimepicker({
    timepicker:false,
    format:'Y/m/d',
    maxDate:'0'
  });


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

  
});