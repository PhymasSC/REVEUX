const emailpattern =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passPattern =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/g;
let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let rePass = document.querySelector("#repassword");
let submitBtn = document.querySelector("[type='submit']");

submitBtn.addEventListener("click", () => {
    e.preventDefault();
	if (
		fName.value.length < 3 ||
		lName.value.length < 3 ||
		!email.value.match(emailpattern)
	)
		return;
	if (
		pass.value.length === 0 ||
		!pass.value.match(passPattern) ||
		pass.value === rePass.value
	)
		return;
	console.log("PASSED");
});
