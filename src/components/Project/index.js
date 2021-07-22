import React from 'react';
import { toURL } from '../../utils/helpers';

function Project({ name, altURL, altRepo, notDeployed, featured, index }) {
    return (
        
        <div className={(featured && `featured`) || `portfolio-img-container`}>
            
            <div className='screen flex justify-center align-center'>
                <h3 className='portfolio-img-title'>{name}</h3>
            </div>
            <div className='link-container flex justify-center align-center'>
                <a
                    className='portfolio-link'
                    target='_blank'
                    rel='noreferrer'
                    href={altRepo || `https://github.com/DanyalKhanzada/${toURL(name)}`}>
                    github
                </a>
                {notDeployed ||
                    <a
                        className='portfolio-link'
                        target='_blank'
                        rel='noreferrer'
                        href={altURL || `https://DanyalKhanzada.github.io/${toURL(name)}`}>
                    link 
                    </a>
                }
            </div>
            <img 
            className='portfolio-img'
            src={require(`../../assets/imgs/apps/app-${index}.png`).default} 
            alt={`Screenshot of ${name}`} />
        </div>
    );
};

export default Project;