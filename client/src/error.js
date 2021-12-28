const form = document.getElementById("form");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const invalidemail = document.getElementById("invalidemail");
const invalidpass = document.getElementById("invalidpass");
var emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(email);
form.addEventListener('submit', (e) => {
    var message = [];

    if(email.value == null || pass.value == null) {
    
    }
    e.preventDefault();

    if(!email.value.match(emailpattern)) {
        message.getElementById("invalidemail").style.display = "block";
    }

    if(pass == null || pass == " ") {
        message.getElementById("invalidpass").style.display = "block";
    }

    if(message.length > 0) {
        e.preventDefault();
        invalidemail.innerText = message.join(", ");
    }
})

