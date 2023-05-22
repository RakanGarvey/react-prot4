import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [text, setText] = useState('HelloAleena@gmail.com');

  const copyEmail = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(() => {
        console.log('Failed to copy text to clipboard');
      });
  };
  return (
    <div className='contact-cont' id="conta">
        <h1>That's All About Me, Feel Free <br />to Say Hi!</h1>
        <p className="ocnt-desc">Just shot your idea to my email or just catching up <br />
        with me. I'm available at working time (8a.m -5 p.m). I'm very <br />
        welcome for everyone</p>
        <button className="email" onClick={copyEmail}>{text}</button>
    </div>
  )
}

export default Contact