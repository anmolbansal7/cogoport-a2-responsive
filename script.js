var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var main = document.getElementById("main");

function showHoverMenu() {
	menu.style.display = "flex";
	main.style.width = "75vw";
	main.style.marginLeft = "25vw";
}

function closeHoverMenu() {
	menu.style.display = "none";
	main.style.width = "94.5vw";
	main.style.marginLeft = "5.5vw";
}

var maxCount = 400;
var charCount = document.getElementById("description");
var displayCount = document.getElementById("count");
var typedChars = charCount.value.length;
displayCount.textContent = maxCount - typedChars + " characters left";

charCount.addEventListener("keydown", (e) => {
	const typedChars = charCount.value.length;
	if (typedChars > maxCount) {
		return false;
	}
	displayCount.textContent = maxCount - typedChars + " characters left";
});
