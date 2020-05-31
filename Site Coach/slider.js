var slides  = document.querySelectorAll('#slides li');var current  = 0;
var total    = slides.length - 1;
window.setInterval(function(){
	var index =  current ? current - 1 : total;
	slides[index].className  = '';
	slides[current].className  = 'slider-active';
	current = current >= total ? 0 : current+1; 	
}, 2000);