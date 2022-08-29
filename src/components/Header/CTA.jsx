import React from 'react'
import CV from '../../assets/Divine Badibanga\'s Resume.pdf'
import Transcript from '../../assets/Divine Badibanga\'s University Transcript.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn' href={Transcript} download>Download Transcript</a>
        <a className='btn btn-primary' href="#Contact">Fancy a chat?</a>
    </div>
  )
}

export default CTA