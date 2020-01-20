"use strict";

function linkHide() {
	let link = document.getElementById("link-1");
	link.onclick = () => {
		link.innerHTML = "";
	};
}
linkHide();
