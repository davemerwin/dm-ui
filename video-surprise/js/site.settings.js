$(document).ready(function(){
	$('#capturePanel').hide();
});
function onClipDone(clip) {
	console.log('clip done')
	console.dir(clip);
	$.facebox($('#capturePanel').html());
}
