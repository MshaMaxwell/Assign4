function test(){
    alert("hi");
}
function valPass() {
    var pass = document.getElementById('Password').value;
    var output;
    var valid = false;
    if(pass == ""){
        empty("Password");
        document.getElementById("output").innerHTML += ("Enter Password");
    }
    if(pass.match(/[0-9a-zA-Z]/g) &&
        pass.length >= 8){
            output = true;
    }else{
            output = false;
    }
    if(output == false){
            document.getElementById("output").innerHTML += ("Enter valid Password" + "<br />");
    }else{
            valid = true;
    }
}
function valUser1() {
    var user = document.getElementById('username').value;
    var output;
    if(user == ""){
        empty("username");
        document.getElementById("output").innerHTML = ("Enter Username");
    }
    if (user.match(/([a-z0-9]){4,12}/)){
            output = true;
    }else{
            output = false;
    }
    if(output == false){
            document.getElementById("output").innerHTML += ("Enter valid Username" + "<br />");
    }else{
            valid = true;
    }
}
function valPNum() {
    var num = document.getElementById('PNumber').value;
    var output;
    var valid = false;
    if(num == ""){
        empty("PNumber");
        document.getElementById("output").innerHTML = ("Enter Phone Number");
    }
    if (num.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g)){
            output = true;
        }else{
            output = false;
        }
    if(output == false){
            document.getElementById("output").innerHTML += ("Enter valid Phone number" + "<br />");
        }else{
            valid = true;
        }
}
function valConfirm() {
    var pass = document.getElementById('password').value;
    var cpass = document.getElementById('CPassword').value;
    var valid;
    if(cpass == ""){
        empty("CPassword");
        document.getElementById("output").innerHTML = ("Please Confirm Password");
    }
    if (cpass.match(pass)){
        valid = true;
    }else{
        alert("Passwords do not match");
    }
}
