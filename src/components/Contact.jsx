import React from 'react';

export default function Contact() {
  return (
    <section id= 'contact' className='content-section'>
        <h2>Get In Touch</h2>
        <h3>Contact Me</h3>
        <div className='contact-container'>
        <a href="https://www.linkedin.com/in/hazem-zakaria-bb5769115/">
                 <button >
                  LinkedIn
                 </button>  </a>
        <a href="mailto:zhazem390@gmail.com" target="_blank" rel="noopener noreferrer">
            <p>zhazem390@gmail.com</p>
        </a>
        <a href="https://wa.me/201061424673" target="_blank" rel="noopener noreferrer">
            <p>01061424673</p>
        </a>
        </div>
    </section>
  );
}