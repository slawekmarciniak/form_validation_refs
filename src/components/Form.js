import { useState, useRef } from "react";
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
    if (nameInput.current.style.border === "2px solid red") {
      nameInput.current.style.border = "1px solid black";
      nameMessage.current.textContent = "";
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailInput.current.style.border === "2px solid red") {
      emailInput.current.style.border = "1px solid black";
      emailMessage.current.textContent = "";
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (textInput.current.style.border === "2px solid red") {
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

    if ((radioFemaleInput.current.style.color = "red")) {
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

  const addMessageIfInputIsEmpty = () => {
    if (!name) {
      nameInput.current.style.border = "2px solid red";
      nameMessage.current.textContent = "field name is required";
    }
    if (!email) {
      emailInput.current.style.border = "2px solid red";
      emailMessage.current.textContent = "field email is required";
    }
    if (!text) {
      textInput.current.style.border = "2px solid red";
      textMessage.current.textContent = "field text is required";
    }
    if (!radioMale && !radioFemale) {
      radioFemaleInput.current.style.color = "red";
      radioMaleInput.current.style.color = "red";
      radioSexMessage.current.textContent = "field sex is required";
    }
    if (!confirmation) {
      checkboxInput.current.style.color = "red";
      checkboxMessage.current.textContent = "please confirm conditions";
    }
  };

  const showSendFormInfo = () => {
    setIsFormSend((prev) => !prev);
  };

  const handleFormButton = () => {
    addMessageIfInputIsEmpty();

    if (name && email && text && confirmation && (radioMale || radioFemale)) {
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
              type="email"
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
          <div className="message send">
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
