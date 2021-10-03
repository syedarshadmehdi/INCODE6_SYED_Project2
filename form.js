

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

document.getElementById("btn").style.visibility = 'hidden';

function togglePopup() {
     document.getElementById("popup-1").classList.toggle("active");
     
    // setTimeout(function() {
    //     document.getElementById("popup-1").classList.toggle("active");
    // }, 3000);
}


