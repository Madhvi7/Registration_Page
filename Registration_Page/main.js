function validation(){
    if(document.formfill.username.value==""){
        document.getElementById("username").innerHTML="Enter Username*";
    
        return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("username").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.formfill.Email.value==""){
        document.getElementById("email").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.formfill.Contact_Number.value==""){
        document.getElementById("contact").innerHTML="Enter your mobile number*";
        return false;
    }

    else if(document.formfill.Contact_Number.value.length<10){
        document.getElementById("contact").innerHTML="Please Enter a 10 digit Number*";
        return false;
    }
    else if(document.formfill.Password.value==""){
        document.getElementById("password").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.formfill.Password.value !== document.formfill.Confirm_Password.value){
        document.getElementById("password").innerHTML="Wrong Password*";
        return false;
    }
    else if(document.formfill.Confirm_Password.value.length<6){
        document.getElementById("cpassword").innerHTML="passwordmust be 6 digits*";
        return false;
    }
    else if(document.formfill.Password.value == document.formfill.Confirm_Password.value){
        popup.classList.add("open-slide")
        return false;
    }
}

