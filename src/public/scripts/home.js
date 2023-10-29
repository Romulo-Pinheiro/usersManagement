document.querySelectorAll(".btn-delete").forEach((button) => {
	button.addEventListener("click", () => {
		const id = button.value;
		fetch(`http://localhost:8080/users/${id}`, {
			method: "DELETE",
		})
			.then((result) => result.json())
			.then((data) => {
				if (data.success) {
					window.location.href = "/?message=deleted";
				}
			});
	});
});
