var cta = document.getElementById("cta");
var bar = document.getElementById("cookie-banner");

cta.addEventListener("click", function() {
	bar.classList.add("out");
	
	setTimeout(function() {
		bar.classList.remove("out");
	}, 2000000000);
}, true);