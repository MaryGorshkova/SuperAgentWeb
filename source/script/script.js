window.onload = function() {
	// $(document).ready(function() {
//   		alert ('jQuery подключен и отлично работает!');
	// });
	SetHandlers();
	$('#regionSection').hide();
	$('#statusSection').hide();
}

function SetHandlers(){
	$('#region').mouseover(HighlightButton('#region'));
	$('#region').mouseleave(ResetBackground('#region'));
	$('#region').click(function(){$('#regionSection').slideDown() });//('#region', '#regionSection'));

	$('#status').mouseover(HighlightButton('#status'));
	$('#status').mouseleave(ResetBackground('#status'));
	$('#status').click(function(){$('#statusSection').slideDown() });	
}

function HighlightButton(button){
	$(button).mouseover(function(){
	  $(button).css('background-color', '#fff');
	});	
}

function ResetBackground(button){
	$(button).mouseleave(function(){
	  $(button).css('background-color', '#fff7dc');
	});
}


		