const emailpattern =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passPattern =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/g;
const namePattern =
	/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
let form = document.querySelector("#register-form");

let name = form.querySelector("#username");
let email = form.querySelector("#email");
let pass = form.querySelector("#pass");
let rePass = form.querySelector("#repass");
let submitBtn = form.querySelector("[type='submit']");

const yOffset = -170;
const posForm = name.getBoundingClientRect().top + window.pageYOffset + yOffset;

form.addEventListener("submit", e => {
	e.preventDefault();
	// if (name.value.length < 3 || !name.value.match(namePattern)) {
	// 	window.scrollTo({ top: posForm, behavior: "smooth" });
	// 	name.classList.remove("input-field");
	// 	name.classList.add("input-field-warning");
	// 	name.focus();
	// 	name.select();
	// }

	// if (
	// 	fName.value.length < 3 ||
	// 	lName.value.length < 3 ||
	// 	!email.value.match(emailpattern)
	// )
	// 	return;
	// if (
	// 	pass.value.length === 0 ||
	// 	!pass.value.match(passPattern) ||
	// 	pass.value === rePass.value
	// )
	// 	return;
	return false;
});
