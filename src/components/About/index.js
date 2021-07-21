import React from 'react';

function About() {
    return (
        <section className='about flex align-center'>
            <img 
            className='portfolio-photo' 
            src={require('../../assets/imgs/portfolio-photo.JPG').default} alt='Danyal Khanzada'/>
            <p className='about-text'>My typical day starts with "What I know so far", "What can I add to it" and "How can I apply it".I have sound knowledge of Java and mainly interested in MERN. Passionate self-learner, disciplined, and strive to improve my technical knowledge. I have solid communication and team playing skills. Doing personal projects on weekends is one of my hobbies.</p>
        </section>
    );
};

export default About;