import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';

const RotatingText = ({ texts, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, texts, interval]);

  return (
    <h2>{texts[currentIndex]}</h2>
  );
};

export default function Home() {
  const texts = ['Web Development', 'Digital Marketing', 'UX/UI Design'];
  const interval = 2000; // 2 segundos

  return (
    <>
      <div className="scroll__container">
        <div className="scroll__item view__content home">
            <div className="home__title">
                <h1>Maria Parra</h1>
                <RotatingText texts={texts} interval={interval} />
            </div>
            <div className="home scroll__icon" onClick={() => {
              const cardSection = document.querySelector('.card');
              cardSection.scrollIntoView({ behavior: 'smooth' });
            }}>
                <img className="mouse" src="../../svg/mouse.svg" alt="mouse scroll down" />
                <img className="arrow-down" src="../../svg/arrow-down.svg" alt="arrow scroll down" />
            </div>
        </div>

        <div>
          <Card />
        </div>
      </div>
    </>
  );
}
