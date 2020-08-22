var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');
eye.addEventListener('click',togglepass);



function togglepass(){

    eye.classList.toggle('active');
    
    (pwd.type=='password') ? pwd.text ='text' : pwd.text='password';

}
