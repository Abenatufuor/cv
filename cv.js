const form = document.getElementById('form');
const select = document.querySelector('#myList');
const name = document.getElementById('name');
const middle = document.getElementById('middle');
const last = document.getElementById('last');
const gender = select.options[select.selectedIndex];
const number = document.getElementById('number');
const email = document.getElementById('email');
const address = document.getElementById('address');

let regName = /^[a-zA-Z].*[\s\.]*$/;
let regNumber = /1?-?\.?\(?\d{3}[\-\)\.\s]?\d{3}[\-\.\s]?\d{4}/;
let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validate(e){
    e.preventDefault();

    localStorage.setItem('name', name.value);
    localStorage.setItem('middle', middle.value);
    localStorage.setItem('last', last.value);
    localStorage.setItem('gender', gender.value);
    localStorage.setItem('number', number.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('address', address.value);

    if(!regName.test(name.value)){
        alert("Enter first name");
        return false;
    }

    if(!regName.test(last.value)){
        alert("Enter Last name");
        return false;
    }

    if(!regNumber.test(number.value)){
        alert("Invalid phone number");
        return false;
    }

    if(!regEmail.test(email.value)){
        alert("Invalid email");
        return false;
    }

    else{
        location.href="cv.html";
    }
    
}

form.addEventListener('submit', validate)


