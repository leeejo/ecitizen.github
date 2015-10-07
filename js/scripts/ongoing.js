$(function () {
	var path = window.location.search.split('?s=');
	if(path[1] == '1') {
		//show submission confirmed
		$('#confirmSubmit').show();
	}else {
		$('#confirmSubmit').hide();
	}
});