import Projects from '../components/Projects/Projects';

export default function Portfolio() {
  
    return (
    <>
        <div className="view__content portfolio">
            <div className="portfolio__title">
                <h1>portfolio</h1>
            </div>
            <div className="scroll__icon">
                <img className="mouse" src="../../svg/mouse.svg" alt="mouse scroll down" />
                <img className="arrow-down" src="../../svg/arrow-down.svg" alt="arrow scroll down" />
            </div>
        </div>

        <Projects />
    </>
  );
}