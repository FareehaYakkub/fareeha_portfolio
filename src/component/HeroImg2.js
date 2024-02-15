import React from 'react'
import './HeroImg2.css'

const HeroImg2 = (props) => {
    return (
        <div className='hero-img'>
            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
            </div>
        </div>
    )
}

HeroImg2.defaultProps = {
    heading: "Hello",
    para: "Wait a minute"
}
export default HeroImg2;
