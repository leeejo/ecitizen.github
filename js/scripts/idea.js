function toggleVote(btn, text, count) {
	var t = document.getElementById(text);
	var c = document.getElementById(count);
	if(t.innerText == "Voted") {
		//set to Vote
		$('#' + btn).removeClass('voted');
		t.innerText = "Vote";
		c.innerText = Number(c.innerText) - 1;
	} else {
		$('#' + btn).addClass('voted');
		t.innerText = "Voted";
		c.innerText = Number(c.innerText) + 1;
	}
}