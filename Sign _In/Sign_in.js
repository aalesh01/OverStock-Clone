document.getElementById("creat_acc").addEventListener("click", stored);


function stored(){ 
   
   
    var name = document.getElementById('cus_mail');
    var pw = document.getElementById('cus_pas1');
    var pw2 = document.getElementById('cus_pas2');


    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value !== pw2.value){
        alert("The passwords you have entered do not match. Please try again ");

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('pw2', pw2.value);
        
        alert('Your account has been created');
    }
}
function login(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('s_email');
    var userPw = document.getElementById('s_psa');
    

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}