import React, { useRef,useEffect,useState} from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import '../style/contactMe.css';
import scrollAnimation from '../component/scrollAnimation';

function ContactMe() { 
  useEffect(()=>{
    scrollAnimation('contact-appear-animation','.contact-animation',0.6);
  },[])

    const form = useRef();
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const clearFormField = () => {
      setName('');
      setEmail('');
      setMessage('');
    } 
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const formData = {
        sender: email,
        name: name,
        message: message,
      };
    
      // Show the "Sending email..." toast immediately 
      const promise = toast.promise(
        axios.post('https://spring-boot-contactme.onrender.com/api/send-email', formData),
        {
          pending: 'Sending your form...',
          success: 'Form submitted successfully!',
          error: 'Failed to send the form!',
          
        }
      );
    
      try {
        // Wait for the email sending process to complete
        await promise;
        clearFormField();

      } catch (error) {
         console.log("something is wrong")
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
    
   const isValidMessage = (value) => {
    // Count the number of words in the value not included space value
    const wordCount = value.trim().split(/\s+/).length;
  
    // Check if the word count is greater than two
    if (wordCount >= 5) {
      return true; // Valid
    } else {
      return false; // Invalid
    }
  };
    //confiming all the information is correct before sending the email
    const validateInputs = (e) => {
      e.preventDefault();
      
      const fields = [
        { id: 'name', validation: isValidName, message: 'Name is required', message_1: 'Name can only be included alphabets' },
        { id: 'email', validation: isValidEmail, message: 'Email is required', message_1: 'Wrong email format' },
        { id: 'yourMessage',validation:isValidMessage, message: 'Your Message is required', message_1:'Your message should more then 5 words'}
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
      //if all the thing valid send it
      if (isValid) {
        handleSubmit(e);
      }
    };
    
const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  //copy email function
  const copyEmail = async () => {
    const email = 'tsunyinho1996@gmail.com';
  
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied successfully');
    } catch (error) {
      console.error('Failed to copy email:', error);
      toast.error('Failed to copy email');
    }
  };

  return (
    <div className="contactMe-container" id="ContactMe">
      <h1>
        <div className="green-title">Let's talk shall we?</div>
      </h1>
      <div className="more-info info-animation">
        <h1 className="contactMe-content contact-animation">
          <p>If you're interested in knowing more about me, I'd be happy to chat.</p>
           <p>Email me at
           <span className='myEmail'> tsunyinho1996@gmail.com </span>
           <button className='copybtn'
            onClick={copyEmail}>
              Copy
            </button>
             <br/>or<br/></p>
            <p className='formHint'>fill out the form below.</p>
            </h1>
         </div>

      <div className="contactMe-content contact-animation">
        <form id="form" className="contactForm" ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            id="name"
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className={focusedInput === 'name' ? 'focused' : ''}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            id="email"
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className={focusedInput === 'email' ? 'focused' : ''}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            id="yourMessage"
            onFocus={() => handleFocus('yourMessage')}
            onBlur={handleBlur}
            className={focusedInput === 'yourMessage' ? 'focused' : ''}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button type="submit" className="submit-button" onClick={validateInputs}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}


export default ContactMe; 
