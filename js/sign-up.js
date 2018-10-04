
//Business logic
var signUp = function(userName, emailAddress, password, confirmPassword) {
  return userName + emailAddress + password + confirmPassword


}//End of Business logic

//User Interface
$(document).ready(function(event){
  $("form#invite").submit(function(event){

  event.preventDefault();
  var userName = "admin";
  var emailAddress = "winniemagoma@gmail.com"
  var password = "1234";
  var confirmPassword = "1234";
  var inputed_userName = document.getElementById('user-name').value;
  var inputed_emailAddress = document.getElementById('email-address').value;
  var inputed_password= document.getElementById('your-password').value;
  var inputed_confirmPassword = document.getElementById('mine-password').value;

  if((userName==inputed_userName) && (emailAddress==inputed_emailAddress) && (password==inputed_password) &&(confirmPassword==inputed_confirmPassword)) {
    alert('registration successiful');
  } else if (emailAddress!=inputed_emailAddress) {
    alert('please check your email-address')
 } else if (confirmPassword!=inputed_confirmPassword)
  alert('password confirmation incorrect')
  else{
    alert('unsuccessiful registration')
  }
  /*var invitedGroup = signUp(userName, emailAddress, password, confirmPassword)
  $(".registeredUsers").hide();
  alert('registered');*/
  //$("#outputs").text(invitedGroup)
});
});

  function toggle() {
    var hidePassword = document.getElementById("your-password");
    if(hidePassword.type === "password") {
        hidePassword.type = "text"
    }else{
      hidePassword.type = "password";
    }
  }
  function untoggle() {
    var hidePassword2 = document.getElementById("mine-password");
    if(hidePassword2.type === "password") {
        hidePassword2.type = "text"
    }else{
      hidePassword2.type = "password";
    }
  }

  /*function validateFunction(){
    var correctEmail = document.forms["myForm"]["email-address"].value;
    if (correctEmail==""){
      alert("email address  valid")
    }
  }*/
