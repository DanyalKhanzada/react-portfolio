import React from 'react';

function About() {
    return (
        <section className='about flex align-center'>
            <img 
            className='portfolio-photo' 
            src={require('../../assets/imgs/portfolio-photo.JPG').default} alt='Danyal Khanzada'/>
            <p className='about-text'>Coding is favourite Hobby</p>
        </section>
    );
};

export default About;