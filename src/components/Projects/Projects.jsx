
import "./projects.scss";
import projects from '../../assets/projects.json';

export default function Projects() {

  return (
    <>
    


    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.img} alt="Captura del proyecto" />
          </a>
          <ul className="project-list">
            {project.work.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    
    </>
  );
}
