'use strict';
var emailerror=document.getElementById("emailError");
var passworderror=document.getElementById("passwordError");
var submiterror=document.getElementById("submitError");

function validateEmail(){
    var email=document.getElementById("exampleInputEmail1").value;
    if(email.length==0){
        emailerror.innerHTML="Email-id is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) )
    {
        emailerror.innerHTML="Enter valid format";
        return false;
    }
    //emailerror.innerHTML="valid format";
    return true;
    }
      
    function validatePassword(){
        var password=document.getElementById('exampleInputPassword1').value;
        if(password.length==0){
            passworderror.innerHTML="Password is required";
            return false;
        }
        return true;
    }

    function validation()
{
 if(!validateEmail() || !validatePassword()){
    submiterror.style.display='block';
    submiterror.innerHTML="please enter your email-id and password";
    setTimeout(function(){submiterror.style.display='none';},3000);
    return false;
 }
}
