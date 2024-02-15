import React from 'react'
import HeroImg2 from '../component/HeroImg2'
import AboutContent from '../component/AboutContent'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const About = () => {

    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT ME" para="Striving to be a better person in everything I do" />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About