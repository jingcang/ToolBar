requirejs.config({
	paths:{
		jquery:'jquery-3.3.1.min'
	}
});
requirejs(['jquery','backtop'],function($,backtop){
	$('#backTop').backtop({
		mode:'move'
	});
});