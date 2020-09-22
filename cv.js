const form = document.getElementById('form');
const form = document.getElementById('name');
const form = document.getElementById('middle');
const form = document.getElementById('last');
const form = document.getElementById('gender');
const form = document.getElementById('number');
const form = document.getElementById('email');
const form = document.getElementById('address');

form.addEventListener('submit',(e)=> {
      e.preventDefault();

      checkInputs();

});

function checkInputs() {
//get the values from the inputs
const nameValue = name.value.trim();
const middleValue = middle.value.trim();
const lastValue = last.value.trim();
const genderValue = gender.value.trim();
const numberValue = number.value.trim();
const emailValue = email.value.trim();
const addressValue = address.value.trim();

if(nameValue =='') {
//show error
//add error class
setErrorFor(name, 'Name cannot be blank');

}else {
    //add sucess class
    setSuccessFor(name);
}
if(middleValue =='') {
    //show error
    setErrorFor(name, 'Middle name cannot be blank');
    //add error class
    
    }else {
        //add sucess class
        setSuccessFor(name);

        if(lastValue =='') {
            //show error
            setErrorFor(last, 'Last name cannot be blank');
            //add error class
            
            }else {
                //add sucess class
                setSuccessFor(last);
               
                        if(numberValue =='') {
                            //show error
                            setErrorFor(number, 'Phone number cannot be blank');
                            //add error class
                            
                            }else {
                                //add sucess class
                                setSuccessFor(number);

                                if(emailValue =='') {
                                    //show error
                                    setErrorFor(email, 'Email cannot be blank');
                                    //add error class
                                    
                                    }else {
                                        //add sucess class
                                        setSuccessFor(email);

                                        if(addressValue =='') {
                                            //show error
                                            setErrorFor(address, 'address cannot be blank');
                                            //add error class
                                            
                                            }else {
                                                //add sucess class
                                                setSuccessFor(address);



}













