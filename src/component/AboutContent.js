import React from 'react'
import './AboutContent.css'
import res3 from '../assets/clf9er5z0000llj08vqzyit5e_1.jpg'
import res6 from '../assets/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.jpg';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1 style={{ color: "#B1DFE0" }}>Who am I?</h1>
                <p>Hi ! I'm Fareeha, a dedicated and enthusiastic software developer with a passion for transforming innovative ideas into captivating web designs.I thrive on the challenge of bringing creativity and functionality together to create seamless user experiences.  </p>
                <a href="https://drive.google.com/file/d/1yM20h5W9SYLzaWUMdzZ3RcfG5vORMQun/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className='btn'>resume</button>
                </a>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={res3} className="img" alt="res2" />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={res6} className="img" alt="res1" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutContent