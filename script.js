$(document).ready(start);

var count = 0;

function start(){
	postInfo();
	azizLight();	
}

function postInfo() {
	setTimeout(function(){
		$('.bio-box .name').css('opacity','1');
	}, 2000);
	setTimeout(function(){
		$('.short-bio').css('opacity','1');
	}, 3000);
	setTimeout(function(){
		$('.icon-box').css('opacity','1');
	}, 4000);
}

function azizLight(){
	$('span.rotate i').on('click',function(){
		count++;
		if(count === 5) {
			$('.container').css('display','none');
			$('body').append(`<div class="aziz" style="width:100%;height:0;
				padding-bottom: 46%;position:relative;"><iframe src="
				https://giphy.com/embed/uIGHPjEfdc0Ni" width="100%" 
				height="100%" style="position:absolute;top:0;" frameBorder="0" 
				class="giphy-embed" allowFullScreen></iframe></div><div class="
				close"><i class="fa fa-times gradient" aria-hidden="true"></i></div>`);
			// count = 0;
			reset();
			return;
		}
	});
}

function reset(){
	$('i.fa.fa-times').one('click',function(event){
		count = 0;
		console.log(event.target);
		// $('.short-bio').css('display','block');
		// $('.bio-box').css('padding','0 0 150px');
		$('div.aziz').remove();
		$('div.close').remove();
		$('.container').css('display','block');
	});
}

