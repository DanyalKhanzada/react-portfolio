import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [ apps ] = useState([
        {
            name: 'Book Search',
            altURL: 'https://vast-crag-11502.herokuapp.com/',
            altRepo: 'https://github.com/DanyalKhanzada/book-search',
            featured: true
        },
        {
            name: 'Budget Tracker',
            altURL: 'https://still-crag-28886.herokuapp.com/',
            altRepo: 'https://github.com/DanyalKhanzada/budget-tracker'
        },
        {
            name: 'Tech Blog',
            altRepo: 'https://github.com/DanyalKhanzada/tech-blog',
            altURL: 'https://swatch-makeup-reviews.herokuapp.com/'
        },
        {
            name: 'Team Profile Generator',
            altRepo: 'https://github.com/DanyalKhanzada/team-profile-generator'
        },
        {
            name: 'Note Taker',
        },
        {
            name: 'ReadMe Generator',
            notDeployed: true
        },
        {
            name: 'ECommerce Back End',
            altURL: 'https://github.com/DanyalKhanzada/E-commerce-back-end',
        },
        
        {
            name: 'Weather Dashboard'
        },
        {
            name: 'Work Day Schedule'
        },
        {
            name: 'Taskmaster Pro'
        },
        {
            name: 'Taskinator'
        },
        
        {
            name: 'Code Quiz'
        }
    ])

    return (
        <section className='portfolio-container justify-center'>
            {apps.map((app, i) => 
            <Project name={app.name} index={(apps.length - i - 1)} altRepo={app.altRepo} altURL={app.altURL} notDeployed={app.notDeployed} featured={app.featured}/>
            )}
        </section>
    );
};

export default Portfolio;