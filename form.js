const formId = document.querySelector("#formId")
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")
const message = document.querySelector("#message")


//MODALS
const modal = document.querySelector(".modal")
const body = document.querySelector("body")
const modalOverlay = document.querySelector(".modal-overlay")
const closeModalButton = document.querySelector("#close-modal");

//SUBMIT
formId.addEventListener("submit", validation)
formId.setAttribute("novalidate", true)
closeModalButton.addEventListener("click", closeModal)

//REGEX
const fnameReg = /^[a-z ,.'-]+$/i
const lnameReg = /[a-zA-Z]{3,30}/
const phoneReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
const emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const messageReg = /^[^<>]+$/


//VALIDATION
function validation(e) {
  e.preventDefault();
  if(isValid(fname, fnameReg) && isValid(lname, lnameReg) && isValid(phone, phoneReg) && isValid(email, emailReg) && isValid(message, messageReg)) {
    console.log(" Name : " + fname.value + "\n LastName : " + lname.value + "\n Phone Number : " + phone.value + "\n Email : " + email.value + "\n Message : " + message.value + " \n " + " \n Form Submitted Successfully.....")
    openModal();
    formId.reset();

  } else if(isValid(fname, fnameReg) == false || fname.value == "") {
    alert("Please enter your First Name")
    fname.value=""
    fname.focus()
  }  else if(isValid(lname, lnameReg) == false || lname.value == "") {
    alert("Please enter your Last Name")
    lname.value=""
    lname.focus()
  }  else if(isValid(phone, phoneReg) == false || phone.value == "") {
    alert("Please enter your Phone Number")
    phone.value=""
    phone.focus()
  }  else if(isValid(email, emailReg) == false || email.value == "") {
    alert("Please enter your Email Id")
    email.value=""
    email.focus()
  }  else if(isValid(message, messageReg) == false || message.value == "") {
    alert("Please enter your Message")
    message.value=""
    message.focus()
  }
  

}
function isValid(element, regex) {
 return regex.test(element.value);
}


function openModal(){
  modal.classList.add("active")
  body.classList.add("modal-open")
  modalOverlay.classList.add("active")
}

function closeModal(){
  modal.classList.remove("active")
  body.classList.remove("modal-open")
  modalOverlay.classList.remove("active")
}

