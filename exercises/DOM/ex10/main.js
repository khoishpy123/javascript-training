function validateform(){
    // var name=document.myform.name.value;  
    // var password=document.myform.password.value;
    var name = document.getElementById(myform.name.value);
    var password = document.getElementById(myform.password.value);
    console.log(name);
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}