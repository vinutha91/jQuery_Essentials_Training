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

