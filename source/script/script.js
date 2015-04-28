
$(document).ready(init);

function init(){
	$('#regionSection').hide();
	$('#statusSection').hide();

	var region_btn = $('#region');
	region_btn.bind('click', function(){OpenSection('#region', '#regionSection')});
	region_btn.bind('mouseover', function(){ HighlightButton('#region') });
	region_btn.bind('mouseleave', function(){ ResetBackground('#region') });

	var status_btn = $('#status');
	status_btn.bind('click', function(){OpenSection('#status', '#statusSection')});
	status_btn.bind('mouseover', function(){ HighlightButton('#status') });
	status_btn.bind('mouseleave', function(){ ResetBackground('#status') });

	var hideStatus_btn = $('#hideStatus');
	hideStatus_btn.bind('click', function(){HideSection('#statusSection', '#status')})

	var hideRegion_btn = $('#hideRegion');
	hideRegion_btn.bind('click', function(){HideSection('#regionSection', '#region')})
}


function HighlightButton(button){
	$(button).css('background-color', '#fff');
}



function ResetBackground(button){
	$(button).css('background-color', '#fff7dc');
}

function OpenSection (sourse, target){
	$(target).show();
	$(sourse).hide();
}

function HideSection(sourse, show_btn){
	$(sourse).hide();
	$(show_btn).show();
}

