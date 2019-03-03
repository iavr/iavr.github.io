function view() {
	var e = window, a = 'inner';
	if(!('innerWidth' in window)) {
		e = document.documentElement || document.body;
		a = 'client';
	}
	return {width: e[a+'Width'], height: e[a+'Height']}
}

function scroll(h) {
	var e = view().width >= 768 ? 'header' : 'nav';
	var height = $(e).outerHeight(true);
	var margin = parseInt($(h).parent().css('margin-top'));
	var off = $(h).offset().top - margin - height + 100;
	$('html, body').scrollTop(off);
}

function int_hash(v, e) {
	v.preventDefault();
	scroll($(e).attr('href'));
}

function ext_hash() {
	var h = window.location.hash;
	if(h && !h.includes('#col-')) {
		if(!h.includes('#y-')) {
			var e = $('#col-' + h.slice(1));
			if(e) e.addClass('show');
		}
		scroll(h);
	}
}

$(document).ready(function() {
	$("a[href^='#']:not(.toggle)").on('click', function(v) {int_hash(v, this);});
	ext_hash();
});
