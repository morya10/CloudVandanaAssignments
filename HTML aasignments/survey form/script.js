function submitForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = [];
    var checkboxes = document.getElementsByName('gender');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            gender.push(checkbox.value);
        }
    });
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobile-number').value;

    document.getElementById('result-first-name').textContent = firstName;
    document.getElementById('result-last-name').textContent = lastName;
    document.getElementById('result-dob').textContent = dob;
    document.getElementById('result-country').textContent = country;
    document.getElementById('result-gender').textContent = gender.join(", ");
    document.getElementById('result-profession').textContent = profession;
    document.getElementById('result-email').textContent = email;
    document.getElementById('result-mobile-number').textContent = mobileNumber;

    document.getElementById('result-popup').style.display = 'block';

    resetForm();

    return false;
}

function resetForm() {
    document.getElementById('survey-form').reset();
}

function closePopup() {
    document.getElementById('result-popup').style.display = 'none';
}