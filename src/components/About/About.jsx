import React from 'react'
import './about.css'

// React Files
import Resume from '../../assets/Резюме-eng.pdf'

// React Images
import Image from '../../assets/portfolio.jpg'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About me</h2>
      
      <div className="about__container grid">

        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">

          <div className="about__info">
            <p className="about__description">Hi, I'm Mihail Ternovetchii, I'm from Chisinau, Moldova.  I have rich experience in website design and building and customizationp</p>
            <a target='blank' href={Resume} className="btn">DownLoad CV</a>
          </div>

          <div className="about__skills grid">

            <div className="skills__data">

              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentange development"></span>
              </div>

            </div>

            <div className="skills__data">

              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentange ui__design"></span>
              </div>

            </div>

            <div className="skills__data">

              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentange react"></span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <AboutBox/>

    </section>
  )
}

export default About