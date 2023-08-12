import React from 'react';
import '../style/contactMe.css';
import emailjs from 'emailjs-com';

const InputForm = (props) => {
    return (
    <>
         <input ref = {props.refer} placeholder={props.placeholder} />
    </>
    )
}

export default InputForm;