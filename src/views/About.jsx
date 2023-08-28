import { useEffect, useState } from 'react';

export default function About() {
    return (
        <>
            <div className="view__content about">
                <h1 className="about__title">Hello :)</h1>
                <p className="about__description">I’m Maria, a girl who’s passionate about science and technology. After graduating in Biochemistry and Biomedical Sciences, I decided to continue my studies and obtain a Masters in Criminology and Forensic Sciences. However, during the covid pandemic I became interested in the digital world, so I decided to take a new direction in my career.</p>
                <p className="about__description">Currently I work on UX/UI Design, Web Development and Digital Marketing. In addition to working for clients,  I am constantly educating myself in these areas and try to be up to date with the latest tools and developments. I am excited to apply my knowledge to all sorts of innovative and creative projects and I would love for yours to be one of them.</p>
                <p>Contact me at <a className='contact' href='mailto:hola@mariaparra.net'>hola@mariaparra.net</a></p>
            </div>
            
        </>
    );
}