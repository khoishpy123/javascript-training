function validateform(){
    var firstName = document.querySelector("#myForm").fname.value;
    var lastName = document.querySelector("#myForm").lname.value;
    var email = document.querySelector("#myForm").email.value;
    var age = document.querySelector("#myForm").age.value;


    if(firstName == "" || firstName == null){
        alert("Please enter a First name!");
    }
    else if(firstName != isNaN){
        alert("Name can not be a number!"); 
    }
}
function fun(){
    document.getElementById("myForm").reset();
}
