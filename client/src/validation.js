const emailpattern =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passPattern =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;
const namePattern =
	/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
let form = document.querySelector("#register-form");

let name = form.querySelector("#username");
let email = form.querySelector("#email");
let pass = form.querySelector("#password");
let rePass = form.querySelector("#repassword");
let submitBtn = form.querySelector("[type='submit']");

const yOffset = -170;
const posForm = name.getBoundingClientRect().top + window.pageYOffset + yOffset;

form.addEventListener("submit", e => {
	e.preventDefault();

	console.log(pass.innerHTML);
	if (
		name.value.length < 3 ||
		!name.value.match(namePattern) ||
		!email.value.match(emailpattern) ||
		// !pass.value.match(passPattern) ||
		!passPattern.test(pass.value) ||
		pass.value != rePass.value
	) {
		window.scrollTo({ top: posForm, behavior: "smooth" });
		name.focus();
		name.select();
	} else {
		form.submit();
	}
});
