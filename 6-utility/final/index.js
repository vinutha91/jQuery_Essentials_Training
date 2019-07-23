var list = [
	'cat',
	'dog',
	'rabbit',
	'mouse',
	'parrot',
	'chicken'
]
$(document).ready(() => {
	$.each(list, (index, animal) => {
		$('#animals').append(
			`<li>
				${animal}
			</li>`
		)
	})

	$('ul#humans li').each((index, element) => {
		$(element).addClass('myStylishList');
	})
});