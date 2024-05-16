import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';
import Instagram from '../Assets/Images/Instagram.png';
import Linkedin from '../Assets/Images/Linkedin.png';
import Twitter from '../Assets/Images/Twitter.png';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_9xx381f', 'template_h4cm07v', form.current, {
        publicKey: '8MkaDBRIPqnkqCYip',
      })
      .then(
        () => {
          console.log('Message was sent successfully!');
          setMessage('Message was sent successfully!');
          setMessageColor('green');
          e.target.reset();
        },
        (error) => {
          console.log('Failed to send message...', error.text);
          setMessage('Failed to send message. Please try again later.');
          setMessageColor('red');
        }
      );
  
   
    setTimeout(() => {
      setMessage('');
      setMessageColor('');
    }, 8000); 
  };

  return (
    <div className="ContactContainer">
      <div className="heading"  id='contact'>
        <h1>Reach Me Out !</h1>
      </div>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="user_name" />
          <label>Email:</label>
          <input type="email" name="user_email" />
          <label>Message:</label>
          <textarea name="message" rows="9" cols="60" />
          <input type="submit" value="Send" />
        </form>
        <div className={`messageBox ${messageColor === 'green' ? 'success' : ''}`} style={{ backgroundColor: messageColor }}>
            {message}
        </div>
      </div>
      <div class="linkContainer">
        <div class="topRow">
          <label>Email: avikshitchanda@gmail.com</label>
        </div>
        <div class="bottomRow">
          <a href="http://www.linkedin.com/in/avikshitchanda" target="_blank">
            <img src={Linkedin} alt="#" />
          </a>
          <a href="https://twitter.com/AvikshitChanda" target="_blank">
            <img src={Twitter} alt="#" />
          </a>
          <a href="https://www.instagram.com/avikshit_16/" target="_blank">
            <img src={Instagram} alt="#" />
          </a>
        </div>
        <div class="orSeparator">
          <p>OR</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
