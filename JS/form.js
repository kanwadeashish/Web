function nameValidation(){
    var username = document.getElementById("name");
    var a = username.Value;
    var button = document.getElementById("button");

    if(a.trim()=="" || a.length <3){
        console.log("invalid data");
        document.getElementById("msg").innerHTML="<span style='color:red'>invalid data...</span>";
        button.disabled = true;
    }else {
        console.log("valid data");
        document.getElementById("msg").innerHTML="";
        button.disabled=false;
    }
}