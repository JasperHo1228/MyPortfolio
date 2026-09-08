import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../style/home.css';

function Home() {
  const name = 'Jasper';

  const [text] = useTypewriter({
    words: [`Hello World, I'm ${name}.`],
    loop: 1,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });

  const [nameLocked, setNameLocked] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Lock the name animation after it finishes
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window
        .matchMedia('(prefers-reduced-motion: reduce)')
        .matches
    ) {
      setNameLocked(true);
      return;
    }

    const estimatedDuration = name.length * 120 + 1500 + 300;

    const timeout = setTimeout(() => {
      setNameLocked(true);
    }, estimatedDuration);

    return () => clearTimeout(timeout);
  }, [name]);

  return (
    <section className="home-container" id="Home">
      <div className="home-wrapper">

        <h1 className="hero-name">
          {nameLocked ? (
            <>
              Hello World, I'm <span>{name}.</span>
            </>
          ) : (
            <span aria-live="polite">{text}</span>
          )}

          {!nameLocked && (
            <span style={{ color: '#00BE67' }}>
              <Cursor cursorStyle="|" />
            </span>
          )}
        </h1>

        <h2 className="hero-role">
          Java Developer building reliable backend systems.
        </h2>

        <p className="hero-description">
          I’m a Java Developer with 2+ years of professional
          experience building backend systems with Java and
          Spring Boot. I enjoy turning complex problems into
          simple, reliable software solutions.
        </p>

        <div className="hero-actions">
          <a
            className="primary-cta"
            href="#Project"
          >
            View My Work
          </a>
          <div className="hero-actions_socials_link">
            <a
              className="secondary-link"
              href="https://github.com/JasperHo1228"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              className="secondary-link"
              href="https://www.linkedin.com/in/jasper-ho-46981222b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;