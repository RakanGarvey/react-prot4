import React from 'react'
import mood from '../assets/mood.png'

const Benefits = () => {
  return (
    <div className='benefits-cont' id="bene">
        <h1>Four Things I Always Promise</h1>
        <div className="benefits">
            <div>
            <div className="bene-details">
                <h2 className='bene-title'>On time revision</h2>
                <p>All of the revision will updated on time. But with best design <br /> quality that can make you satisfy.</p>
            </div>
            <div className="bene-details">
                <h2 className='bene-title'>Good communication</h2>
                <p>I'm a native speaker of English. You don't have to worry about <br /> it, i also stand by in chat platform during work time. 
Design you'll like</p>
            </div>
            </div>
            <div>
            <div className="bene-details">
                <h2 className='bene-title'>Design you'll like</h2>
                <p>This is what I love to do, so I'll make sure you're happy with the <br /> result. We'll work as team and we'll get there!</p>
            </div>
            <div className="bene-details">
                <h2 className='bene-title'>Healthy freelance relationship</h2>
                <p>No dramas or difficult relationships. I'm here to make your life <br /> easier, solve your problems, and grow your bussiness.</p>
            </div>
            </div>
        </div>
        <div className="review">
            <div>
            <p className="review-desc">Work with Aleena is such a happiness for me. She is very <br />
            humble, smart and helpful. I recommended her to you <br /> 
            guys who needs a design stuff.</p>
            <h5 className="client-name">Alice Alexandra</h5>
            </div>
            <img src={mood} alt="" className='cust-img'/>
        </div>
    </div>
  )
}

export default Benefits