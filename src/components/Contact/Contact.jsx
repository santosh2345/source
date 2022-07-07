
import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emelivp', 'template_7x5hp5i', form.current, 'OY1LWgSGSGal4_tkY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icons'/>
              <h4>Email</h4>
              <h5>santoshgiri2345@gmail.com</h5>
              <a href="mailto:santoshgiri2345@gmail.com" target='_blank'>Send a message </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icons' />
              <h4>Messenger</h4>
              <h5>Santosh Giri</h5>
              <a href="https://www.facebook.com/profile.php?id=100007645997906" target='__blank'>Send a message </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icons'/>
              <h4>WhatsApp</h4>
              <h5>+9779815054626</h5>
              <a href="https://api.whatsapp.com/send?phone+9779815054626" target='_blank'>Send a message </a>
            </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit ={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact