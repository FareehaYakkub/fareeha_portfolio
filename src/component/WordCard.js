import React from 'react'
import './WorkCard.css'
import newArr from './Work'


const WordCard = () => {
    return (
        <>
            <div className='work-container'>
                <h1 className='project-heading' style={{ color: "#B1DFE0" }}>My Recent Projects</h1>
                <div className='project-container'>
                    {newArr.map(
                        n =>
                            <div className='project-card' key={n.id}>
                                <div className='project'>
                                    <h1 className='project-title'>{n.title}</h1>

                                    <img className='img' src={n.imgsrc} alt="imgsrc" />
                                    <p className='pro-details'>{n.text}</p>

                                    <div className='pro-btns'>
                                        <a href={n.source} target="_blank" alt="try later" rel="noreferrer">
                                            <button className='pro-btns btn'>
                                                source
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default WordCard