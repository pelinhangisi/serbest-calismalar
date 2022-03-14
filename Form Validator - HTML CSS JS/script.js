
// DOM
const form =document.querySelector('#form');
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const password2 =document.querySelector('#password2');

// input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small= formControl.querySelector('small');
    small.innerText=message;
}

// input success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}

// Check email is valid
function checkEmail(input){
    const re = /\S+@\S+\.\S+/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, "Email is not valid")
    }
}

// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input,min,max){
    if(input.value.length <min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// check password match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}


// Event Listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkLength(username, 2, 15);
    checkLength(password, 6,10);
    checkEmail(email);
    checkPasswordMatch(password,password2);
})



