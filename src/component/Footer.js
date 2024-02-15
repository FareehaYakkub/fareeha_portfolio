import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaHome, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (

        <div className='footer'>
            <h2 style={{ color: "#B1DFE0" }}>join the conversation  !!!</h2>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>

                        <FaHome size={20} style={{ color: "white", marginRight: 20 }} />

                        <p>Kanyakumari District,</p>
                        <p>Tamilnadu</p>

                    </div>
                    <div className='phone'>

                        <FaPhone size={20} style={{ color: "white", marginRight: 20 }} />
                        +91 78XXX99XXX

                    </div>
                    <div className='social'>

                        <FiMail size={20} style={{ color: "white", marginRight: 20 }} />

                        fareehaaykhan@gmail.com

                    </div>
                </div>
                <div className='right'>
                    <h6 style={{ marginLeft: "0.1rem" }}>Catch me on the Social Wave!</h6>

                    <div className='social'>

                        <a href="https://www.instagram.com/fa_rii_._/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" alt="Try after sometimes" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} style={{ color: "white", marginRight: "1rem", marginLeft: "3rem" }}
                                onMouseOver={(e) => (e.currentTarget.style.color = '#8a3ab9')}
                                onMouseOut={(e) => (e.currentTarget.style.color = 'white')} />
                        </a>

                        <a href="https://www.linkedin.com/in/fareeha-y-61b18a264/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }}
                                onMouseOver={(e) => (e.currentTarget.style.color = '#0077B5')}
                                onMouseOut={(e) => (e.currentTarget.style.color = 'white')} />

                        </a>

                        <a href="https://github.com/FareehaYakkub" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }}
                                onMouseOver={(e) => (e.currentTarget.style.color = '#333')}
                                onMouseOut={(e) => (e.currentTarget.style.color = 'white')} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer