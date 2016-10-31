//modal code
$(document).ready(function (){
	var about = $('.about');
	var btn = $('#myBtn');
	var close = $('#close');

	btn.on('click', function(){
		about.css('display','block');
	});

	close.on('click', function(){
		about.css('display', 'none');
	});

});

