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

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}




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

$(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() > 800) {
            // if larger or equal
            $('#1on').show();
            $('#1on').css("float","left");
            $('#2on').show();
            $('#2on').css("float","right");
            $('#2on').css("width","50%");
            $('#2in').css("float","left");
            $('#2in').css("left", "30%");
            $('#hidemehnogga').hide();

           
        } else if ($(window).width() < 800 && $(window).width() > 400){
            // if smaller
            $('#1on').hide();
            $('#2on').center; 
            $('#2on').css("width","100%");
            $('#2in').css("left", "50%");
            $('#2in').css("float","none");
            $('#2in').css("margin-top", "0px");
            $('#hidemehnogga').show();
            $('#loginload').css("margin-bottom","0px");
            $('#signupload').css("margin-bottom","0px");
            $('#BaG').css("margin-bottom","0px");
         
        } else {
        	 $('#1on').hide();
        	$('#2on').css("width","100%");
        	 $('#2on').center;
            $('#2in').center;
            $('#2in').css("margin-top", "0px");
            $('#loginload').css("margin-bottom","7px");
            $('#signupload').css("margin-bottom","7px");
            $('#BaG').css("margin-bottom","7px");
            $('#loginpanel').css("margin-top","0px");
            //$('.noscroll').css("overflow-y","auto");

        } 
    }).resize(); // This will simulate a resize to trigger the initial run.
  
});