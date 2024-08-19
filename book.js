const firstName = document.getElementById('name1');
const lastName = document.getElementById('name2');
const email = document.getElementById('email1');
const purpose = document.getElementById('email2');
const phoneNumber = document.getElementById('number');
const date = document.getElementById('date');
const time = document.getElementById('time');

const errorFirstName = document.getElementById('error-name1');
const errorLastName = document.getElementById('error-name2');
const errorEmail = document.getElementById('error-email1');
const errorPurpose = document.getElementById('error-email2');
const errorPhoneNumber = document.getElementById('error-number');
const errorDate = document.getElementById('error-date')
const errorTime = document.getElementById('error-time')

function validate(event){
    event.preventDefault();

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const purposeValue = purpose.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();

    errorFirstName.innerHTML = '';
    errorLastName.innerHTML = '';
    errorEmail.innerHTML = '';
    errorPurpose.innerHTML = '';
    errorPhoneNumber.innerHTML = '';
    errorDate.innerHTML = '';
    errorTime.innerHTML = '';

    let isValid = true;

    if(firstNameValue === ''){
        errorFirstName.innerHTML = 'First Name is required';
        firstName.style.borderColor = 'red';
        isValid = false;
    } else{
        errorFirstName.innerHTML = ''
        firstName.style.borderColor = 'green';
    }

    if(lastNameValue === ''){
        errorLastName.innerHTML = 'Last Name is required';
        lastName.style.borderColor = 'red';
        isValid = false;

    } else{
        errorLastName.innerHTML = '';
        lastName.style.borderColor = 'green';
    }

    if(emailValue === '' || !emailValue.includes('@')){
        errorEmail.innerHTML = 'A valid email is required';
        email.style.borderColor = 'red';
        isValid = false;

    } else{
        errorEmail.innerHTML = '';
        email.style.borderColor = 'green';
    }

    const domain = 'lotusbank.com';
    if(purposeValue === '' || !purposeValue.endsWith(`@${domain}`)){
        errorPurpose.innerHTML = 'Email must end with @lotusbank.com';
        purpose.style.borderColor = 'red';
        isValid = false;

    } else{
        errorPurpose.innerHTML = '';
        purpose.style.borderColor = 'green';
    }

    if(phoneNumberValue === '' || phoneNumberValue.length !== 11){
        errorPhoneNumber.innerHTML = 'Enter a valid Phone number';
        phoneNumber.style.borderColor = 'red';
        isValid = false;

    } else{
        errorPhoneNumber.innerHTML = '';
        phoneNumber.style.borderColor = 'green';
    }

    if(dateValue === ''){
        errorDate.innerHTML = 'Pick a date';
        date.style.borderColor = 'red';
        isValid = false;

    } else {
        errorDate.innerHTML = '';
        date.style.borderColor = 'green';
    }

    if(timeValue === ''){
        errorTime.innerHTML = 'Pick a time';
        time.style.borderColor = 'red';
        isValid = false;

    } else{
        errorTime.innerHTML = '';
        time.style.borderColor = 'green';
    }

    if(isValid){
        document.getElementById('overlay').classList.remove('no-click');
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('success-message').style.display = 'flex';
        document.getElementById('form').reset();

        document.body.classList.add('no-scroll');


        document.getElementById('overlay').addEventListener('click', function(){
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('success-message').style.display = 'none';

            document.body.classList.remove('no-scroll');


            firstName.style.borderColor = '';
            lastName.style.borderColor = '';
            email.style.borderColor = '';
            purpose.style.borderColor = '';
            phoneNumber.style.borderColor = '';
            date.style.borderColor = '';
            time.style.borderColor = '';
        })
    }
} 