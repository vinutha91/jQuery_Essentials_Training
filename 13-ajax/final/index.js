$(document).ready(() => {
	var response;
 
	$.get('http://localhost:3000/vehicle', function( r ) {
		response = r;
		alert( response );
	});

	$.ajax({
		url: 'http://localhost:3000/vehicle',
		type: 'GET',
		dataType: 'json',
		data: {
			a: 1,
			b: 2
		},
		timeout: 3000,
		async: false,
		cache: false
	})
	.done((response) => {
		console.log(response);
	})
	.fail((error) => {
		console.log(error);
	})
	.always(() => {
		// hide the spin wheel
		console.log('AJAX Request Completed!');
	});

	var myLoginForm = $('#loginForm').serializeArray();
	var myLoginFormQueryParams = $('#loginForm').serialize();
	console.log(myLoginForm);
	console.log(myLoginFormQueryParams);
});