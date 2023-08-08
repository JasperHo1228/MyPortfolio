import React, { useRef,useEffect } from 'react';
import '../style/contactMe.css';
import emailjs from 'emailjs-com';

function ContactMe() { 
  
  function skillAnimation(addClassName, selectclassName, threshold){

    const createObserverOptions = (threshold) => ({
      root: null,
      rootMargin: '0px',
      threshold });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          target.classList.add(addClassName);
        } 
      });
    }, createObserverOptions(threshold));
  
    const elements = document.querySelectorAll(selectclassName);
    elements.forEach((element) => observer.observe(element));
  
    return observer;
  }
  useEffect(()=>{
    const contact_animation = skillAnimation('contact-appear-animation','.contact-animation',0.6);
    return()=>{ 
      contact_animation.disconnect();
    }
  })

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tl93m5j', 'template_ac1fy8z', form.current, 'Hg1PER7alrGpDygyB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  
  


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

  const isValidName = fullName => {
    const re = /^[a-zA-Z\s]+$/;
      return re.test(String(fullName).toLowerCase());

  function checkFirstName(inputFirstName){
    if(fullName.value === ''){
           setError(fullName,'Require First Name');
    
           }
     else if(!isValidName(fullName.value)){
             setError(fullName,'Alphabet only');
    
             }
     else{
           setSuccess(fullName);
          }
   }
        const isValidEmail = email => {
          const emailRegex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(String(email).toLowerCase());
      }
    
}
  return (
    <div className="contactMe-container" id="ContactMe">
      <h1>
        <div className="green-title">
          Contact Me
        </div>
      </h1>
      <div className="contactMe-content contact-animation">
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe; 
