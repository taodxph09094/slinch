	//Validtion Code For Inputs
var password = document.forms['form']['password'];
var pass_error = document.getElementById('pass_error');
password.addEventListener('textInput', pass_Verify);
function validated(){

	if (password.value.length < 6 ) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}z
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

