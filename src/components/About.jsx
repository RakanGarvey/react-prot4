import React from 'react'
import {IoMdCloseCircleOutline} from 'react-icons/io'
import { useState, useEffect } from 'react'

const About = () => {
  const [clicked,setClicked] = useState(false)
  // const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    const darkDiv = document.createElement('div');

    darkDiv.classList.add('darken')
    darkDiv.style.display = 'none';

    document.body.appendChild(darkDiv);

    if (clicked) {
      darkDiv.style.display = 'block';
    } else {
      darkDiv.style.display = 'none';
    }

    return () => {
      document.body.removeChild(darkDiv);
    }
  }, [clicked]);

  return (
    <div className='about' id="home">
        <div className='pers-img'></div>
        {clicked &&  
        <div className={clicked? "story-cont show" : "story-cont"}>
          <IoMdCloseCircleOutline className='close' onClick={()=>setClicked(!clicked)}/>
          <p className="story">My name is Aleena, I am UI/UX designer, 
          graphic designer and illustrator. During my 5 
          years of experience in the field of design, I 
          created landing pages, social media creatives, 
          company identities, created illustrations and 
          animations, developed prints for printing and 
          embroidery, created advertising boards, prepared 
          files for printing.</p>
        </div>}
        <div className="pers-info">
            <h5>Aleena Edinson</h5>
            <h1>Product <br />Designer Based <br />in Manhattan</h1>
            <p className="job-desc">To be a product designer is so amazing. 
             can help everyone build their bussiness, it
             such a happiness for me. So let me to help you!</p>
             <button className="story-btn" onClick={()=>setClicked(!clicked)}>My Story</button>
        </div>
    </div>
  )
}

export default About