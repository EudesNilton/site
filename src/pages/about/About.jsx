import React from 'react'
import './About.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    
    <div>
        <Header />
        <div className='aboutMe'>
          <h1 className='title'>
              &lt;Olá Mundo!/&gt;
          </h1>

          <p className='about'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis adipisci non quasi quod ratione, blanditiis explicabo saepe nobis corrupti temporibus magni labore vitae et numquam, sit iure sint similique commodi?
          </p>
          <p className='do'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam incidunt beatae voluptatum nihil aliquam cupiditate, ex eos nisi accusamus illo. Voluptate sunt corrupti odit a asperiores dolores non est deleniti!
          </p>
        </div>
        
        <Footer />
    </div>
  )
}

export default About