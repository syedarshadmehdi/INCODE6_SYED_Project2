
function validation() {
    const formId = document.getElementById("formId");
    const emailReg = document.getElementById("emailReg");
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (fname === '' && lname === '' && phone === '' && email === '' && message === '') {
        alert("Please fill all fields........!!!!");
        return false;
    } else if (email.match(pattern)) {
        formId.classList.add("valid");
        formId.classList.remove("invalid");
        emailReg.innerHTML = "Your Email Address is Valid.";
        emailReg.style.color = "#008000";
    } else {
        formId.classList.remove("valid");
        formId.classList.add("invalid");
        emailReg.innerHTML = "Please Enter Valid Email ID";
        emailReg.style.color = "#ff0000";
    } if (email == "") {
        formId.classList.remove("valid");
        formId.classList.remove("invalid");
        emailReg.innerHTML = "";
        emailReg.style.color = "#008000";
    } else {
        return true;
    }

}

formId.addEventListener('click', function (e) {
    e.preventDefault();
});
function onSubmit() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (validation()) {
        document.getElementById("formId").submit;
        console.log(" Name : " + fname + "\n LastName : " + lname + "\n Phone Number : " + phone + "\n Email : " + email + "\n Message : " + message + " \n " + " \n Form Submitted Successfully.....");
        
    } 

}

//formId.addEventListener('click', togglePopup)
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}
document.getElementById('btn').style.visibility = "hidden";



