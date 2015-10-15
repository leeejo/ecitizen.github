function loginUsingSingpass() {
	localStorage["isLoggedIn"] = true;
	if (localStorage["redirectFrom"]) {
		window.location.href = localStorage["redirectFrom"];
		localStorage["redirectFrom"] = null;
	}
}