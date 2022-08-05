function validateform(){
    var name=document.myform.name.value;  
    var password=document.myform.password.value;
    var rePassword=document.myform.reenter.value;
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }

  if (rePassword==null || rePassword==""){
    alert("RePassword can't be blank");
    return false; 
  }else if(rePassword == password){
    return true; 
  }else{
    alert("rePassword must be same as password!");
    return false;
  }
}

function resetdata(){
  document.myform.reset();
}