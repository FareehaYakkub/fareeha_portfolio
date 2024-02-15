import React from 'react'
import './Skills.css'
import AllSkills from './AllSkills';

const SkillsContent = () => {
    return (
        <div className='works'>
            <h1 className='skill-heading' style={{ color: "#B1DFE0" }}>My Skills</h1>
            <div className='skill-container'>
                {AllSkills.map(n =>
                    <div className='skill-card' key={n.id}>
                        <div className='skills'>
                            <h1 className='skill-title' style={{ color: "black", fontSize: "18px", textTransform: "uppercase" }}>{n.title}</h1>
                            {n.img}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SkillsContent