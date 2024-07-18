import React from 'react';
import skillsData from '../data/index';

export default function Myskills() {
  return (
    <section id='skills' className='skills--section'>
      <div className='portfolio--container'>
        <h1 className='skills--heading'>My Skills</h1>
      </div>
      <div className='skills--section-container'>
        {
          skillsData.map((item, index) => (
            <div key={index} className='skills--card'>
              <div className='skills--img'>
                <img src={item.img} alt={item.title + ' image'} />
              </div>
              <div className='skills--content'>
                <h3>{item.title}</h3>
                <ul className='skills--description'>
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
