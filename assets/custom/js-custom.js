var cta = document.getElementById("cta");
var bar = document.getElementById("cookie-banner");

cta.addEventListener("click", function() {
	bar.classList.add("out");
	
	setTimeout(function() {
		bar.classList.remove("out");
	}, 2000000000);
}, true);

/*
var cta = document.getElementById("cta");
var bar = document.getElementById("cookie-banner");

cta.addEventListener("click", function() {
    bar.classList.add("out"); // Добавляем класс для анимации скрытия
    setTimeout(function() {
        bar.remove(); // Удаляем элемент из DOM
    }, 500); // Указываем время, совпадающее с длительностью анимации в CSS
}, true);
*/