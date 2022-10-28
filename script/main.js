const main = document.querySelector("main");
const cantonese = document.getElementById("cantonese");
const translation = document.getElementById("translated-text");
const convert = document.getElementById("convert");

let loadingFrame = 0;
let delayTimer;

cantonese.addEventListener("input", textInput);
convert.addEventListener("click", translate);

function textInput() {
	const delayMs = 275;

	translation.innerText = loading();
	loadingFrame += 1;

	clearTimeout(delayTimer);
	delayTimer = setTimeout(translate, delayMs);
}

function translate() {
	text = cantonese.value;
	if (text === "") {
	} else {
		translation.innerText = text;
	}
}

function loading() {
	const loadingSpeedMs = 100;
	const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

	if (typeof spinner === "string") {
		spinner = spinner.split("");
	}

	if (loadingFrame >= spinner.length) {
		loadingFrame = 0;
	}

	return String(spinner[loadingFrame]);
}
