$(document).ready(() => {
	console.log($('span.subchild').parent());
	console.log($('span.subchild').parents());
	console.log($('span.subchild').parentsUntil('div.parent'));
	console.log($('div.parent').children());
	console.log($('span.subchild').closest('div'));
	console.log($('div.child').closest('div'));
	console.log($('div.grandparent').find('div'));
	console.log($('div.parent').siblings());
	console.log($('div.parent').next());
	console.log($('div.parent').prev());
	console.log($('div.parent').nextAll());
	console.log($('div.parent').prevAll());
	console.log($('div.parent').nextAll().first());
	console.log($('div.parent').nextAll().last());
});