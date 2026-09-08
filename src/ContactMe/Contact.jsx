import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import '../style/contactMe.css';
import scrollAnimation from '../component/scrollAnimation';

function ContactMe() {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    scrollAnimation(
      'contact-appear-animation',
      '.contact-animation',
      0.6
    );
  }, []);

  const clearFormField = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const isValidName = (value) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(value);
  };

  const isValidEmail = (value) => {
    const emailRegex =
      /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value.toLowerCase());
  };

  const isValidMessage = (value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return false;
    }

    const wordCount = trimmedValue.split(/\s+/).length;

    return wordCount >= 5;
  };

  const validateInputs = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      toast.error('Name is required');
      return false;
    }

    if (!isValidName(trimmedName)) {
      toast.error('Name can only include letters and spaces');
      return false;
    }

    if (!trimmedEmail) {
      toast.error('Email is required');
      return false;
    }

    if (!isValidEmail(trimmedEmail)) {
      toast.error('Wrong email format');
      return false;
    }

    if (!trimmedMessage) {
      toast.error('Your message is required');
      return false;
    }

    if (!isValidMessage(trimmedMessage)) {
      toast.error('Your message should contain at least 5 words');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const formData = {
      sender: email.trim(),
      name: name.trim(),
      message: message.trim(),
    };

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      await toast.promise(
        axios.post(`${API_URL}/api/send-email`, formData),
        {
          pending: 'Sending your message – please expect a brief delay.',
          success: 'Message sent successfully!',
          error: 'Failed to send the message!',
        }
      );

      clearFormField();
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const copyEmail = async () => {
    const emailAddress = 'tsunyinho1996@gmail.com';

    try {
      await navigator.clipboard.writeText(emailAddress);
      toast.success('Email copied successfully');
    } catch (error) {
      console.error('Failed to copy email:', error);
      toast.error('Failed to copy email');
    }
  };

  return (
    <section className="contact-container" id="ContactMe">

      <h1> 
        <div className="red-title contact-title"> Let's talk, shall we? </div>
      </h1>

      <div className="contact-panel contact-animation">

        <div className="contact-terminal">
          <span className="terminal-symbol">&gt;</span>
          <span className="terminal-text">
            contact.send()
          </span>
        </div>

        <div className="contact-intro"> 
          <h2> Interested in working together or <br/>
             learning more about my experience? </h2>
          <p> 
            Feel free to get in touch.
          </p>

          <div className="contact-email">
            <span className="email-label">
              Email:
            </span>

            <a
              href="mailto:tsunyinho1996@gmail.com"
              className="myEmail"
            >
              tsunyinho1996@gmail.com
            </a>

            <button
              type="button"
              className="copybtn"
              onClick={copyEmail}
            >
              Copy
            </button>
          </div>

          <div className="contact-divider">
            <span>OR</span>
          </div>
        </div>

        <form
          id="form"
          className="contactForm"
          ref={form}
          onSubmit={handleSubmit}
        >


          <div className="form-field">
            <label htmlFor="name">
              NAME
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              className={
                focusedInput === 'name' ? 'focused' : ''
              }
              autoComplete="name"
            />
          </div>


          <div className="form-field">
            <label htmlFor="email">
              EMAIL
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              className={
                focusedInput === 'email' ? 'focused' : ''
              }
              autoComplete="email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="yourMessage">
              MESSAGE
            </label>

            <textarea
              id="yourMessage"
              name="message"
              rows="7"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => handleFocus('yourMessage')}
              onBlur={handleBlur}
              className={
                focusedInput === 'yourMessage'
                  ? 'focused'
                  : ''
              }
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default ContactMe;
