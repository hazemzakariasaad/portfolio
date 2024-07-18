import React from 'react'
import mlImage from '../assets/formalphoto1.jpg';
export default function Aboutme() {
  return (
    <section id='Aboutme' className='about--section'>
        <div className='about--image'>
            <img src={mlImage} alt='hazem' className="circle-image">
            </img>
        </div>
        <div className='about--content'>
            <h1>About Me</h1>
            <div className='about--description-container'>
            <p className='about--description'>
            Hello! I'm Hazem Zakaria, currently pursuing a degree in Biomedical Engineering at Cairo University. My educational journey is enriched by a deep passion for blending systems engineering with advanced software solutions. 
            I specialize in developing both web and desktop applications, 
            leveraging languages like C++, Python, JavaScript, and Java. 
            Additionally, my proficiency with Docker enables efficient deployment 
            and management of applications, ensuring scalability and robustness. 
            My diverse skill set allows me to innovate and create impactful solutions 
            tailored to meet the challenges at the intersection of technology and 
            healthcare.
            </p>
            <p className='about--description'>
                
                </p>
            </div>
        </div>
    </section>
  )
}
