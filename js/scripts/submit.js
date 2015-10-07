var tests = {
	filereader: typeof FileReader != 'undefined',
	dnd: 'draggable' in document.createElement('span'),
	formdata: !!window.FormData,
	progress: "upload" in new XMLHttpRequest
};

var holder = document.getElementById('holder');
var files = [];

window.ondragover = function(e) {
	e.preventDefault()
}
window.ondrop = function(e) {
	e.preventDefault();
	var length = e.dataTransfer.files.length;
	for (var i = 0; i < length; i++) {
		upload(e.dataTransfer.files[i]);
	}
}

function upload(file) {
	files.push(file.name);
	reloadFileList();
}

function reloadFileList() {
	holder.innerHTML = "";
	for (var i = 0; i < files.length; i++) {
		// holder.innerHTML += "<span class='btn btn-default btn-block'>" + files[i] + "<a style='float: right' onclick=\"removeFile('" + files[i] + "')\"><i class='fa fa-times'></i></a></span>";
		holder.innerHTML += "<span class='btn btn-default btn-block'>";
		holder.innerHTML += files[i];
		holder.innerHTML += "<a style='float:right' onclick=\"removeFile('" + files[i] + "')\">"
		holder.innerHTML += "<i class='fa fa-times'></i>";
		holder.innerHTML += "</a></span>";
	}
}

function removeFile(name) {
	for (var i = 0; i < files.length; i++) {
		if (files[i] == name) {
			files.splice(i, 1);
			break;
		}
	}
	reloadFileList();
}

function previewfile(file) {
	if (tests.filereader === true && acceptedTypes[file.type] === true) {
		var reader = new FileReader();
		reader.onload = function(event) {
			var image = new Image();
			image.src = event.target.result;
			image.width = 250; // a fake resize
			holder.appendChild(image);
		};
		reader.readAsDataURL(file);
	} else {
		holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size / 1024 | 0) + 'K' : '');
		console.log(file);
	}
}

function submit() {
	var title = document.getElementById('inputTitle').value.trim();
	var desc = document.getElementById('inputDesc').value.trim();
	var age = document.getElementById('inputAge').value.trim();
	var prof = document.getElementById('inputProfession').value.trim();

	var data = {};
	data["title"] = title;
	data["desc"] = desc;
	data["age"] = age;
	data["prof"] = prof;
	data["uploaded"] = JSON.stringify(files);

	//proceed to summary
	window.location.href = "summary.html?d=" + encodeURIComponent(JSON.stringify(data));
}