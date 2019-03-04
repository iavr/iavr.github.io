function view() {
	var e = window, a = 'inner';
	if(!('innerWidth' in window)) {
		e = document.documentElement || document.body;
		a = 'client';
	}
	return {width: e[a+'Width'], height: e[a+'Height']}
}

function scroll(t) {
	var header = view().width >= 768 ? 'header' : 'nav';
	var height = $(header).outerHeight(true);
	var margin = parseInt(t.parent().css('margin-top'));
	var offset = t.offset().top - margin - height + 100;
	var r = $('html,body').scrollTop(offset);
	console.log(r);
}

function int_hash(e, a) {
	e.preventDefault();
	var h = $(a).attr('href');
	var t = $(h);
	if(t) scroll(t);
}

function ext_hash() {
	var h = window.location.hash;
	var t = $(h);
	if(!t) return;
	if(t.is('a')) {
		var c = $('#col-' + h.slice(1));
		if(c) c.addClass('show');
	}
	for(var i=50; i<3000; i+=50)
		setTimeout(function(){scroll(t);}, i);
}

$(document).ready(function() {
	$("a[href^='#']:not(.toggle)").on('click', function(e) {int_hash(e, this);});
	ext_hash();
});
