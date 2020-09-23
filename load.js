 

const firstname = localStorage.getItem('name');
const middlename = localStorage.getItem('middle');
const lastname = localStorage.getItem('last');
const gender =localStorage.getItem('gender');
const phonenumber =localStorage.getItem('number');
const email =localStorage.getItem('email');
const address =localStorage.getItem('address');


document.getElementById('name').innerHTML = firstname+" "+middlename+" "+lastname;
document.getElementById('address').innerHTML = address;
document.getElementById('phonenumber').innerHTML = phonenumber;
document.getElementById('email').innerHTML = email;