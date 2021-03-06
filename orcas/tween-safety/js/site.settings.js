/*Copyright (c) 2008 Dave Merwin

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE. */

$(document).ready(function(){
	$('#capturePanel').hide();
	$('a[rel*=facebox]').facebox();
	
	//$('.inputText1, .inputText2, .inputText3, .inputText4').hide();
	
	$('.choiceInputNo, .choiceInputYes').hide();
	
	$(document).bind('reveal.facebox', function() {
		// Act on the event
		$('.input1').click(function() {
			$('.inputText1').show();
			return false
		});
		
		$('.input2').click(function() {
			$('.inputText2').show();
			return false
		});

		$('.input3').click(function() {
			$('.inputText3').show();
			return false
		});

		$('.input4').click(function() {
			$('.inputText4').show();
			return false
		});
	});

});
function onClipDone(clip) {
	console.log('clip done')
	console.dir(clip);
	$.facebox($('#capturePanel').html());
}
