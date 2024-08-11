import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern}alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img class='profile'src= {profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Sumanth U, a dedicated BCA student with a keen interest in front-end engineering. My passion lies in creating engaging and intuitive user experiences through innovative web design and development. With a strong foundation in HTML, CSS, JavaScript, and React.js, I've built projects such as a personal portfolio, an e-commerce site, and a blog platform.
                    </p>
                    <p>When I'm not coding, I stay updated with the latest web development trends, constantly striving to enhance my skills and deliver exceptional user experiences. My goal is to contribute to impactful projects that push the boundaries of front-end development.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                    
                    <div className="about-skill"><p>React JS</p><hr style={{width:"570%"}}></hr></div>
                    
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}></hr></div>
                    
                    <div className="about-skill"><p>Python</p><hr style={{width:"30%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Years of Coding</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>React Projects</p>
            </div>
        </div>
    </div>
  )
}

export default About