$(document).ready(function(){
    
    $('.panel').click(function() {
    	$(this).css('zIndex', '100').addClass('active');
		$(this).siblings().css('zIndex', '50').removeClass('active')
    });

});