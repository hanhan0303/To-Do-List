const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
	if (inputBox.value.trim() === "") {
		alert("You must write something!");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value.trim();
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}
listContainer.addEventListener("click", (e) => {
	if (e.target.nodeName === "LI") {
		e.target.classList.toggle("checked");
		saveData();
	} else if (e.target.nodeName === "SPAN") {
		e.target.parentElement.remove();
		saveData();
	}
 },false);
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
