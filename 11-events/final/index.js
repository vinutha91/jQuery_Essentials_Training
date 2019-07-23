$(document).ready(() => {
	$('#myButton').click((events) => {
		
	})

	$('#myButton').on('click', (events) => {
		var clickedElement = $(this);
		// clickedElement refers to the button
	})

	$('#myButton').on('click mouseover', (events) => {
		var clickedElement = $(this);
		// clickedElement refers to the button
	})

	$('#myButton').on({
		'click': (events) => {
			var clickedElement = $(this);
			// clickedElement refers to the button
		},
		'mouseover': (events) => {
			var clickedElement = $(this);
			// clickedElement refers to the button
		}
	})

	// Tearing down a particular click handler, using a reference to the function
	var foo = function() { console.log('foo'); };
	var bar = function() { console.log('bar'); };
	
	$('p').on('click', foo ).on('click', bar );
	$('p').off('click', bar ); // foo is still bound to the click event
});
