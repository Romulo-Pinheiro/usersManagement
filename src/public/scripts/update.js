const form = document.getElementById("form-update");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const button = form.querySelector("button");
	const id = button.value;

	const firstName = form.querySelector("#inputFirstName").value;
	const lastName = form.querySelector("#inputLastName").value;
	const email = form.querySelector("#inputEmail").value;
	const password = form.querySelector("#inputPassword").value;
	const active = form.querySelector("#selectStatus").value;

	const requestBody = {
		firstName,
		lastName,
		email,
		password,
		active,
	};

	fetch(`http://localhost:8080/users/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(requestBody),
	})
		.then((result) => result.json())
		.then((data) => {
			if (data.success) {
				window.location.href = "/?message=updated";
			}
		});
});
