function showDetails(data) {
	console.log(data)
	modal.querySelector(".modal-name").textContent = data.name;
	modal.querySelector(".modal-description").textContent = data.longdescription;
	//...
	modal.classList.remove("hide");
}

const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
	modal.classList.add("hide");
});
