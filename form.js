

function onSubmit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log(" Name : " + fname + "\n LastName : " + lname + "\n Phone Number : " + phone + "\n Email : " + email + "\n Message : " + message);
}

formSubmit.addEventListener('click', function (e) {
    e.preventDefault();
});

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}











    // const wrapper = document.querySelector('.wrapper'),
    // myForm = wrapper.querySelectorAll('.myForm'),
    // submitInput = myForm[0].querySelector('input[type="submit"]');

    // function getDataForm(e) {
    //     e.preventdefault();
    //     var formData = new FormData(myForm[0]);
    //     console.log(formData.get('fname') + ' - ' + formData.get('lname') + ' - ' + formData.get('phone') + ' - ' + formData.get('email') + ' - ' + formData.get('message'));
    // }
    // document.addEventListener('DOMContentLoader',function() {
    //     submitInput.addEventListener('click', getDataForm, false);
    // }, false);


