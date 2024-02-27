 
import "./contact.scss"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Contact= () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0n3h1ow','template_ukazxuh', form.current,
          'ByIp-ARd0WfWIluMA')
    .then(
        () => {
         console.log('SUCCESS!');
       },
       (error) => {
          console.log('FAILED...', error.text);
        },
            e.target.reset()
      );
  };
  return (
    <div className='contact' id='contact'>
      <div className='left'>
           <img src='IMG_20240223_202758_494-Photoroom.png-Photoroom.png' alt=''></img> 
      </div>
      <div className='right'>
        <h2>contact</h2>
    <form ref={form} onSubmit={sendEmail}>
      <input type="email" name="user_email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
       <button type='submit'>Send</button>
    </form>
    </div>
    </div>
  );
};
export default Contact
