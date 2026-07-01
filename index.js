let countEl = document.getElementById("count-el")
let scoreEl = document.getElementById("score-el")
let count = 0
let score = 0

function incrementOnce() {
	count += 1
	countEl.textContent = count
}
function incrementOne() {
	score += 1
	scoreEl.textContent = score
}
function incrementTwice() {
	count += 2
	countEl.textContent = count
}
function incrementTwo() {
	score += 2
	scoreEl.textContent = score
}
function incrementThrice() {
	count += 3
	countEl.textContent = count
}
function incrementThree() {
	score += 3
	scoreEl.textContent = score
}
function reset() {
	if(count > 0 || score > 0) {
	count = 0
    score = 0
	countEl.textContent = count
	scoreEl.textContent = score
	}
}