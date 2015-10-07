$(function() {
	var path = window.location.search.split('?s=');
	if (path[1] == '1') {
		//show submission confirmed
		$('#confirmSubmit').show();
	} else {
		$('#confirmSubmit').hide();
	}
});

function goToSubmit() {
	if (localStorage["isLoggedIn"]) {
		//go to submit
		window.location.href = "submit.html";
	} else {
		//go to login page
		window.location.href = "login.html";
	}
}
