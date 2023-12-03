import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import fb from '../images/fb.png'
import wa from '../images/whatsapp.png'
import tw from '../images/twitter.svg'
import ig from '../images/ig.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6wfiwi4', 'template_ura39sb', form.current, '5ba-_oXI5KZFVx8uR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name='contact' className='w-full h-full flex flex-col justify-center p-4 pt-10 items-center bg-veryDarkGrey'>
      <form ref={form} onSubmit={sendEmail} action=''className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-sand text-2xl'>Contact us</p>
            <p className='text-cream text-sm pt-2'> Like what you see? Don't worry, we can always bring your ideas into reality for you. Just send us a mail or a DM on any of our socials accounts or give us a call and we'll be ready to help you with your photographic needs.
            </p>
        </div>
        <input className='p-2' type='text' placeholder='Name' name='user_name' />
         <input className='my-4 p-2' type='email' placeholder='Email' name='user_email' />
         <textarea className='p-2' name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
         <button type='submit' className='text-cream px-4 py-4 duration-300 rounded-md hover:bg-sand bg-veryDarkBlue my-8 mx-auto flex items-center'>
          Send us a message
         </button>
        
      </form>

      <div className='w-full flex max-w-[600px] flex-cols-4 p-2 mb-8 gap-16 justify-center'>
          
              <a href="https://www.facebook.com/beejayphoto" className='w-1/2'> <button>
                <img src={fb} className='w-full hover:scale-110 duration-300' alt="" />
              </button></a>
              <a href="https://wa.link/ydtk5f" className='w-1/2'> <button>
                <img src={wa} className='w-full hover:scale-110 duration-300' alt="" />
              </button></a>
              <a href="https://twitter.com/_benedictBeeJay?s=09" className='w-1/2'> <button>
                <img src={tw} className='w-full hover:scale-110 duration-300' alt="" />
              </button></a>
              <a href="https://www.instagram.com/_benedictbeejay/" className='w-1/2'> <button>
                <img src={ig} className='w-full hover:scale-110 duration-300' alt="" />
              </button></a>
             
          </div>
    
    </div>
  )
}

export default Contact
