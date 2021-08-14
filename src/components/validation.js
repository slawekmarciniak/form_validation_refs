const nameValidation = (nameInput, nameMessage, name) => {
  if (!name) {
    nameInput.current.style.border = "2px solid red";
    nameMessage.current.textContent = "field name is required";
  } else if (name.length < 3) {
    nameInput.current.style.border = "2px solid red";
    nameMessage.current.textContent = "name should have minium 3 digits";
    alert("name is to short");
  }
};
const emailValidation = (emailInput, emailMessage, email) => {
  if (!email) {
    emailInput.current.style.border = "2px solid red";
    emailMessage.current.textContent = "field email is required";
  } else if (email.length < 4) {
    emailInput.current.style.border = "2px solid red";
    emailMessage.current.textContent = "email is to short";
  } else if (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
  ) {
    emailInput.current.style.border = "2px solid red";
    emailMessage.current.textContent = "email address is invalid";
  }
};
const textValidation = (textInput, textMessage, text) => {
  if (!text) {
    textInput.current.style.border = "2px solid red";
    textMessage.current.textContent = "field text is required";
  } else if (text.length < 10) {
    textInput.current.style.border = "2px solid red";
    textMessage.current.textContent = "bio should have minimum 10 letters ";
  }
};

const sexValidation = (
  radioMale,
  radioFemale,
  radioFemaleInput,
  radioMaleInput,
  radioSexMessage
) => {
  if (!radioMale && !radioFemale) {
    radioFemaleInput.current.style.color = "red";
    radioMaleInput.current.style.color = "red";
    radioSexMessage.current.textContent = "field sex is required";
  }
};

const confirmValidation = (confirmation, checkboxInput, checkboxMessage) => {
  if (!confirmation) {
    checkboxInput.current.style.color = "red";
    checkboxMessage.current.textContent = "please confirm conditions";
  }
};

export {
  nameValidation,
  emailValidation,
  textValidation,
  sexValidation,
  confirmValidation,
};
