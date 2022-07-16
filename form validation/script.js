function Validate()
{
    var username=document.getElementById("username").value
    var email=document.getElementById("email").value
    var password=document.getElementById("pwd").value
    var cpassword=document.getElementById("cpwd").value
   
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordsmatch(password ,cpassword)
}
 function checkusername(username){
    if(username.length > 7){
       document.getElementById('username').classList.add('success')
     document.getElementById('username').classList.replace('error','success')
     document.getElementById('text_error').innerHTML=" "
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('text_error').innerText="username must be 8 letters long"
    }
 }
 function checkemail(email){
    if(email.length > 7 && email.includes("@gmail")){
        document.getElementById('email').classList.add('success')
      document.getElementById('email').classList.replace('error','success')
      document.getElementById('email_error').innerHTML=" "
     }
     else{
         document.getElementById('email').classList.add('error')
         document.getElementById('email_error').innerText="enter valid email id"
     }
 }
 function checkpassword(password){
    if(password.length > 7 && password.includes('@')){
        document.getElementById('pwd').classList.add('success')
      document.getElementById('pwd').classList.replace('error','success')
      document.getElementById('password_error').innerHTML=" "
     }
     else{
         document.getElementById('pwd').classList.add('error')
         document.getElementById('password_error').innerText="password must be 8 letters long and  contains @ ,1,2"
     }
 }
 function checkpasswordsmatch(password ,cpassword){
    if(password==cpassword && password!==''){
        document.getElementById('cpwd').classList.add('success')
      document.getElementById('cpwd').classList.replace('error','success')
      document.getElementById('cpassword_error').innerHTML=" "
    }
    else{
        document.getElementById('cpwd').classList.add('error')
        document.getElementById('cpassword_error').innerText="password do not match"
    }
 }