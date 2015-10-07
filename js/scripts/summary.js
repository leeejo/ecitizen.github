$(function () {
	var path = window.location.search.split('?d=');
	var data = JSON.parse(decodeURIComponent(path[1]));

	document.getElementById('title').innerText = data["title"];
	document.getElementById('desc').innerText = data["desc"];
	document.getElementById('age').innerText = data["age"];
	document.getElementById('prof').innerText = data["prof"];

	var files = JSON.parse(data["uploaded"]);
	var html = "";
	if(files.length > 0) {
		html = "<ul>";
		for(var i = 0; i < files.length; i ++) {
			html += "<li>" + files[i] + "</li>";
		}
		html +="</ul>";
	} else {
		html += "<p class='form-control'>No files uploaded</p>";
	}
	document.getElementById('uploaded').innerHTML = html;
});

function confirm() {
	window.location.href = "idea-ongoing.html?s=1";
}

function cancel() {
	window.location.href = "idea-ongoing.html";
}