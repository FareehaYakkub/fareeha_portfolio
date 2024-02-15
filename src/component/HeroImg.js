import React from 'react'
import PortImg from '../assets/Bgimg-portfolio.webp';
import './HeroImg.css'
import '../routes/Contact';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={PortImg} alt="PortImg" />
            </div>
            <div className='content'>
                <p>Hi,I am Fareeha</p>
                <h1>React Developer</h1>
                <Link to='/project'>
                    <button className='btn'>Projects</button>
                </Link>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroImg

