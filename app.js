$(function(){

	var resizeContainer = function() {
		var borderTop = $( window ).innerHeight();
		var borderSide = borderTop / 1.732;
		$( "#main" ).css('border-top', 'solid #fff ' + borderTop + 'px');
		$( "#main" ).css('border-left', 'solid transparent ' + borderSide + 'px');
		$( "#main" ).css('border-right', 'solid transparent ' + borderSide + 'px');
	};
	resizeContainer();

    $( window ).resize(function() {
		resizeContainer();
	});

});

	// $(window).load(function() { 
	// 	alert("hello"); 
	// });
	// $(window).unload(function() { 
	// 	alert("good bye"); 
	// }); 