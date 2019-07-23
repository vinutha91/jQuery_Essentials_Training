// NEW SECTIONNNNN
$(document).ready(() => {
	$('#addTrip').click(addATrip);

	$('table#myTrips tr td button').click(function(evt) {
		alert($(evt.currentTarget).attr('list-item'));
	})	

	$(document).on('click', 'table#myTrips tr td button', function(evt) {
		alert($(evt.currentTarget).attr('list-item'));
	});
});

var listItem = 7;
function addATrip() {
	listItem++;
	$('#myTrips tbody').append(`
		<tr>
			<td>
				<button list-item="${listItem}">Click Mee</button>
			</td>
		</tr>
	`)
}