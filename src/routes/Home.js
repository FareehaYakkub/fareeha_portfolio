import React from 'react'
import Navbar from '../component/Navbar'
import HeroImg from '../component/HeroImg'
import Footer from '../component/Footer'
import AboutContent from '../component/AboutContent'
import WordCard from '../component/WordCard'
import SkillsContent from '../component/SkillsContent'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <AboutContent />
            <SkillsContent />
            <WordCard />
            <Footer />
        </div>
    )
}

export default Home