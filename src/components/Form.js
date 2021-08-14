import { useState, useRef } from "react";
import {
  nameValidation,
  textValidation,
  emailValidation,
  sexValidation,
  confirmValidation,
} from "./validation";
import "./style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [radioMale, setRadioMale] = useState(false);
  const [radioFemale, setRadioFemale] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [isFormSend, setIsFormSend] = useState(false);
  const nameInput = useRef(null);
  const nameMessage = useRef(null);
  const emailInput = useRef(null);
  const emailMessage = useRef(null);
  const textInput = useRef(null);
  const textMessage = useRef(null);
  const radioFemaleInput = useRef(null);
  const radioMaleInput = useRef(null);
  const radioSexMessage = useRef(null);
  const checkboxInput = useRef(null);
  const checkboxMessage = useRef(null);

  const handleFormSubmit = (e) => e.preventDefault();

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (nameMessage.current.textContent) {
      nameInput.current.style.border = "1px solid black";
      nameMessage.current.textContent = "";
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailMessage.current.textContent) {
      emailInput.current.style.border = "1px solid black";
      emailMessage.current.textContent = "";
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (textMessage.current.textContent) {
      textInput.current.style.border = "1px solid black";
      textMessage.current.textContent = "";
    }
  };

  const handleSexRadioChange = (e) => {
    const value = e.target.value;
    if (value === "male") {
      setRadioMale((prev) => !prev);
      setRadioFemale(false);
    }
    if (value === "female") {
      setRadioFemale((prev) => !prev);
      setRadioMale(false);
    }

    if (radioSexMessage.current.textContent) {
      radioFemaleInput.current.style.color = "black";
      radioMaleInput.current.style.color = "black";
      radioSexMessage.current.textContent = "";
    }
  };

  const handleCheckboxChange = () => {
    setConfirmation((prev) => !prev);

    if ((checkboxInput.current.style.color = "red")) {
      checkboxInput.current.style.color = "black";
      checkboxMessage.current.textContent = "";
    }
  };

  const checkInputsValidation = () => {
    nameValidation(nameInput, nameMessage, name);
    emailValidation(emailInput, emailMessage, email);
    textValidation(textInput, textMessage, text);
    sexValidation(
      radioMale,
      radioFemale,
      radioFemaleInput,
      radioMaleInput,
      radioSexMessage
    );
    confirmValidation(confirmation, checkboxInput, checkboxMessage);
  };

  const showSendFormInfo = () => {
    setIsFormSend((prev) => !prev);
  };

  const handleFormButton = () => {
    checkInputsValidation();

    if (
      name &&
      email &&
      text &&
      confirmation &&
      (radioMale || radioFemale) &&
      !nameMessage.current.textContent &&
      !emailMessage.current.textContent &&
      !textMessage.current.textContent
    ) {
      showSendFormInfo();
      setName("");
      setEmail("");
      setText("");
      setConfirmation(false);
      setRadioFemale(false);
      setRadioMale(false);
    }
  };

  return (
    <>
      <div className="formContainer">
        <form className="form" onSubmit={handleFormSubmit}>
          <label htmlFor="">
            name
            <input
              name="name"
              ref={nameInput}
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <div className="message" ref={nameMessage}></div>
          <label htmlFor="">
            mail
            <input
              name="email"
              ref={emailInput}
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <div className="message" ref={emailMessage}></div>
          <label htmlFor="">
            bio
            <textarea
              ref={textInput}
              name="bio"
              value={text}
              onChange={handleTextChange}
            />
          </label>
          <div className="message" ref={textMessage}></div>
          <label className="sex" ref={radioMaleInput} htmlFor="">
            <input
              name="sex"
              type="radio"
              value="male"
              checked={radioMale}
              onChange={handleSexRadioChange}
            />
            male
          </label>
          <label className="sex" ref={radioFemaleInput} htmlFor="">
            <input
              name="sex"
              type="radio"
              value="female"
              checked={radioFemale}
              onChange={handleSexRadioChange}
            />
            female
          </label>
          <div className="message" ref={radioSexMessage}></div>
          <label ref={checkboxInput} htmlFor="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <input
              name="confirm"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={confirmation}
            />
          </label>
          <div className="message" ref={checkboxMessage}></div>
          <button
            className="formButton"
            type="submit"
            onClick={handleFormButton}
          >
            send
          </button>
        </form>
        {isFormSend && (
          <div className="send">
            <span>form is send</span>
            <button onClick={showSendFormInfo} className="formButton">
              back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
