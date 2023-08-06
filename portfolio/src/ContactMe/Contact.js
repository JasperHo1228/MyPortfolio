import React, { useRef } from 'react';
import '../style/contactMe.css';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import emailjs from 'emailjs-com';

function ContactMe() { 
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

  return (
    <div className="contactMe-container" id="ContactMe">
      <h1>
        <div className="green-title">
          Contact Me
        </div>
      </h1>
      <div className="contactMe-content">
        {/* <div className="MyLink-container">
          <div>Check out my social media</div>
          <a href="https://www.linkedin.com/in/tsun-yin-ho-46981222b/" target="_blank" rel="noreferrer" className="LinkName">
            <span className="contact-icon">
              <BsLinkedin />
            </span>
            <span className="ContactlinkTitle"> LinkedIn</span>
          </a>
          <a href="https://github.com/JasperHo1228" target="_blank" rel="noreferrer" className="LinkName">
            <span className="contact-icon">
              <BsGithub />
            </span>
            <span className="ContactlinkTitle">GitHub</span>
          </a>
        </div> */}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe; // Make sure to export the component properly with the updated name
