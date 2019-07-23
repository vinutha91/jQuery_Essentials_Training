$(document).ready(() => {
	$('.myDiv').greenify();
});

$.fn.greenify = function() {
	$(this).css('color', 'green');
	return this;
}