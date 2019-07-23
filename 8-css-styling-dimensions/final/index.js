$(document).ready(() => {
    console.log($('h1').css('fontSize'));
	console.log($('h1').css('font-size'));
	
	$('h1').css('font-size', '50px');

	$('h1').css({fontSize: '60px', color: 'red'});

	$('h1').addClass('stylistHeader');
	$('h1').removeClass('stylistHeader');
	console.log($('h1').hasClass('stylistHeader'));

	$('div').width('300px');
	$('div').height('500px');
	console.log($('div').width() + ' ' + $('div').height());
	console.log($('div').position());
});
