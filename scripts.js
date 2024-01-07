let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');

password.addEventListener("input", (event) => {
    checkPasswords();
});

confirmPassword.addEventListener("input", (event) => {
    checkPasswords();
});

function checkPasswords() {
    if (password.value != confirmPassword.value) {
        confirmPassword.classList.add("error");
    }
    if (password.value == confirmPassword.value) {
        confirmPassword.classList.remove("error");
    }
}