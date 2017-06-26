$(document).ready(start);

var count = 0;

function start(){
	postInfo();
	setupPanel('div.shadow.outside:nth-child(1)');
	setupPanel('div.shadow.outside:nth-child(2)');
	setupPanel('div.shadow.outside:nth-child(3)');
	setupPanel('div.shadow.outside:nth-child(4)');
	setupRotation('.outside');
	setupRotation('.circle');
	rotate();	
}


function postInfo() {
	setTimeout(function(){
		$('.bio-box .name').css('opacity','1');
	}, 3000);
	setTimeout(function(){
		$('.short-bio').css('opacity','1');
		$('.contact').css('opacity','1');
		$('.box').css('opacity','1');
	}, 5000);
}


function setupPanel(target){
	$(target).on('mousedown',function() {
		$(this).removeClass('shadow');	
	})
	$(target).on('mouseup',function() {
		$(this).addClass('shadow');
	})
}

function setupRotation(target){
	$(target).on('mousedown',function() {
		$('div.rotate').addClass('turn');	
	})
	$(target).on('mouseup',function() {
		$('div.rotate').removeClass('turn');
	})
}

function rotate(){
	$('div.outside').on('click', function(event){
		if(event.target.id == "one" && event.target.attributes[1].value == "true" || event.target.id == "three" && event.target.attributes[1].value == "true") {
			$id = $('#' + event.target.id);
			$id.attr('indicator','false');
			count++;
			return;
		}
		else if(event.target.id == "two" && event.target.attributes[1].value == "true" || event.target.id == "four" && event.target.attributes[1].value == "true") {
			$id = $('#' + event.target.id);
			$id.attr('indicator','false');
			count++;
			return;
		}
		return;
	});
	$('div.circle').on('click', function(event){
		if(event.target.offsetParent.id == "five" &&  count === 4) {
			$id = $('#' + event.target.offsetParent.id);
			$id.attr('indicator','false');
			azizLight();
			reset();
			return;
		}
	});
}

function azizLight(){
	$('.container').css('display','none');
	$('body').append(`<div class="aziz" style="width:100%;height:0;
		padding-bottom: 46%;position:relative;"><iframe src="
		https://giphy.com/embed/uIGHPjEfdc0Ni" width="100%" 
		height="100%" style="position:absolute;top:0;" frameBorder="0" 
		class="giphy-embed" allowFullScreen></iframe></div><div class="
		close"><i class="fa fa-times gradient" aria-hidden="true"></i></div>`);
	reset();
	return;
}

function reset(){
	$('i.fa.fa-times').one('click',function(){
		count = 0;
		$('.container').css('display','block');
		$('div.aziz').remove();
		$('div.close').remove();
		$('#one').attr('indicator','true');
		$('#two').attr('indicator','true');
		$('#three').attr('indicator','true');
		$('#four').attr('indicator','true');
		$('#five').attr('indicator','true');			
	});
}

