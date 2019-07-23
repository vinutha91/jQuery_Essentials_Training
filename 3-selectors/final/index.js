$(document).ready(function() {
    console.log('jQuery: Page is ready 1');
});

console.log($('li'));

// Looping on LI
var listItems = $('li');
for (var i = 0; i<listItems.length; i++) {
	console.log('Hello');
}

[].forEach.call($('li'), function() {
	console.log('Hellloooo');
})

// Class Selector
var header = $('.myHeader');

// ID Selector
var myTitle = $('#myTitle');

// Attribute Selector
var myNameLabel = $('label[title="name"]');

$('#myList > li:first').css('color', 'yellow');
$('#myList > li:last').css('color', 'red');
$('#myList > li:odd').css('color', 'green');
$('#myList > li:even').css('color', 'orange');
$('#myList > li:nth-child(3n)').css('color', 'blue');
