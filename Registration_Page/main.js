function validation(){
    // e.preventDefault()
    // alert("hello")
    console.log(document.formfill.username.value)
    if(document.formfill.username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
    
        return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.formfill.Contact_Number.value==""){
        document.getElementById("result").innerHTML="Enter your mobile number*";
        return false;
    }

    else if(document.formfill.Contact_Number.value.length<10){
        document.getElementById("result").innerHTML="Please Enter a 10 digit Number*";
        return false;
    }
    else if(document.formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.formfill.Password.value !== document.formfill.Confirm_Password.value){
        document.getElementById("result").innerHTML="Wrong Password*";
        return false;
    }
    else if(document.formfill.Confirm_Password.value.length<6){
        document.getElementById("result").innerHTML="passwordmust be 6 digits*";
        return false;
    }
    else if(document.formfill.Password.value == document.formfill.Confirm_Password.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open slide")
}