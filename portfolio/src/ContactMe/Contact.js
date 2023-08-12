import React, { useRef,useEffect} from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/contactMe.css';

function ContactMe() { 
  
  function skillAnimation(addClassName, selectclassName, threshold){
  
    //scrolling effect
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
    return() => { 
      contact_animation.disconnect();
    }
  })


    const form = useRef();
    const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 2000));
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_tl93m5j', 'template_ac1fy8z', form.current, 'Hg1PER7alrGpDygyB')
        .then(() => {
          toast.promise(
            functionThatReturnPromise,
            {
              pending: 'Sending email...',
              success: 'Form submitted successfully',
            }
          );
        }, () => {
          toast.promise(
            functionThatReturnPromise,
            {
              pending: 'Sending email...',
              error: 'Failed to send email!',
            }
          );
        });
        if (form.current) {
          form.current.reset();
        }
    };

   //check name format
   const isValidName = name => {
      const nameRegex = /^[A-Za-z\s]+$/;
      return nameRegex.test(name);
   }

   // check email format
   const isValidEmail = email => {
     const emailRegex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return emailRegex.test(String(email).toLowerCase());
   }

    const validateInputs = (e) => {
      e.preventDefault();
      
      const fields = [
        { id: 'name', validation: isValidName, message: 'Name is required', message_1: 'Name can only be included alphabets' },
        { id: 'email', validation: isValidEmail, message: 'Email is required', message_1: 'Wrong email format' },
        { id: 'yourMessage', message: 'Your Message is required' }
      ];

      //check field function 
      const validateField = (field) => {
        const input = document.getElementById(field.id);
        const value = input.value.trim();
    
        if (value === '') {
          toast.error(field.message);
          return false;
        } else if (!field.validation(value)) {
          toast.error(field.message_1);
          return false;
        }
        return true;
      };
    
      //run the field map by each element
      let isValid = true;
      for (const field of fields) {
        if (!validateField(field)) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        sendEmail(e);
      }
    };
    

  return (
    <div className="contactMe-container" id="ContactMe">
      <h1>
        <div className="green-title">
          Contact Me
        </div>
      </h1>
      <div className="contactMe-content contact-animation">
        <form id='form' className="contactForm" ref={form}>
          <input type="text" name="name" placeholder="Your Full Name" id='name'/> 
          <input type="text" name="email" placeholder="Your Email" id="email"/>
          <textarea name="message" rows="7"  placeholder="Your Message" id="yourMessage"></textarea>
          <button type="submit" className="submit-button" onClick={validateInputs}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe; 
