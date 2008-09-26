$(document).ready(function(){
    
    $('.panel').click(function() {
    	$(this).css('zIndex', '100');
		$(this).parents().children('.panel').css('zIndex', '90');
    });

});