import { useEffect, useState } from "react";
import "./card.scss";
import projects from './../../assets/projects.json';

export default function Card() {

  const [activeProject, setActiveProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = function(event) {
    const imgHeight = event.target.scrollHeight / projects.length;
    setActiveProject(parseInt(event.target.scrollTop / (imgHeight * 1.5)));
  }

  return (
    <div className="card scroll__item">
      <a className="card__link" href={projects[activeProject].url} target="_blank">
        <img src="../../svg/arrow-up-orange.svg" alt="Icono flecha" />
        <p>VER EL PROYECTO</p>
      </a>
      <div className="card__image" onScroll={handleScroll}>
        
        {projects.map((project, index) => {
          if (project.featured === true) {
            const imageSource = isMobile ? project['mobile-img'] : project.img;
            return <img key={index} src={imageSource} alt="Captura del proyecto" />;
          }
        })}
        
      </div>
      <div className="card__dots">
        { projects.map((project, index) => project.featured === true ? <div className={'card__dot' + (index === activeProject ? ' active' : '')} /> : '')}
      </div>
    </div>
  );
}
