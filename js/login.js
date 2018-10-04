function toggle(){
  var hidePassWord = document.getElementById("password")
  if(hidePassWord.type === "password"){
    hidePassWord.type = "text"
  }else{
    hidePassWord.type = "password"
  }
}

function getInfo() {
  var passWord = "1234"
  var userName = "admin"
  var showPassword = "hide"
  var inputed_username = document.getElementById("username").value;
  var iputed_PassWord = document.getElementById("password").value;
  if((userName == inputed_username) && (passWord == iputed_PassWord)){

  result.innerHTML="login successfull"
  }
else{

  result.innerHTML = "username or password incorrect"
}

}
