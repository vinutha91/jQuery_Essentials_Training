// Concept 3
$(document).ready(function() {
	console.log('jQuery: Page is ready 1');
	
	// adding multiple click handlers at once
	$('td > button').on('click', function(event) {
		alert($(event.currentTarget).attr('list-item'));
	});

	$('#addTripHeading').click(addTripHeading)
});

// Concept 1
var isHeadingVisible = true;
function showHideHeadings() {
	isHeadingVisible = !isHeadingVisible;
	isHeadingVisible ? $('h1').hide() : $('h1').show();

	// 60 chars vs 15 chars
	// document.getElementById('#myElement').style.display = none;
	// document.getElementById('#myElement').style.display = block;
}

// Concept 2
// passing current element to the function call and then to $
function changeStyle(currentElement) {
	console.log(currentElement);

	// $(currentElement).hide();

	console.log($(currentElement).attr('list-item'));
}

// Concept 4
function addTripHeading() {
	$('#tripTable').html('<h1>HELOOO!!!! THESE ARE YOUR TRIPS!!!</h1>');
}

// Concept 5
$(document).ready(() => {
	$('#myStylishButton').on('mouseover', (evt) => {
		$(evt.currentTarget).addClass('myStylishButtonHover');
	});

	$('#myStylishButton').on('mouseout', (evt) => {
		$(evt.currentTarget).removeClass('myStylishButtonHover');
	})

	$('#myStylishButton').on('click', (evt) => {
		$(evt.currentTarget).css('background-color', function() {
			return '#'+Math.floor(Math.random()*16777215).toString(16);
		})
	})
})