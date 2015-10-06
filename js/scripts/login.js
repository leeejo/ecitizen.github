function loginUsingSingpass() {
	localStorage["isLoggedIn"] = true;
	window.location.href = "challenge.html";
}

function verifyIfIsLoggedIn() {
	if(localStorage["isLoggedIn"]) {
		$('#isLoggedIn').show();
		$('#isLoggedOut').hide();
	} else {
		$('#isLoggedIn').hide();
		$('#isLoggedOut').show();		
	}
}