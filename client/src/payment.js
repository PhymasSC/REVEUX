const button = document.querySelector("#pay");
const request = {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		items: [
			{ id: 1, quantity: 3 },
			{ id: 2, quantity: 1 }
		]
	})
};

console.log(request.body.items);
button.addEventListener("click", () => {
	fetch("http://localhost:5000/checkout", request)
		.then(res => {
			if (res.ok) return res.json();
			return res.json().then(json => Promise.reject(json));
		})
		.then(({ url }) => {
			window.location = url;
		})
		.catch(e => {
			console.error(e.error);
		});
});
