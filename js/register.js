
// validasi form jika di submit apakah akan pindah halaman
const form = document.getElementById('formid').value;

document.getElementById('formid').addEventListener('submit', function(event) {
  

  const UsernameValid = validate_username();  
  const EmailValid = validate_email();
  const PasswordValid = validate_password();
  const AgeValid = validate_age();
  const GenderValid = validate_gender();

  if (!(UsernameValid && EmailValid && PasswordValid && AgeValid && GenderValid)) {

    event.preventDefault();  
  }

});

// validasi username
function validate_username(){

    const username = document.getElementById('name').value;

    if (username.trim() === "") {
        document.getElementById('error-username').innerHTML = "Username required"
        document.getElementById('name').style.border = "1px solid red";
        return false
    }else if (username.length < 4 ) {
        document.getElementById('error-username').innerHTML = "Username length must more than 4"
        document.getElementById('name').style.border = "1px solid red";
        return false
    }else{
        document.getElementById('error-username').innerHTML = ""
        document.getElementById('name').style.border = "";
        return true
    }

}

// validasi email
function validate_email(){
    
    const email = document.getElementById('email').value;

    if(email.trim() === ""){
        document.getElementById('error-email').innerHTML = "Email required"
        document.getElementById('email').style.border = "1px solid red";
        return false
    }else if(!email.endsWith('@gmail.com')){
        document.getElementById('error-email').innerHTML = "Email must ends with '@gmail.com'"
        document.getElementById('email').style.border = "1px solid red";
        return false
    }
    else{
        document.getElementById('error-email').innerHTML = ""
        document.getElementById('email').style.border = "";
        return true
    }

}

// validasi password
function validate_password() {
    const password = document.getElementById('password').value;

    if(password.trim() === ""){
        document.getElementById('error-pass').innerHTML = "Password required"
        document.getElementById('password').style.border = "1px solid red";
        return false
    }else if(password.length < 8 ){
        document.getElementById('error-pass').innerHTML = "Password must 8 characters"
        document.getElementById('password').style.border = "1px solid red";
        return false
    }
    else{
        document.getElementById('error-pass').innerHTML = ""
        document.getElementById('password').style.border = "";
        return true
    }
    
}

// validasi umur
function validate_age() {
    const age = document.getElementById('umur').value;
    

    if(age.trim() === ""){
        document.getElementById('error-age').innerHTML = "Umur required"
        document.getElementById('umur').style.border = "1px solid red";
        return false
    }else if(age <= 10 ){
        document.getElementById('error-age').innerHTML = "Umur must be above 10"
        document.getElementById('umur').style.border = "1px solid red";
        return false
    }
    else{
        document.getElementById('error-age').innerHTML = ""
        document.getElementById('umur').style.border = "";
        return true
    }

}

// validasi gender
function validate_gender() {
    const gender = document.getElementsByName('gender');
    let selected = false;

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    document.getElementById('error-gender').innerHTML = "Gender is required"
    return false
  } else {
    document.getElementById('error-gender').innerHTML = ""
    return true
  }

  return selected;
}