let Name;
let Email;
let Phone;
let Password;
let Confirm_password;

let handleSubmit = () =>
{
    Name = document.getElementById('full_name').value;
    Email = document.getElementById('email').value;
    Phone = document.getElementById('phone').value;
    Password = document.getElementById('password').value;
    Confirm_password = document.getElementById('confirm_password').value;
    if(Password != Confirm_password)
    {
        alert("password mismatch");
    }
    if(Name == "" || Email == "" || Phone == "" || Password=="")
    {
        alert("all fields should be entered");
    }
    if (!Email.includes('@')) {
        alert("enter a valid email");
        
      } 
    console.log(Name);
    
}
