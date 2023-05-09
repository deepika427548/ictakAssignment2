'use strict';
var nameerror=document.getElementById("nameError");
var emailerror=document.getElementById("emailError");
var phoneerror=document.getElementById("phoneError");
var passworderror=document.getElementById("passwordError");
var submiterror=document.getElementById("submitError");

function validateName()
{
    var name=document.getElementById("exampleInputUsername").value;

    if(name.length==0){
        nameerror.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+$/)){
        nameerror.innerHTML="invalid Format";
        return false;
    }
    nameerror.innerHTML='valid format';
    return true;
}
function validatePhone(){
var phone=document.getElementById("exampleInputphone1").value;
if(phone.length==0){
    phoneerror.innerHTML="phone number is required";
    return false;
}
if(!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) 
{
    phoneerror.innerHTML="invalid Format";
    return false;
}
phoneerror.innerHTML="valid format";
return true;
}
function validateEmail(){
    var email=document.getElementById("exampleInputEmail1").value;
    if(email.length==0){
        emailerror.innerHTML="Email-id is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) )
    {
        emailerror.innerHTML="invalid Format";
        return false;
    }
    emailerror.innerHTML="valid format";
    return true;
    }
function validatePassword(){
    var password=document.getElementById('exampleInputPassword1').value;
    if(password.length==0){
        passworderror.innerHTML="Password is required";
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
    {
        passworderror.innerHTML="Minimum 8 characters,at least one uppercase and one lowercase,must contain atleast one number";
        passworderror.style.color="red";
        return false;
    }
if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
{
    if(password.length<=9)
    {
        passworderror.innerHTML="weak password";
        passworderror.style.color="red";
        return true;
    }
    else if(password.length>9 && password.length<=12)
    {
        passworderror.innerHTML="medium password";
        passworderror.style.color="orange";
        return true;
    }
    else if(password.length>13 && password.length<=16){
        passworderror.innerHTML="strong password";
        passworderror.style.color="green";
        return true;
    }
    return true;
}
//   passworderror.innerHTML="valid format";
//   passworderror.style.color="green"
//   return true;
}
function validation()
{
 if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword()){
    submiterror.style.display='block';
    submiterror.innerHTML="please fix the error to submit the form";
    setTimeout(function(){submiterror.style.display='none';},3000);
    return false;
 }
}
