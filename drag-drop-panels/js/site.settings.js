$(document).ready(function(){
    
    $('.panel').dialog().click(function() {
    	$(this).css('zIndex', '100').addClass('active');
		$(this).siblings().css('zIndex', '50').removeClass('active')
    });

});