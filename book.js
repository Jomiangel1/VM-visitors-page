document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const firstName = document.getElementById('name1');
    const lastName = document.getElementById('name2');
    const email = document.getElementById('email1');
    const purpose = document.getElementById('email2');
    const phoneNumber = document.getElementById('number');
    const date = document.getElementById('date')
    const time = document.getElementById('time')
    const confirmationMessage = document.getElementById('confirmation-message')

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
        form.reset();

        confirmationMessage.innerText ='Booking successful! Check your mail.'
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const validateInputs = () => {
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();
        const purposeValue = purpose.value.trim();
        const phoneNumberValue = phoneNumber.value.trim();
        const dateValue = date.value.trim()
        const timeValue = time.value.trim()

        if (firstNameValue === '') {
            setError(firstName, 'First Name is required');
        } else {
            setSuccess(firstName);
        }

        if (lastNameValue === '') {
            setError(lastName, 'Last Name is required');
        } else {
            setSuccess(lastName);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (emailValue.indexOf('@') === -1) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }

        const domain = 'lotusbank.com';
        if (purposeValue === '') {
            setError(purpose, 'Bank email is required');
        } else if (!purposeValue.endsWith(`@${domain}`)) {
            setError(purpose, `Provide a valid ${domain} email`);
        } else {
            setSuccess(purpose);
        }

        if (phoneNumberValue === '' || phoneNumberValue.length !== 11) {
            setError(phoneNumber, 'Please enter a valid 11-digit phone number.');
        } else {
            setSuccess(phoneNumber);
        }

        if (dateValue === '') {
            setError(date, 'Pick a date');
        } else {
            setSuccess(date);
        }

        if (timeValue === '') {
            setError(time, 'Pick a time');
        } else {
            setSuccess(time);
        }
    };
});
