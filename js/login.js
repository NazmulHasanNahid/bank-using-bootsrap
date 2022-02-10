const loginBtn = document.getElementById('login-btn').addEventListener('click' , function(){
     const emailField = document.getElementById('email-filed');
     const email = emailField.value ; 
     const passwordFiled = document.getElementById('password-field')
     const password = passwordFiled.value
     if(email == "nazmul@gmail.com" && password == "1234"){
        window.location.href = '../bank.html'
        
     }
     else{
         document.getElementById('error').innerText = 'Your Email and Password is incorrect !'
     }
})